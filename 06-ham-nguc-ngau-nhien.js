/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Sinh hầm ngục ngẫu nhiên (trùng thuật toán dungeon_gen.cpp), bản đồ nhỏ hầm ngục. */
/* ---------- 6. HẦM NGỤC NGẪU NHIÊN (thuật toán trùng với dungeon_gen.cpp) + GUI RPG ---------- */
(()=>{
const GC=5,GR=4,DXY=[[1,0],[0,1],[0,-1],[-1,0]];
function gen(seed){let s=((seed^0x9E3779B9)>>>0)||1;const nx=()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s},rn=n=>nx()%n;
 for(;;){const vis=new Uint8Array(GC*GR),P=[[0,rn(GR)]];vis[P[0][1]*GC]=1;let ok=1;
  for(let i=1;i<10;i++){const[c,r]=P[i-1],o=[];for(const[a,b]of DXY){const nc=c+a,nr=r+b;if(nc>=0&&nc<GC&&nr>=0&&nr<GR&&!vis[nr*GC+nc])o.push([nc,nr])}if(!o.length){ok=0;break}const q=o[rn(o.length)];vis[q[1]*GC+q[0]]=1;P.push(q)}
  if(ok)return P}}
window.__genDungeon=gen;let RP=gen(1);
build=function(){RP=gen(window.__dseed||((Date.now()&0x7fffffff)|1));MW=GC*RW;MH=GR*RH;TM=[];DI=new Int8Array(MW*MH).fill(-1);for(let y=0;y<MH;y++)TM.push(new Array(MW).fill(1));
 RM=i=>({x:RP[i][0]*RW,y:RP[i][1]*RH});roomAt=(px,py)=>{const c=Math.floor(px/RW),r=Math.floor(py/RH),i=RP.findIndex(q=>q[0]==c&&q[1]==r);return i<0?99:i};
 for(let i=0;i<10;i++){const{x,y}=RM(i);for(let a=1;a<RW-1;a++)for(let b=1;b<RH-1;b++)TM[y+b][x+a]=0;
  for(const px of[2,4,8,10].filter(()=>Math.random()>.28))for(let py=1;py<RH-1;py++){if(py===5||Math.random()<.34)continue;if(px===4&&py>=7)continue;if(px===10&&py===8)continue;TM[y+py][x+px]=1}
  for(let py=1;py<RH-1;py++)TM[y+py][x+6]=0;for(let px=1;px<RW-1;px++)TM[y+5][x+px]=0;for(let py=6;py<=8;py++)TM[y+py][x+6]=0;for(let py=6;py<=8;py++)for(let px=3;px<=4;px++)TM[y+py][x+px]=0;
  if(i<9){const dx=RP[i+1][0]-RP[i][0],dy=RP[i+1][1]-RP[i][1],ds=dx==1?[[x+RW-1,y+5],[x+RW,y+5]]:dx==-1?[[x,y+5],[x-1,y+5]]:dy==1?[[x+5,y+RH-1],[x+5,y+RH]]:[[x+5,y],[x+5,y-1]];ds.forEach(([a,b])=>{TM[b][a]=2;DI[b*MW+a]=i})}}window.__bid=(window.__bid||0)+1};
/* Mỗi lần bước vào cổng từ thế giới ngoài trời = một hầm ngục mới */
const _ex=explore;explore=function(k){if(window.__newDungeon){window.__dseed=(Math.random()*2147483647|0)||1;window.__newDungeon=0}return _ex.apply(this,arguments)};
/* Minimap + CSS RPG */
const mm=document.createElement('canvas');mm.id='dmini';mm.width=180;mm.height=120;document.getElementById('stage').appendChild(mm);
const css=document.createElement('style');css.textContent=`#dmini{position:absolute;right:8px;top:56px;z-index:30;display:none;image-rendering:pixelated;background:#06060cdd;box-shadow:0 0 0 3px #7c4a1d,0 0 0 5px #fbbf24}
#hud{background:linear-gradient(#2a1b12ee,#1a1008ee)!important;border:0!important;border-radius:0!important;box-shadow:0 -3px 0 #fbbf24,0 3px 0 #7c4a1d,-3px 0 0 #b9822f,3px 0 0 #b9822f;padding:8px 12px!important;}
.rpgh{background:linear-gradient(#2a1b12ee,#1a1008ee);padding:8px 12px;box-shadow:0 -3px 0 #fbbf24,0 3px 0 #7c4a1d,-3px 0 0 #b9822f,3px 0 0 #b9822f;font-size:14px}.rpgh .bar{display:block;height:8px;background:#000;margin:4px 0;box-shadow:0 0 0 2px #7c4a1d}.rpgh .bar i{display:block;height:100%;background:linear-gradient(#86efac,#16a34a)}
.q{background:linear-gradient(#241a3d,#171028)!important;color:#fff7e0!important;box-shadow:0 -4px 0 #fbbf24,0 4px 0 #7c4a1d,-4px 0 0 #b9822f,4px 0 0 #b9822f!important;padding:16px!important;font-size:1.15em;line-height:1.5}
.a{background:linear-gradient(#3b2a66,#2b1f4d)!important;color:#fff!important;box-shadow:0 -3px 0 #a78bfa,0 3px 0 #1a1030,-3px 0 0 #7c3aed,3px 0 0 #7c3aed!important;text-align:left!important;position:relative;padding-left:34px!important;margin:6px 0!important}.a::before{content:'◆';position:absolute;left:12px;color:#fbbf24}.a:hover,.a:focus{background:linear-gradient(#5b3fa0,#3b2a66)!important}.a:hover::before{content:'▶'}
.hpb{height:14px!important;background:#000!important;box-shadow:0 0 0 3px #7c4a1d!important}.hpb i,.hpb>div{background:linear-gradient(#fb7185,#be123c)!important}`;document.head.appendChild(css);
setInterval(()=>{if(document.hidden||view!='ex'||typeof TM=='undefined'||!X){mm.style.display='none';return}mm.style.display='block';window.dmDraw&&dmDraw(mm)},150);
})();
