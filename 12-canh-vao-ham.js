/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Cảnh nhân vật đi vào cổng hầm ngục (nhìn từ trên xuống).
   Trình tự: dừng trước cổng → máy quay lia lên mái rồi hạ xuống cửa → cổng phát sáng ba nhịp →
   cửa mở, hiện tên hầm và tầng → nhân vật + Cú Bút đi thẳng vào → cổng đóng lại → mờ dần vào tầng đã lưu.
   Bỏ qua cảnh chỉ bỏ phần trình diễn, không bỏ tầng. Dùng chung vòng lặp ngoài trời (không thêm timer). */
(()=>{
 const BW=224,BH=192;
 const PH={full:[0,.9,1.8,2.6,3.9,4.5,4.95],short:[0,.25,.45,.8,1.4,1.7,1.95]};
 const PAL={
  math:{c:'253,224,71',n:[262,330,392,523],col:['#fde68a','#fbbf24','#fff7d6','#f59e0b'],leaf:'#7a2018',leaf2:'#d9a441',ln:'ĐỀN SỐ GIỚI'},
  en:{c:'96,165,250',n:[294,370,440,587],col:['#bfdbfe','#60a5fa','#ffffff','#a5b4fc'],leaf:'#7c4a1d',leaf2:'#f4e4b8',ln:'THƯ KHỐ CỔ NGỮ'},
  it:{c:'34,211,238',n:[220,277,330,440],col:['#22d3ee','#4ade80','#a5f3fc','#a855f7'],leaf:'#334155',leaf2:'#22d3ee',ln:'THÀNH TRÌ BIT'}};
 const sm=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)};
 const lerp=(a,b,t)=>a+(b-a)*t;
 /* hạt pixel: mảng cố định, không tạo đối tượng mới mỗi khung */
 const NP=36,px=new Float32Array(NP),py=new Float32Array(NP),vx=new Float32Array(NP),vy=new Float32Array(NP),lf=new Float32Array(NP),ci=new Uint8Array(NP);
 const emit=(n,x,y,sx,sy,up)=>{for(let i=0,k=0;i<NP&&k<n;i++)if(lf[i]<=0){px[i]=x+(Math.random()-.5)*sx;py[i]=y+(Math.random()-.5)*sy;vx[i]=(Math.random()-.5)*30;vy[i]=up?-(20+Math.random()*50):(Math.random()-.5)*20;lf[i]=.5+Math.random()*.7;ci[i]=(Math.random()*4)|0;k++}};
 const snd=(cs,f,d,ty,v,t0,f2)=>{if(!cs.sk&&typeof tone=='function'&&cfg.sfx!==0)try{tone(f,d,ty,v,t0,f2)}catch(e){}};
 const CS={
  begin(st,k,d){D.cutSeen=D.cutSeen||{};const m=(cfg.gateCut==null?1:cfg.gateCut),full=!cfg.noFx&&(m==0||(m==1&&!D.cutSeen[k]));
   st.go=k;st.cs={k,d,t:0,full,ph:full?PH.full:PH.short,sk:0,fired:{},fs:0,glow:0,stand:null,done:0,pal:PAL[k]||PAL.math,
    l1:'HẦM NGỤC '+(PAL[k]||PAL.math).ln,l2:Z[k][Math.ceil(Math.ceil(D.p[k].cur/10)/3)-1],l3:'Tầng '+D.p[k].cur+'/120 · Lớp '+Math.ceil(D.p[k].cur/10)};
   lf.fill(0);const o=document.getElementById('ow');o&&o.classList.add('cs-on')},
  skip(st){const cs=st&&st.cs;if(cs&&!cs.done&&cs.t<cs.ph[5]){cs.t=cs.ph[5];cs.sk=1}},
  open(cs){const ph=cs.ph,t=cs.t;if(t<ph[2])return 0;if(t<ph[3])return sm((t-ph[2])/(ph[3]-ph[2]));if(t<ph[4])return 1;return 1-sm((t-ph[4])/(ph[5]-ph[4]))},
  update(st,dt,p){const cs=st.cs;cs.t+=dt;const t=cs.t,ph=cs.ph,d=cs.d,P=cs.pal;let walking=false;
   if(!cs.stand){cs.stand={x:d.cx,y:d.gy+BH+2}}
   if(t<ph[1]){const dx=cs.stand.x-p.x,dy=cs.stand.y-p.y,l=Math.hypot(dx,dy);p.dir='b';if(l>2){const s=Math.min(l,90*dt);p.x+=dx/l*s;p.y+=dy/l*s;p.t+=dt;walking=true}}
   else if(t<ph[3]){p.dir='b'}
   else if(t<ph[4]){p.dir='b';const u=(t-ph[3])/(ph[4]-ph[3]);p.x=cs.stand.x;p.y=lerp(cs.stand.y,d.gy+BH-64,u);p.t+=dt;walking=true;cs.fs-=dt;if(cs.fs<=0){cs.fs=.28;snd(cs,92+Math.random()*12,.05,'square',.05)}}
   if(cs.full&&!cfg.noFx){[ph[1]+.05,ph[1]+.4,ph[1]+.75].forEach((tb,i)=>{if(t>=tb&&!cs.fired['b'+i]){cs.fired['b'+i]=1;cs.glow=1;snd(cs,P.n[i],.2,'triangle',.1);emit(9,d.cx,d.gy+90,120,70,true)}})}
   else if(!cs.fired.b0&&t>=ph[1]){cs.fired.b0=1;cs.glow=1;snd(cs,P.n[0],.15,'triangle',.08)}
   if(t>=ph[2]&&!cs.fired.o){cs.fired.o=1;snd(cs,P.n[3],.45,'triangle',.1,0,P.n[0]);snd(cs,P.n[0]*.5,.5,'sawtooth',.04,.05,P.n[0]*.4)}
   if(t>=ph[2]&&t<ph[3]&&!cfg.noFx){cs.es=(cs.es||0)-dt;if(cs.es<=0){cs.es=.06;emit(1,d.cx,d.gy+150,34,10,true)}}
   if(t>=ph[4]&&!cs.fired.c){cs.fired.c=1;cs.glow=1;snd(cs,70,.28,'sine',.14,0,38);if(!cfg.noFx)emit(8,d.cx,d.gy+BH-26,40,6,false)}
   cs.glow=Math.max(0,cs.glow-dt*2.2);
   for(let i=0;i<NP;i++)if(lf[i]>0){lf[i]-=dt;px[i]+=vx[i]*dt;py[i]+=vy[i]*dt}
   return walking},
  cam(st,p){const cs=st.cs,t=cs.t,ph=cs.ph,d=cs.d,sx=p.x,sy=p.y-20,roofY=d.gy+44,doorY=d.gy+BH-70;
   if(!cs.full){return[lerp(sx,d.cx,sm(t/ph[1])),lerp(sy,doorY,sm(t/ph[1]))]}
   if(t<ph[1]){const u=sm(t/ph[1]);return[lerp(sx,d.cx,u),lerp(sy,roofY,u)]}
   if(t<ph[2]){return[d.cx,lerp(roofY,doorY,sm((t-ph[1])/(ph[2]-ph[1])))]}
   return[d.cx,doorY]},
  pEnt(st,off){const cs=st.cs,a=cs.ph[3]+(cs.ph[4]-cs.ph[3])*(.55+(off||0)),b=cs.ph[4];return Math.max(0,Math.min(1,(cs.t-a)/(b-a)))},
  ents(st){const cs=st.cs,d=cs.d,P=cs.pal;
   return[{sy:d.gy+BH-25,dr:g=>{const o=CS.open(cs),x0=d.gx+92,y0=d.gy+122,w=40,h=44;
     if(o>0){const gr=g.createLinearGradient(0,y0,0,y0+h);gr.addColorStop(0,'rgba('+P.c+',.95)');gr.addColorStop(1,'rgba(255,248,220,.95)');g.fillStyle=gr;g.fillRect(x0,y0,w,h)}
     const lw=Math.round((w/2)*(1-o));g.fillStyle=P.leaf;g.fillRect(x0,y0,lw,h);g.fillRect(x0+w-lw,y0,lw,h);
     if(lw>1){g.fillStyle=P.leaf2;g.fillRect(x0+lw-1,y0,1,h);g.fillRect(x0+w-lw,y0,1,h);if(cs.k=='math'){for(let i=0;i<4;i++){g.fillRect(x0+3,y0+6+i*10,2,2);g.fillRect(x0+w-5,y0+6+i*10,2,2)}}else if(cs.k=='en'){for(let i=0;i<5;i++){g.fillRect(x0+2,y0+4+i*9,Math.max(1,lw-4),1);g.fillRect(x0+w-lw+2,y0+4+i*9,Math.max(1,lw-4),1)}}else{g.fillRect(x0+2,y0+h-8,lw-3,2);g.fillRect(x0+w-lw+1,y0+h-8,lw-3,2)}}
     if(cs.k=='it'&&o>0&&o<1&&!cfg.noFx){g.fillStyle='rgba(165,243,252,.9)';g.fillRect(x0,y0+Math.round(h*o),w,2)}
     if(!cfg.noFx&&(o>0||cs.glow>0)){g.globalCompositeOperation='lighter';g.globalAlpha=Math.min(.5,.35*o+.3*cs.glow);g.fillStyle='rgb('+P.c+')';g.fillRect(x0-6,y0-6,w+12,h+12);g.globalAlpha=1;g.globalCompositeOperation='source-over'}}},
   {sy:1e6+1,dr:g=>{if(cfg.noFx)return;
     if(cs.glow>0){g.globalCompositeOperation='lighter';g.globalAlpha=.16*cs.glow;g.fillStyle='rgb('+P.c+')';g.fillRect(d.gx+4,d.gy+20,BW-8,BH-30);g.globalAlpha=1;g.globalCompositeOperation='source-over'}
     const sh=cs.k;for(let i=0;i<NP;i++)if(lf[i]>0){const a=Math.min(1,lf[i]*2.2);g.globalAlpha=a;g.fillStyle=P.col[ci[i]];const x=Math.round(px[i]),y=Math.round(py[i]);
      if(sh=='math'){g.fillRect(x,y-1,1,3);g.fillRect(x-1,y,3,1)}else if(sh=='en'){g.fillRect(x,y,3,2)}else{g.fillRect(x,y,2,ci[i]&1?4:2)}}
     g.globalAlpha=1}}]},
  overlay(g,c,st,LQ){const cs=st.cs;if(cs.done)return true;const t=cs.t,ph=cs.ph,P=cs.pal;
   const lb=Math.round(c.height*.1*sm(t/.45));g.fillStyle='#000';g.fillRect(0,0,c.width,lb);g.fillRect(0,c.height-lb,c.width,lb);
   const ta=sm((t-(ph[2]-.2))/.35)*(1-sm((t-(ph[4]-.1))/.4));
   if(ta>0){const w=Math.min(c.width-24,260),h=52,x=Math.round((c.width-w)/2),y=lb+10;g.globalAlpha=ta*.95;g.fillStyle='#0c0a18';g.fillRect(x,y,w,h);g.fillStyle='rgb('+P.c+')';g.fillRect(x,y,w,2);g.fillRect(x,y+h-2,w,2);g.fillRect(x,y,2,h);g.fillRect(x+w-2,y,2,h);g.fillRect(x-2,y-2,5,5);g.fillRect(x+w-3,y-2,5,5);g.fillRect(x-2,y+h-3,5,5);g.fillRect(x+w-3,y+h-3,5,5);
    g.globalAlpha=ta;g.textAlign='center';g.fillStyle='#fff7d6';g.font='bold 15px "Segoe UI",sans-serif';g.fillText(cs.l1,c.width/2,y+20);g.fillStyle='rgb('+P.c+')';g.font='bold 12px "Segoe UI",sans-serif';g.fillText(cs.l2,c.width/2,y+35);g.fillStyle='#e8d6b0';g.font='12px "Segoe UI",sans-serif';g.fillText(cs.l3,c.width/2,y+48);g.globalAlpha=1}
   if(t<ph[5]&&lb>6){g.textAlign='right';g.fillStyle='rgba(255,255,255,.75)';g.font='8px "Segoe UI",sans-serif';g.fillText('Enter / Space hoặc chạm để bỏ qua',c.width-6,c.height-Math.max(3,Math.round(lb/2)-3))}
   const fa=sm((t-ph[5])/(ph[6]-ph[5]));if(fa>0){g.fillStyle='rgba(0,0,0,'+fa+')';g.fillRect(0,0,c.width,c.height)}
   if(t>=ph[6]){cs.done=1;const o=document.getElementById('ow');o&&o.classList.remove('cs-on');const k=cs.k;window.__lg=k;st.go=0;st.cs=null;D.cutSeen=D.cutSeen||{};D.cutSeen[k]=1;save();gateStory(k,()=>{owStop();window.__keepOw=0;window.__newDungeon=1;explore(k)});return true}
   return false}
 };
 window.CS=CS;
 /* Cài đặt: kiểu cảnh vào hầm ngục */
 const LB=['Đầy đủ mỗi lần','Đầy đủ lần đầu, sau đó rút gọn','Luôn rút gọn'];
 window.gateCutRow=()=>'<div class="row"><span>Cảnh vào hầm ngục</span><button class="pxb" style="padding:4px 10px;font-size:12px" onclick="cycGate()">'+LB[cfg.gateCut==null?1:cfg.gateCut]+'</button></div>';
 window.cycGate=()=>{cfg.gateCut=((cfg.gateCut==null?1:cfg.gateCut)+1)%3;saveCfg();sfx('ok');settings()};
 /* bỏ qua: phím hoặc chạm (không bỏ tầng) */
 const sk=e=>{try{if(e&&e.type=='keydown'&&(e.repeat||!(e.key=='Enter'||e.key==' '||e.key=='Escape')))return;const s=window.__st&&__st();if(view=='ow'&&s&&s.go)CS.skip(s)}catch(x){}};
 addEventListener('keydown',sk,true);document.addEventListener('pointerdown',sk,true);
})();
