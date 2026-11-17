# Cách dùng: python tools/do_hieu_nang.py file:///ĐƯỜNG_DẪN/index.html
import sys,json,time
import os
os.makedirs('ket_qua',exist_ok=True)
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'probe_khung.py'),encoding='utf-8').read().split("with sync_playwright")[0])
label=sys.argv[2] if len(sys.argv)>2 else 'run'
def skipstory(pg,n=14):
    for _ in range(n):
        if pg.evaluate("!!document.getElementById('story')"):
            pg.keyboard.press('Space'); pg.wait_for_timeout(120)
        else: break
def snap(pg):
    return pg.evaluate("""()=>({si:__c.siActive.size,siTotal:__c.si,lis:[...__c.lisMap.values()].reduce((a,s)=>a+s.size,0),canvas:__c.canvas,domCanvas:document.querySelectorAll('canvas').length,err:__c.err.slice(),nodes:document.getElementsByTagName('*').length,heap:performance.memory?performance.memory.usedJSHeapSize:0})""")
def sample(pg,cdp,secs,act=None):
    m0={x['name']:x['value'] for x in cdp.send('Performance.getMetrics')['metrics']}
    pg.evaluate("window.__fr=0;(function f(){window.__fr++;requestAnimationFrame(f)})()") if not pg.evaluate("!!window.__frOn") else pg.evaluate("window.__fr=0")
    pg.evaluate("window.__frOn=1")
    if act: act(pg)
    pg.wait_for_timeout(int(secs*1000))
    m1={x['name']:x['value'] for x in cdp.send('Performance.getMetrics')['metrics']}
    fr=pg.evaluate("window.__fr"); dt=m1['Timestamp']-m0['Timestamp']
    return {'fps':round(fr/dt,1),'busy_pct':round(100*(m1['TaskDuration']-m0['TaskDuration'])/dt,1),'script_pct':round(100*(m1['ScriptDuration']-m0['ScriptDuration'])/dt,1)}
R={}
with sync_playwright() as p:
    b=p.chromium.launch(args=['--mute-audio',"--autoplay-policy=no-user-gesture-required"]); ctx=b.new_context(viewport={'width':1280,'height':720}); pg=ctx.new_page()
    logs=[]; pg.on('console',lambda m:logs.append(m.type+': '+m.text) if m.type in('error',) else None); pg.on('pageerror',lambda e:logs.append('PAGEERR '+str(e)))
    cdp=ctx.new_cdp_session(pg); cdp.send('Performance.enable')
    pg.add_init_script(INIT); pg.goto(url); pg.wait_for_timeout(1500)
    R['title']=sample(pg,cdp,4)
    pg.keyboard.press('Enter'); pg.wait_for_timeout(300); pg.click('#nok'); pg.wait_for_timeout(800); skipstory(pg); pg.wait_for_timeout(500)
    R['snap_ow_start']=snap(pg)
    R['outdoor_idle']=sample(pg,cdp,5)
    pg.keyboard.down('ArrowRight')
    R['outdoor_walk']=sample(pg,cdp,3); pg.keyboard.up('ArrowRight')
    # dungeon
    pg.evaluate("explore('math')"); pg.wait_for_timeout(600); skipstory(pg); pg.wait_for_timeout(2500); skipstory(pg)
    R['dungeon_view']=pg.evaluate("view")
    R['dungeon_idle']=sample(pg,cdp,5)
    pg.keyboard.down('ArrowRight')
    R['dungeon_walk']=sample(pg,cdp,3); pg.keyboard.up('ArrowRight')
    pg.screenshot(path=f'ket_qua/{label}_dungeon.png')
    # leak loop
    s0=snap(pg)
    for i in range(8):
        for k in ['math','en','it']:
            pg.evaluate(f"explore('{k}')"); pg.wait_for_timeout(250); skipstory(pg); pg.wait_for_timeout(250)
    pg.evaluate("menu()"); pg.wait_for_timeout(800); skipstory(pg)
    s1=snap(pg)
    R['leak_before']={k:v for k,v in s0.items() if k!='err'}; R['leak_after_24_enters']={k:v for k,v in s1.items() if k!='err'}
    # quiz
    pg.evaluate("start('math')"); pg.wait_for_timeout(700)
    R['quiz_view']=pg.evaluate("view")
    n=0
    for i in range(40):
        ok=pg.evaluate("(()=>{if(view!='play'||!G)return 0;if(lock)return 1;pick(G.q.c);return 2})()")
        if ok==2:n+=1
        pg.wait_for_timeout(450)
        if pg.evaluate("view")!='play': break
    R['quiz_answers_done']=n; R['quiz_end_view']=pg.evaluate("view")
    R['quiz_sample']=sample(pg,cdp,2)
    R['final']=snap(pg); R['final']['err']=list(dict.fromkeys(R['final']['err']))[:10]
    R['console_errors']=list(dict.fromkeys(logs))[:10]
    b.close()
print(json.dumps(R,ensure_ascii=False,indent=1)); open(f'ket_qua/result_{label}.json','w').write(json.dumps(R,ensure_ascii=False,indent=1))
