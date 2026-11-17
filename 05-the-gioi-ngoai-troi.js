/* PHIÊU LƯU THẾ GIỚI TRI THỨC — 36 boss pixel, ngân hàng Tin học, đổi tên Thế Giới Bit, thế giới ngoài trời nhìn từ trên xuống. */
/* ===== PHIÊU LƯU THẾ GIỚI TRI THỨC v2: 36 boss pixel 64×64 · ngân hàng JSON Tin học · thế giới ngoài trời nhìn từ trên xuống · UI pixel ===== */
(()=>{
const {paint,rp,hx,mx,GEN}=PX,hex=a=>'#'+a.map(v=>v.toString(16).padStart(2,'0')).join(''),RR=(a,b)=>a+Math.random()*(b-a),Ri=(a,b)=>Math.floor(RR(a,b+1));
/* ---------- 1. BOSS THEO MÔN HỌC: Toán = con số/ký hiệu, Tiếng Anh = chữ cái/sách, Bit = bit/bug/chip ---------- */
const BYM=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]],pal=(a,i)=>a[i%a.length],
hsl=(h,s,l)=>{s/=100;l/=100;const a=s*Math.min(l,1-l),f=n=>{const k=(n+h/30)%12;return l-a*Math.max(-1,Math.min(k-3,9-k,1))};return hex([f(0),f(8),f(4)].map(v=>Math.round(v*255)))};
const ring=(rx,ry,n=24)=>{const p=[];for(let i=0;i<=n;i++){const t=i/n*Math.PI*2;p.push([5+rx*Math.cos(t),5+ry*Math.sin(t)])}return p},
inf=(()=>{const p=[];for(let t=0;t<=6.4;t+=.25){const d=1+Math.sin(t)**2;p.push([5+4.6*Math.cos(t)/d,5+3.4*Math.sin(t)*Math.cos(t)/d])}return p})(),
spi=(()=>{const p=[];for(let t=.5;t<=12;t+=.3)p.push([5+t*.38*Math.cos(t),5+t*.38*Math.sin(t)]);return p})(),
GL2={'1':[[[3,2.5],[5.5,0.5],[5.5,9.5]]],'+':[[[5,1],[5,9]],[[1,5],[9,5]]],'×':[[[1.5,1.5],[8.5,8.5]],[[8.5,1.5],[1.5,8.5]]],'÷':[[[1,5],[9,5]],[[5,1.2],[5,1.3]],[[5,8.7],[5,8.8]]],'−':[[[1,5],[9,5]]],'=':[[[1,3],[9,3]],[[1,7],[9,7]]],'△':[[[5,0.8],[9.3,9],[0.7,9],[5,0.8]]],'π':[[[0.8,1.5],[9.2,1.5]],[[3,1.5],[2.6,9.5]],[[7,1.5],[7.3,9.5],[9.2,8.6]]],'√':[[[0.3,6],[2,5],[4.3,9.5],[8.5,0.8],[10,0.8]]],'∞':[inf],
 'A':[[[0.8,9.5],[5,1],[9.2,9.5]],[[2.6,6.5],[7.4,6.5]]],'T':[[[0.8,1.2],[9.2,1.2]],[[5,1.2],[5,9.5]]],'→':[[[0.8,5],[9,5]],[[5.5,1.5],[9.2,5],[5.5,8.5]]],'?':[[[2,3],[3,1],[5,0.6],[7,1],[8,3],[7,5],[5,6],[5,7]],[[5,9.3],[5,9.4]]],
 'Q':[ring(3.8,4.2),[[6,7],[9.2,9.8]]],'B':[[[1.8,0.8],[1.8,9.5]],[[1.8,0.8],[6,0.8],[8,2.2],[8,3.6],[6,5],[1.8,5]],[[1.8,5],[6.4,5],[8.6,6.6],[8.6,8],[6.4,9.5],[1.8,9.5]]],'Z':[[[1,1.2],[9,1.2],[1,9.2],[9,9.2]]],
 '{}':[[[4.2,0.8],[3,1.8],[3,4],[1.2,5],[3,6],[3,8.2],[4.2,9.2]],[[5.8,0.8],[7,1.8],[7,4],[8.8,5],[7,6],[7,8.2],[5.8,9.2]]],'</>':[[[3.2,1.8],[0.6,5],[3.2,8.2]],[[6.8,1.8],[9.4,5],[6.8,8.2]],[[5.8,0.6],[4.2,9.4]]],'@':[spi]},
FAN={'1':[5.5,3],'+':[5,5],'×':[5,5],'÷':[5,5],'−':[5,5],'=':[5,5],'△':[5,6.6],'π':[5,1.8],'√':[6.4,4.4],'∞':[5,5],'A':[5,3.4],'T':[5,2],'→':[7.2,5],'?':[5,2.6],'Q':[5,5],'B':[2.6,5],'Z':[5,5],'{}':[5,5],'</>':[5,5],'@':[5,5]},
BYMAT=(x,y)=>BYM[y&3][x&3]/16-.5;
function thick(A,polys,r,col,ox,oy,sc){const rr=rp(col),S=[];polys.forEach(p=>{for(let i=0;i<p.length-1;i++)S.push([p[i][0]*sc+ox,p[i][1]*sc+oy,p[i+1][0]*sc+ox,p[i+1][1]*sc+oy])});
 for(let y=0;y<64;y++)for(let x=0;x<64;x++){let b=1e9,bx=0,by=0;for(const[a,b2,c,d]of S){const vx=c-a,vy=d-b2,t=Math.max(0,Math.min(1,((x+.5-a)*vx+(y+.5-b2)*vy)/(vx*vx+vy*vy||1))),px=a+vx*t,py=b2+vy*t,e=(x+.5-px)**2+(y+.5-py)**2;if(e<b){b=e;bx=x+.5-px;by=y+.5-py}}
  const d=Math.sqrt(b);if(d>r)continue;if(d>r-1.3){A.P(x,y,hex(bx+by>-2?rr[0]:rr[1]));continue}const l=.5-(bx*.5+by*.62)/r*.85+BYMAT(x,y)*.3;A.P(x,y,hex(rr[l<.05?1:l<.82?2:l<1.05?3:4]))}}
const eyeP=(A,ax,ay,c='#fde047')=>{[ax-4,ax+4].forEach(e=>{A.R(e-2,ay-2,5,6,'#ffffff');A.R(e-1,ay-1,3,5,'#1a1226');A.P(e-1,ay-1,'#ffffff');A.R(e-2,ay-3,5,1,c)})},
mouth=(A,x,y,w=6)=>{A.R(x-w/2,y,w,2,'#1a1226');A.R(x-w/2+1,y+1,w-2,1,'#f43f5e')},
spark=(A,col,i)=>{[[6,10],[56,14],[8,52],[55,50],[32,3]].forEach(([x,y],k)=>{if((k+i)%2==0){A.P(x,y,col);A.P(x-1,y,col);A.P(x+1,y,col);A.P(x,y-1,col);A.P(x,y+1,col)}})},
crown=(A,x,y)=>{A.Y([[x-9,y+7],[x-9,y],[x-5,y+4],[x,y-2],[x+5,y+4],[x+9,y],[x+9,y+7]],'#fbbf24');A.P(x,y+3,'#ef4444');A.P(x-5,y+4,'#38bdf8');A.P(x+5,y+4,'#38bdf8')},
SP={cube:(A,h)=>{const c=hx(h);A.Y([[32,8],[54,19],[32,30],[10,19]],hex(mx(c,[255,255,255],.3)));A.Y([[10,19],[32,30],[32,56],[10,45]],hex(mx(c,[0,0,0],.25)));A.Y([[32,30],[54,19],[54,45],[32,56]],h);A.R(30,18,1,1,'#fff');eyeP(A,22,36);eyeP(A,43,34);mouth(A,32,46,5)},
 book:(A,h)=>{A.B(14,10,38,46,h);A.B(14,10,7,46,hex(mx(hx(h),[0,0,0],.3)));A.R(21,54,30,3,'#fff7e0');A.R(14,10,38,2,'#fbbf24');A.R(14,54,38,2,'#fbbf24');A.E(35,24,10,7,'#fbbf24');A.R(30,22,10,1,'#7a4a0e');A.R(32,25,6,1,'#7a4a0e');eyeP(A,35,36);mouth(A,35,46,6)},
 bubble:(A,h)=>{A.E(32,28,25,19,'#ffffff');A.Y([[20,42],[14,57],[32,45]],'#ffffff');A.E(32,28,21,15,h);eyeP(A,32,24,h);mouth(A,32,35,8);A.R(10,10,2,2,'#38bdf8');A.R(53,8,2,2,'#38bdf8')},
 openbook:(A,h)=>{A.Y([[4,16],[30,22],[30,56],[4,48]],'#fff7e0');A.Y([[60,16],[34,22],[34,56],[60,48]],'#f1e6c8');A.Y([[2,14],[4,16],[4,48],[2,46]],h);A.Y([[62,14],[60,16],[60,48],[62,46]],h);A.R(30,22,4,34,h);for(let i=0;i<5;i++){A.R(8,26+i*5,16,1,'#a8996f');A.R(40,26+i*5,16,1,'#a8996f')}eyeP(A,32,12,'#fbbf24');mouth(A,32,22,6)},
 ink:(A,h)=>{A.Y([[40,4],[56,4],[44,30],[36,30]],'#f5f3ff');A.R(44,4,2,26,'#c4b5fd');A.B(18,30,32,26,'#1e2a52');A.B(25,22,18,9,'#6b3f1d');A.E(34,31,13,4,h);eyeP(A,34,40,'#38bdf8');mouth(A,34,49,6);A.E(12,56,3,2,h)},
 db:(A,h)=>{A.E(32,52,20,7,h);A.B(12,14,40,38,h);A.E(32,15,20,8,hex(mx(hx(h),[255,255,255],.35)));A.R(12,26,40,1,hex(mx(hx(h),[0,0,0],.45)));A.R(12,38,40,1,hex(mx(hx(h),[0,0,0],.45)));eyeP(A,32,19);mouth(A,32,32,8)},
 chip:(A,h)=>{for(let i=0;i<6;i++){A.R(16+i*7,8,3,6,'#d1d5db');A.R(16+i*7,50,3,6,'#d1d5db');A.R(8,16+i*6,6,3,'#d1d5db');A.R(50,16+i*6,6,3,'#d1d5db')}A.B(13,13,38,38,'#1f2937');A.B(19,19,26,26,h);eyeP(A,32,28);mouth(A,32,38,8);A.R(15,15,3,1,'#67e8f9')},
 cpu:(A,h)=>{SP.chip(A,h);A.R(18,14,28,1,'#fbbf24')},
 bug:(A,h)=>{[[10,30],[8,42],[12,54]].forEach(([x,y])=>{A.L(x,y,24,38,'#1f2937');A.L(64-x,y,40,38,'#1f2937')});A.L(28,14,22,4,'#1f2937');A.L(36,14,42,4,'#1f2937');A.E(22,4,2,2,'#f43f5e');A.E(42,4,2,2,'#f43f5e');A.E(32,40,22,18,h);A.R(31,26,2,32,'#1a1226');[[22,36],[42,36],[20,48],[44,48]].forEach(([x,y])=>A.E(x,y,3.5,3.5,'#1a1226'));A.E(32,21,11,9,'#1f2937');eyeP(A,32,19,'#f43f5e')},
 robot:(A,h)=>{GEN.bit7(A,(k,d)=>k=='c'?h:d);},virus:(A,h)=>{GEN.virus(A);A.E(32,32,16,16,h);A.E(32,30,8,8,'#fff');A.E(32,31,4,4,'#4ade80');A.R(31,30,2,2,'#1a1226');A.R(25,40,14,3,'#1a1226')}},
SUBJ={math:['1','+','×','÷','cube','0','−','=','△','π','√','∞'],en:['A','book','bubble','openbook','T','→','?','ink','Q','B','Z','book'],it:['0','1','{}','</>','db','bug','@','chip','robot','virus','cpu','cpu']},
HUE={math:[48,130,20,300,205,35,270,350,215,160,15,50],en:[330,215,190,40,150,25,265,230,350,95,175,45],it:[170,190,120,210,160,5,285,195,200,280,175,55]},
BAUR={math:'#fde68a',en:'#bae6fd',it:'#67e8f9'};
for(const k of['math','en','it'])BD[k].forEach((b,i)=>{const g=SUBJ[k][i],col=hsl(HUE[k][i],64,54);
 GEN['X'+k+i]=A=>{if(SP[g])SP[g](A,col);else{const gp=GL2[g]||[ring(3.6,4.6)],bit=(g=='0'||g=='1'&&k=='it');
   if(g=='0'){A.E(32,31,17,22,hex(mx(hx(col),[0,0,0],.55)));thick(A,[ring(3.4,4.5)],5.2,col,10,8,4.4);eyeP(A,32,26);mouth(A,32,37,7);}
   else if(g=='1'&&k=='it'){A.B(18,8,28,48,hex(mx(hx(col),[0,0,0],.55)));thick(A,[[[3,2.5],[5.5,0.5],[5.5,9.5]]],5.4,col,10,8,4.4);eyeP(A,32,22);mouth(A,32,33,7)}
   else{thick(A,gp,5.8,col,10,9,4.4);const f=FAN[g]||[5,5];eyeP(A,10+f[0]*4.4,9+f[1]*4.4-1);mouth(A,10+f[0]*4.4,9+f[1]*4.4+7,6)}}
  spark(A,BAUR[k],i);if(i>=9)crown(A,32,i==11?0:1)}});

/* ---------- 2. NGÂN HÀNG TIN HỌC (JSON): tầng 1-89 không có Python ---------- */
const TIN=window.TIN_BANK,sh2=a=>[...a].sort(()=>Math.random()-.5);
const num=(q,a,w)=>{const o=sh2([a,...w]);return{t:q,o:o.map(String),c:o.indexOf(a)}},uniq=(a,n,f)=>{const s=new Set();let g=0;while(s.size<n&&g++<60){const v=f();if(v!=a)s.add(v)}return[...s]};
const GENQ=[
 f=>f>=16&&(()=>{const m=f<30?15:f<60?63:255,n=Ri(2,m);return num(`Số nhị phân ${n.toString(2)} bằng số nào trong hệ thập phân?`,n,uniq(n,3,()=>Math.max(1,n+Ri(-6,6))))})(),
 f=>f>=16&&(()=>{const m=f<30?15:f<60?63:255,n=Ri(2,m),a=n.toString(2);return num(`Số ${n} trong hệ thập phân viết thành nhị phân là gì?`,a,uniq(a,3,()=>Math.max(1,n+Ri(-5,5)).toString(2)))})(),
 f=>f>=20&&(()=>{const k=Ri(2,9);return num(`${k} KB bằng bao nhiêu byte (theo cách tính 1 KB = 1024 byte)?`,k*1024,[k*1000,k*100,k*1024*8])})(),
 f=>f>=46&&(()=>{const x=Ri(2,9),y=Ri(2,9),z=Ri(1,9);return num(`Ô A1 = ${x}, B1 = ${y}. Công thức =A1*B1+${z} cho kết quả bao nhiêu?`,x*y+z,uniq(x*y+z,3,()=>x*y+z+Ri(-4,4)))})(),
 f=>f>=61&&(()=>{const m=Ri(3,9),s=m*(m+1)/2;return num(`Thuật toán: s ← 0; với i từ 1 đến ${m}: s ← s + i. Giá trị cuối của s là bao nhiêu?`,s,uniq(s,3,()=>s+Ri(-5,5)))})(),
 f=>f>=61&&(()=>{const a=Math.random()<.5,b=Math.random()<.5,op=['VÀ','HOẶC'][Ri(0,1)],r=op=='VÀ'?a&&b:a||b,T=v=>v?'Đúng':'Sai';return{t:`A = ${T(a)}, B = ${T(b)}. Biểu thức A ${op} B có giá trị gì?`,o:['Đúng','Sai'],c:r?0:1}})()];
const _mk=mkQ;mkQ=function(k,f){if(k!='it'||f>=90)return _mk(k,f);
 const band=TIN.bands.find(b=>f>=b.from&&f<=b.to)||TIN.bands[0],gs=GENQ.map(g=>g(f)).filter(Boolean);
 if(gs.length&&Math.random()<(f<30?.2:.4))return gs[Ri(0,gs.length-1)];
 const pool=[...band.q,...(TIN.bands[TIN.bands.indexOf(band)-1]||{q:[]}).q],e=pool[Ri(0,pool.length-1)],o=sh2(e.slice(1));return{t:e[0],o,c:o.indexOf(e[1])}};
/* ---------- 3. ĐỔI TÊN: Thành phố Tin học, Python từ tầng 90 ---------- */
SUB[2]={k:'it',n:'Tin học',e:'💻',w:'Thế Giới Bit'};Z.it=['Khu Vườn Máy Tính','Phố Mạng & An Toàn','Tháp Thuật Toán & Dữ Liệu','Lõi Python & Trí Tuệ Nhân Tạo'];
document.title='PHIÊU LƯU THẾ GIỚI TRI THỨC | Phiên bản Pixel';
/* ---------- 4. GIAO DIỆN PIXEL: khung bậc thang, font pixel, nền sàn hầm ngục ---------- */
const tile=(a,b,c)=>{const t=document.createElement('canvas');t.width=t.height=16;const g=t.getContext('2d');g.fillStyle=a;g.fillRect(0,0,16,16);g.fillStyle=b;g.fillRect(0,0,16,1);g.fillRect(0,0,1,16);g.fillStyle=c;for(let i=0;i<14;i++)g.fillRect(Ri(1,14),Ri(1,14),2,1);return t.toDataURL()};
const fl={math:tile('#5b3a1d','#6e4a26','#3e2611'),en:tile('#1e3a6e','#2b4d8c','#142a52'),it:tile('#0b2a33','#11424f','#06171c')},ui=document.createElement('style');
ui.textContent=`
body,button,.q,.a{}
.card,.wc,.q,.a,.sp,.ac-panel{border:0!important;border-radius:0!important;box-shadow:0 -4px 0 0 #a855f7,0 4px 0 0 #3b1d6e,-4px 0 0 0 #7c3aed,4px 0 0 0 #7c3aed!important}.wc,.sp{margin:12px 4px!important}
button{border-radius:0!important;box-shadow:inset -3px -3px 0 #0006,inset 3px 3px 0 #fff3;text-transform:none}button:active{transform:translateY(2px)}
.arena{background:var(--fl) 0 0/64px 64px;image-rendering:pixelated;box-shadow:inset 0 0 0 4px #0008,inset 0 -30px 40px #000a;border-radius:0}
body[data-w=math]{--fl:url(${fl.math})}body[data-w=en]{--fl:url(${fl.en})}body[data-w=it]{--fl:url(${fl.it})}.hpb,.hpb i{border-radius:0!important}`;
document.head.appendChild(ui);
/* ---------- 5. THẾ GIỚI NGOÀI TRỜI (RPG nhìn từ trên xuống): cổng lớn, đài phun nước, nhà, đèn, hiệu ứng động ---------- */
const T=32,CW=44,CH=32,WW=CW*T,WH=CH*T,rnd=(()=>{let s=11;return()=>(s=(s*16807)%2147483647)/2147483647})(),BW=224,BH=192,
KEY={math:{n:'SỐ GIỚI',sub:'Toán học',gx:96,gy:96,c:'251,191,36'},en:{n:'THƯ KHỐ CỔ NGỮ',sub:'Tiếng Anh',gx:592,gy:56,c:'125,211,252'},it:{n:'THẾ GIỚI BIT',sub:'Tin học',gx:1056,gy:112,c:'34,211,238'}};
const g5=(A,k,i,x,y,s,c)=>GL[k][i%GL[k].length].split('|').forEach((r,yy)=>[...r].forEach((ch,xx)=>{if(ch!='.')A.R(x+xx*s,y+yy*s,s,s,c)}));
const vroof=(A,x0,x1,yb,h,c1,c2,c3)=>{
 A.Y([[x0-14,yb-12],[x0-3,yb+2],[x1+3,yb+2],[x1+14,yb-12],[x1-6,yb-h],[x0+6,yb-h]],c3);
 A.Y([[x0-11,yb-12],[x0-2,yb],[x1+2,yb],[x1+11,yb-12],[x1-7,yb-h+2],[x0+7,yb-h+2]],c1);
 for(let r=3;r<h-2;r+=4){const k=r*.55;A.R(((x0+5+k)|0),yb-r,(x1-x0)-10-((k*2)|0),1,c2)}
 A.R(x0+4,yb-h-1,x1-x0-8,3,c3);A.R(x0-14,yb-14,3,4,c3);A.R(x1+11,yb-14,3,4,c3);
};
const bld={
math:A=>{
 A.B(0,178,224,14,'#7a5a2e');A.B(8,170,208,10,'#a37b3c');A.B(20,162,184,10,'#c79a4e');
 [[6,52,1],[172,218,4]].forEach(([a,b,gi])=>{A.B(a+4,120,b-a-8,44,'#e6c06a');A.B(a+4,120,7,44,'#8a2b1c');A.B(b-11,120,7,44,'#8a2b1c');g5(A,'math',gi,a+19,134,2,'#8a5a14');vroof(A,a+2,b-2,120,22,'#a37b3c','#c79a4e','#4a2a0a')});
 A.B(76,98,10,66,'#8a2b1c');A.B(138,98,10,66,'#8a2b1c');A.B(70,100,84,9,'#5a1410');for(let i=0;i<6;i++)g5(A,'math',i*3,76+i*12,102,1,'#fde68a');
 A.B(86,60,52,34,'#a6291d');
 A.E(112,76,13,13,'#d9a441');A.E(112,76,10,10,'#8a5a14');A.E(112,76,7,7,'#fde68a');A.E(112,76,4,4,'#8a5a14');A.E(112,76,1,1,'#fde68a');
 for(let i=0;i<8;i++){const a=i*Math.PI/4;A.R(Math.round(112+Math.cos(a)*12)-1,Math.round(76+Math.sin(a)*12)-1,3,3,'#fff3b8')}
 vroof(A,56,168,110,22,'#a37b3c','#c79a4e','#4a2a0a');
 vroof(A,72,152,60,26,'#a37b3c','#c79a4e','#4a2a0a');
 A.R(110,18,4,16,'#d9a441');A.E(112,16,5,5,'#fde68a');
 A.B(92,122,40,44,'#2b1a0a');A.R(88,118,48,4,'#5a1410');
 [66,158].forEach(x=>{A.R(x,112,2,6,'#4a2a0a');A.E(x+1,123,5,6,'#dc2626');A.E(x+1,123,2,3,'#fde047')});
 [[148,126],[67,126]].forEach(([x,y])=>{A.B(x,y,9,32,'#b3261e');A.R(x+3,y+4,3,24,'#fbbf24')});
},
en:A=>{
 A.B(0,178,224,14,'#4b587a');A.B(8,170,208,10,'#5d6b8c');A.B(20,162,184,10,'#7482a3');
 [[6,52],[172,218]].forEach(([a,b])=>{A.B(a+4,120,b-a-8,44,'#d8c8a0');A.B(a+4,120,6,44,'#8a2b1c');A.B(b-10,120,6,44,'#8a2b1c');A.B(a+14,130,18,26,'#5a3a1c');for(let k=0;k<4;k++)A.R(a+17+k*4,132,2,22,'#e8d9b0');vroof(A,a+2,b-2,120,22,'#1f6f7a','#2e97a8','#0e3f4a')});
 A.B(76,98,10,66,'#8a2b1c');A.B(138,98,10,66,'#8a2b1c');A.B(70,100,84,9,'#5a1410');
 A.B(86,60,52,34,'#a6291d');
 A.E(112,76,11,11,'#d9a441');A.E(112,76,9,9,'#fff2c6');A.Y([[112,68],[114,74],[120,74],[115,78],[117,84],[112,80],[107,84],[109,78],[104,74],[110,74]],'#c0273f');
 A.B(90,68,7,12,'#fff2c6');A.B(127,68,7,12,'#fff2c6');
 vroof(A,56,168,110,22,'#1f6f7a','#2e97a8','#0e3f4a');
 vroof(A,72,152,60,26,'#1f6f7a','#2e97a8','#0e3f4a');
 A.R(110,16,4,18,'#d9a441');A.E(112,14,5,5,'#fde68a');
 A.B(92,122,40,44,'#2a170c');A.R(88,118,48,4,'#5a1410');
 [58,152].forEach((x,i)=>{A.R(x-1,128,14,2,'#5a3a1c');A.B(x,130,12,30,'#f4e4b8');A.R(x-1,158,14,2,'#5a3a1c');g5(A,'en',i*3,x+3,138,1,'#7a2018')});
 [[22,156],[176,156]].forEach(([x,y])=>{A.B(x,y,24,6,'#c0273f');A.B(x+2,y-6,20,6,'#2563eb');A.B(x+4,y-12,14,6,'#16a34a')});
 [70,152].forEach(x=>{A.R(x,112,2,6,'#4a2a0a');A.E(x+1,123,4,5,'#dc2626');A.E(x+1,123,2,3,'#fde047')});
},
it:A=>{
 A.B(0,178,224,14,'#111827');A.B(8,170,208,10,'#1e293b');
 A.B(0,106,224,64,'#33415a');for(let y=110;y<168;y+=8){A.R(0,y,224,1,'#26324a');for(let x=((y/8|0)&1)?0:10;x<224;x+=20)A.R(x,y,1,8,'#26324a')}
 for(let x=2;x<224;x+=18)A.B(x,96,12,12,'#3f4f6c');
 A.R(10,136,64,2,'#22d3ee');A.R(10,136,2,24,'#22d3ee');A.R(150,136,64,2,'#22d3ee');A.R(212,136,2,24,'#22d3ee');A.R(30,150,30,2,'#4ade80');A.R(164,150,30,2,'#a855f7');
 [[20,118],[182,118]].forEach(([x,y])=>{A.B(x,y,22,46,'#1f2a3d');for(let i=0;i<4;i++){A.R(x+3,y+5+i*10,16,5,'#0b1220');A.R(x+14,y+6+i*10,3,3,i%2?'#4ade80':'#22d3ee')}});
 A.B(70,64,84,44,'#263449');A.B(76,70,72,32,'#314361');
 A.E(112,86,14,14,'#94a3b8');A.E(112,86,10,10,'#334155');A.E(112,86,4,4,'#22d3ee');
 for(let i=0;i<8;i++){const a=i*Math.PI/4;A.R(Math.round(112+Math.cos(a)*14)-2,Math.round(86+Math.sin(a)*14)-2,4,4,'#94a3b8')}
 vroof(A,58,166,66,24,'#334155','#475569','#0f172a');A.R(60,64,104,2,'#22d3ee');
 A.R(110,12,4,26,'#94a3b8');A.E(112,12,10,5,'#cbd5e1');A.E(112,10,3,3,'#f87171');
 A.B(84,112,56,56,'#1e293b');A.B(92,122,40,44,'#0b1220');A.R(88,114,48,3,'#0b1220');for(let i=0;i<8;i++)A.R(90+i*6,115,4,1,i%2?'#4ade80':'#22d3ee');
 A.B(142,134,9,14,'#0f172a');A.R(144,137,5,4,'#4ade80');A.R(144,143,5,2,'#22d3ee');
 g5(A,'it',0,60,100,2,'#22d3ee');g5(A,'it',1,160,100,2,'#4ade80');
},

house:A=>{A.B(6,40,84,40,'#e9d5b0');A.Y([[0,44],[48,6],[96,44]],'#b4391f');A.B(10,40,76,4,'#8a2b17');A.B(38,52,20,28,'#6b3f1d');A.B(14,52,16,14,'#7dd3fc');A.B(66,52,16,14,'#7dd3fc');A.B(70,10,10,22,'#7a6f66')},
fountain:A=>{A.E(48,52,46,18,'#9aa5bd');A.E(48,50,38,13,'#3b82c4');A.B(42,20,12,32,'#aeb8c9');A.E(48,22,16,6,'#aeb8c9');A.E(48,21,12,4,'#60a5fa');A.E(48,12,5,7,'#aeb8c9')},
lamp:A=>{A.B(6,6,4,38,'#7c4a1d');A.B(6,4,15,3,'#7c4a1d');A.R(19,7,1,3,'#3b3f4a');A.B(15,10,8,11,'#6b7280');A.R(17,12,4,7,'#fde68a');A.R(16,10,6,1,'#3b3f4a');A.E(8,44,5,2,'#5a3a1c')},
bush:A=>{A.E(14,16,13,9,'#1f8a62');A.E(10,13,7,6,'#34a77a');A.E(20,12,6,5,'#40b88a');A.P(8,12,'#f9a8d4');A.P(18,9,'#f9a8d4');A.P(22,14,'#fde047')},
tree:A=>{A.B(20,42,9,16,'#6b3f1d');A.E(24,26,22,20,'#1f9d6b');A.E(14,22,11,10,'#34c08a');A.E(35,20,11,10,'#28ad78');A.E(24,13,11,9,'#5fdba4')},
tree3:A=>{A.B(20,42,9,16,'#6b3f1d');A.E(24,26,22,20,'#e07a2e');A.E(14,22,11,10,'#f59e3b');A.E(35,20,11,10,'#e8892f');A.E(24,13,11,9,'#fbbf4a')},
tree2:A=>{A.B(21,44,7,14,'#5b3a1d');A.Y([[24,2],[44,30],[4,30]],'#1a6f66');A.Y([[24,14],[46,42],[2,42]],'#1f8076');A.Y([[24,2],[30,12],[18,12]],'#3aa399')},
rock:A=>{A.E(16,16,15,11,'#8b95ab');A.E(10,13,6,5,'#aeb8c9')}};const OBJ={};
function build(){
 const bc=document.createElement('canvas');bc.width=WW;bc.height=WH;const g=bc.getContext('2d'),solid=new Uint8Array(CW*CH),ty=Array.from({length:CH},()=>new Uint8Array(CW)),rects=[],objs=[];
 const mark=(x0,y0,x1,y1,t)=>{for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)if(x>=0&&y>=0&&x<CW&&y<CH)ty[y][x]=t},
 path=(x0,y0,x1,y1)=>{for(let y=Math.min(y0,y1);y<=Math.max(y0,y1);y++)mark(x0,y,x0+1,y,1);for(let x=Math.min(x0,x1);x<=Math.max(x0,x1);x++)mark(x,y1,x,y1+1,1)};
 Object.keys(KEY).forEach(k=>{const d=KEY[k],cx=(d.gx+BW/2)/T|0,cy=(d.gy+BH)/T|0;path(cx-1,cy,21,18)});mark(16,15,27,24,2);mark(4,20,12,26,3);mark(7,22,9,24,0);mark(4,23,6,23,4);mark(10,23,12,23,4);
 const nz=(x,y)=>Math.sin(x*.021)+Math.sin(y*.026)+Math.sin((x+y)*.013)+Math.sin((x-y)*.017);
 for(let y=0;y<CH;y++)for(let x=0;x<CW;x++){const t=ty[y][x],px=x*T,py=y*T;for(let j=0;j<T;j+=2)for(let i=0;i<T;i+=2){const r=rnd(),n=nz(px+i,py+j);let c;
  if(t==0)c=n>1.3?'#2f8a62':n<-1.2?'#5cc08a':r<.07?'#2a7a58':r<.18?'#4fae7e':(i+j)%8==0?'#58b985':'#44a074';
  else if(t==1)c=r<.14?'#c79a62':r<.3?'#d6ac74':'#e3bd86';else if(t==2){const bx=(i>>4)+((j>>4)&1),oc=(bx+(j>>4))&1;c=r<.06?'#8fb89a':oc?'#c9bfdc':'#ddd3ea'}else if(t==4)c=((j>>3)&1)?'#b07a3c':'#8d5d2b';else c=r<.15?'#7fe0f2':r<.3?'#2a9ec6':'#38b2d6';
  g.fillStyle=c;g.fillRect(px+i,py+j,2,2)}
  if(t==2){g.fillStyle='#8f7fae';g.fillRect(px,py+15,T,1);g.fillRect(px,py+31,T,1);g.fillRect(px+(((y&1)?8:24)),py,1,16);g.fillRect(px+(((y&1)?24:8)),py+16,1,16)}
  if(t==1){[[-1,0,0,0,3,T],[1,0,T-3,0,3,T],[0,-1,0,0,T,3],[0,1,0,T-3,T,3]].forEach(([a,b,ox,oy,w,h])=>{const nt=(ty[y+b]||[])[x+a];if(nt==0||nt==3){g.fillStyle='#b0804a';g.fillRect(px+ox,py+oy,w,h)}})}
  if(t==3){solid[y*CW+x]=1;[[-1,0,0,0,4,T],[1,0,T-4,0,4,T],[0,-1,0,0,T,4],[0,1,0,T-4,T,4]].forEach(([a,b,ox,oy,w,h])=>{const nt=(ty[y+b]||[])[x+a];if(nt!=3){g.fillStyle='#f3e6b8';g.fillRect(px+ox,py+oy,w,h)}})}
  if(t==0){const r=rnd();if(r<.09){const c=['#fde047','#f472b6','#ffffff','#a78bfa','#fb923c'][Ri(0,4)],q=[px+Ri(4,26),py+Ri(4,26)];for(let k=0;k<Ri(1,3);k++){const fx=q[0]+Ri(-6,6),fy=q[1]+Ri(-6,6);g.fillStyle=c;g.fillRect(fx,fy,2,2);g.fillRect(fx-2,fy,2,2);g.fillRect(fx,fy-2,2,2);g.fillRect(fx+2,fy,2,2);g.fillRect(fx,fy+2,2,2);g.fillStyle='#f59e0b';g.fillRect(fx,fy,2,2)}}
   else if(r<.3){g.fillStyle='#277a55';const bx=px+Ri(2,28),by=py+Ri(6,28);g.fillRect(bx,by,2,5);g.fillRect(bx-2,by+1,2,4);g.fillRect(bx+2,by+1,2,4)}}}
 OBJ.tree=paint(bld.tree,0,48,60);OBJ.tree2=paint(bld.tree2,0,48,60);OBJ.tree3=paint(bld.tree3,0,48,60);OBJ.rock=paint(bld.rock,0,32,28);OBJ.bush=paint(bld.bush,0,28,28);OBJ.lamp=paint(bld.lamp,0,26,48);OBJ.house=paint(bld.house,0,96,84);OBJ.fountain=paint(bld.fountain,0,96,64);OBJ.hero=spr('hero',0);OBJ.owl=spr('owl',0);
 Object.keys(KEY).forEach(k=>{const d=KEY[k],im=paint(bld[k],0,BW,BH);objs.push({img:im,x:d.gx,y:d.gy,w:BW,h:BH,sy:d.gy+BH-26,b:1});rects.push([d.gx+8,d.gy+10,d.gx+BW-8,d.gy+BH-26]);d.door=[d.gx+BW/2-22,d.gy+BH-34,d.gx+BW/2+22,d.gy+BH];d.cx=d.gx+BW/2});
 [[940,800],[1170,790]].forEach(([x,y])=>{objs.push({img:OBJ.house,x,y,w:96,h:84,sy:y+80});rects.push([x+6,y+40,x+90,y+80]);d2.push([x+66,y+14])});
 objs.push({img:OBJ.fountain,x:656,y:588,w:96,h:64,sy:650});rects.push([666,620,742,652]);rects.push([684,586,724,622]);
 {const used=[];for(let y=1;y<CH-1;y++)for(let x=1;x<CW-1;x++){if(ty[y][x]!=1||(x*3+y*5)%7!=0)continue;const nb=[[-1,0],[1,0],[0,-1],[0,1]].map(([a,b])=>[x+a,y+b]).find(([a,b])=>ty[b][a]==0);if(!nb)continue;const px=nb[0]*T+16,py=nb[1]*T+30;if(Object.values(KEY).some(d=>px>d.gx-30&&px<d.gx+BW+30&&py>d.gy-20&&py<d.gy+BH+30)||used.some(u=>Math.hypot(u[0]-px,u[1]-py)<150)||(px>500&&px<910&&py>470&&py<810))continue;used.push([px,py]);objs.push({img:OBJ.lamp,x:px-8,y:py-46,w:26,h:48,sy:py});rects.push([px-5,py-8,px+5,py]);lampPts.push([px+10,py-30])}}
 const blocked=(px,py)=>Object.values(KEY).some(d=>px>d.gx-60&&px<d.gx+BW+60&&py>d.gy-40&&py<d.gy+BH+70)||(px>840&&px<1240&&py>750&&py<930)||(px>520&&px<890&&py>480&&py<800)||(px>930&&px<1260&&py>770&&py<960)||(window.POIS&&POIS.some(o=>Math.hypot(px-o.x,py-o.y)<70));
 for(let i=0;i<260;i++){const x=Ri(0,CW-1),y=Ri(0,CH-1),px=x*T+Ri(-6,6),py=y*T+Ri(0,10);if(ty[y][x]||blocked(px,py)||(rnd()<.78))continue;const r=rnd();const kind=r<.3?'tree':r<.5?'tree2':r<.68?'tree3':r<.85?'bush':'rock';
  const im=OBJ[kind];objs.push({img:im,x:px-(kind.startsWith('tree')?8:0),y:py-(kind.startsWith('tree')?30:10),w:im.width,h:im.height,sy:py+(kind.startsWith('tree')?30:12)});if(kind.startsWith('tree'))rects.push([px+6,py+16,px+18,py+30])}
 for(let i=0;i<CW*2;i++){const px=(i>>1)*T+(i&1)*16;[[px,Ri(-6,6)],[px,(CH-1)*T+Ri(0,8)]].forEach(([x,y])=>{const im=OBJ[['tree','tree2','tree','tree3'][i%4]];objs.push({img:im,x:x-8,y:y-30,w:48,h:60,sy:y+30});rects.push([x+6,y+16,x+18,y+30])})}
 for(let i=0;i<CH;i++){const y=i*T+Ri(0,10);[0,(CW-1)*T+10].forEach(x=>{objs.push({img:OBJ.tree,x:x-8,y:y-30,w:48,h:60,sy:y+30});rects.push([x+6,y+16,x+18,y+30])})}
 const mini=document.createElement('canvas');mini.width=132;mini.height=96;{const mc=mini.getContext('2d');mc.fillStyle='#2f8a62';mc.fillRect(0,0,132,96);ty.forEach((r,y)=>r.forEach((t,x)=>{if(t){mc.fillStyle=t==1?'#c9a064':t==2?'#a9b3c9':'#3a82c4';mc.fillRect(x*3,y*3,3,3)}}));Object.keys(KEY).forEach(k=>{mc.fillStyle='rgb('+KEY[k].c+')';mc.fillRect(KEY[k].gx/T*3,KEY[k].gy/T*3,BW/T*3,BH/T*3)})}
 return{bc,solid,ty,rects,objs,mini}}
const TS=[[0,255,200,120,.10,0],[.25,0,0,0,0,0],[.5,255,150,70,.18,.2],[.7,70,40,140,.30,.7],[.85,10,20,70,.40,1],[1,255,200,120,.10,0]];function tintAt(p){for(let i=1;i<TS.length;i++)if(p<=TS[i][0]){const a=TS[i-1],b=TS[i],u=(p-a[0])/(b[0]-a[0]);return[1,2,3].map(j=>Math.round(a[j]+(b[j]-a[j])*u)).concat([a[4]+(b[4]-a[4])*u,a[5]+(b[5]-a[5])*u])}return[0,0,0,0,0]}
const d2=[],lampPts=[];let VK='',VIGW=null;const GLOW=(()=>{const e=document.createElement('canvas');e.width=e.height=92;const q=e.getContext('2d'),r=q.createRadialGradient(46,46,2,46,46,46);r.addColorStop(0,'rgba(255,214,120,.35)');r.addColorStop(1,'rgba(255,214,120,0)');q.fillStyle=r;q.fillRect(0,0,92,92);return e})();let W=null,ow=null,raf=0,lastT=0,K={},st=null;
const hit=(x,y)=>{if(x<0||y<0||x>=WW||y>=WH)return 1;if(W.solid[(y/T|0)*CW+(x/T|0)])return 1;return W.rects.some(r=>x>=r[0]&&x<=r[2]&&y>=r[1]&&y<=r[3])},FOOT=(x,y)=>[[x-9,y],[x+9,y],[x-9,y-8],[x+9,y-8]];
function fxGate(g,k,d,t){const x0=d.gx,y0=d.gy;g.save();g.textAlign='center';
 if(k=='math'){g.font='bold 16px "Segoe UI",sans-serif';['0','π','+','×','=','7'].forEach((s,i)=>{const a=t*1.1+i*1.05,x=x0+BW/2+Math.cos(a)*108,y=y0+70+Math.sin(a)*22-Math.abs(Math.sin(a*2))*6;g.fillStyle='rgba(253,224,71,.9)';g.fillText(s,x,y)})}
 else if(k=='en'){g.font='bold 14px serif';for(let i=0;i<9;i++){const f=(t*.25+i*.37)%1,x=x0+20+i*22+Math.sin(t+i)*8,y=y0+BH-30-f*(BH-20);g.fillStyle=`rgba(255,255,255,${1-f})`;g.fillText('AaBbEeSsTt'[i],x,y)}}
 else{g.beginPath();g.rect(x0-10,y0-10,BW+20,BH-30);g.clip();g.font='bold 12px "Segoe UI",sans-serif';for(let c=0;c<12;c++)for(let r=0;r<5;r++){const f=((t*.6+c*.31+r*.22)%1),x=x0+c*20+4,y=y0-10+f*(BH-10)+r*0;g.fillStyle=`rgba(${r%2?'74,222,128':'34,211,238'},${(1-f)*.55})`;g.fillText(((c*7+r+(t*3|0))%2)+'',x,y+r*14)}}g.restore()}
function owStart(){leave();view='ow';G=null;if(!W){W=build();window.owExtras&&owExtras(W)}
 if(!ow){ow=document.createElement('div');ow.id='ow';ow.innerHTML=`<canvas id="owc"></canvas><div id="owh"></div><div id="owm"></div><div id="owt"></div><div id="owb"><button id="owstory">📖 Truyện</button><button id="owmenu">☰ Menu</button></div><div id="owmapbox"><div class="mt">BẢN ĐỒ</div><canvas id="owmap" width="176" height="128"></canvas></div><div id="owpad"><div class="dp"><button data-d="u">▲</button><button data-d="l">◀</button><button data-d="d">▼</button><button data-d="r">▶</button></div><button id="owe">E</button></div>`;document.getElementById('stage').appendChild(ow);
  const s=document.createElement('style');s.textContent=`#ow{position:absolute;inset:0;z-index:40;background:#10241a;font-family:'Pixelify Sans','Courier New',monospace;color:#fff;touch-action:none;user-select:none}#owc{position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;cursor:pointer}
#owh{position:absolute;left:8px;top:8px}#owm{position:absolute;left:50%;bottom:150px;transform:translateX(-50%);background:#fff7e0;color:#3b2410;padding:10px 16px;font-weight:700;font-size:15px;max-width:86%;text-align:center;box-shadow:0 -4px 0 #7c4a1d,0 4px 0 #7c4a1d,-4px 0 0 #7c4a1d,4px 0 0 #7c4a1d;display:none}
#owt{position:absolute;left:50%;bottom:22%;transform:translateX(-50%);text-align:center;font-weight:700;text-shadow:0 3px 0 #000;font-size:20px;pointer-events:none}
#owb{position:absolute;right:8px;top:8px;display:flex;gap:6px}#owb button{padding:8px 12px;background:#7c3aed;color:#fff;border:0;font:inherit;font-weight:700;min-height:40px}#owpad{position:absolute;left:0;right:0;bottom:12px;display:none;justify-content:space-between;align-items:flex-end;padding:0 16px;pointer-events:none}#owpad .dp{display:grid;grid-template:repeat(3,52px)/repeat(3,52px);pointer-events:auto}
#owpad .dp button{background:#1a1226cc;color:#fff;border:2px solid #a855f7;font-size:20px;border-radius:0}.dp [data-d=u]{grid-area:1/2}.dp [data-d=l]{grid-area:2/1}.dp [data-d=r]{grid-area:2/3}.dp [data-d=d]{grid-area:3/2}#owe{pointer-events:auto;width:64px;height:64px;background:#fbbf24;color:#241a3d;border:0;font:700 22px inherit;border-radius:0;margin-right:210px}@media(pointer:coarse){#owpad{display:flex}}`;document.head.appendChild(s);
  const c=ow.querySelector('#owc');
  const MC={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d'};addEventListener('keydown',e=>{if(view!='ow'||window.__stl)return;const m=MC[e.code];if(m){K[m]=1;e.preventDefault()}else if(e.code=='KeyE'||e.code=='Space'){interact();e.preventDefault()}});addEventListener('keyup',e=>{const m=MC[e.code];if(m)delete K[m]});addEventListener('blur',()=>{K={}});document.addEventListener('visibilitychange',()=>{K={}});
  ow.querySelectorAll('[data-d]').forEach(b=>{const m=b.dataset.d;b.onpointerdown=e=>{K[m]=1;e.preventDefault()};b.onpointerup=b.onpointerleave=()=>delete K[m]});
  ow.querySelector('#owe').onclick=interact;ow.querySelector('#owmenu').onclick=()=>showPause();
  c.onclick=e=>{const z=st.z,wx=(e.offsetX-c.clientWidth/2)/z+st.cx,wy=(e.offsetY-c.clientHeight/2)/z+st.cy;
   if(window.owPoiClick&&owPoiClick(wx,wy,st,say))return;const n=st.npcs.find(n=>Math.abs(wx-n.x)<30&&wy>n.y-52&&wy<n.y+4);if(n){say(n.say(),n);return}if(Math.abs(wx-st.owl.x)<20&&Math.abs(wy-st.owl.y)<20){st.owl.j=1;say('Hú hú! Cú Bút chào bạn!');return}
   if(Math.abs(wx-st.p.x)<26&&wy>st.p.y-52&&wy<st.p.y+4){st.p.jump=1;say(['Sẵn sàng!','Vào hầm ngục nào!','Kiến thức là sức mạnh!'][Ri(0,2)])}}}
 ow.style.display='block';const sp=window.__lg&&KEY[window.__lg];
 st={p:{x:sp?sp.cx:704,y:sp?sp.gy+BH+40:700,face:1,t:0,jump:0},owl:{x:690,y:720,j:0},z:2,cx:0,cy:0,t:0,go:0,
  npcs:Object.keys(KEY).map(k=>{const d=KEY[k],g=Math.ceil(D.p[k].cur/10);return{k,x:d.cx-108,y:d.gy+BH+70,nm:NSP[k][0],img:spr(NSP[k][0],0),say:()=>npcLine(k,g),t:Math.random()*6}})};
 cancelAnimationFrame(raf);lastT=performance.now();raf=requestAnimationFrame(owLoop);document.body.dataset.w='menu';moDauTruyen()}
function owStop(){cancelAnimationFrame(raf);if(ow)ow.style.display='none'}
const _lv=leave;leave=function(){if(view=='ow'&&!window.__keepOw)owStop();return _lv.apply(this,arguments)};
function say(t,n){const m=ow.querySelector('#owm');m.textContent=(n?{math:'Giáo sư Thông',en:'Bà Nghĩa',it:'Người Máy Bảy'}[n.k]+': ':'')+t;m.style.display='block';clearTimeout(say.h);say.h=setTimeout(()=>m.style.display='none',3800)}
function interact(){if(view!='ow'||st.go)return;if(window.owPoiInteract&&owPoiInteract(st,say))return;const n=st.npcs.find(n=>Math.hypot(n.x-st.p.x,n.y-st.p.y)<70);if(n)say(n.say(),n);else say('Hãy đi vào cổng của hầm ngục để bắt đầu thử thách!')}
window.__lite=(()=>{try{return localStorage.getItem('pltgtt_lite')=='1'}catch(e){return false}})();
function owLoop(now){try{owFrame(now)}catch(err){console.error(err);if(view=='ow')raf=requestAnimationFrame(owLoop)}}
function owFrame(now){if(view!='ow')return;if(window.__lite&&now-lastT<29){raf=requestAnimationFrame(owLoop);return}const dt=Math.min(.05,(now-lastT)/1000);lastT=now;const p=st.p;st.t+=dt;st.fq=(st.fq||.016)*.95+dt*.05;const LQ=st.fq>.034||!!window.__lite||!!cfg.noFx;
 let dx=(K.r?1:0)-(K.l?1:0),dy=(K.d?1:0)-(K.u?1:0);const mv0=!st.go&&!window.__stl&&(dx||dy);let mv=mv0;if(st.go)mv=CS.update(st,dt,p)
 if(mv0){const l=Math.hypot(dx,dy),sp=130*dt;dx=dx/l*sp;dy=dy/l*sp;if(dx)p.face=dx>0?1:-1;p.dir=Math.abs(dx)>=Math.abs(dy)?'s':(dy>0?'f':'b');if(!FOOT(p.x+dx,p.y).some(a=>hit(...a)))p.x+=dx;if(!FOOT(p.x,p.y+dy).some(a=>hit(...a)))p.y+=dy;p.t+=dt}
 if(p.jump){p.jump+=dt*3;if(p.jump>1)p.jump=0}if(st.owl.j){st.owl.j+=dt*3;if(st.owl.j>1)st.owl.j=0}
 const o=st.owl;o.x+=(p.x-p.face*34-o.x)*Math.min(1,dt*3);o.y+=(p.y-6-o.y)*Math.min(1,dt*3);
 const c=ow.querySelector('#owc');const stg=document.getElementById('stage');const Zd=Math.max(1.5,Math.min(2.5,Math.round(stg.clientHeight/280*4)/4))*(window.__lite?1.25:1),cw=Math.ceil(stg.clientWidth/Zd),chh=Math.ceil(stg.clientHeight/Zd);if(c.width!=cw||c.height!=chh){c.width=cw;c.height=chh}
 const g=c.getContext('2d');g.imageSmoothingEnabled=false;st.z=Zd;const z=1;st.cx=Math.max(c.width/2/z,Math.min(WW-c.width/2/z,p.x));st.cy=Math.max(c.height/2/z,Math.min(WH-c.height/2/z,p.y-20));if(st.go&&st.cs){const q=CS.cam(st,p);st.cx=Math.max(c.width/2/z,Math.min(WW-c.width/2/z,q[0]));st.cy=Math.max(c.height/2/z,Math.min(WH-c.height/2/z,q[1]))}
 g.fillStyle='#12332b';g.fillRect(0,0,c.width,c.height);g.save();g.translate(Math.round(c.width/2-st.cx*z),Math.round(c.height/2-st.cy*z));g.scale(z,z);{const x0=Math.max(0,Math.floor(st.cx-c.width/2/z)-2),y0=Math.max(0,Math.floor(st.cy-c.height/2/z)-2),w0=Math.min(WW-x0,Math.ceil(c.width/z)+4),h0=Math.min(WH-y0,Math.ceil(c.height/z)+4);g.drawImage(W.bc,x0,y0,w0,h0,x0,y0,w0,h0)}g.fillStyle='rgba(20,40,60,.08)';if(!LQ)for(let i=0;i<4;i++){g.beginPath();g.ellipse(((st.t*14+i*400)%(WW+400))-200,200+i*230,130,52,0,0,6.3);g.fill()}
 for(let i=0;i<10;i++){const wx=200+(i%5)*44+Math.sin(st.t*2+i)*4,wy=668+(i>>1)*28;g.fillStyle='rgba(255,255,255,.22)';g.fillRect(wx,wy,14,2)}
 const vx0=st.cx-c.width/2/z-120,vx1=st.cx+c.width/2/z+120,vy0=st.cy-c.height/2/z-120,vy1=st.cy+c.height/2/z+240,L=[...W.objs.filter(o=>o.x<vx1&&o.x+o.w>vx0&&o.y<vy1&&o.y+o.h>vy0),...st.npcs.map(n=>({n,sy:n.y})),...(window.owDyn?owDyn(st,dt,vx0,vx1,vy0,vy1):[]),...(st.go?CS.ents(st):[]),{p:1,sy:st.go?1e6:p.y},{o:1,sy:st.go?1e6:o.y}].sort((a,b)=>a.sy-b.sy);
 for(const e of L){if(e.dr){e.dr(g)}else if(e.img){g.drawImage(e.img,e.x,e.y)}else if(e.n){const n=e.n,bob=Math.sin(st.t*3+n.t)*1.5,near=Math.hypot(n.x-p.x,n.y-p.y)<70;g.fillStyle='rgba(0,0,0,.3)';g.fillRect(n.x-14,n.y-3,28,5);g.drawImage(sprA(n.nm,0,st.t*.8+n.t),n.x-26,n.y-52+bob,52,52);if(near){g.fillStyle='#fff';g.font='bold 10px "Segoe UI",sans-serif';g.textAlign='center';g.fillText('E: nói chuyện',n.x,n.y-56)}}
  else if(e.p){const j=p.jump?Math.sin(p.jump*Math.PI)*26:0,b=mv?Math.abs(Math.sin(p.t*12))*3:0;g.fillStyle='rgba(0,0,0,.35)';g.fillRect(p.x-12,p.y-3,24,5);const ent=st.go?CS.pEnt(st):0;g.save();g.globalAlpha=1-ent;g.translate(p.x,p.y-j-b);g.scale((p.dir=='s'?p.face:1)*(1-.25*ent),1-.25*ent);g.drawImage(heroFrame(p.dir||'f',mv?'walk':'idle',mv?(p.t*10|0)%4:(st.t*2.5|0)%4),-26,-54,52,52);g.restore()}
  else if(e.o){const j=o.j?Math.sin(o.j*Math.PI)*18:0,bob=Math.sin(st.t*5)*2;{const eo=st.go?CS.pEnt(st,.12):0;g.globalAlpha=1-eo;g.drawImage(owlFrame(st.t*8|0),o.x-14,o.y-30-j+bob,28,28);g.globalAlpha=1}}}
 window.owFx&&owFx(g,st,LQ);g.fillStyle='rgba(125,211,252,.85)';for(let i=0;i<14;i++){const a=i/14*6.28+st.t*.5,f=(st.t*1.3+i*.17)%1;g.fillRect(704+Math.cos(a)*5*f*3,596+8-Math.sin(f*3.14)*26+f*10,2,2)}
 g.fillStyle='rgba(200,200,200,.35)';d2.forEach(([sx,sy],i)=>{for(let k=0;k<4;k++){const f=(st.t*.4+k*.25+i*.3)%1;g.fillRect(sx+Math.sin(f*6+k)*4,sy-f*40,4-f*2,4-f*2)}});
 let near=null;for(const k in KEY){const d=KEY[k],dd=d.door,cx=(dd[0]+dd[2])/2,pulse=.5+.5*Math.sin(st.t*4);g.fillStyle=`rgba(${d.c},${.12+.22*pulse})`;g.fillRect(dd[0],dd[1],44,dd[3]-dd[1]);if(!LQ)fxGate(g,k,d,st.t);
  g.textAlign='center';g.font='bold 14px "Segoe UI",sans-serif';g.fillStyle='#000';g.fillText(d.n,cx+1,d.gy-3);g.fillStyle='#fff';g.fillText(d.n,cx,d.gy-4);
  if(p.x>dd[0]&&p.x<dd[2]&&p.y>dd[1]+16&&p.y<dd[3]+4&&!st.go&&!window.__stl){CS.begin(st,k,d)}if(Math.hypot(p.x-cx,p.y-dd[3])<140)near=k}if(st.go)near=null;
 if(!LQ)for(let i=0;i<22;i++){const fx=(i*97+st.t*8)%WW,fy=(i*53+Math.sin(st.t+i)*20+300)%WH;g.fillStyle=`rgba(253,224,71,${.35+.4*Math.sin(st.t*3+i)})`;g.fillRect(fx,fy,2,2)}
 const TN=tintAt(((st.t+20)/90)%1);if(!LQ){g.globalCompositeOperation='lighter';g.globalAlpha=.3+.7*TN[4];lampPts.forEach(([lx,ly])=>g.drawImage(GLOW,lx-46,ly-46,92,92));g.globalAlpha=1;g.globalCompositeOperation='source-over'}g.restore();g.fillStyle='rgba('+TN[0]+','+TN[1]+','+TN[2]+','+TN[3]+')';g.fillRect(0,0,c.width,c.height);
 if(!LQ){const vk=c.width+'x'+c.height;if(VK!=vk){VK=vk;VIGW=document.createElement('canvas');VIGW.width=c.width;VIGW.height=c.height;const q=VIGW.getContext('2d'),vg=q.createRadialGradient(c.width/2,c.height/2,Math.min(c.width,c.height)*.35,c.width/2,c.height/2,Math.max(c.width,c.height)*.75);vg.addColorStop(0,'rgba(20,10,40,0)');vg.addColorStop(1,'rgba(20,10,40,.45)');q.fillStyle=vg;q.fillRect(0,0,c.width,c.height)}g.drawImage(VIGW,0,0)}
 if(st.go&&st.cs){if(CS.overlay(g,c,st,LQ))return}
 if(now-(st.__mm||-1e9)>=120){st.__mm=now;const mc=ow.querySelector('#owmap').getContext('2d');window.owMini?owMini(mc,W,st):mc.drawImage(W.mini,0,0)}
 const hd=ow.querySelector('#owh'),sb=near&&SUB.find(s=>s.k==near);const h1=`<div class="rpgh"><b>🛡️ ${D.name||'Khôi'}</b><span class="bar"><i style="width:${Math.min(100,D.xp%100)}%"></i></span><small>🪙 ${D.coins} · ⭐ ${D.xp} · ${title()}</small></div>`,h2=near?`${sb.e} ${KEY[near].n}<br><small>${KEY[near].sub}${near=='it'&&D.p.it.cur>=90?' (có Python)':''} · Tầng ${D.p[near].cur}/120 — bước vào cổng để vào hầm ngục</small>`:'';if(st.__h1!==h1){st.__h1=h1;hd.innerHTML=h1}if(st.__h2!==h2){st.__h2=h2;ow.querySelector('#owt').innerHTML=h2}
 raf=requestAnimationFrame(owLoop)}
window.__st=()=>st;window.__owW=()=>W;window.owStop=owStop;window.owStart=owStart;const _mn=menu;menu=function(){if(window.__owSkip){window.__owSkip=0;const r=_mn.apply(this,arguments);document.querySelectorAll('.wc button').forEach(b=>{b.textContent='🗺️ Đi tới cổng ngoài trời';b.onclick=()=>owStart()});return r}owStart()};
})();
