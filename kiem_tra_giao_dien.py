# Cách dùng: python tools/kiem_tra_giao_dien.py file:///ĐƯỜNG_DẪN/index.html
import sys,json,time
import os
os.makedirs('ket_qua',exist_ok=True)
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'probe_khung.py'),encoding='utf-8').read().split("with sync_playwright")[0])
def skipstory(pg,n=14):
    for _ in range(n):
        if pg.evaluate("!!document.getElementById('story')"): pg.keyboard.press('Space'); pg.wait_for_timeout(150)
        else: break
R={}
with sync_playwright() as p:
    b=p.chromium.launch(args=['--mute-audio']); pg=b.new_context(viewport={'width':1280,'height':720}).new_page()
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
    pg.goto(url); pg.wait_for_timeout(1200); pg.keyboard.press('Enter'); pg.wait_for_timeout(300); pg.click('#nok'); pg.wait_for_timeout(800); skipstory(pg)
    # cài đặt
    pg.evaluate("window.__owSkip=1;settings()"); pg.wait_for_timeout(400); pg.screenshot(path='ket_qua/s2_settings.png')
    R['settings_text']=pg.inner_text('#app').replace('\n',' | ')[:420]
    # quiz: đếm ngược
    pg.evaluate("start('math')"); pg.wait_for_timeout(600)
    pg.evaluate("pick(G.q.c)"); pg.wait_for_timeout(400); pg.screenshot(path='ket_qua/s2_countdown.png')
    R['co_thanh_dem']=pg.evaluate("!!document.getElementById('cdbar')&&!!document.getElementById('cdskip')")
    q1=pg.evaluate("G.q.t"); t0=time.time(); pg.keyboard.press('Enter'); pg.wait_for_timeout(500)
    R['bo_qua_bang_Enter']={'cau_moi':pg.evaluate("G.q.t")!=q1,'lock':pg.evaluate("lock"),'giay':round(time.time()-t0,1)}
    pg.evaluate("pick(G.q.c)"); pg.wait_for_timeout(300); q2=pg.evaluate("G.q.t"); pg.click('#cdskip'); pg.wait_for_timeout(500)
    R['bo_qua_bang_nut']=pg.evaluate("G.q.t")!=q2
    # tự hết giờ (đợi 6.2s)
    pg.evaluate("pick(G.q.c)"); q3=pg.evaluate("G.q.t"); pg.wait_for_timeout(5300); a=pg.evaluate("G.q.t")==q3; pg.wait_for_timeout(1200); R['tu_het_gio']={'van_con_o_5.3s':a,'sang_cau_moi_sau_6.5s':pg.evaluate("G.q.t")!=q3}
    # bỏ qua giải thích BẬT
    pg.evaluate("cfg.skipExp=1"); q4=pg.evaluate("G.q.t"); pg.evaluate("pick(G.q.c)"); pg.wait_for_timeout(1100); R['skipExp_chuyen_nhanh']=pg.evaluate("view=='play'&&G.q.t")!=q4 or pg.evaluate("view")!='play'
    pg.evaluate("cfg.skipExp=0")
    # tắt hiệu ứng / chế độ nhẹ
    pg.evaluate("window.__owSkip=1;settings()"); pg.wait_for_timeout(300)
    pg.evaluate("cf('noFx')"); pg.evaluate("cf('lite')"); pg.wait_for_timeout(200)
    R['noFx']={'body':pg.evaluate("document.body.classList.contains('no-fx')"),'cfg':pg.evaluate("cfg.noFx")}
    R['lite']={'window':pg.evaluate("window.__lite"),'luu':pg.evaluate("localStorage.getItem('pltgtt_lite')"),'cfg_luu':pg.evaluate("JSON.parse(localStorage.getItem('pltgtt_cfg')).lite")}
    pg.screenshot(path='ket_qua/s2_settings2.png')
    # hầm ngục: minimap
    pg.evaluate("cf('noFx');cf('lite')"); pg.evaluate("menu()"); pg.wait_for_timeout(600); skipstory(pg)
    pg.evaluate("explore('en')"); pg.wait_for_timeout(900); skipstory(pg); pg.wait_for_timeout(2500)
    pg.screenshot(path='ket_qua/s2_dungeon.png')
    R['loi']=errs
    b.close()
print(json.dumps(R,ensure_ascii=False,indent=1))
