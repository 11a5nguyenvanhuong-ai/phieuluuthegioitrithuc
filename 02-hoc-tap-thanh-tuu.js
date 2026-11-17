/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Thống kê học tập, thành tựu, pha boss, ôn tập câu sai, nhật ký. */
/* ===== QUALITY UPDATE: persistent learning stats, achievements, themed HUD, boss phases, review ===== */
const _gocLoad=load;
load=function(){_gocLoad();
 D.stats=D.stats||{correct:0,wrong:0,streak:0,bestStreak:0,reviewed:0,bySubject:{math:{correct:0,wrong:0},en:{correct:0,wrong:0},it:{correct:0,wrong:0}},wrongTopics:[]};
 D.stats.bySubject=D.stats.bySubject||{};['math','en','it'].forEach(k=>D.stats.bySubject[k]=D.stats.bySubject[k]||{correct:0,wrong:0});
 D.stats.wrongTopics=Array.isArray(D.stats.wrongTopics)?D.stats.wrongTopics:[];D.achievements=Array.isArray(D.achievements)?D.achievements:[];
 D.memory.forEach(m=>(m.review||[]).forEach(r=>{if(!Array.isArray(r.options)&&r.options)r.options=Array.from(r.options)}));
};
const DS_THANH_TUU=[
 {id:'first-clear',icon:'🗝️',name:'Bước chân đầu tiên',desc:'Vượt qua tầng đầu tiên.'},
 {id:'boss-breaker',icon:'👑',name:'Kẻ chinh phục Boss',desc:'Vượt qua một boss.'},
 {id:'ten-floors',icon:'🧭',name:'Nhà thám hiểm',desc:'Chinh phục ít nhất 10 tầng ở một thế giới.'},
 {id:'deep-50',icon:'🗻',name:'Xuống sâu 50 tầng',desc:'Đạt mốc 50 tầng ở một thế giới.'},
 {id:'century',icon:'💯',name:'Bách tầng',desc:'Đạt mốc 100 tầng ở một thế giới.'},
 {id:'world-clear',icon:'🌌',name:'Huyền thoại Tri Thức',desc:'Chinh phục đủ 120 tầng ở cả ba thế giới.'},
 {id:'perfect-boss',icon:'✨',name:'Thử thách hoàn hảo',desc:'Thắng boss mà không trả lời sai.'},
 {id:'three-stones',icon:'💎',name:'Bộ ba tri thức',desc:'Thu thập đủ ba viên đá tri thức.'},
 {id:'streak-10',icon:'🔥',name:'Mạch tri thức',desc:'Trả lời đúng liên tiếp 10 câu.'},
 {id:'memory-20',icon:'📖',name:'Người học chăm chỉ',desc:'Ôn lại ít nhất 20 câu đã làm sai.'},
 {id:'all-subjects',icon:'📚',name:'Học giả đa môn',desc:'Vượt qua ít nhất một tầng ở cả ba môn.'},
 {id:'boss-trio',icon:'⚔️',name:'Người vượt ải',desc:'Vượt qua boss ở cả ba thế giới.'}
];
function awardAchievement(id){if(!D||!Array.isArray(D.achievements))return false;if(D.achievements.includes(id))return false;const a=DS_THANH_TUU.find(x=>x.id===id);if(!a)return false;D.achievements.push(id);save();const old=document.getElementById('achievementToast');if(old)old.remove();const el=document.createElement('div');el.id='achievementToast';el.innerHTML=`🏅 <b>THÀNH TỰU MỚI</b><br>${a.icon} ${a.name}<br><small>${a.desc}</small>`;document.body.appendChild(el);setTimeout(()=>el.remove(),3000);return true}
function subjectLabel(k){return ({math:'ĐỀN ĐẠI SỐ · TÍNH TOÁN & QUY LUẬT',en:'THƯ KHỐ CỔ NGỮ · TỪ VỰNG & NGỮ PHÁP',it:'THẾ GIỚI BIT · MÁY TÍNH & THUẬT TOÁN'})[k]||'HẦM NGỤC TRI THỨC'}
function topicLabel(k,q){q=String(q||'').toLowerCase();if(k==='math'){if(q.includes('%'))return 'Phần trăm';if(q.includes('ước')||q.includes('ưcln'))return 'Số học';if(q.includes('tam giác')||q.includes('parabol')||q.includes('hình'))return 'Hình học';if(q.includes('x')||q.includes('phương trình')||q.includes('đạo hàm'))return 'Đại số';if(q.includes('tích phân')||q.includes('môđun'))return 'Giải tích';return 'Tính toán & quy luật'}if(k==='en'){if(q.includes('___'))return 'Ngữ pháp';if(q.includes('nghĩa là gì'))return 'Từ vựng';if(q.includes('read')||q.includes('report')||q.includes('suggested'))return 'Đọc hiểu & cấu trúc';return 'Từ vựng & ngữ pháp'}if(q.includes('o(log')||q.includes('đệ quy')||q.includes('thuật toán'))return 'Thuật toán';if(q.includes('mạng')||q.includes('ip')||q.includes('https'))return 'Mạng máy tính';if(q.includes('sql')||q.includes('dữ liệu'))return 'Dữ liệu';if(q.includes('c++')||q.includes('lập trình')||q.includes('vòng lặp'))return 'Lập trình';return 'Tin học cơ bản'}
function pixelRoomSeed(i,k){let n=((X&&X.seed)||731)+(i+1)*7919+((X&&X.g)||1)*97+(k==='math'?13:k==='en'?37:61);n=(n^(n<<13));n=(n^(n>>>17));n=(n^(n<<5));return Math.abs(n>>>0)}
const _gocRoomArt=drawRoomArchitecture;
drawRoomArchitecture=function(m,i,k,ts,sx,sy){_gocRoomArt(m,i,k,ts,sx,sy);if(!cx||!X)return;const n=pixelRoomSeed(i,k),v=n%4,rect=(c,x,y,w,h)=>{cx.fillStyle=c;cx.fillRect(sx(x),sy(y),Math.max(1,w*ts),Math.max(1,h*ts))};
 // Các mảng trang trí nằm sát mép tường, không chiếm hành lang chính.
 if(k==='math'){
  const gold=['#fbbf24','#fde68a','#d6a45e','#f59e0b'][v];rect('#26180d',m.x+2.8,m.y+.08,1.05,.76);rect(gold,m.x+2.95,m.y+.17,.75,.08);rect(gold,m.x+2.95,m.y+.65,.75,.08);rect(gold,m.x+2.95,m.y+.17,.08,.56);rect(gold,m.x+3.62,m.y+.17,.08,.56);
  cx.fillStyle='#fff0b5';cx.font=`bold ${Math.max(7,ts*.42)}px monospace`;cx.textAlign='center';cx.fillText(['π','√','∑','△'][v],sx(m.x+3.32),sy(m.y+.43));
  if(n%3===0){rect('#5b3215',m.x+7.8,m.y+.08,1.1,.68);rect('#d6a45e',m.x+7.9,m.y+.16,.9,.08);rect('#d6a45e',m.x+7.9,m.y+.58,.9,.08);rect('#fbbf24',m.x+8.32,m.y+.25,.08,.24)}
 }else if(k==='en'){
  rect('#21150f',m.x+3,m.y+.05,1.05,.83);rect('#8b5e34',m.x+3.08,m.y+.13,.9,.08);rect('#8b5e34',m.x+3.08,m.y+.72,.9,.08);const cols=['#ef4444','#60a5fa','#fbbf24','#4ade80'];for(let b=0;b<4;b++)rect(cols[(b+v)%4],m.x+3.12+b*.2,m.y+.28,.14,.39);
  if(n%2===0){rect('#142442',m.x+7.8,m.y+.05,1.1,.83);rect('#93c5fd',m.x+7.9,m.y+.15,.9,.6);rect('#1e3a8a',m.x+8.32,m.y+.15,.06,.6);rect('#1e3a8a',m.x+7.9,m.y+.43,.9,.06)}
 }else{
  rect('#03121b',m.x+3,m.y+.05,1.15,.82);rect('#155e75',m.x+3.08,m.y+.13,.98,.08);for(let b=0;b<3;b++){rect((b+v)%2?'#22d3ee':'#4ade80',m.x+3.12,m.y+.29+b*.15,.42,.045);rect('#0e7490',m.x+3.62,m.y+.29+b*.15,.32,.045)}
  if(n%2===0){rect('#042f2e',m.x+7.8,m.y+.05,1.1,.82);rect('#22d3ee',m.x+7.9,m.y+.15,.9,.06);rect('#22d3ee',m.x+7.9,m.y+.68,.9,.06);rect('#4ade80',m.x+8.1,m.y+.3,.12,.25);rect('#22d3ee',m.x+8.55,m.y+.3,.12,.25)}
 }
};
const _gocExplore=explore;
explore=function(k){_gocExplore(k);if(X&&X.k===k){X.seed=(Math.random()*0x7fffffff)|0;X.themeLabel=subjectLabel(k);hud()} };
const _gocStart=start;
start=function(k){_gocStart(k);if(!G)return;G.phase=0;if(G.boss){showBossIntro(G);}};
function showBossIntro(g){const old=document.getElementById('bossIntro');if(old)old.remove();const name=String(g.mon||'Hộ Vệ Tri Thức').replace(/^[^ ]+\s/,'');const el=document.createElement('div');el.id='bossIntro';el.innerHTML=`<strong>⚔️ BOSS TẦNG ${g.f} · LỚP ${Math.ceil(g.f/10)}</strong><div style="font-size:18px;margin:5px 0">${name}</div><small>${subjectLabel(g.k)}<br>Hãy đọc kỹ câu hỏi. Mỗi đáp án đúng là một chiêu tri thức!</small>`;document.body.appendChild(el);setTimeout(()=>{el.style.transition='opacity .35s';el.style.opacity='0';setTimeout(()=>el.remove(),380)},1900)}
const _gocDraw=draw;
draw=function(){_gocDraw();if(!G||view!=='play')return;const top=$('.top');if(top&&!document.querySelector('.quiz-context')){const ctx=document.createElement('div');ctx.className='quiz-context';ctx.innerHTML=`<span><b>${subjectLabel(G.k)}</b></span><span>CHƯƠNG ${Math.ceil(G.f/10)} / 12 · TẦNG ${G.f} / 120</span><span>${G.boss?'★ THỬ THÁCH BOSS':'◆ '+topicLabel(G.k,G.q.t).toUpperCase()}</span>`;top.insertAdjacentElement('afterend',ctx)} }
const _gocPick=pick;
pick=function(i){if(lock||!G||G.el.includes(i)||!Number.isInteger(i)||i<0||i>=G.q.o.length)return;const g=G,k=G.k,correct=i===G.q.c,oldHp=G.hp;
 D.stats=D.stats||{correct:0,wrong:0,streak:0,bestStreak:0,reviewed:0,bySubject:{},wrongTopics:[]};D.stats.bySubject=D.stats.bySubject||{};D.stats.bySubject[k]=D.stats.bySubject[k]||{correct:0,wrong:0};
 if(correct){D.stats.correct++;D.stats.bySubject[k].correct++;D.stats.streak=(D.stats.streak||0)+1;D.stats.bestStreak=Math.max(D.stats.bestStreak||0,D.stats.streak);if(D.stats.streak>=10)awardAchievement('streak-10')}
 else{D.stats.wrong++;D.stats.bySubject[k].wrong++;D.stats.streak=0;const topic=topicLabel(k,g.q.t),old=D.stats.wrongTopics.find(x=>x.subject===k&&x.topic===topic);if(old)old.count++;else D.stats.wrongTopics.push({subject:k,topic,count:1});D.stats.wrongTopics.sort((a,b)=>b.count-a.count);D.stats.wrongTopics=D.stats.wrongTopics.slice(0,12)}
 const reviewItem={q:g.q.t,selected:g.q.o[i],answer:g.q.o[g.q.c],correct,explanation:'',options:g.q.o.slice(),answerIndex:g.q.c,subject:k,topic:topicLabel(k,g.q.t),floor:g.f};
 // The original handler records a review entry; enrich that exact entry with choices and topic metadata.
 _gocPick(i);const entry=g.review&&g.review[g.review.length-1];if(entry){Object.assign(entry,reviewItem);entry.explanation=String(entry.explanation||'')}
 save();
 if(g.boss&&oldHp>g.mh*.5&&g.hp<=g.mh*.5){g.phase=1;g.damage=12;setTimeout(()=>{if(G!==g)return;const el=document.createElement('div');el.id='phaseToast';el.innerHTML='⚡ <b>GIAI ĐOẠN 2</b><br><small>Boss lộ sơ hở! Từ câu tiếp theo, đáp án đúng làm thử thách mất 12 sức. Trả lời sai vẫn mất 1 tim.</small>';document.body.appendChild(el);setTimeout(()=>el.remove(),2600)},500)}
};
const _gocEnd=end;
end=function(w){const g=G;if(!g)return;const k=g.k,f=g.f,boss=g.boss,cleanBoss=boss&&w&&g.review.every(r=>r.correct);_gocEnd(w);
 if(w){if(f===1)awardAchievement('first-clear');if(boss)awardAchievement('boss-breaker');if(cleanBoss)awardAchievement('perfect-boss');const p=D.p[k];if((p.hi||0)>=10)awardAchievement('ten-floors');if((p.hi||0)>=50)awardAchievement('deep-50');if((p.hi||0)>=100)awardAchievement('century');if(['math','en','it'].every(z=>(D.p[z].hi||0)>=120))awardAchievement('world-clear');if(['math','en','it'].every(z=>(D.p[z].hi||0)>=1))awardAchievement('all-subjects');if(D.stones.length>=3)awardAchievement('three-stones');if(['math','en','it'].every(z=>D.memory.some(m=>m.world===SUB.find(s=>s.k===z).n&&m.boss&&m.result==='Thắng')))awardAchievement('boss-trio')}
 save();const res=$('.res');if(res){const earned=DS_THANH_TUU.filter(a=>D.achievements.includes(a.id));const last=DS_THANH_TUU.filter(a=>D.achievements.includes(a.id)).slice(-1)[0];if(last){const box=document.createElement('div');box.className='feedback';box.innerHTML=`🏅 Thành tựu đã mở khóa: <b>${last.icon} ${last.name}</b><br>${last.desc}`;res.insertBefore(box,res.firstChild)}}
};
// Flashcard review mode uses only the player's saved wrong answers; it never fabricates a new correct answer.
let reviewDeck=[],reviewIndex=0,reviewRevealed=false;
function reviewWrong(){reviewDeck=[];(D.memory||[]).forEach(m=>(m.review||[]).forEach(r=>{if(!r.correct&&r.q&&r.answer)reviewDeck.push({...r,world:m.world,at:m.at})}));reviewDeck.reverse();reviewIndex=0;reviewRevealed=false;renderReview()}
function renderReview(){leave();view='review';G=null;$('#app').className='mn';document.body.dataset.w='menu';const item=reviewDeck[reviewIndex];if(!item){$('#app').innerHTML=`<h2>📖 Ôn tập câu sai</h2><div class="sp">${reviewDeck.length?'Bạn đã xem hết bộ câu hỏi này. Hãy quay lại sau khi chinh phục thêm tầng mới.':'Chưa có câu trả lời sai được lưu. Hãy chơi vài tầng rồi quay lại ôn tập.'}</div><div class="nav"><button onclick="memoryBook()">← Về sổ ký ức</button><button class="ghost" onclick="menu()">Về menu</button></div>`;return}
 const topic=item.topic||topicLabel(item.subject||'math',item.q);$('#app').innerHTML=`<h2>📖 Ôn tập câu sai</h2><p class="sub">Thẻ ${reviewIndex+1}/${reviewDeck.length} · ${item.world||'Vương quốc Tri Thức'} · ${topic}</p><div class="pb"><i style="width:${(reviewIndex+1)/reviewDeck.length*100}%"></i></div><div class="review-card"><small>GỢI NHỚ KIẾN THỨC</small><div class="review-question">${item.q}</div><div><b>Đáp án bạn đã chọn:</b> <span class="wrong">${item.selected||'Chưa ghi nhận'}</span></div>${reviewRevealed?`<div class="review-answer"><b class="right">Đáp án đúng: ${item.answer}</b><p>${item.explanation||'Hãy đối chiếu lại dữ kiện trong câu hỏi và quy tắc liên quan, sau đó tự giải lại trước khi xem đáp án.'}</p></div>`:`<p class="sub">Hãy thử tự trả lời lại trước khi mở đáp án.</p>`}</div><div class="review-controls">${reviewRevealed?`<button onclick="nextReview()">${reviewIndex+1===reviewDeck.length?'Hoàn tất':'Câu tiếp theo →'}</button>`:`<button onclick="revealReview()">Hiện đáp án & giải thích</button>`}<button class="ghost" onclick="memoryBook()">Sổ ký ức</button></div>`}
function revealReview(){if(!reviewRevealed){reviewRevealed=true;D.stats=D.stats||{};D.stats.reviewed=(D.stats.reviewed||0)+1;if(D.stats.reviewed>=20)awardAchievement('memory-20');save();renderReview()}}
function nextReview(){reviewIndex++;reviewRevealed=false;renderReview()}
const _gocMemory=memoryBook;
memoryBook=function(){_gocMemory();const app=$('#app');if(!app)return;const stats=D.stats||{correct:0,wrong:0,streak:0,bestStreak:0,bySubject:{}};const pct=stats.correct+stats.wrong?Math.round(stats.correct/(stats.correct+stats.wrong)*100):0;
 const statsHtml=`<h3>📊 Hồ sơ học tập</h3><div class="stat-grid"><div class="stat"><small>Câu trả lời đúng</small><b>${stats.correct||0}</b></div><div class="stat"><small>Tỷ lệ chính xác</small><b>${pct}%</b></div><div class="stat"><small>Chuỗi đúng hiện tại</small><b>${stats.streak||0}</b></div><div class="stat"><small>Chuỗi đúng tốt nhất</small><b>${stats.bestStreak||0}</b></div></div><div class="sp"><b>📚 Theo môn học</b>${SUB.map(s=>{const x=(stats.bySubject||{})[s.k]||{correct:0,wrong:0};const n=x.correct+x.wrong;return `<div class="row"><span>${s.e} ${s.n}</span><b>${n?Math.round(x.correct/n*100):0}% <small>(${x.correct}/${n})</small></b></div><div class="pb"><i style="width:${n?x.correct/n*100:0}%"></i></div>`}).join('')}${(stats.wrongTopics||[]).length?`<p><b>Chủ đề cần ôn:</b> ${(stats.wrongTopics||[]).slice(0,5).map(x=>`${SUB.find(s=>s.k===x.subject)?.n||x.subject}: ${x.topic} (${x.count})`).join(' · ')}</p>`:''}</div>`;
 const achHtml=`<h3>🏅 Thành tựu (${D.achievements.length}/${DS_THANH_TUU.length})</h3><div class="achievement-grid">${DS_THANH_TUU.map(a=>`<div class="achievement ${D.achievements.includes(a.id)?'':'locked'}"><span class="ach-icon">${D.achievements.includes(a.id)?a.icon:'🔒'}</span><b>${a.name}</b><small>${a.desc}</small></div>`).join('')}</div>`;
 app.innerHTML=app.innerHTML.replace('<h3>🧠 Nhật ký hành trình</h3>',`${statsHtml}${achHtml}<h3>🧠 Nhật ký hành trình</h3>`);
 const nav=app.querySelector('.nav');if(nav){const b=document.createElement('button');b.textContent='📖 Ôn tập câu sai';b.onclick=reviewWrong;nav.parentNode.insertBefore(b,nav)}
};
// More specific boss title and a clear progress marker, without changing question logic or saved floor progress.


