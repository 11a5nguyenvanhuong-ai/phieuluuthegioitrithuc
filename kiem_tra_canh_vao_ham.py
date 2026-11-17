# Cách dùng: python tools/kiem_tra_canh_vao_ham.py file:///ĐƯỜNG_DẪN/index.html
# Kiểm tra: cảnh đầy đủ lần đầu, rút gọn lần sau, bỏ qua bằng Enter/chạm, khóa điều khiển, tải lại giữa cảnh, không đổi tầng.
import sys,json,time
import os
os.makedirs('ket_qua',exist_ok=True)
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'probe_khung.py'),encoding='utf-8').read().split("with sync_playwright")[0])
def skipstory(pg,n=14):
    for _ in range(n):
        if pg.evaluate("!!document.getElementById('story')"): pg.keyboard.press('Space'); pg.wait_for_timeout(150)
        else: break
R={}
def trigger(pg,gx,gy):
    pg.evaluate("(a)=>{const s=__st();s.p.x=a[0]+112;s.p.y=a[1]+192+50;s.p.dir='b';s.owl.x=s.p.x-30;s.owl.y=s.p.y}",[gx,gy]); pg.wait_for_timeout(250)
    pg.keyboard.down('ArrowUp')
    for i in range(60):
        pg.wait_for_timeout(40)
        if pg.evaluate("!!__st().cs"): break
    pg.keyboard.up('ArrowUp')
def finish(pg,limit=12):
    t0=time.time()
    while time.time()-t0<limit:
        if pg.evaluate("view")!='ow' or pg.evaluate("!!document.getElementById('story')"): break
        pg.wait_for_timeout(40)
    el=round(time.time()-t0,2)
    for _ in range(30):
        if not pg.evaluate("!!document.getElementById('story')"): break
        skipstory(pg); pg.wait_for_timeout(100)
    return el
with sync_playwright() as p:
    b=p.chromium.launch(args=['--mute-audio']); ctx=b.new_context(viewport={'width':1280,'height':720}); pg=ctx.new_page()
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
    pg.goto(url); pg.wait_for_timeout(1200); pg.keyboard.press('Enter'); pg.wait_for_timeout(300); pg.click('#nok'); pg.wait_for_timeout(800); skipstory(pg); pg.wait_for_timeout(300)
    # 1) lần đầu: đầy đủ; kiểm tra khóa điều khiển
    trigger(pg,96,96); mode1=pg.evaluate("__st().cs.full")
    pg.keyboard.down('ArrowLeft'); pg.keyboard.press('e'); pg.wait_for_timeout(1500); x_during=pg.evaluate("[Math.round(__st().p.x),__st().cs.d.cx]"); pg.keyboard.up('ArrowLeft')
    R['khoa_dieu_khien']={'x_nhan_vat':x_during[0],'x_tam_cong':x_during[1],'khong_lech':abs(x_during[0]-x_during[1])<2}
    R['lan1_day_du']=mode1; R['lan1_thoi_gian_s']=finish(pg); R['lan1_view']=pg.evaluate("view"); R['lan1_tang']=pg.evaluate("D.p.math.cur")
    pg.evaluate("menu()"); pg.wait_for_timeout(600); skipstory(pg); pg.wait_for_timeout(300)
    # 2) lần hai: rút gọn
    trigger(pg,96,96); mode2=pg.evaluate("__st().cs.full"); R['lan2_day_du']=mode2; R['lan2_thoi_gian_s']=finish(pg); R['lan2_tang']=pg.evaluate("D.p.math.cur")
    pg.evaluate("menu()"); pg.wait_for_timeout(600); skipstory(pg); pg.wait_for_timeout(300)
    # 3) cài đặt luôn đầy đủ + bỏ qua giữa chừng
    pg.evaluate("cfg.gateCut=0"); trigger(pg,592,56); pg.wait_for_timeout(700); pg.keyboard.press('Enter'); R['bo_qua_thoi_gian_s']=finish(pg); R['bo_qua_view']=pg.evaluate("view"); R['bo_qua_k']=pg.evaluate("X.k"); R['bo_qua_tang_giu_nguyen']=pg.evaluate("D.p.en.cur")
    pg.evaluate("menu()"); pg.wait_for_timeout(600); skipstory(pg); pg.wait_for_timeout(300)
    # 4) chạm để bỏ qua
    trigger(pg,1056,112); pg.wait_for_timeout(600); pg.mouse.click(640,360); R['cham_bo_qua_s']=finish(pg); R['cham_view']=pg.evaluate("view")
    pg.evaluate("menu()"); pg.wait_for_timeout(600); skipstory(pg); pg.wait_for_timeout(300)
    # 5) tải lại trang giữa cảnh
    trigger(pg,96,96); pg.wait_for_timeout(900); cur_truoc=pg.evaluate("D.p.math.cur"); pg.reload(); pg.wait_for_timeout(1500)
    R['reload_giua_canh']={'tang_truoc':cur_truoc,'tang_sau':pg.evaluate("D.p.math.cur"),'view':pg.evaluate("view")}
    # dọn: vào lại ngoài trời và thử lại bình thường
    pg.keyboard.press('Enter'); pg.wait_for_timeout(500); skipstory(pg); pg.wait_for_timeout(500)
    trigger(pg,96,96); R['sau_reload_chay_lai_s']=finish(pg); R['sau_reload_view']=pg.evaluate("view")
    R['loi']=errs
    b.close()
print(json.dumps(R,ensure_ascii=False,indent=1))
