/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Học viện tri thức (ngân hàng câu hỏi tích hợp ở data/hoc-vien.js). */
/* ===== PHIÊU LƯU THẾ GIỚI TRI THỨC ACADEMY v2: integrated bilingual question bank, review, bosses, stones, achievements ===== */
/* NGOC_BANK nạp từ data/hoc-vien.js */
const NGOC_ACADEMY_KEY = 'pltgtt_academy_v2';
let academyState = {seen:[],wrong:[],stats:{correct:0,wrong:0,streak:0,bestStreak:0,bySubject:{}},achievements:[],stones:[]};
try { academyState = Object.assign(academyState, JSON.parse(localStorage.getItem(NGOC_ACADEMY_KEY)||'{}')); } catch(e) {}
academyState.stats=academyState.stats||{correct:0,wrong:0,streak:0,bestStreak:0,bySubject:{}};
academyState.wrong=academyState.wrong||[];academyState.seen=academyState.seen||[];academyState.mastered=academyState.mastered||[];academyState.achievements=academyState.achievements||[];academyState.stones=academyState.stones||[];
let academySession={list:[],index:0,current:null,answered:false,reviewMode:false,filter:{subject:'all',grade:'all',type:'all'}};
function academySave(){try{localStorage.setItem(NGOC_ACADEMY_KEY,JSON.stringify(academyState))}catch(e){}}
function academyEsc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function academyText(obj){return typeof obj==='string'?obj:(obj?.vi||'')}
function academyTextEn(obj){return typeof obj==='string'?obj:(obj?.en||obj?.vi||'')}
function academySubjectLabel(s){return ({math:'🔢 Toán học / Mathematics',english:'📚 Tiếng Anh / English',python:'💻 Tin học & Python / Informatics & Python',informatics_cpp:'🐍 Python & thuật toán / Python & algorithms'})[s]||s}
function academyGrade(q){return `Lớp ${q.grade} · Tầng ${q.floorRange?.[0]||((q.grade-1)*10+1)}–${q.floorRange?.[1]||q.grade*10}`}
function academyNormalize(s){return String(s??'').trim().toLocaleLowerCase('vi').replace(/\s+/g,' ')}
function academyCorrect(q,val){
 if(q.type==='mcq')return Number(val)===q.answerIndex;
 if(q.type==='true_false')return String(val)==String(q.answer);
 const a=academyNormalize(val);
 return (q.acceptedAnswers||[]).some(x=>academyNormalize(x)===a);
}
function academyAllQuestions(){
 // Mọi câu thuộc bản đồ Tin học đều dùng subject 'python'; hỗ trợ dữ liệu cũ nếu còn sót.
 return NGOC_BANK.questions.map(q=>q.subject==='informatics_cpp'?{...q,subject:'python'}:q);
}
function academyOpen(){
 view='academy';G=null;leave();document.body.classList.remove('ex','boss');document.body.dataset.w='menu';
 $('#app').style.display='block';$('#ui').style.display='none';if(cv)cv.style.display='none';
 academySession={list:[],index:0,current:null,answered:false,reviewMode:false,filter:{subject:'all',grade:'all',type:'all'}};
 academyRenderHome();
}
function academyRenderHome(){
 const all=academyAllQuestions(),st=academyState.stats,total=st.correct+st.wrong,pct=total?Math.round(st.correct/total*100):0;
 const by=Object.entries(st.bySubject||{}).map(([k,v])=>`<div class="ac-mini"><span>${academySubjectLabel(k)}</span><b>${v.correct||0}/${(v.correct||0)+(v.wrong||0)} đúng</b></div>`).join('');
 $('#app').className='academy-app';
 $('#app').innerHTML=`<div class="ac-head"><div><div class="ac-kicker">PHIÊU LƯU THẾ GIỚI TRI THỨC · HỌC VIỆN</div><h1>🧠 Học viện Tri thức</h1><p class="sub">Ngân hàng song ngữ · Giải thích kiểu giáo viên · Ôn tập thông minh</p></div><button class="ghost" onclick="menu()">← Về hầm ngục</button></div>
 <div class="ac-stats"><div><small>Câu đã trả lời</small><b>${total}</b></div><div><small>Độ chính xác</small><b>${pct}%</b></div><div><small>Chuỗi đúng</small><b>${st.streak||0}</b></div><div><small>Câu cần ôn</small><b>${academyState.wrong.length}</b></div></div>
 <div class="ac-grid"><section class="ac-panel"><h2>⚔️ Bắt đầu thử thách</h2><p>Chọn môn, lớp và dạng câu hỏi. Độ khó gắn với tầng; không có công tắc chọn độ khó thủ công.</p>
 <label>Môn học / Subject<select id="ac-sub"><option value="all">Tất cả môn / All subjects</option><option value="math">Toán học / Mathematics</option><option value="english">Tiếng Anh / English</option><option value="python">Python & thuật toán</option></select></label>
 <label>Lớp / Grade<select id="ac-grade"><option value="all">Tất cả lớp / All grades</option>${Array.from({length:12},(_,i)=>`<option value="${i+1}">Lớp ${i+1} · Tầng ${i*10+1}–${i*10+10}</option>`).join('')}</select></label>
 <label>Dạng câu / Question type<select id="ac-type"><option value="all">Tất cả dạng</option><option value="mcq">Trắc nghiệm 4 đáp án</option><option value="true_false">Đúng / Sai</option><option value="fill">Điền đáp án</option></select></label>
 <div class="ac-actions"><button onclick="academyStart(false)">▶ Bắt đầu luyện tập</button><button class="ghost" onclick="academyStart(true)">👑 Thử thách Boss</button></div>
 <p class="ac-note">Boss học tập: 5 câu tổng hợp, ưu tiên câu khó hơn trong bộ lọc hiện tại. Trả lời đúng liên tiếp để mở thưởng tri thức.</p></section>
 <section class="ac-panel"><h2>📖 Ôn tập thông minh</h2><p>Câu sai được lưu riêng, có thể ôn lại bất cứ lúc nào. Khi trả lời đúng trong lượt ôn, câu sẽ được đánh dấu đã củng cố.</p><div class="ac-actions"><button onclick="academyReview()">🔁 Ôn ${academyState.wrong.length} câu sai</button><button class="ghost" onclick="academyAchievements()">🏆 Thành tựu</button></div><h3>📊 Theo môn học</h3>${by||'<p class="ac-muted">Chưa có dữ liệu. Hãy làm một lượt luyện tập để bắt đầu.</p>'}<h3>💎 Đá tri thức</h3><div class="ac-stones">${['math','english','python'].map((s,i)=>`<span class="${academyState.stones.includes(s)?'earned':''}">${['🔴 Đá Tính Toán','🔵 Đá Ngôn Từ','🟢 Đá Thuật Toán'][i]} ${academyState.stones.includes(s)?'✓':''}</span>`).join('')}</div></section></div>
 <div class="ac-foot">Lưu tiến độ trên thiết bị này · Câu hỏi tự biên soạn, không phải trích nguyên văn SGK · Batch hiện tại: ${all.length} câu</div>`;
}
function academyFilterList(){
 const all=academyAllQuestions();
 const subject=$('#ac-sub')?.value||'all',grade=$('#ac-grade')?.value||'all',type=$('#ac-type')?.value||'all';
 academySession.filter={subject,grade,type};
 return all.filter(q=>(subject==='all'||q.subject===subject)&&(grade==='all'||q.grade===Number(grade))&&(type==='all'||q.type===type));
}
function academyStart(boss){
 const list=academyFilterList();
 if(!list.length){alert('Chưa có câu phù hợp bộ lọc. Hãy chọn môn/lớp khác.');return}
 list.sort((a,b)=>(a.difficulty||1)-(b.difficulty||1));
 let chosen;
 if(boss){const sorted=list.slice().sort((a,b)=>(b.difficulty||1)-(a.difficulty||1));chosen=sorted.slice(0,Math.min(5,sorted.length));}
 else{
  const unseen=list.filter(q=>!academyState.seen.includes(q.id));
  const pool=unseen.length?unseen:list;
  chosen=pool.slice().sort(()=>Math.random()-.5).slice(0,Math.min(10,pool.length));
 }
 academySession.list=chosen;academySession.index=0;academySession.current=null;academySession.answered=false;academySession.reviewMode=false;academySession.boss=!!boss;
 academyRenderQuestion();
}
function academyReview(){
 const all=academyAllQuestions(),ids=academyState.wrong.map(w=>w.id);
 const byId=new Map(all.map(q=>[q.id,q]));
 const list=ids.map(id=>byId.get(id)).filter(Boolean);
 if(!list.length){alert('Bạn chưa có câu sai trong Học viện. Hãy làm một lượt luyện tập trước nhé.');return}
 academySession.list=list;academySession.index=0;academySession.current=null;academySession.answered=false;academySession.reviewMode=true;academySession.boss=false;academyRenderQuestion();
}
function academyRenderQuestion(){
 const q=academySession.list[academySession.index];
 if(!q){academyRenderResult();return}
 academySession.current=q;academySession.answered=false;
 const idx=academySession.index+1,total=academySession.list.length;
 const opts=q.type==='mcq'?`<div class="ac-options">${q.options.map((o,i)=>`<button class="ac-option" onclick="academyAnswer(${i})"><b>${String.fromCharCode(65+i)}.</b> ${academyEsc(academyText(o))}<small>${academyEsc(academyTextEn(o))}</small></button>`).join('')}</div>`:
 q.type==='true_false'?`<div class="ac-options two"><button class="ac-option" onclick="academyAnswer(true)">Đúng / True</button><button class="ac-option" onclick="academyAnswer(false)">Sai / False</button></div>`:
 `<div class="ac-fill"><input id="ac-answer" placeholder="Nhập đáp án / Enter your answer" autocomplete="off"><button onclick="academyAnswer(document.getElementById('ac-answer').value)">Trả lời / Submit</button></div>`;
 $('#app').innerHTML=`<div class="ac-head"><div><div class="ac-kicker">${academySession.boss?'👑 THỬ THÁCH BOSS':academySession.reviewMode?'📖 ÔN TẬP THÔNG MINH':'🧭 HÀNH TRÌNH TRI THỨC'} · ${idx}/${total}</div><h1>${academyEsc(academySubjectLabel(q.subject))}</h1><p class="sub">${academyEsc(academyGrade(q))} · ${academyEsc(q.topic)} · Độ khó ${q.difficulty||1}/3</p></div><button class="ghost" onclick="academyRenderHome()">✕ Thoát</button></div>
 <div class="ac-progress"><i style="width:${idx/total*100}%"></i></div><section class="ac-question"><div class="ac-meta"><span>${q.type==='mcq'?'TRẮC NGHIỆM / MCQ':q.type==='true_false'?'ĐÚNG / SAI · TRUE / FALSE':'ĐIỀN ĐÁP ÁN / FILL IN'}</span><span>${q.difficultyLabel||'Cơ bản / Basic'}</span></div><h2>${academyEsc(academyText(q.question))}</h2><p class="ac-en">${academyEsc(academyTextEn(q.question))}</p>${q.code?`<pre class="ac-code"><code>${academyEsc(q.code)}</code></pre>`:''}${opts}<div id="ac-feedback"></div><div class="ac-actions"><button class="ghost" onclick="academyHint()">💡 Gợi ý / Hint</button><button id="ac-next" style="display:none" onclick="academyNext()">${idx===total?'Xem kết quả / Results':'Câu tiếp theo / Next →'}</button></div><p class="ac-note">Nguồn: câu hỏi tự biên soạn theo kiến thức phổ thông; không khẳng định trích nguyên văn SGK.</p></section>`;
}
function academyAnswer(val){
 if(academySession.answered)return;
 const q=academySession.current;if(!q)return;
 const ok=academyCorrect(q,val);academySession.answered=true;
 const stats=academyState.stats;stats.bySubject=stats.bySubject||{};stats.bySubject[q.subject]=stats.bySubject[q.subject]||{correct:0,wrong:0};
 const key=q.id;
 if(ok){
  stats.correct++;stats.bySubject[q.subject].correct++;stats.streak=(stats.streak||0)+1;stats.bestStreak=Math.max(stats.bestStreak||0,stats.streak);
  academyState.wrong=academyState.wrong.filter(x=>x.id!==key);if(!academyState.mastered.includes(key))academyState.mastered.push(key);
  if(stats.streak>=5&&!academyState.achievements.includes('streak5'))academyState.achievements.push('streak5');
  const subjectKey=q.subject==='math'?'math':q.subject==='english'?'english':'python';
  const subjectQuestions=academyAllQuestions().filter(x=>x.subject===subjectKey);
  const correctSubject=subjectQuestions.every(x=>academyState.mastered.includes(x.id));
  if(correctSubject&&!academyState.stones.includes(subjectKey))academyState.stones.push(subjectKey);
 } else {
  stats.wrong++;stats.bySubject[q.subject].wrong++;stats.streak=0;academyState.mastered=academyState.mastered.filter(id=>id!==key);academyState.stones=academyState.stones.filter(x=>x!==(q.subject==='math'?'math':q.subject==='english'?'english':'python'));
  const w={id:key,selected:typeof val==='boolean'?(val?'True':'False'):String(val),at:Date.now(),subject:q.subject,grade:q.grade};
  const existing=academyState.wrong.find(x=>x.id===key);if(existing)Object.assign(existing,w);else academyState.wrong.push(w);
 }
 if(!academyState.seen.includes(key))academyState.seen.push(key);
 if(stats.correct+stats.wrong>=10&&!academyState.achievements.includes('first10'))academyState.achievements.push('first10');
 const played=['math','english','python'].every(sub=>{const x=stats.bySubject[sub];return x&&(x.correct+x.wrong)>0});if(played&&!academyState.achievements.includes('allSubjects'))academyState.achievements.push('allSubjects');
 academySave();
 const answer=q.type==='mcq'?academyText(q.options[q.answerIndex]):q.type==='true_false'?(q.answer?'Đúng / True':'Sai / False'):(q.answerDisplay||q.acceptedAnswers?.[0]||'');
 const exp=q.explanation||{};
 const fb=document.getElementById('ac-feedback');
 fb.className='ac-feedback '+(ok?'ok':'bad');
 fb.innerHTML=`<h3>${ok?'✨ Chính xác! / Correct!':'🧩 Chưa đúng / Not quite'}</h3><p><b>Đáp án / Answer:</b> ${academyEsc(answer)}</p><div class="ac-explain"><b>Giải thích tiếng Việt</b><p>${academyEsc(exp.vi||'Hãy xem lại quy tắc và thử giải lại.')}</p><b>English explanation</b><p>${academyEsc(exp.en||exp.vi||'Review the rule and try again.')}</p></div>`;
 document.querySelectorAll('.ac-option').forEach(b=>b.disabled=true);
 const next=document.getElementById('ac-next');if(next)next.style.display='inline-flex';
}
function academyHint(){
 const q=academySession.current;if(!q)return;
 const fb=document.getElementById('ac-feedback');if(!fb)return;
 const hint=q.hint||{};fb.className='ac-feedback hint';fb.innerHTML=`<h3>💡 Gợi ý / Hint</h3><p>${academyEsc(academyText(hint))}</p><p>${academyEsc(academyTextEn(hint))}</p>`;
}
function academyNext(){academySession.index++;academyRenderQuestion()}
function academyRenderResult(){
 const st=academyState.stats, total=academySession.list.length;
 const recent=academySession.list.map(q=>q.id);
 const correct=recent.filter(id=>!academyState.wrong.some(w=>w.id===id)).length;
 const earned=academyState.stones;
 $('#app').innerHTML=`<div class="ac-head"><div><div class="ac-kicker">KẾT THÚC THỬ THÁCH</div><h1>🏆 Hành trình hoàn tất!</h1><p class="sub">Bạn đã hoàn thành ${total} câu trong lượt này.</p></div><button class="ghost" onclick="academyRenderHome()">Về học viện</button></div><div class="ac-stats"><div><small>Câu đúng trong lượt</small><b>${correct}/${total}</b></div><div><small>Độ chính xác tổng</small><b>${st.correct+st.wrong?Math.round(st.correct/(st.correct+st.wrong)*100):0}%</b></div><div><small>Chuỗi đúng tốt nhất</small><b>${st.bestStreak||0}</b></div><div><small>Câu cần ôn</small><b>${academyState.wrong.length}</b></div></div><section class="ac-panel"><h2>💎 Đá tri thức</h2><p>${earned.length?earned.map(s=>({'math':'🔴 Đá Tính Toán','english':'🔵 Đá Ngôn Từ','python':'🟢 Đá Thuật Toán'}[s]||s)).join(' · '):'Tiếp tục luyện tập để xây dựng tiến độ tri thức.'}</p><div class="ac-actions"><button onclick="academyReview()">Ôn câu sai</button><button class="ghost" onclick="academyRenderHome()">Chọn thử thách khác</button></div></section>`;
}
function academyAchievements(){
 const st=academyState.stats;
 const list=[['streak5','🔥 Chuỗi 5 câu đúng','Trả lời đúng liên tiếp 5 câu.'],['first10','📘 Người ham học','Hoàn thành 10 câu hỏi.'],['allSubjects','🌈 Khám phá ba môn','Luyện tập cả Toán, Tiếng Anh và Python.']];
 const html=list.map(a=>`<div class="ac-ach ${academyState.achievements.includes(a[0])?'earned':''}"><b>${academyState.achievements.includes(a[0])?'🏅':'🔒'} ${a[1]}</b><p>${a[2]}</p></div>`).join('');
 $('#app').innerHTML=`<div class="ac-head"><h1>🏆 Thành tựu Học viện</h1><button class="ghost" onclick="academyRenderHome()">← Quay lại</button></div><div class="ac-panel">${html}<p class="ac-note">Thành tựu được lưu trên thiết bị này.</p></div>`;
}
const academyStyle=document.createElement('style');
academyStyle.textContent=`
#app.academy-app{max-width:1000px;margin:24px auto;padding:clamp(16px,3vw,30px);color:#f3efff;background:linear-gradient(150deg,#171229,#21183a 65%,#102b37);border:1px solid #4a3a6d;border-radius:18px;box-shadow:0 18px 55px #0007}
.ac-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap}.ac-kicker{font-size:.72rem;letter-spacing:.16em;color:#7dd3fc;font-weight:800}.ac-head h1{margin:8px 0;font-size:clamp(1.5rem,4vw,2.2rem)}.ac-head .sub{margin:0 0 14px;color:#bdb3d8}
.ac-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:20px 0}.ac-stats>div,.ac-panel,.ac-question{background:#ffffff08;border:1px solid #ffffff18;border-radius:14px;padding:16px}.ac-stats small{display:block;color:#bdb3d8;font-size:.8rem}.ac-stats b{display:block;font-size:1.6rem;margin-top:4px;color:#f0abfc}
.ac-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.ac-panel h2,.ac-question h2{margin-top:0}.ac-panel p,.ac-note,.ac-muted{color:#c3badb;line-height:1.6}.ac-panel label{display:block;margin:14px 0;color:#ddd5f4;font-weight:700}.ac-panel select,.ac-fill input{display:block;width:100%;margin-top:6px;background:#120e20;color:#f3efff;border:1px solid #51416f;border-radius:9px;padding:11px;font:inherit}.ac-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:16px}.ac-actions button,.ac-fill button{border:1px solid #7652b7;border-radius:10px;padding:10px 14px;background:linear-gradient(135deg,#7c3aed,#2563eb);color:white;font-weight:800;cursor:pointer}.ac-actions button.ghost,.ac-head button.ghost{background:#ffffff0b;border-color:#66577f;color:#f3efff}.ac-note{font-size:.85rem}.ac-mini{display:flex;justify-content:space-between;gap:8px;padding:9px 0;border-bottom:1px solid #ffffff14;font-size:.88rem}.ac-mini b{color:#86efac}.ac-stones{display:flex;gap:8px;flex-wrap:wrap}.ac-stones span{padding:8px 10px;border:1px solid #51416f;border-radius:999px;color:#9d94b9}.ac-stones span.earned{border-color:#34d399;color:#a7f3d0;background:#10b98118}.ac-foot{margin-top:16px;color:#9388b3;font-size:.8rem}.ac-progress{height:7px;background:#ffffff15;border-radius:20px;overflow:hidden;margin:12px 0 18px}.ac-progress i{display:block;height:100%;background:linear-gradient(90deg,#a855f7,#38bdf8);transition:width .25s}.ac-question{padding:clamp(16px,3vw,28px)}.ac-meta{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;color:#a5b4fc;font-size:.78rem;font-weight:800}.ac-question h2{margin:16px 0 8px;font-size:clamp(1.15rem,3vw,1.55rem);line-height:1.5}.ac-en{color:#bdb3d8;line-height:1.6}.ac-options{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.ac-option{display:flex;gap:8px;align-items:flex-start;text-align:left;flex-direction:column;background:#ffffff08;border:1px solid #5d4a80;border-radius:12px;padding:13px;color:#f3efff;font:inherit;cursor:pointer;min-height:70px}.ac-option small{color:#bdb3d8}.ac-option:hover:not(:disabled){border-color:#c084fc;background:#a855f718}.ac-option:disabled{opacity:.75}.ac-fill{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.ac-fill input{flex:1;min-width:180px;margin:0}.ac-feedback{margin-top:16px;padding:15px;border-radius:12px;border:1px solid #51416f;background:#ffffff08;line-height:1.65}.ac-feedback.ok{border-color:#10b981;background:#064e3b33}.ac-feedback.bad{border-color:#fb7185;background:#88133722}.ac-feedback.hint{border-color:#60a5fa;background:#1e3a8a33}.ac-feedback h3{margin:0 0 8px}.ac-explain{border-top:1px solid #ffffff20;margin-top:12px;padding-top:12px}.ac-code{white-space:pre-wrap;background:#090712;border:1px solid #493c62;border-radius:10px;padding:14px;overflow:auto;color:#c4b5fd}.ac-ach{border:1px solid #4b4262;border-radius:12px;padding:14px;margin:10px 0;color:#b8afcf}.ac-ach.earned{border-color:#10b981;color:#d1fae5}.ac-ach p{margin-bottom:0}@media(max-width:680px){.ac-grid{grid-template-columns:1fr}.ac-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.ac-options{grid-template-columns:1fr}.ac-head{align-items:stretch}.ac-head button{align-self:flex-start}}`;
document.head.appendChild(academyStyle);
const academyMenuOriginal=menu;
menu=function(){academyMenuOriginal();const app=$('#app');if(app&&!app.querySelector('#academy-launch')){const b=document.createElement('button');b.id='academy-launch';b.className='academy-launch';b.textContent='🧠 Học viện Tri thức · Toán · English · Python';b.onclick=academyOpen;const style=document.createElement('style');style.textContent='#academy-launch{width:100%;margin:12px 0 4px;padding:14px;border:1px solid #8b5cf6;border-radius:12px;background:linear-gradient(100deg,#31205a,#12374a);color:#f5f3ff;font-weight:800;font-size:1rem;cursor:pointer}';document.head.appendChild(style);app.appendChild(b)}};
