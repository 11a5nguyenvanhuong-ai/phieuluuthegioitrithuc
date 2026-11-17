# Cách dùng: python tools/kiem_tra_phim_ket.py file:///ĐƯỜNG_DẪN/index.html
import sys,json
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
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.goto(url); pg.wait_for_timeout(1200); pg.keyboard.press('Enter'); pg.wait_for_timeout(300); pg.click('#nok'); pg.wait_for_timeout(800); skipstory(pg); pg.wait_for_timeout(300)
    pos=lambda: pg.evaluate("[Math.round(__st().p.x),Math.round(__st().p.y)]")
    # 1) giữ phím rồi mất focus (blur) -> phải đứng yên
    a=pos(); pg.keyboard.down('ArrowRight'); pg.wait_for_timeout(300); pg.evaluate("window.dispatchEvent(new Event('blur'))"); b0=pos(); pg.wait_for_timeout(600); b1=pos(); pg.keyboard.up('ArrowRight')
    R['blur_dung_yen']=(b0==b1); 
    # 2) đổi tab (visibilitychange)
    pg.keyboard.down('ArrowLeft'); pg.wait_for_timeout(250); pg.evaluate("Object.defineProperty(document,'hidden',{value:true,configurable:true});document.dispatchEvent(new Event('visibilitychange'))"); c0=pos(); pg.wait_for_timeout(500); c1=pos(); R['doi_tab_dung_yen']=(c0==c1); pg.evaluate("Object.defineProperty(document,'hidden',{value:false,configurable:true})"); pg.keyboard.up('ArrowLeft')
    # 3) giữ phím suốt lúc vào cổng và vào hầm ngục -> trong hầm không tự đi
    pg.evaluate("(()=>{const s=__st(),d={gx:96,gy:96};s.p.x=d.gx+112;s.p.y=d.gy+192+60;s.p.dir='b'})()"); pg.wait_for_timeout(300)
    pg.keyboard.down('ArrowUp')
    for i in range(80):
        pg.wait_for_timeout(100)
        if pg.evaluate("view")!='ow': break
        if pg.evaluate("!!document.getElementById('story')"): break
    skipstory(pg)
    pg.wait_for_timeout(2500); skipstory(pg)
    R['view_sau_cong']=pg.evaluate("view")
    x0=pg.evaluate("[X.x,X.y]"); pg.wait_for_timeout(1200); x1=pg.evaluate("[X.x,X.y]"); R['trong_ham_tu_di']= x0!=x1
    pg.keyboard.up('ArrowUp'); pg.wait_for_timeout(200)
    x2=pg.evaluate("[X.x,X.y]"); pg.wait_for_timeout(800); R['sau_nha_phim_dung_yen']=(x2==pg.evaluate("[X.x,X.y]"))
    # 4) mở menu trong hầm rồi quay lại
    pg.keyboard.down('ArrowRight'); pg.wait_for_timeout(200); pg.evaluate("menu()"); pg.wait_for_timeout(700); skipstory(pg); pg.keyboard.up('ArrowRight'); pg.wait_for_timeout(300)
    d0=pos(); pg.wait_for_timeout(700); R['ve_ngoai_troi_dung_yen']=(d0==pos())
    R['loi']=errs
    b.close()
print(json.dumps(R,ensure_ascii=False))
