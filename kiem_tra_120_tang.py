# Cách dùng: python tools/kiem_tra_120_tang.py file:///ĐƯỜNG_DẪN/index.html
import sys,json
import os
os.makedirs('ket_qua',exist_ok=True)
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'probe_khung.py'),encoding='utf-8').read().split("with sync_playwright")[0])
JS="""
(()=>{const out={};const subj=['math','en','it'];
for(const k of subj){const bad=[],emptyBand=[];let nq=0,dupOpt=0,badIdx=0,neg=0,ex=0;
 for(let f=1;f<=120;f++){for(let n=0;n<40;n++){let q;try{q=mkQ(k,f)}catch(e){ex++;if(ex<4)bad.push(k+' f'+f+' '+e.message);continue}
  nq++;const o=q.o;if(!q.t||!Array.isArray(o)||o.length<2||o.length>4){bad.push(k+' f'+f+' dạng sai');continue}
  if(new Set(o.map(String)).size!==o.length)dupOpt++;
  if(!(q.c>=0&&q.c<o.length))badIdx++;
  if(k=='math'&&o.some(x=>/^-/.test(String(x))&&f<85))neg++}}
 out[k]={cauHoiDaSinh:nq,loiNgoaiLe:ex,dapAnTrung:dupOpt,chiSoDungSai:badIdx,mathAmSomTrenTang85:neg,vd:bad.slice(0,4)}}
out.bandsTin=window.TIN_BANK.bands.map(b=>[b.from,b.to,b.q.length]);
out.cap=[];for(const k of subj){D.p[k].cur=119;const before=D.p[k].cur;}
return out})()
"""
with sync_playwright() as p:
    b=p.chromium.launch(args=['--mute-audio']); pg=b.new_context(viewport={'width':1280,'height':720}).new_page()
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.goto(url); pg.wait_for_timeout(1200)
    r=pg.evaluate(JS); print(json.dumps(r,ensure_ascii=False)); print('errs',errs)
    # tiến trình: chơi từ tầng 1 đến 120 bằng cách gọi start/end
    res={}
    for k in ['math','en','it']:
        pg.evaluate(f"D.p['{k}']={{cur:1,hi:0}};save()")
        seq=[]; 
        res[k]=pg.evaluate("""(k)=>{const seen=[];let bossCount=0,errs=0;for(let i=0;i<130;i++){const f=D.p[k].cur;if(i>0&&f===seen[seen.length-1]&&f===120)break;
          try{start(k);if(!G||G.f!==f)errs++;if(G.boss)bossCount++;seen.push(f);end(true)}catch(e){errs++;seen.push('E'+e.message);break}}
          return {tangDaQua:seen.length,tangCuoi:D.p[k].cur,hi:D.p[k].hi,boss:bossCount,loi:errs,ds:seen.slice(0,3).concat(seen.slice(-3))}}""",k)
    print(json.dumps(res,ensure_ascii=False))
    b.close()
