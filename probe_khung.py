import sys,json
from playwright.sync_api import sync_playwright
url=sys.argv[1]
INIT="""
window.__c={si:0,siActive:new Set(),raf:0,lis:0,lisMap:new Map(),canvas:0,err:[]};
const _si=window.setInterval,_ci=window.clearInterval;
window.setInterval=function(f,t,...a){const id=_si.call(window,f,t,...a);__c.siActive.add(id);__c.si++;return id};
window.clearInterval=function(id){__c.siActive.delete(id);return _ci.call(window,id)};
const _ael=EventTarget.prototype.addEventListener,_rel=EventTarget.prototype.removeEventListener;
const tgtId=new WeakMap();let tid=0;
EventTarget.prototype.addEventListener=function(t,f,o){try{const cap=(typeof o=='object'&&o)?!!o.capture:!!o;const k=(this===window?'W':this===document?'D':(this.id?'#'+this.id:'N'))+':'+t+':'+cap;let m=__c.lisMap.get(k)||new Set();m.add(f);__c.lisMap.set(k,m);}catch(e){}return _ael.call(this,t,f,o)};
EventTarget.prototype.removeEventListener=function(t,f,o){try{const cap=(typeof o=='object'&&o)?!!o.capture:!!o;const k=(this===window?'W':this===document?'D':(this.id?'#'+this.id:'N'))+':'+t+':'+cap;const m=__c.lisMap.get(k);if(m)m.delete(f);}catch(e){}return _rel.call(this,t,f,o)};
const _cc=document.createElement.bind(document);document.createElement=function(n,...a){const e=_cc(n,...a);if(String(n).toLowerCase()=='canvas')__c.canvas++;return e};
window.addEventListener('error',e=>__c.err.push('E:'+e.message+' @'+(e.filename||'').split('/').pop()+':'+e.lineno));
window.addEventListener('unhandledrejection',e=>__c.err.push('R:'+e.reason));
"""
with sync_playwright() as p:
    b=p.chromium.launch(args=['--mute-audio',"--autoplay-policy=no-user-gesture-required"])
    ctx=b.new_context(viewport={'width':1280,'height':720})
    pg=ctx.new_page()
    logs=[]
    pg.on('console',lambda m:logs.append(m.type+': '+m.text) if m.type in('error','warning') else None)
    pg.on('pageerror',lambda e:logs.append('PAGEERR '+str(e)))
    pg.add_init_script(INIT)
    pg.goto(url);pg.wait_for_timeout(1500)
    pg.screenshot(path='shots/p1_title.png')
    print(pg.evaluate("view"), pg.evaluate("document.body.innerText.slice(0,300)"))
    pg.keyboard.press('Enter');pg.wait_for_timeout(800)
    pg.screenshot(path='shots/p2_after_enter.png')
    print(pg.evaluate("view"), [i.id for i in []], pg.evaluate("[...document.querySelectorAll('#stage > *')].map(e=>e.id||e.tagName)"))
    print(logs)
    b.close()
