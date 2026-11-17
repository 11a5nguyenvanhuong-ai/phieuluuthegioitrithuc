/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Sprite 64x64 vẽ bằng code, phòng nhân vật. */
/* ===== PHIÊU LƯU THẾ GIỚI TRI THỨC PIXEL 64×64: mọi sprite vẽ từng pixel bằng bút có đổ bóng 5 tông, dither Bayer, viền trong + viền ngoài ===== */
(()=>{
const N=64,BY=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]],hx=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),
mx=(a,b,t)=>a.map((v,i)=>Math.round(v+(b[i]-v)*t)),RP={},
rp=h=>RP[h]||(RP[h]=(c=>[mx(c,[14,8,36],.66),mx(c,[14,8,36],.36),c,mx(c,[255,250,235],.3),mx(c,[255,250,235],.62)])(hx(h)));
function paint(fn,sw,W=N,H=N){
 const g=new Array(W*H).fill(null),set=(x,y,c)=>{x=Math.floor(x);y=Math.floor(y);if(x>=0&&y>=0&&x<W&&y<H)g[y*W+x]=c};
 const A={P:(x,y,h)=>set(x,y,hx(h)),
  R:(x,y,w,h,c)=>{for(let j=0;j<h;j++)for(let i=0;i<w;i++)A.P(x+i,y+j,c)},
  S(ins,x0,y0,x1,y1,h){const r=rp(h),cx=(x0+x1)/2,cy=(y0+y1)/2,hw=(x1-x0)/2||1,hh=(y1-y0)/2||1;
   for(let y=Math.floor(y0);y<=y1;y++)for(let x=Math.floor(x0);x<=x1;x++){if(!ins(x+.5,y+.5))continue;
    const ed=!ins(x-.5,y+.5)||!ins(x+1.5,y+.5)||!ins(x+.5,y-.5)||!ins(x+.5,y+1.5),nx=(x+.5-cx)/hw,ny=(y+.5-cy)/hh,
    l=.5-nx*.45-ny*.6+(BY[y&3][x&3]/16-.5)*.3;set(x,y,ed?r[nx+ny>-.3?0:1]:r[l<.08?1:l<.85?2:l<1.1?3:4])}},
  E:(cx,cy,rx,ry,h)=>A.S((x,y)=>((x-cx)/rx)**2+((y-cy)/ry)**2<=1,cx-rx,cy-ry,cx+rx,cy+ry,h),
  B:(x,y,w,h,c)=>A.S((px,py)=>px>=x&&px<x+w&&py>=y&&py<y+h&&!((px<x+1||px>=x+w-1)&&(py<y+1||py>=y+h-1)),x,y,x+w-1,y+h-1,c),
  Y(p,h){const xs=p.map(a=>a[0]),ys=p.map(a=>a[1]);A.S((x,y)=>{let o=0;for(let i=0,j=p.length-1;i<p.length;j=i++)if((p[i][1]>y)!=(p[j][1]>y)&&x<(p[j][0]-p[i][0])*(y-p[i][1])/(p[j][1]-p[i][1])+p[i][0])o=!o;return o},Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys),h)},
  L(x0,y0,x1,y1,h){const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))||1;for(let i=0;i<=n;i++)A.P(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,h)}};
 fn(A,(k,d)=>(sw&&sw[k])||d);
 const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),d=x.createImageData(W,H),
 get=(i,j)=>i<0||j<0||i>=W||j>=H?null:g[j*W+i];
 for(let y=0;y<H;y++)for(let i=0;i<W;i++){const k=y*W+i;let col=g[k];
  if(!col){const nb=[[1,0],[-1,0],[0,1],[0,-1]].map(([a,b])=>get(i+a,y+b)).find(v=>v);if(nb)col=mx(nb,[8,4,20],.72)}
  if(col)d.data.set([...col,255],k*4)}
 x.putImageData(d,0,0);return c}
const skin='#f5c9a0',eye=(A,x,y,w,h)=>{A.R(x,y,w,h,'#1a1226');A.P(x,y,'#ffffff')},
GEN={
hero:(A,c)=>{const hair='#7c3a1a';A.Y([[19,34],[45,34],[52,58],[12,58]],'#b91c3c');A.B(24,49,7,9,'#3a3f7a');A.B(33,49,7,9,'#3a3f7a');A.B(21,56,11,5,'#5b3a1d');A.B(32,56,11,5,'#5b3a1d');
 A.B(22,35,20,16,c('b','#3b82f6'));A.R(22,45,20,3,'#7c4a1d');A.R(30,45,4,3,'#fbbf24');A.R(31,38,2,1,'#fde68a');A.R(30,39,4,1,'#fde68a');A.R(31,40,2,1,'#fde68a');
 A.B(16,36,7,12,c('b','#3b82f6'));A.B(41,36,7,12,c('b','#3b82f6'));A.E(22,37,5,3.5,c('g','#cbd5e1'));A.E(42,37,5,3.5,c('g','#cbd5e1'));A.E(18.5,49,3.5,3,skin);
 A.R(49,17,3,28,'#e5e9f2');A.R(49,17,1,28,'#ffffff');A.R(51,19,1,26,'#9aa5bd');A.Y([[49,17],[52,17],[50.5,13]],'#ffffff');A.B(46,44,9,3,'#fbbf24');A.B(49,47,3,5,'#7c4a1d');A.E(50.5,49,3.5,3,skin);
 A.E(12,46,7,8,'#9f1239');A.E(12,46,3,3,'#fbbf24');A.R(11,41,2,10,'#fbbf24');
 A.E(32,25,12.5,11,skin);A.E(19.5,26,2.5,3,skin);A.E(44.5,26,2.5,3,skin);
 A.E(32,16,14,9,hair);A.Y([[18,20],[17,8],[26,14]],hair);A.Y([[24,14],[28,1],[35,13]],hair);A.Y([[33,13],[43,2],[46,15]],hair);A.Y([[43,15],[50,9],[47,24]],hair);
 A.Y([[20,17],[32,12],[44,17],[45,23],[39,18],[33,22],[27,18],[19,24]],hair);A.R(19,18,26,2,'#e11d48');A.R(31,17,2,1,'#fbbf24');
 A.E(26,27,3.6,4.6,'#ffffff');A.E(38,27,3.6,4.6,'#ffffff');A.E(26,28,2.6,3.6,'#2563eb');A.E(38,28,2.6,3.6,'#2563eb');A.R(25,27,2,3,'#0b1030');A.R(37,27,2,3,'#0b1030');A.P(25,26,'#ffffff');A.P(37,26,'#ffffff');A.P(27,29,'#93c5fd');A.P(39,29,'#93c5fd');
 A.R(22,31,3,1,'#f9a8a8');A.R(40,31,3,1,'#f9a8a8');A.R(30,33,4,1,'#9f1239');A.P(29,32,'#9f1239');A.P(34,32,'#9f1239')},
tomo:A=>{A.E(32,43,20,15,'#2f855a');A.E(32,40,6,5,'#48bb78');A.E(21,44,4,4,'#48bb78');A.E(43,44,4,4,'#48bb78');A.E(32,50,5,3,'#48bb78');
 A.B(14,50,9,9,'#8fbf5a');A.B(41,50,9,9,'#8fbf5a');A.E(32,54,12,5,'#e7d7a0');A.E(32,26,10,11,'#8fcf6a');
 A.E(27,27,4.5,4,'#7c4a1d');A.E(37,27,4.5,4,'#7c4a1d');A.E(27,27,3,2.5,'#ffffff');A.E(37,27,3,2.5,'#ffffff');A.R(31,27,2,1,'#7c4a1d');A.R(27,26,2,3,'#1a1226');A.R(37,26,2,3,'#1a1226');
 A.R(29,32,6,1,'#14532d');A.P(28,31,'#14532d');A.P(35,31,'#14532d');A.B(20,12,24,3,'#1f2937');A.Y([[32,5],[46,12],[32,17],[18,12]],'#111827');A.R(43,13,1,8,'#fbbf24');A.R(42,20,3,2,'#fbbf24');
 A.B(44,38,11,13,'#2563eb');A.R(46,40,7,1,'#ffffff');A.R(46,43,7,1,'#ffffff');A.R(46,46,5,1,'#ffffff');A.E(44,50,3,3,'#8fcf6a')},
lexa:A=>{A.Y([[24,28],[40,28],[49,58],[15,58]],'#7c3aed');A.R(22,41,20,3,'#fbbf24');A.Y([[27,28],[37,28],[32,37]],'#f5f3ff');
 A.E(32,28,14,17,'#4c1d95');A.E(32,25,9.5,10,skin);A.Y([[22,18],[42,18],[42,24],[37,20],[31,24],[27,20],[22,28]],'#5b21b6');
 A.E(32,13,16,3,'#5b21b6');A.Y([[32,0],[43,13],[21,13]],'#6d28d9');A.R(24,10,16,2,'#fbbf24');A.P(32,3,'#fde68a');
 A.E(27,26,3.5,3,'#bfdbfe');A.E(37,26,3.5,3,'#bfdbfe');A.R(26,26,2,2,'#1a1226');A.R(36,26,2,2,'#1a1226');A.R(30,26,4,1,'#6d28d9');A.R(30,31,4,1,'#be185d');
 A.B(21,40,22,13,'#b91c1c');A.R(23,42,18,1,'#fde68a');A.R(22,52,20,1,'#fff7e0');A.E(21,47,3,3,skin);A.E(43,47,3,3,skin);
 [[9,22],[54,18],[8,44],[56,40]].forEach(([x,y])=>{A.P(x,y,'#fde68a');A.P(x-1,y,'#fde68a');A.P(x+1,y,'#fde68a');A.P(x,y-1,'#fde68a');A.P(x,y+1,'#fde68a')})},
bit7:(A,c)=>{const a=c('c','#22d3ee');A.R(31,3,2,9,'#6b768c');A.E(32,4,3,3,'#f87171');A.B(16,10,32,22,'#aeb8c9');A.B(20,14,24,13,'#0f172a');
 A.R(24,17,5,5,a);A.R(35,17,5,5,a);A.P(24,17,'#ffffff');A.P(35,17,'#ffffff');A.R(28,24,8,1,a);A.R(12,16,4,10,'#6b768c');A.R(48,16,4,10,'#6b768c');
 A.B(18,34,28,17,'#8b95ab');A.B(23,38,18,10,'#1e293b');A.R(25,40,3,3,'#4ade80');A.R(30,40,3,3,'#fbbf24');A.R(35,40,3,3,'#f87171');A.R(25,45,14,2,a);
 A.B(8,35,8,14,'#6b768c');A.B(48,35,8,14,'#6b768c');A.R(8,49,3,5,'#cbd5e1');A.R(13,49,3,5,'#cbd5e1');A.R(48,49,3,5,'#cbd5e1');A.R(53,49,3,5,'#cbd5e1');
 A.B(14,52,36,8,'#334155');A.E(21,56,4,3.5,'#94a3b8');A.E(32,56,4,3.5,'#94a3b8');A.E(43,56,4,3.5,'#94a3b8')},
owl:A=>{A.Y([[15,12],[26,24],[13,26]],'#6b21a8');A.Y([[49,12],[38,24],[51,26]],'#6b21a8');A.E(32,40,19,20,'#7e3fc4');A.E(13,42,5,14,'#5b21b6');A.E(51,42,5,14,'#5b21b6');
 A.E(32,28,17,14,'#9a5de0');A.E(32,45,11,12,'#e9d5ff');for(let y=38;y<56;y+=4)for(let x=24+(y%8?0:2);x<40;x+=4)A.P(x,y,'#c4b5fd');
 A.E(25,28,6,6,'#fff7d6');A.E(39,28,6,6,'#fff7d6');A.E(25,29,3,3,'#1a1226');A.E(39,29,3,3,'#1a1226');A.P(24,27,'#ffffff');A.P(38,27,'#ffffff');
 A.Y([[29,32],[35,32],[32,38]],'#fbbf24');A.R(25,58,5,3,'#fbbf24');A.R(34,58,5,3,'#fbbf24')},
slime:(A,c)=>{const g=c('l','#4ade80');A.E(30,28,10,9,g);A.S((x,y)=>(((x-32)/24)**2+((y-42)/18)**2<=1)&&y<=58,8,24,56,58,g);
 A.E(25,40,5,6,'#ffffff');A.E(39,40,5,6,'#ffffff');A.R(26,41,3,5,'#1a1226');A.R(40,41,3,5,'#1a1226');A.P(26,41,'#ffffff');A.P(40,41,'#ffffff');
 A.R(29,50,6,1,'#14532d');A.P(28,49,'#14532d');A.P(35,49,'#14532d');A.R(17,32,4,2,'#ffffff');A.P(21,34,'#ffffff');A.E(54,53,3,3,g);A.E(8,54,2,2,g)},
ghost:(A,c)=>{A.S((x,y)=>y<30?((x-32)/18)**2+((y-30)/20)**2<=1:Math.abs(x-32)<=18&&y<=52+4*Math.abs(Math.sin(x*Math.PI/9)),14,10,50,57,c('w','#f4f1ff'));
 A.E(12,38,4,3,c('w','#f4f1ff'));A.E(52,38,4,3,c('w','#f4f1ff'));A.E(26,28,3,5,'#1a1226');A.E(38,28,3,5,'#1a1226');A.P(26,26,'#ffffff');A.P(38,26,'#ffffff');
 A.E(32,40,3,4,'#1a1226');A.P(22,34,'#f9a8d4');A.P(42,34,'#f9a8d4')},
golem:A=>{A.B(18,50,12,10,'#6b768c');A.B(34,50,12,10,'#6b768c');A.B(14,22,36,30,'#8b95ab');A.B(4,24,12,24,'#6b768c');A.B(48,24,12,24,'#6b768c');A.B(3,46,14,12,'#9aa5bd');A.B(47,46,14,12,'#9aa5bd');
 A.B(22,6,20,17,'#9aa5bd');A.R(26,13,4,4,'#fbbf24');A.R(34,13,4,4,'#fbbf24');A.R(28,19,8,2,'#1f2937');A.R(30,32,4,9,'#22d3ee');A.R(28,35,8,2,'#22d3ee');
 A.E(20,24,4,2,'#4ade80');A.E(44,8,3,2,'#4ade80');A.L(40,28,44,36,'#4b5563');A.L(20,44,24,50,'#4b5563')},
book:A=>{A.B(18,52,9,8,'#7c4a1d');A.B(37,52,9,8,'#7c4a1d');A.B(12,14,40,38,'#c0273f');A.R(12,14,5,38,'#9f1239');A.R(12,14,4,4,'#fbbf24');A.R(48,14,4,4,'#fbbf24');A.R(12,48,4,4,'#fbbf24');A.R(48,48,4,4,'#fbbf24');
 A.B(17,32,30,14,'#2b0a14');for(let i=0;i<5;i++){A.Y([[18+i*6,32],[24+i*6,32],[21+i*6,38]],'#ffffff');A.Y([[18+i*6,46],[24+i*6,46],[21+i*6,41]],'#ffffff')}
 A.Y([[28,40],[36,40],[32,48]],'#f43f5e');A.E(25,23,5,5,'#ffffff');A.E(39,23,5,5,'#ffffff');A.R(26,23,3,4,'#1a1226');A.R(40,23,3,4,'#1a1226');A.L(20,17,29,20,'#1a1226');A.L(44,17,35,20,'#1a1226')},
bug:A=>{A.L(27,12,22,4,'#1f2937');A.L(37,12,42,4,'#1f2937');A.E(22,4,2,2,'#f43f5e');A.E(42,4,2,2,'#f43f5e');
 [[12,34],[10,44],[14,54]].forEach(([x,y])=>{A.L(x,y,24,40,'#1f2937');A.L(64-x,y,40,40,'#1f2937')});
 A.E(32,40,20,17,'#ef4444');A.R(31,28,2,28,'#1a1226');[[24,36],[40,36],[22,46],[42,46],[27,52],[37,52]].forEach(([x,y])=>A.E(x,y,3,3,'#1a1226'));
 A.E(32,21,9,8,'#1f2937');A.R(26,19,4,3,'#fde047');A.R(34,19,4,3,'#fde047');A.R(28,26,2,3,'#ffffff');A.R(34,26,2,3,'#ffffff')},
virus:A=>{for(let i=0;i<12;i++){const a=i*Math.PI/6,x=32+Math.cos(a)*19,y=32+Math.sin(a)*19;A.L(32+Math.cos(a)*13,32+Math.sin(a)*13,x,y,'#a855f7');A.E(32+Math.cos(a)*23,32+Math.sin(a)*23,3,3,'#f472b6')}
 A.E(32,32,16,16,'#a855f7');A.E(32,30,8,8,'#ffffff');A.E(32,31,4,4,'#4ade80');A.R(31,30,2,2,'#1a1226');A.R(25,40,14,3,'#1a1226');A.R(27,40,2,2,'#ffffff');A.R(31,40,2,2,'#ffffff');A.R(35,40,2,2,'#ffffff');A.L(22,24,29,27,'#1a1226')}},
AL={turtle:'tomo',robot:'bit7'},SCN={},NAMES={hero:'Khôi',tomo:'Giáo sư Thông',lexa:'Bà Nghĩa',bit7:'Người Máy Bảy',owl:'Cú Bút',slime:'Nhầy',ghost:'Bóng sương',golem:'Người Đá',book:'Sách tinh nghịch',bug:'Con bug',virus:'Virus'};
const _s=spr;spr=function(n,sw){const m=AL[n]||n;if(!GEN[m])return _s(n,sw);const k=m+(sw?JSON.stringify(sw):'');return SCN[k]||(SCN[k]=paint(GEN[m],sw))};
NSP.math=['tomo',0];NSP.en=['lexa',0];NSP.it=['bit7',0];
/* ---- CSS ---- */
const st=document.createElement('style');st.textContent=`.hero::before{content:none!important}.hero .px,.mon:not(.boss) .px{height:128px!important;cursor:pointer}.hero .px:hover,.mon:not(.boss) .px:hover{filter:brightness(1.18) drop-shadow(0 0 6px #fde68a)}
@media(orientation:landscape) and (max-height:560px){.hero .px,.mon:not(.boss) .px{height:64px!important}}
.poke{animation:pk .5s}@keyframes pk{30%{transform:translateY(-22px) scaleY(1.12)}60%{transform:translateY(0) scale(1.14,.86)}}
.pbub{position:absolute;left:50%;top:-8px;transform:translateX(-50%);background:#fff;color:#241a3d;padding:4px 10px;border-radius:10px;font:700 13px system-ui;white-space:nowrap;z-index:9;animation:bb 1.3s forwards;pointer-events:none}@keyframes bb{to{opacity:0;top:-34px}}
#st64{position:fixed;inset:0;z-index:99;background:#14101f;color:#f1ecff;overflow:auto;padding:12px;font-family:system-ui}#st64 .in{max-width:640px;margin:0 auto}
#st64 .gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:8px}#st64 .gr button{background:#221a38;border:2px solid #4c3a7a;border-radius:10px;padding:4px;color:#f1ecff;font-size:12px;min-height:0}#st64 .gr button.on{border-color:#fbbf24}
#st64 canvas.t{width:100%;image-rendering:pixelated;display:block}#st64 .stage{position:relative;height:300px;margin:10px 0;border-radius:14px;overflow:hidden;background:repeating-conic-gradient(#2b2146 0 25%,#221a38 0 50%) 0 0/32px 32px;touch-action:none}
#st64 .stage canvas{position:absolute;image-rendering:pixelated;cursor:grab;transform-origin:50% 80%}#st64 .gd{position:absolute;inset:0;pointer-events:none;display:none;background:linear-gradient(#ffffff22 1px,transparent 1px) 0 0/var(--z) var(--z),linear-gradient(90deg,#ffffff22 1px,transparent 1px) 0 0/var(--z) var(--z)}
#st64 .ct{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}#st64 .ct button{padding:8px 12px;min-height:40px;font-size:14px}#st64 label{display:block;font-size:13px;color:#a79ccc;margin:6px 0}#st64 input[type=range]{width:100%}
@keyframes a-wave{25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}}@keyframes a-jump{40%{transform:translateY(-70px) scaleY(1.1)}70%{transform:scale(1.15,.85)}}@keyframes a-atk{40%{transform:translateX(-30px) rotate(-8deg)}60%{transform:translateX(60px) rotate(10deg)}}@keyframes a-hurt{20%,60%{transform:translateX(-14px);filter:brightness(2.4) sepia(1) saturate(6) hue-rotate(-40deg)}40%{transform:translateX(14px)}}@keyframes a-spin{50%{transform:scaleX(-1)}}`;
document.head.appendChild(st);window.PX={paint,GEN,rp,hx,mx,NAMES};
/* ---- Chạm vào nhân vật: nhảy + câu thoại ---- */
const LN={hero:['Sẵn sàng!','Tiến lên!','Kiến thức là sức mạnh!'],m:['Grrr!','Đừng hòng!','Hỏi khó thế!'],n:['Chào bạn nhỏ!','Học là vui!','Cố lên nhé!']};
document.addEventListener('click',e=>{const im=e.target.closest&&e.target.closest('.hero .px,.mon:not(.boss) .px,#nn img');if(!im)return;const h=im.closest('.hero,.mon')||im.parentNode,t=im.closest('.hero')?'hero':im.closest('.mon')?'m':'n',l=LN[t];
 im.classList.remove('poke');void im.offsetWidth;im.classList.add('poke');const b=document.createElement('div');b.className='pbub';b.textContent=l[Math.random()*l.length|0];if(getComputedStyle(h).position=='static')h.style.position='relative';h.appendChild(b);setTimeout(()=>b.remove(),1300)});
/* ---- Phòng nhân vật ---- */
function studio(){let cur='hero',z=4,hue=0,fl=1,old=document.getElementById('st64');if(old)old.remove();
 const o=document.createElement('div');o.id='st64';o.innerHTML=`<div class="in"><div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">🎨 Phòng nhân vật 64×64</h2><button id="sx">✕ Đóng</button></div><small style="color:#a79ccc">Chạm để chọn · kéo nhân vật trên sân khấu · thử các hành động</small><div class="stage" id="sg"><canvas id="sc" width="64" height="64"></canvas><div class="gd" id="gd"></div></div>
<div class="ct"><button data-a="wave">👋 Vẫy</button><button data-a="jump">⬆️ Nhảy</button><button data-a="atk">⚔️ Ra chiêu</button><button data-a="hurt">😮 Giật mình</button><button data-a="spin">🔄 Xoay</button><button id="gb">▦ Lưới pixel</button></div>
<label>Phóng to: <span id="zv"></span><input id="zr" type="range" min="2" max="6" value="4"></label><label>Đổi màu (xoay sắc độ)<input id="hr" type="range" min="0" max="360" value="0"></label><div class="gr" id="gr"></div></div>`;
 document.body.appendChild(o);const sc=o.querySelector('#sc'),sg=o.querySelector('#sg'),gd=o.querySelector('#gd'),pos={x:0,y:0};
 const show=()=>{const c=spr(cur,0),x=sc.getContext('2d');x.clearRect(0,0,64,64);x.drawImage(c,0,0);sc.style.width=sc.style.height=64*z+'px';sc.style.filter=`hue-rotate(${hue}deg)`;sc.style.left=(sg.clientWidth/2-32*z+pos.x)+'px';sc.style.top=(sg.clientHeight-62*z+pos.y)+'px';
  gd.style.setProperty('--z',z+'px');o.querySelector('#zv').textContent=z+'×';o.querySelectorAll('#gr button').forEach(b=>b.classList.toggle('on',b.dataset.n==cur))};
 const gr=o.querySelector('#gr');Object.keys(NAMES).forEach(n=>{const b=document.createElement('button');b.dataset.n=n;const c=document.createElement('canvas');c.width=c.height=64;c.className='t';c.getContext('2d').drawImage(spr(n,0),0,0);b.appendChild(c);b.append(NAMES[n]);b.onclick=()=>{cur=n;pos.x=pos.y=0;show()};gr.appendChild(b)});
 o.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{sc.style.animation='none';void sc.offsetWidth;sc.style.animation=`a-${b.dataset.a} .7s`});
 o.querySelector('#zr').oninput=e=>{z=+e.target.value;show()};o.querySelector('#hr').oninput=e=>{hue=+e.target.value;show()};o.querySelector('#gb').onclick=()=>{gd.style.display=gd.style.display=='block'?'none':'block'};o.querySelector('#sx').onclick=()=>o.remove();
 let d=null;sc.onpointerdown=e=>{d=[e.clientX-pos.x,e.clientY-pos.y];sc.setPointerCapture(e.pointerId);sc.style.cursor='grabbing'};sc.onpointermove=e=>{if(d){pos.x=e.clientX-d[0];pos.y=e.clientY-d[1];show()}};sc.onpointerup=()=>{d=null;sc.style.cursor='grab'};show()}
const _m=menu;menu=function(){_m.apply(this,arguments);const a=document.getElementById('app');if(a&&!document.getElementById('st-launch')){const b=document.createElement('button');b.id='st-launch';b.textContent='🎨 Phòng nhân vật pixel 64×64';b.style.cssText='width:100%;margin:8px 0;padding:14px;border:1px solid #fbbf24;border-radius:12px;background:#2b2146;color:#fde68a;font-weight:800';b.onclick=studio;a.appendChild(b)}};
})();
