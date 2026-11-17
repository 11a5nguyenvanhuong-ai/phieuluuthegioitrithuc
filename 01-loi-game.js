/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Lõi game: sinh câu Toán, ngân hàng Tiếng Anh/Tin học cũ, NPC, hầm ngục cũ, âm thanh cũ, lưu trữ, menu, trận quiz, cài đặt. */
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),sh=a=>a.sort(()=>Math.random()-.5),$=s=>document.querySelector(s);
const gcd=(a,b)=>b?gcd(b,a%b):a,T=v=>(v/10).toFixed(1).replace('.',',');
const SUB=[{k:'math',n:'Toán',e:'🔢',w:'Số Giới'},{k:'en',n:'Tiếng Anh',e:'📚',w:'Thư Khố Cổ Ngữ'},{k:'it',n:'Tin học',e:'🐍',w:'Thế Giới Bit'}];
const Z={math:['Đồng Cỏ Số','Hang Phân Số','Đền Đại Số','Thiên Đài Vô Cực'],en:['Vườn Chữ Cái','Hành Lang Sách','Tháp Ngữ Pháp','Thánh Đường Văn Chương'],it:['Khu Vườn Thuật Toán','Thư Viện Python','Tháp Dữ Liệu','Lõi Trí Tuệ Nhân Tạo']};
const TITLES=['Tập Sự','Lính Mới','Thám Hiểm','Hiệp Sĩ Tri Thức','Đại Hiệp Sĩ','Hiền Giả','Đại Hiền Giả','Huyền Thoại Tri Thức'],TX=[0,100,300,700,1500,3000,6000,10000];
const SM={math:['🟢 Nhầy số','👻 Bóng sương phân số','🗿 Người Đá khối hình'],en:['🐛 Sâu sách','📕 Sách tinh nghịch','👻 Bóng sương chữ'],it:['🐞 Con bug','🦠 Virus nhỏ','🤖 Người Máy hỏng']};
const BO={
math:['🟢 Nhầy Số Một','🐍 Rắn Cộng Trừ','🐻 Gấu Cửu Chương','🕷️ Nhện Phân Số','🗿 Người Đá Hình Khối','🐉 Rồng Thập Phân','🧙 Pháp Sư Số Âm','🧮 Hộ Vệ Phương Trình','🛡️ Hiệp Sĩ Cạnh Huyền','🦁 Sư Tử Hàm Số','🔥 Phượng Hoàng Giới Hạn','👑 Vua Vô Cực'],
en:['🐱 Mèo ABC','🐰 Thỏ Từ Vựng','🦜 Vẹt Phát Âm','🪱 Sâu Sách','🧚 Tiên Thì Hiện Tại','🦌 Hươu Giới Từ','👻 Bóng Sương Bất Quy Tắc','🐲 Rồng Mực','🧙‍♀️ Pháp Sư Điều Kiện','🧓 Hiền Triết Bị Động','🦁 Sư Tử Học Thuật','👸 Nữ Hoàng Ngôn Ngữ'],
it:['🐍 Rắn Thuật Toán','🧩 Người Đá Điều Kiện','🔁 Hộ Vệ Vòng Lặp','🧠 Pháp Sư Hàm','🗃️ Người Đá Dữ Liệu','🐞 Bọ Lỗi','🧵 Nhện Đệ Quy','🧮 Kẻ Gác Độ Phức Tạp','🤖 Người Máy Tối Ưu','🧙 Pháp Sư Python','🐉 Rắn Chín Đầu Thuật Toán','👑 Chúa Tể Python']};
/* Toán: sinh tự động theo lớp, 2 mẫu mỗi lớp */
const MG=[
[()=>{const a=R(1,10),b=R(1,10);return[`${a} + ${b} = ?`,a+b]},()=>{const a=R(1,10),b=R(1,10);return[`${a+b} - ${b} = ?`,a]}],
[()=>{const a=R(10,60),b=R(10,39);return[`${a} + ${b} = ?`,a+b]},()=>{const a=R(2,5),b=R(2,10);return[`${a} × ${b} = ?`,a*b]}],
[()=>{const a=R(6,9),b=R(2,9);return[`${a} × ${b} = ?`,a*b]},()=>{const a=R(2,9),b=R(2,10);return[`${a*b} ÷ ${a} = ?`,b]}],
[()=>{const a=R(100,999),b=R(2,9);return[`${a} × ${b} = ?`,a*b]},()=>{const a=R(2,9),b=R(100,999);return[`${a*b} ÷ ${a} = ?`,b]}],
[()=>{const a=R(11,99),b=R(11,99);return[`${T(a)} + ${T(b)} = ?`,a+b,T]},()=>{const p=[10,20,25,50,75][R(0,4)],n=20*R(2,30);return[`${p}% của ${n} bằng bao nhiêu?`,p*n/100]}],
[()=>{const g=R(2,12),x=R(2,9),y=R(2,9);return[`ƯCLN(${g*x}, ${g*y}) = ?`,g*gcd(x,y)]},()=>{const a=R(1,20),b=R(1,20);return[`(-${a}) + ${b} = ?`,b-a]}],
[()=>{const a=R(2,9),x=R(1,9),b=R(1,15);return[`Giải ${a}x + ${b} = ${a*x+b}. x = ?`,x]},()=>{const a=R(2,9),x=R(1,9),b=R(1,15);return[`Giải ${a}x - ${b} = ${a*x-b}. x = ?`,x]}],
[()=>{const k=R(1,6);return[`Tam giác vuông có hai cạnh góc vuông ${3*k} cm và ${4*k} cm. Cạnh huyền dài bao nhiêu cm?`,5*k]},()=>{const x=R(2,12);return[`Giá trị của x² + 2x + 1 khi x = ${x} là?`,x*x+2*x+1]}],
[()=>{const n=R(2,25);return[`Căn bậc hai số học của ${n*n} là?`,n]},()=>{const p=R(1,9),q=R(1,9);return[`x² - ${p+q}x + ${p*q} = 0 có hai nghiệm x1, x2. Tính x1 · x2.`,p*q]}],
[()=>{const h=R(1,8);return[`Hoành độ đỉnh của parabol y = x² - ${2*h}x + ${R(1,9)} là?`,h]},()=>{const a=R(-5,5),b=R(-5,5),c=R(-5,5),d=R(-5,5);return[`Cho u = (${a}; ${b}), v = (${c}; ${d}). Tích vô hướng u·v = ?`,a*c+b*d]}],
[()=>{const u=R(1,10),d=R(1,6),n=R(5,15);return[`Cấp số cộng có u1 = ${u}, công sai ${d}. Số hạng thứ ${n} bằng?`,u+(n-1)*d]},()=>{const a=R(1,5),b=R(1,9),k=R(1,5);return[`Cho y = ${a}x² + ${b}x. Tính y’(${k}).`,2*a*k+b]}],
[()=>{const k=R(1,6),b=R(1,6);return[`Tích phân từ 0 đến ${k} của (2x + ${b}) dx bằng?`,k*k+b*k]},()=>{const k=R(1,8);return[`Môđun của số phức z = ${3*k} + ${4*k}i là?`,5*k]}]];
/* Tiếng Anh và Tin học: ngân hàng mẫu theo nhóm 3 lớp (câu|đáp án) */
const EN=[
['cat|con mèo','dog|con chó','apple|quả táo','book|quyển sách','red|màu đỏ','school|trường học','water|nước','mother|mẹ'],
['library|thư viện','beautiful|xinh đẹp','yesterday|hôm qua','mountain|ngọn núi','kitchen|nhà bếp','favourite|yêu thích','weather|thời tiết','holiday|kỳ nghỉ'],
['environment|môi trường','knowledge|kiến thức','achieve|đạt được','ancient|cổ xưa','behaviour|hành vi','community|cộng đồng','decision|quyết định','dangerous|nguy hiểm'],
['sustainable|bền vững','hypothesis|giả thuyết','resilient|kiên cường','ambiguous|mơ hồ','inevitable|không thể tránh khỏi','comprehensive|toàn diện','controversial|gây tranh cãi','eloquent|hùng biện']];
const IT=[
['Máy tính làm theo một dãy bước rõ ràng để hoàn thành nhiệm vụ gọi là gì?|Thuật toán','Trong Python, văn bản thường được đặt trong loại dấu nào?|Dấu nháy đơn hoặc kép','Hàm print() dùng để làm gì?|Hiển thị dữ liệu ra màn hình','Tên biến score có thể dùng để lưu điểm số. Đúng hay sai?|Đúng','Python là ngôn ngữ phân biệt chữ hoa và chữ thường. Đúng hay sai?|Đúng','Comment một dòng trong Python bắt đầu bằng ký hiệu nào?|Dấu #','Kết quả của len("cat") là bao nhiêu?|3','Trong Python, phép gán giá trị dùng ký hiệu nào?|='],
['Chỉ số đầu tiên của list trong Python là bao nhiêu?|0','Kiểu dữ liệu True hoặc False gọi là gì?|bool','Toán tử so sánh bằng trong Python là gì?|==','Cấu trúc rẽ nhánh bắt đầu bằng từ khóa nào?|if','Hàm input() thường trả về dữ liệu kiểu gì?|str','Dùng từ khóa nào để định nghĩa hàm Python?|def','Điền toán tử kiểm tra x lớn hơn hoặc bằng 18: x ___ 18|>=','Vòng lặp nào thường duyệt qua từng phần tử của list?|for'],
['range(4) tạo ra các giá trị nào?|0, 1, 2, 3','7 / 2 trong Python 3 bằng bao nhiêu?|3.5','Toán tử chia lấy dư trong Python là gì?|%','Từ khóa nào trả kết quả từ hàm về nơi gọi?|return','Khối lệnh trong Python được xác định bằng gì?|Thụt lề','Cách bắt lỗi ngoại lệ trong Python dùng cấu trúc nào?|try/except','List có thể thay đổi sau khi tạo. Đúng hay sai?|Đúng','Sắp xếp tăng dần list numbers tại chỗ dùng phương thức nào?|sort()'],
['Tìm kiếm nhị phân yêu cầu dữ liệu như thế nào?|Đã sắp xếp','Độ phức tạp trung bình của tìm kiếm nhị phân là gì?|O(log n)','Độ phức tạp của duyệt một lần qua n phần tử thường là gì?|O(n)','Từ khóa tạo lớp trong Python là gì?|class','Từ khóa tạo hàm tạo của đối tượng Python thường dùng là gì?|__init__','Trong Python, tuple thường có đặc điểm gì so với list?|Không thể thay đổi','Câu lệnh nào đảm bảo đóng tài nguyên tệp theo ngữ cảnh?|with','Đệ quy là gì?|Hàm tự gọi lại chính nó']
];
function mkQ(k,f){const g=Math.ceil(f/10);
 if(k=='math'){const [t,a,fm]=MG[g-1][R(0,1)](),F=fm||String,w=[];
  for(const d of sh([1,-1,2,-2,3,-3,5,-5,10,-10])){const v=a+d;if(v!=a&&(a<0||v>=0)&&w.length<3)w.push(v)}
  const all=sh([a,...w]);return{t,o:all.map(F),c:all.indexOf(a)}}
 const B=(k=='en'?EN:IT)[Math.ceil(g/3)-1],L=(k=='en'?E2:I2)[g-1],P=[...L,...L,...B],e=P[R(0,P.length-1)].split('|'),[q,a]=e,
  o=e.length>2?sh(e.slice(1)):sh([a,...sh([...new Set([...B,...L].map(x=>x.split('|')).filter(x=>x.length==2&&x[1]!=a).map(x=>x[1]))]).slice(0,3)]);
 return{t:k=='en'&&e.length==2?`“${q}” nghĩa là gì?`:q,o,c:o.indexOf(a)}}
/* Câu hỏi riêng từng lớp: 'câu|đáp án' (distractor tự lấy) hoặc 'câu|đúng|sai|sai|sai' */
const E2=[
['red|màu đỏ','blue|màu xanh dương','fish|con cá','hello|xin chào'],
['house|ngôi nhà','sun|mặt trời','happy|vui vẻ','bird|con chim'],
['banana|quả chuối','window|cửa sổ','teacher|giáo viên','Monday|thứ Hai'],
['breakfast|bữa sáng','bicycle|xe đạp','She ___ a book every day.|reads|read|reading|readed','There ___ two cats.|are|is|am|be'],
['neighbour|hàng xóm','expensive|đắt đỏ','He is ___ football now.|playing|plays|play|played','I ___ to Hanoi yesterday.|went|go|goes|going'],
['delicious|ngon tuyệt','museum|bảo tàng','She is ___ than her sister.|taller|tall|tallest|more tall','The cat is ___ the table.|under|at|of|for'],
['achievement|thành tựu','pollution|ô nhiễm','I have lived here ___ 2015.|since|for|ago|during','This is the ___ film I have seen.|best|good|better|goodest'],
['generous|hào phóng','The book ___ by millions.|is read|reads|read|reading','If it rains, we ___ at home.|will stay|stayed|would stay|stays','I look forward to ___ you.|seeing|see|saw|seen'],
['enthusiastic|nhiệt tình','scholarship|học bổng','If I were you, I ___ study harder.|would|will|did|am','She said she ___ tired.|was|is|were|be'],
['reluctant|miễn cưỡng','phenomenon|hiện tượng','The report ___ by the team yesterday.|was written|wrote|writes|writing','Not only ___ smart, but also kind.|is she|she is|she|does she'],
['substantial|đáng kể','mitigate|giảm nhẹ','Had I known, I ___ come.|would have|will|would|had','The man ___ lives next door is a doctor.|who|which|whose|whom'],
['ubiquitous|có mặt khắp nơi','pragmatic|thực dụng','Hardly had she left ___ it rained.|when|than|that|as','She suggested ___ early.|leaving|to leave|leave|left']];
const I2=[
['Máy tính làm theo một dãy bước rõ ràng để hoàn thành nhiệm vụ gọi là gì?|Thuật toán|Hình nền|Mật khẩu|Tệp ảnh','Trong Python, dữ liệu văn bản thường được đặt trong loại dấu nào?|Dấu nháy đơn hoặc kép|Dấu ngoặc nhọn bắt buộc|Dấu phần trăm|Không cần dấu nào'],
['Tên biến Python `score` có thể dùng để lưu điểm số. Phát biểu này đúng hay sai?|Đúng|Sai|Chỉ lưu chữ|Chỉ lưu số âm','Hàm `print()` trong Python dùng để làm gì?|Hiển thị dữ liệu ra màn hình|Nhập dữ liệu từ bàn phím|Xóa tệp|Dừng máy'],
['Kết quả của `len("cat")` là gì?|3|2|4|0','Trong Python, `=` thường dùng để làm gì?|Gán giá trị cho biến|So sánh bằng trong mọi biểu thức|Tạo vòng lặp|Kết thúc chương trình'],
['Điền toán tử để kiểm tra x lớn hơn 10: `if x ___ 10:`|>|<|=|!=','Trong Python, `if` dùng để thực hiện điều gì?|Rẽ nhánh theo điều kiện|Lặp vô hạn bắt buộc|Khai báo lớp duy nhất|In dữ liệu tự động'],
['`range(4)` tạo ra dãy nào?|0, 1, 2, 3|1, 2, 3, 4|0, 1, 2, 3, 4|4, 3, 2, 1','Vòng lặp `for` thường dùng để làm gì?|Lặp qua một dãy giá trị|Chỉ khai báo số thực|Tạo chú thích|Đóng tệp tự động'],
['`7 / 2` trong Python 3 cho kết quả nào?|3.5|3|4|Lỗi cú pháp','Toán tử `//` trong Python dùng cho phép nào?|Chia lấy phần nguyên theo quy tắc floor|Chia thường luôn có số thập phân|Lũy thừa|Chia lấy dư'],
['Một hàm Python được định nghĩa bằng từ khóa nào?|def|func|function|make','Từ khóa `return` trong hàm dùng để làm gì?|Trả kết quả về nơi gọi hàm|In kết quả bắt buộc|Tạo biến toàn cục|Lặp qua danh sách'],
['Danh sách Python có thể chứa các phần tử và thay đổi sau khi tạo. Đúng hay sai?|Đúng|Sai|Chỉ chứa số|Không có chỉ số','Chỉ số phần tử đầu tiên của list Python là bao nhiêu?|0|1|-1|Tùy hệ điều hành'],
['Tìm kiếm nhị phân yêu cầu dữ liệu được sắp xếp. Đúng hay sai?|Đúng|Sai|Chỉ đúng với chuỗi|Chỉ đúng với số âm'],
['Trong Python, ngoại lệ thường được xử lý bằng cấu trúc nào?|try/except|if/else duy nhất|for/while|def/class'],
['Với danh sách đã sắp xếp, tìm kiếm nhị phân có độ phức tạp thời gian nào?|O(log n)|O(n²)|O(2ⁿ)|O(1) trong mọi trường hợp'],
['Trong Python, kết quả của [1, 2, 3][-1] là gì?|3|1|2|Báo lỗi chỉ số','Từ khóa nào dùng để khai báo một lớp (class) trong Python?|class|def|object|struct','Hàm nào trả về số phần tử của một danh sách trong Python?|len()|size()|count()|length()','Kết quả của "ab" * 3 trong Python là gì?|ababab|ab3|aaabbb|Báo lỗi cú pháp','Hàm nào đọc một dòng chữ người dùng gõ từ bàn phím trong Python?|input()|scan()|read_line()|get()','Kết quả của phép tính 10 % 3 trong Python là gì?|1|3|0|3.33','Trong cơ sở dữ liệu, khóa chính (primary key) dùng để làm gì?|Phân biệt duy nhất từng bản ghi|Lưu mật khẩu người dùng|Sao chép cả bảng|Xóa dữ liệu thừa','Thuật toán sắp xếp nổi bọt thực hiện thao tác nào lặp đi lặp lại?|So sánh và đổi chỗ hai phần tử kề nhau|Chia đôi danh sách|Xóa phần tử lớn nhất|Nhân đôi từng phần tử','Giao thức nào thường dùng để truyền trang web có mã hóa?|HTTPS|FTP|SMTP|POP3','Trong Python, kiểu dữ liệu nào lưu cặp khóa - giá trị?|dict|list|tuple|set']
];
/* NPC kiến thức theo môn và nhóm lớp, hộp thoại gõ chữ, cửa hàng Bác Sáu, bục nhận thưởng */
const NPC={math:['🐢','Giáo sư Rùa Thông'],en:['📖','Bà Nghĩa'],it:['🤖','Người Máy Bảy']};
const FACT={
math:[['Số 0 là số duy nhất không dương cũng không âm.','Phép nhân là phép cộng lặp lại: 3 × 4 = 4 + 4 + 4.'],['Phân số 1/2 bằng 2/4 và bằng 50%.','Số thập phân 0,5 chính là một nửa.'],['Tổng ba góc của một tam giác luôn bằng 180°.','Số âm nhân số âm cho kết quả dương.'],['Số π là tỉ số giữa chu vi và đường kính hình tròn.','Đạo hàm cho biết tốc độ thay đổi của hàm số.']],
en:[['Tiếng Anh có 26 chữ cái.','Từ “apple” và “ant” đều bắt đầu bằng chữ A.'],['Động từ thêm -s khi chủ ngữ là he, she, it: she plays.','Từ “yesterday” báo hiệu thì quá khứ.'],['Câu điều kiện loại 1: If it rains, we stay home.','“Affect” thường là động từ, “effect” thường là danh từ.'],['Câu bị động: The book was written by her.','Đuôi -ing diễn tả hành động đang diễn ra: She is reading.']],
it:[['Máy tính hiểu mọi thứ bằng số 0 và 1.','Hãy luôn lưu bài trước khi tắt máy nhé.'],['Mật khẩu mạnh nên có chữ hoa, chữ thường, số và ký hiệu.','Internet là mạng nối hàng tỉ thiết bị.'],['Thuật toán là các bước rõ ràng để giải một bài toán.','Con bọ máy tính nổi tiếng là một con bướm đêm kẹt trong máy Harvard Mark II năm 1947.'],['Độ phức tạp O(log n) tăng chậm hơn nhiều so với O(n).','Đệ quy luôn cần một điều kiện dừng.']]};
function typeIt(f,s='#tx'){const e=$(s);if(!e)return;let i=0;const h=setInterval(()=>{if($(s)!==e){clearInterval(h);return}e.textContent=f.slice(0,++i);if(i>=f.length)clearInterval(h)},25)}
function buy(i){const m=$('#gm');if(D.coins<60){m.textContent='Không đủ xu edu 🪙';return}D.coins-=60;D.free[i]++;sfx('buy');save();m.textContent=`Đã mua! Còn ${D.coins} 🪙 · lượt miễn phí: ${D.free.join(' / ')}`}
function rest(){const n=NPC[G.k],f=FACT[G.k][Math.ceil(G.f/30)-1][R(0,1)];setTimeout(()=>typeIt(f),0);
 return `<div class="dlg"><b>${IM(NSP[G.k][0],NSP[G.k][1])} ${n[1]}</b><p id="tx"></p></div><div class="shop"><b>🛒 Bác Sáu bán thêm lượt</b><br>${['✂️ Loại 2','💡 Gợi ý','🔄 Đổi câu'].map((e,i)=>`<button onclick="buy(${i})">${e} · 60 🪙</button>`).join('')}<small id="gm">Bạn có ${D.coins} 🪙</small></div>`}
function podium(w,t,d){$('#app').className='';if(!w)return `<h2>${t}</h2><p>${d}</p>`;
 const mx=G.boss?5:3,st=G.h==mx?3:G.h>=2?2:1,c=G.rep?0:G.boss?30:10,x=G.rep?0:20+(G.boss?100:0)+G.ok*5;
 return `<h2>${t}</h2><div class="pod"><div class="st s2"><span>🪙</span><b>+${c}</b></div><div class="st s1"><i>${IM('hero')}</i><span>${'⭐'.repeat(st)}</span><b>+${x} XP</b></div><div class="st s3"><span>${G.boss?'🏆':'🎖️'}</span><b>${G.boss?'Boss':'Tầng '+G.f}</b></div></div><p>${G.rep?'Tầng luyện tập: không nhận thưởng':''}${d.replace(/^[^<]*/,'')}</p>${rest()}`}
/* Chế độ khám phá hầm ngục (màn hình ngang): đi bộ, chạm thử thách để vào trận, tới cuối là phòng boss */
const cv=$('#cv'),cx=cv.getContext('2d'),keys={};let X=null,W=0,H=0,last=0,raf=0;
function size(){cv.width=W=innerWidth;cv.height=H=innerHeight}
addEventListener('resize',size);
function leave(){cancelAnimationFrame(raf);cv.style.display='none';$('#ui').style.display='none';$('#nd').style.display='none';$('#app').style.display='';document.body.classList.remove('ex')}
function hud(){const s=SUB.find(x=>x.k==X.k),p=D.p[X.k];$('#hud').innerHTML=`${s.e} <b>${s.w}</b> · ${Z[X.k][Math.ceil(X.g/3)-1]} · Lớp ${X.g}<br>Tầng ${p.cur}/120 · 🪙 ${D.coins} · ⭐ ${D.xp} · ${title()}<br><small>← → di chuyển · E nói chuyện · đi tới thử thách để vào trận</small>`}
function explore(k){const p=D.p[k],g=Math.ceil(p.cur/10),fl=[];
 for(let i=0;i<10;i++){const f=(g-1)*10+i+1;fl.push({f,x:760+i*440,boss:i==9,alive:f>=p.cur})}
 const nx=fl.find(o=>o.alive);
 X={k,g,fl,len:760+9*440+500,x:Math.max(120,nx.x-460),face:1,t:0,t2:0,npc:200,talk:0};
 view='ex';G=null;keys.l=keys.r=0;document.body.dataset.w=k;document.body.classList.remove('boss');document.body.classList.add('ex');
 $('#app').style.display='none';cv.style.display='block';$('#ui').style.display='block';size();hud();last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function loop(now){if(view!='ex')return;const dt=Math.min(.05,(now-last)/1000);last=now;
 const dir=X.talk?0:(keys.r?1:0)-(keys.l?1:0);X.t2+=dt;if(dir){X.x+=dir*240*dt;X.face=dir;X.t+=dt}
 X.x=Math.max(60,Math.min(X.len-60,X.x));
 const nx=X.fl.find(o=>o.alive);if(nx&&X.x>nx.x-90){X.x=nx.x-90;keys.l=keys.r=0;return start(X.k)}
 $('#talk').style.display=!X.talk&&Math.abs(X.x-X.npc)<90?'block':'none';
 render();raf=requestAnimationFrame(loop)}
function render(){const s=H/400,vw=W/s,cam=Math.max(0,Math.min(X.len-vw,X.x-vw*.35)),gy=300,f0=X.fl[9],mv=(keys.l||keys.r)&&!X.talk;
 cx.setTransform(s,0,0,s,0,0);
 const C={math:['#3b2410','#8a5a26'],en:['#0b1b3a','#27498a'],it:['#021a14','#0b6b50']}[X.k],gr=cx.createLinearGradient(0,0,0,400);
 gr.addColorStop(0,C[0]);gr.addColorStop(1,C[1]);cx.fillStyle=gr;cx.fillRect(0,0,vw,400);
 cx.fillStyle='rgba(0,0,0,.28)';for(let i=-1;i<vw/180+2;i++)cx.fillRect(i*180-(cam*.4)%180,30,44,270);
 if(f0.alive){cx.fillStyle='rgba(150,0,0,.3)';cx.fillRect(f0.x-460-cam,0,vw,400)}
 cx.fillStyle='#1a1226';cx.fillRect(0,gy,vw,100);cx.fillStyle='#2f2147';for(let i=-1;i<vw/60+2;i++)cx.fillRect(i*60-cam%60,gy,2,100);
 cx.textAlign='center';cx.font='34px serif';
 for(let x=300;x<X.len;x+=440)cx.fillText('🔥',x-cam,160);
 cx.font='48px serif';cx.fillText(NPC[X.k][0],X.npc-cam,gy+12);
 X.fl.forEach(o=>{if(!o.alive)return;const sx=o.x-cam;if(sx<-120||sx>vw+120)return;
  cx.font=(o.boss?'104px':'54px')+' serif';cx.fillText((o.boss?BO[X.k][X.g-1]:SM[X.k][o.f%3]).split(' ')[0],sx,gy+12+Math.sin(X.t2*3+o.f)*3);
  cx.font='bold 14px sans-serif';cx.fillStyle='#fff';cx.fillText((o.boss?'👑 BOSS · ':'Tầng ')+o.f,sx,gy+34)});
 cx.save();cx.translate(X.x-cam,gy+12-(mv?Math.abs(Math.sin(X.t*10))*5:0));cx.scale(X.face,1);cx.font='48px serif';cx.fillText('🦸',0,0);cx.restore();
 cx.font='28px serif';cx.fillText('🦉',X.x-cam-50*X.face,gy-48+Math.sin(X.t2*4)*6)}
function exKey(e,d){const k=e.key.toLowerCase();
 if(k=='arrowleft'||k=='a'){keys.l=d;e.preventDefault()}else if(k=='arrowright'||k=='d'){keys.r=d;e.preventDefault()}
 else if(d&&k=='e'){if(X.talk)closeTalk();else if(Math.abs(X.x-X.npc)<90)talk()}else if(d&&k=='escape')menu()}
addEventListener('keyup',e=>{if(view=='ex')exKey(e,0)});
function talk(){X.talk=1;const n=NPC[X.k];$('#nn').innerHTML=IM(NSP[X.k][0],NSP[X.k][1])+' '+n[1];$('#nd').style.display='block';typeIt(FACT[X.k][Math.ceil(X.g/3)-1][R(0,1)],'#nx')}
function closeTalk(){X.talk=0;$('#nd').style.display='none'}
/* Hầm ngục nhìn từ trên xuống (ghi đè bản cũ ở trên): chuỗi 10 phòng, mỗi phòng 1 thử thách = 1 tầng, cửa 🔒 mở khi vượt thử thách, phòng cuối là boss */
const RW=12,RH=10,SP=4.2;let MW=60,MH=20;const jy={x:0,y:0},DEC={math:['🔢','➕','📐'],en:['📚','🕯️','📜'],it:['💾','🔌','💡']};let TM,DI,ai=0;
let RM=i=>{const r=i<5?0:1,c=r?4-(i-5):i;return{x:c*RW,y:r*RH}},roomAt=(px,py)=>{const c=Math.floor(px/RW);return Math.floor(py/RH)?9-c:c};
function build(){TM=[];DI=new Int8Array(MW*MH).fill(-1);for(let y=0;y<MH;y++)TM.push(new Array(MW).fill(1));
 for(let i=0;i<10;i++){const{x,y}=RM(i);for(let a=1;a<RW-1;a++)for(let b=1;b<RH-1;b++)TM[y+b][x+a]=0;
  /* Mỗi lần vào hầm tạo mê cung phụ ngẫu nhiên. Luôn chừa đường chữ thập ở giữa,
     lối xuất hiện ở phía dưới và khoảng trống quanh NPC để không thể bị kẹt. */
  const partitions=[2,4,8,10].filter(()=>Math.random()>.28);
  for(const px of partitions){for(let py=1;py<RH-1;py++){if(py===5||Math.random()<.34)continue;
    if(px===4&&py>=7)continue; /* chừa khu vực NPC */
    if(px===10&&py===8)continue;
    TM[y+py][x+px]=1;
  }}
  /* Đường chính bảo đảm luôn thông từ cửa vào tới thử thách/boss. */
  for(let py=1;py<RH-1;py++)TM[y+py][x+6]=0;
  for(let px=1;px<RW-1;px++)TM[y+5][x+px]=0;
  for(let py=6;py<=8;py++)TM[y+py][x+6]=0;
  for(let py=6;py<=8;py++)for(let px=3;px<=4;px++)TM[y+py][x+px]=0;
  if(i<9){const ds=i<4?[[x+RW-1,y+5],[x+RW,y+5]]:i==4?[[x+5,y+RH-1],[x+5,y+RH]]:[[x,y+5],[x-1,y+5]];ds.forEach(([a,b])=>{TM[b][a]=2;DI[b*MW+a]=i})}}}
const solid=(tx,ty)=>tx<0||ty<0||tx>=MW||ty>=MH||TM[ty][tx]==1||(TM[ty][tx]==2&&DI[ty*MW+tx]>=ai);
const hit=(px,py)=>solid(Math.floor(px-.3),Math.floor(py-.3))||solid(Math.floor(px+.3),Math.floor(py-.3))||solid(Math.floor(px-.3),Math.floor(py+.3))||solid(Math.floor(px+.3),Math.floor(py+.3));
function step(dx,dy){const nx=X.x+dx,ny=X.y+dy;if(!hit(nx,ny)){X.x=nx;X.y=ny}}
function nearNpc(){const r=roomAt(X.x,X.y);if(r>ai)return 0;const m=RM(r);return Math.hypot(X.x-m.x-3.5,X.y-m.y-7.5)<1.5}
function hud(){const s=SUB.find(x=>x.k==X.k),p=D.p[X.k],theme={math:'ĐỀN ĐẠI SỐ',en:'THƯ KHỐ CỔ NGỮ',it:'THẾ GIỚI BIT'}[X.k];$('#hud').innerHTML=`${s.e} <b>${s.w}</b> · ${theme}<br>${Z[X.k][Math.ceil(X.g/3)-1]} · Lớp ${X.g}<br>Tầng ${p.cur}/120 · 🪙 ${D.coins} · ⭐ ${D.xp} · ${title()}<br><small>WASD / mũi tên hoặc cần gạt · E nói chuyện · đến gần thử thách để vào trận</small>`}
function entranceScene(k){/* đã bỏ: cảnh vào cổng được thực hiện ngoài trời (nhân vật tự đi vào cổng) */}
function explore(k){land();entranceScene(k);const p=D.p[k],g=Math.ceil(p.cur/10);ai=p.cur-(g-1)*10-1;build();const m=RM(ai),keep=X&&X.k==k&&X.g==g&&roomAt(X.x,X.y)<=ai;
 X={k,g,x:keep?X.x:m.x+6,y:keep?X.y:m.y+8,face:1,t:0,t2:0,talk:0};
 view='ex';G=null;keys.l=keys.r=keys.u=keys.d=0;jy.x=jy.y=0;document.body.dataset.w=k;document.body.classList.remove('boss');document.body.classList.add('ex');
 $('#app').style.display='none';cv.style.display='block';$('#ui').style.display='block';size();hud();last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function loop(now){if(view!='ex')return;const dt=Math.min(.05,(now-last)/1000);last=now;
 let dx=(keys.r?1:0)-(keys.l?1:0)+jy.x,dy=(keys.d?1:0)-(keys.u?1:0)+jy.y;const mg=Math.hypot(dx,dy);
 if(X.talk||!mg){dx=dy=0}else if(mg>1){dx/=mg;dy/=mg}
 X.t2+=dt;X.dt=dt;X.mv=dx||dy;if(X.mv){X.t+=dt;if(dx)X.face=dx>0?1:-1;step(dx*SP*dt,0);step(0,dy*SP*dt)}
 const o=RM(ai);if(Math.hypot(X.x-o.x-6,X.y-o.y-5)<(ai==9?1.7:1.1)){keys.l=keys.r=keys.u=keys.d=0;jy.x=jy.y=0;return start(X.k)}
 $('#talk').style.display=!X.talk&&nearNpc()?'block':'none';render();raf=requestAnimationFrame(loop)}
function render(){const ts=H/9,vw=W/ts,cxm=Math.max(0,Math.min(MW-vw,X.x-vw/2)),cym=Math.max(0,Math.min(MH-9,X.y-4.5)),
 P={math:['#6b4a2b','#5e4125','#2b1a0c'],en:['#2c4a7c','#274270','#0b1a35'],it:['#0e3b33','#0b322c','#021512']}[X.k],
 sx=x=>(x-cxm)*ts,sy=y=>(y-cym)*ts,E=(c,x,y,z)=>{cx.font=(z*ts|0)+'px serif';cx.fillText(c,sx(x),sy(y))},S=(n,sw,x,y,z)=>{const c=spr(n,sw),h=z*ts,w2=h*c.width/c.height;cx.drawImage(c,sx(x)-w2/2,sy(y)-h/2,w2,h)},w=Math.ceil(ts);
 cx.setTransform(1,0,0,1,0,0);cx.imageSmoothingEnabled=false;cx.fillStyle='#000';cx.fillRect(0,0,W,H);cx.textAlign='center';cx.textBaseline='middle';
 for(let ty=cym|0;ty<Math.min(MH,cym+10);ty++)for(let tx=cxm|0;tx<Math.min(MW,cxm+vw+1);tx++){const v=TM[ty][tx],px=sx(tx),py=sy(ty);
  if(v==1){cx.fillStyle=P[2];cx.fillRect(px,py,w,w);cx.fillStyle='rgba(255,255,255,.08)';cx.fillRect(px,py,w,2);cx.fillRect(px,py+w/2,w,2);cx.fillRect(px+((ty&1)?w/4:3*w/4),py,2,w/2);cx.fillRect(px+((ty&1)?3*w/4:w/4),py+w/2,2,w/2)}
  else{cx.fillStyle=(tx+ty)&1?P[0]:P[1];cx.fillRect(px,py,w,w);if((tx*7+ty*13)%5==0){cx.fillStyle='rgba(0,0,0,.18)';cx.fillRect(px+w*.3,py+w*.4,w*.12,w*.12)}if(v==2){if(DI[ty*MW+tx]<ai){cx.strokeStyle='#fbbf24';cx.strokeRect(px+2,py+2,w-4,w-4)}else{cx.fillStyle='#3a2a14';cx.fillRect(px,py,w,w);S('lock',0,tx+.5,ty+.5,.9)}}}}
 for(let i=0;i<10;i++){const m=RM(i);[3,8].forEach(a=>S('torch',0,m.x+a+.5,m.y+.7,.9));DEC[X.k].forEach((d,j)=>S(DS[X.k],0,m.x+[2,9,9][j]+.5,m.y+[2,2,7][j]+.5,.9));
  if(i<=ai)S(NSP[X.k][0],NSP[X.k][1],m.x+3.5,m.y+7.5,1.2);
  if(i>=ai){const f=(X.g-1)*10+i+1,b=i==9,bob=Math.sin(X.t2*3+i)*.06;{const q=monSp(X.k,f);if(b){cx.shadowColor='#ff3b8d';cx.shadowBlur=ts*.6}S(q[0],q[1],m.x+6,m.y+(b?(q[0][0]=='X'?7.2-bz(q)/2:5.7):5)+bob,b?bz(q):1.3);cx.shadowBlur=0}
   cx.font='bold '+(.28*ts|0)+'px sans-serif';cx.fillStyle='#fff';cx.fillText((b?'👑 BOSS · ':'Tầng ')+f,sx(m.x+6),sy(m.y+5+(b?2.7:.95)))}
  if(i>ai){cx.fillStyle='rgba(0,0,0,.62)';cx.fillRect(sx(m.x),sy(m.y),RW*ts,RH*ts)}else if(i==9){cx.fillStyle='rgba(150,0,0,.2)';cx.fillRect(sx(m.x),sy(m.y),RW*ts,RH*ts)}}
 cx.save();cx.translate(sx(X.x),sy(X.y)-(X.mv?Math.abs(Math.sin(X.t*10))*ts*.08:0));cx.scale(X.face,1);{const c=spr('hero'),h=1.5*ts,w=h*c.width/c.height;cx.drawImage(c,-w/2,-h*.55,w,h)}cx.restore();
 S('owl',0,X.x-.7*X.face,X.y-.75+Math.sin(X.t2*4)*.08,.75)}
function exKey(e,d){const k=e.key.toLowerCase(),m={arrowleft:'l',a:'l',arrowright:'r',d:'r',arrowup:'u',w:'u',arrowdown:'d',s:'d'}[k];
 if(m){keys[m]=d;e.preventDefault()}else if(d&&k=='e'){if(X.talk)closeTalk();else if(nearNpc())talk()}else if(d&&k=='escape')menu()}
const jv=$('#joy'),kn=$('#knob');let ja=0;
function jm(e){const b=jv.getBoundingClientRect(),R=b.width/2;let x=(e.clientX-b.left-R)/R,y=(e.clientY-b.top-R)/R;const m=Math.hypot(x,y);if(m>1){x/=m;y/=m}jy.x=Math.abs(x)<.2?0:x;jy.y=Math.abs(y)<.2?0:y;kn.style.transform=`translate(${x*35}px,${y*35}px)`}
jv.onpointerdown=e=>{ja=1;jv.setPointerCapture(e.pointerId);jm(e)};jv.onpointermove=e=>{if(ja)jm(e)};jv.onpointerup=jv.onpointercancel=()=>{ja=0;jy.x=jy.y=0;kn.style.transform=''};
/* PIXEL ART: mỗi sprite là lưới ký tự, mỗi ký tự = 1 màu trong PAL; 'swap' đổi màu để tái sử dụng */
const PAL={k:'#1a1226',w:'#f4f1ff',g:'#aeb8c9',G:'#6b768c',b:'#3b82f6',B:'#1e3a8a',s:'#f5c9a0',r:'#e11d48',R:'#9f1239',y:'#fbbf24',Y:'#b45309',p:'#a855f7',P:'#6b21a8',n:'#9a6b3f',N:'#5b3a1d',l:'#4ade80',L:'#15803d',c:'#22d3ee',C:'#0e7490',o:'#fb923c',e:'#ff3b8d'};
const SPR={
hero:'...kkkkkk...|..kggggggk..|..kgsksskg..|..kgsssskg..|.bkkggggkkb.|.bbkgwwgkbb.|.bbkggggkbb.|.bBkggggkBb.|..kkggggkk..|...kGkkGk...|...kGk.kGk..|...kkk.kkk..',
owl:'.kp......pk.|.kpkkkkkkpk.|.kppppppppk.|kpwkppppwkpk|kppppyyppppk|kpPpwwwwpPpk|kPPpwwwwpPPk|.kPPpwwpPPk.|..kPPPPPPk..|...kykkyk...|....kk..kk..',
turtle:'...kkkkkk...|..kllllllk..|..kwkllkwk..|..kllllllk..|..kllkkllk..|.kkLLLLLLkk.|kLLlLLLLlLLk|kLlLLllLLlLk|kLLlLLLLlLLk|.kkLLLLLLkk.|..klk..klk..|..kkk..kkk..',
robot:'.....yy.....|.....kk.....|..kkkkkkkk..|..kggggggk..|..kcckkcck..|..kggggggk..|..kgkkkkgk..|.kkkkkkkkkk.|.kGgggggGgk.|.kGgccccGgk.|..kGkkkkGk..|..kkk..kkk..',
slime:'....kkkk....|...kllllk...|..klllllllk.|.klwkllwkLk.|klllllllllLk|kllllkkllLLk|kLLLllllLLLk|.kLLLLLLLLk.|..kkkkkkkk..',
ghost:'...kkkkkk...|..kwwwwwwk..|.kwwwwwwwwk.|.kwkkwwkkwk.|.kwkkwwkkwk.|.kwwwwwwwwk.|.kwwwkkwwwk.|.kwwwwwwwwk.|kwwkwwwwkwwk|kk.kk..kk.kk',
golem:'..kkkkkkkk..|.kGggggggGk.|.kgkyggkygk.|.kGggggggGk.|kkGGGGGGGGkk|kgkggGGggkgk|kgkgGggGgkgk|kkkgGGGGgkkk|..kgkggkgk..|..kkk..kkk..',
book:'..kkkkkkkk..|.krrrrrrrrk.|.krwkrrwkrk.|.krrrrrrrrk.|.krwkwkwkrk.|.kRRRRRRRRk.|.kwwwwwwwwk.|.kkkkkkkkkk.|..k......k..|..kk....kk..',
bug:'..k......k..|...k....k...|....kkkk....|...kllllk...|..kwkllkwk..|.kllllllllk.|kkLLLLLLLLkk|kLLlLLLLlLLk|.kLLLLLLLLk.|.k.kkkkkk.k.',
virus:'k....kk....k|.k..kppk..k.|..kppppppk..|kpppwkppwppk|.kpppppppPk.|kkpppkkpppkk|.kPPPPPPPPk.|..kkkkkkkk..|.k..k..k..k.|k....kk....k',
beast:'.kk......kk.|knnk....knnk|.knnnnnnnnk.|knnennnnenk.|knnnnoonnnnk|knnnkwkwknnk|.knnnnnnnnk.|.kNNNNNNNNk.|kNNNkNNkNNNk|kkk..kk..kkk',
dragon:'.k........k.|.kk.kkkk.kk.|kLLkllllkLLk|kLLkellekLLk|kLLLklllkLLk|.kLLkwkwkLk.|..kkllllkk..|...kllllk...|...kLllLk...|..kLk..kLk..|..kkk..kkk..',
spider:'k...k..k...k|.k..kkkk..k.|..kkppppkk..|kkkpeppepkkk|..kppppppk..|k.kPPPPPPk.k|.k.kPPPPk.k.|k...kkkk...k',
num:'kkkkkkkk|kyyyyyyk|kyYYYYyk|kyyyyYyk|kyyyYyyk|kyyYyyyk|kyyYyyyk|kkkkkkkk',
books:'.kkkkkk.|kbbbbbbk|kBBBBBBk|kkkkkkkk|.krrrrk.|.kRRRRk.|.kkkkkk.',
chip:'k.k.k.k.|kkkkkkkk|kCCCCCCk|kCcccCCk|kCcCCcCk|kCCCCCCk|kkkkkkkk|k.k.k.k.',
torch:'...oo...|..oyyo..|..oyyo..|...oo...|...nn...|...nn...|..kNNk..|..kkkk..',
lock:'..kkkk..|.kGggGk.|.kg..gk.|kkkkkkkk|kyyyyyyk|kyykkyyk|kyyYYyyk|kkkkkkkk'};
const SC={};
function spr(n,sw){const key=n+(sw?JSON.stringify(sw):'');if(SC[key])return SC[key];const rows=SPR[n].split('|'),c=document.createElement('canvas');c.width=rows[0].length;c.height=rows.length;const g=c.getContext('2d');
 rows.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch=='.')return;g.fillStyle=(sw&&sw[ch])||PAL[ch];g.fillRect(x,y,1,1)}));return SC[key]=c}
const IM=(n,sw)=>{const c=spr(n,sw||0);return `<img class="px" alt="" ${n[0]=='X'?`style="height:calc(var(--u,9px)*${c.height})" `:''}src="${c.u||(c.u=c.toDataURL())}">`};
const DS={math:'num',en:'books',it:'chip'},NSP={math:['turtle',0],en:['hero',{g:'#e9d5ff',b:'#a855f7',B:'#6b21a8'}],it:['robot',0]};
const MS={math:[['slime',0],['ghost',{w:'#fde68a'}],['golem',0]],en:[['slime',{l:'#fb923c',L:'#9a3412'}],['book',0],['ghost',{w:'#bfdbfe'}]],it:[['bug',0],['virus',0],['robot',{c:'#f87171'}]]};
const BS={
math:[['slime',0],['dragon',{L:'#15803d',l:'#86efac'}],['beast',{n:'#6b7280',N:'#374151'}],['spider',0],['golem',0],['dragon',{L:'#b45309',l:'#fbbf24'}],['hero',{g:'#4c1d95',b:'#7c3aed',B:'#2e1065'}],['beast',{n:'#b91c1c',N:'#7f1d1d'}],['hero',{g:'#6b768c',b:'#92400e'}],['beast',{n:'#f59e0b',N:'#b45309'}],['dragon',{L:'#dc2626',l:'#fb923c'}],['dragon',{L:'#4c1d95',l:'#a855f7'}]],
en:[['beast',{n:'#e5e7eb',N:'#9ca3af'}],['beast',{n:'#fbcfe8',N:'#f472b6'}],['owl',{p:'#22c55e',P:'#15803d'}],['slime',{l:'#fb923c',L:'#9a3412'}],['owl',{p:'#f9a8d4',P:'#db2777'}],['beast',{n:'#a16207',N:'#713f12'}],['ghost',{w:'#c4b5fd'}],['dragon',{L:'#1e293b',l:'#475569'}],['hero',{g:'#166534',b:'#15803d',B:'#14532d'}],['ghost',{w:'#e2e8f0'}],['beast',{n:'#2563eb',N:'#1e3a8a'}],['hero',{g:'#fbbf24',b:'#be185d',B:'#831843'}]],
it:[['beast',{n:'#9ca3af',N:'#4b5563'}],['robot',0],['turtle',0],['spider',{p:'#22d3ee',P:'#0e7490'}],['ghost',{w:'#4ade80'}],['beast',{n:'#22d3ee',N:'#0e7490'}],['bug',0],['golem',{g:'#22d3ee',G:'#0e7490'}],['beast',{n:'#92400e',N:'#451a03'}],['robot',{c:'#facc15'}],['dragon',{L:'#0e7490',l:'#22d3ee'}],['robot',{g:'#334155',G:'#0f172a',c:'#4ade80'}]]};
const monSp=(k,f)=>f%10==0?(CUS[k+(f/10-1)]?['X'+k+(f/10-1),(BD[k][f/10-1]||[0,0])[1]]:['B:'+k+':'+(f/10-1),BS[k][f/10-1][1]]):MS[k][f%3];
/* ÂM THANH: tạo bằng WebAudio (không cần file), nhạc nền arpeggio theo từng thế giới */
let AC=null,mute=0,mi=0,GV=1;const SCL={math:[262,330,392,330],en:[294,349,440,349],it:[220,262,330,262]};
function au(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state=='suspended')AC.resume()}catch(e){}return AC}
function tone(f,d,ty,v,t0,f2){const a=au();if(!a||!GV)return;const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+(t0||0);o.type=ty||'square';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime((v||.12)*GV,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d)}
const SFX={ok:()=>{tone(660,.1,'square',.1);tone(990,.15,'square',.1,.09)},bad:()=>tone(160,.3,'sawtooth',.12,0,70),win:()=>[523,659,784,1046].forEach((f,i)=>tone(f,.18,'square',.1,i*.12)),lose:()=>[392,330,262,196].forEach((f,i)=>tone(f,.25,'triangle',.14,i*.18)),buy:()=>{tone(880,.08,'square',.08);tone(1320,.12,'square',.08,.07)},door:()=>tone(140,.35,'sawtooth',.08,0,70),boss:()=>[110,98,82].forEach((f,i)=>tone(f,.4,'sawtooth',.13,i*.3))};
const sfx=n=>{try{GV=cfg.sfx?cfg.sv:0;SFX[n]()}catch(e){}};
addEventListener('pointerdown',()=>au(),{once:true});addEventListener('keydown',()=>au(),{once:true});
/* BOSS RIÊNG: thân mẫu + màu riêng + biểu tượng 5x5 lơ lửng trên đầu (số 1, dấu cộng trừ, chữ A, đồng hồ, { }, máy chủ...) */
const GL={
math:['..y..|.yy..|..y..|..y..|.yyy.','..y..|.yyy.|..y..|.....|.yyy.','y...y|.y.y.|..y..|.y.y.|y...y','..y..|.....|yyyyy|.....|..y..','yyyyy|y...y|y...y|y...y|yyyyy','.....|..y..|..y..|..y..|.y...','.....|.....|wwwww|.....|.....','.yyy.|..y..|yyyyy|y.y.y|y.y.y','y....|yy...|y.y..|y..y.|yyyyy','.yy..|y..y.|....y|.....|.....','y.y.y|.yyy.|..y..|.yyy.|y.y.y','.....|yy.yy|y.y.y|yy.yy|.....'],
en:['.www.|w...w|wwwww|w...w|w...w','rrrrr|rrrrr|rrrrr|rr.rr|r...r','..c..|c.c.c|c.c.c|ccccc|ccccc','ooooo|o...o|o.n.o|o...o|ooooo','.www.|w.w.w|w..ww|w...w|.www.','..y..|.yyy.|y.y.y|..y..|..y..','.www.|w...w|..ww.|.....|..w..','..p..|.ppp.|ppppp|ppppp|.ppp.','w.www|w.w..|w.ww.|w.w..|w.w..','.....|.w.w.|w.w.w|.....|.....','..y..|.yyy.|yyyyy|.y.y.|.y.y.','y.y.y|yyyyy|yyyyy|yyyyy|.....'],
it:['c.c.c|ccccc|.ccc.|..c..|..c..','ccc..|c.c..|ccc..|.c...|.cc..','ccccc|c...c|c.c.c|c...c|.ccc.','c.c.c|.ccc.|ccccc|.ccc.|c.c.c','.lll.|l...l|l...l|l...l|.lll.','..ll.|.l...|ll...|.l...|..ll.','r.rr.|.rr.r|rrr..|.r.rr|rr.r.','ccccc|c.c.c|ccccc|c.c.c|ccccc','yy...|yyyy.|.yyyy|.yyy.|.y.y.','ccccc|c...c|c.ccc|c...c|ccc.c','c.c.c|c.c.c|ccccc|..c..|..c..','ccccc|c.l.c|ccccc|c.l.c|ccccc']};
function spr(n,sw){const key=n+(sw?JSON.stringify(sw):'');if(SC[key])return SC[key];
 const bo=n.startsWith('B:')?n.split(':'):0,rows=SPR[bo?BS[bo[1]][bo[2]][0]:n].split('|'),ex=bo?6:0,c=document.createElement('canvas');
 c.width=Math.max(...rows.map(r=>r.length));c.height=rows.length+ex;const g=c.getContext('2d');
 rows.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch=='.')return;g.fillStyle=(sw&&sw[ch])||PAL[ch];g.fillRect(x,y+ex,1,1)}));
 if(bo){const gl=GL[bo[1]][bo[2]].split('|');[0,1].forEach(pass=>gl.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch=='.')return;if(!pass){g.fillStyle='#1a1226';g.fillRect(x+2,y,3,1)}else{g.fillStyle=PAL[ch];g.fillRect(x+3,y,1,1)}})))}
 return SC[key]=c}
/* HOẠT ẢNH: ra chiêu theo môn khi trả lời đúng, thử thách mất sức, Khôi bị đánh khi sai */
function atk(){if(cfg.noFx)return;const a=$('.arena'),h=$('.hero'),m=$('#mon');if(!a||!m||!h)return;const k=G.k,sy2={math:['7','+','×','π','√','∑'],en:['A','B','C','Z','Q','&'],it:['0','1','{ }','</>','01','10']}[k],col={math:'#fbbf24',en:'#93c5fd',it:'#4ade80'}[k],dx=a.clientWidth*.52;
 a.style.setProperty('--c',col);h.classList.add('lunge');setTimeout(()=>h.classList.remove('lunge'),460);
 const add=(c,t,css)=>{const e=document.createElement('span');e.className=c;e.textContent=t||'';if(css)e.style.cssText=css;a.appendChild(e);setTimeout(()=>e.remove(),950)};
 for(let i=0;i<6;i++)add('proj',sy2[i],`color:${col};--dx:${dx}px;--dy:${R(-26,26)}px;animation-delay:${i*55}ms`);
 setTimeout(()=>{for(let i=0;i<10;i++)add('spk','',`--sx:${R(-70,70)}px;--sy:${R(-60,40)}px;background:${col}`);add('slash');add('boom');add('dmg','-10');m.classList.add('hit','h-'+k);setTimeout(()=>m.classList.remove('hit','h-'+k),500)},380)}
function hurt(){if(cfg.noFx)return;const h=$('.hero'),m=$('#mon'),a=$('.arena');if(!h||!m||!a)return;m.classList.add('lunge2');h.classList.add('hurt');
 const e=document.createElement('span');e.className='dmg2';e.textContent='-1 ❤️';a.appendChild(e);setTimeout(()=>{m.classList.remove('lunge2');h.classList.remove('hurt');e.remove()},700)}
/* BOSS VẼ RIÊNG HOÀN TOÀN: mỗi con 1 lưới pixel riêng (chỉ vẽ nửa trái, tự lật gương), kích thước riêng; 12 boss Toán xong, Anh và Tin học đang dùng mẫu tạm */
const CUS={};
function cus(k,i,rows,sw){const R=rows.split('|'),w=Math.max(...R.map(r=>r.length));CUS[k+i]=1;SPR['X'+k+i]=R.map(r=>{r=r.padEnd(w,'.');return r+[...r].reverse().map(c=>(sw&&sw[c])||c).join('')}).join('|')}
cus('math',0,'....kk|..kkly|.kllly|klwkly|klllyy|klllkk|kLLLll|.kLLLL|..kkkk');
cus('math',1,'......kk|....kkll|...klllL|...klwkl|...kllrr|....kLll|..kkkLlL|.kllLlly|kllyllLL|kLlllyLl|.kLLllLL|..kkkkkk');
cus('math',2,'..kk....|.kGGk...|.kGGkkkk|..kGGGGG|.kGGGGGG|.kGeGGGg|.kGGggkk|.kGGGwkw|..kkGGGG|.kGGGGGG|kGGgYYYY|kGGgYgYg|kGGgYYYY|kGGgYgYg|.kGGGGGG|.kkk.kkk');
cus('math',3,'kk.......|.kk...kkk|..kk.kppp|kkkkkpepp|...kkpppP|kk.kpPPwP|..kpPwPPw|.kkpwPPPP|kk.kpPwPP|..kkpPPPP|.kk.kkkkk|kk.......');
cus('math',4,'..kkkkkk|..kggggg|..kgkyyg|..kggggg|..kkGGGG|kkggkGGG|kgGgkGgG|kggkGGGG|kkkkgGGg|..kkGGGG|..kGggGG|..kGGGGG|..kkkkkk|..kgGGgk|..kgGGgk|..kgGGgk|..kkkkkk');
cus('math',5,'...k......|..kk..kkkk|k.kokkoooo|kkkooooeoy|kooyooooww|koyoooYcYY|kkoooYYYYY|.kkooooYcY|..kkoooooY|..kYooooYk|...kkooook|....kYYYk.|...kkkkkkk');
cus('math',6,'....kkk|...kwww|..kwwww|..kwkew|..kwwww|...kkww|..kwwww|.kwwwww|.kwwyyw|kwwwwww|kwwwwww|kwwwwww|kwwpwpw|kwwwwww|.kwwwww|.kkkkkk',{w:'P',p:'y'});
cus('math',7,'kk.......|kRRk.....|.kRRkkkkk|..kRRRRRR|..kReRRRR|..kRRRkkw|..kkRRRRR|.kRRrrrrr|kRRrYYYYY|kRrrYrrrr|kRrYyYrrr|.kRrYyYrr|..kRRRrrr|..kRRrrrr|..kRRrrrr|..kkRRRRR|..kRkkkkk|..kkk....');
cus('math',8,'...kkkkk|..kggggg|..kgkkkk|..kgkegg|..kggggg|.kkkGGGG|kggkbbbb|kgGkbbby|kggkbbyy|kggkbyyy|kkkkbbbb|..kkGGGG|..kGggGG|..kggkgg|..kggkgg|..kkkkkk');
cus('math',9,'....kkkkkk|..kkyyYyyy|.kyyYyyycy|kyYyyooooo|kyyyoooeoo|kyYyooooNN|kyyyoookwk|.kyyyooooo|..kyyYoooo|..kkyyyyyy|.kyYyyyccy|kyyyYyyyyy|kyyYyyycyy|kyyyyyyyyy|.kkyyyyyyy|..kkyyyyyy|..kkk.kkkk');
cus('math',10,'..........k|kk......kro|krrk...kooo|kroork.kooe|krooork.kyy|kroooork.ky|.krooooork.|..krooooork|...krooooor|....kkroooo|.....kkRooo|......kRRoo|.....kRYooo|....kRYYoYo|...kRYYYYYY|...kkkkkkkk');
cus('math',11,'..cccc..yk..|.c....cckyyk|c......ckPPk|c.....cckPpP|.c...c..kPee|..ccc...kPPP|......kkPPpp|.....kPPPppw|....kPPPPpwk|...kkPPpppyy|..kPPPppppyy|.kPPppppppyy|kPPpppPpppyy|kPpppPPppppp|kPppPPPPpppp|.kPPPpppPppp|..kkPPPPPPPP|...kPPpkkkkk|...kkk......');
const bz=q=>q[0][0]=='X'?spr(q[0],q[1]).height*.075:3.9;
/* ĐỒ HỊA PIXEL CHI TIẾT HƠN: (1) phóng 2x có làm mịn góc (EPX), (2) viền tô màu theo thân, (3) đổ sáng/tối theo cạnh + chuyển sắc dọc; (4) Khôi và Hạnh vẽ tay độ phân giải cao 20x28 và 16x16 */
const rgb=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16)),mx=(c,t,a)=>c.map((v,i)=>Math.round(v+(t[i]-v)*a)),hx=c=>'#'+c.map(v=>('0'+Math.max(0,Math.min(255,v)).toString(16)).slice(-2)).join('');
function hd(rows,sw,up){const W=Math.max(...rows.map(r=>r.length)),g=rows.map(r=>[...r.padEnd(W,'.')]);let G=g;
 if(up){const H=g.length,at=(x,y)=>x<0||y<0||x>=W||y>=H?'.':g[y][x];G=[];
  for(let y=0;y<H;y++){const a=[],b=[];for(let x=0;x<W;x++){const P=at(x,y),A=at(x,y-1),B=at(x+1,y),C=at(x-1,y),D=at(x,y+1);let p1=P,p2=P,p3=P,p4=P;
   if(C==A&&C!=D&&A!=B)p1=A;if(A==B&&A!=C&&B!=D)p2=B;if(D==C&&D!=B&&C!=A)p3=C;if(B==D&&B!=A&&D!=C)p4=D;a.push(p1,p2);b.push(p3,p4)}G.push(a,b)}}
 const w2=G[0].length,h2=G.length,c=document.createElement('canvas');c.width=w2;c.height=h2;const x=c.getContext('2d'),at2=(i,j)=>i<0||j<0||i>=w2||j>=h2?'.':G[j][i],col=ch=>rgb((sw&&sw[ch])||PAL[ch]),em=n=>n=='.'||n=='k';
 for(let j=0;j<h2;j++)for(let i=0;i<w2;i++){const ch=G[j][i];if(ch=='.')continue;const N=[at2(i,j-1),at2(i+1,j),at2(i,j+1),at2(i-1,j)];let C;
  if(ch=='k'){const f=N.find(n=>n!='.'&&n!='k');C=f?mx(col(f),[10,5,25],.72):col('k')}
  else{C=col(ch);if(em(N[0]))C=mx(C,[255,255,255],.3);else if(em(N[3]))C=mx(C,[255,255,255],.14);if(em(N[2]))C=mx(C,[0,0,30],.32);else if(em(N[1]))C=mx(C,[0,0,30],.16);C=mx(C,[0,0,40],.18*j/h2)}
  x.fillStyle=hx(C);x.fillRect(i,j,1,1)}
 return c}
const HR={},rl=(s,w)=>{let o='';for(const m of s.matchAll(/([.A-Za-z])(\d+|\*)?/g))o+=m[1].repeat(Math.max(0,m[2]=='*'?w-o.length:m[2]?+m[2]:1));return o.padEnd(w,'.').slice(0,w)};
function hrs(n,rows,w,sw,fix){const m=rows.split('|').map(r=>{r=rl(r,w);return r+[...r].reverse().map(c=>(sw&&sw[c])||c).join('')});if(fix){const g=m.map(r=>[...r]);fix(g);SPR[n]=g.map(r=>r.join('')).join('|')}else SPR[n]=m.join('|');HR[n]=1}
hrs('hero','......rrrr|.....krrrr|....kkgggg|...kgwwggg|...kgwgggg|..kgggggGG|..kgGGGGGG|..kgssssss|..kgsswkss|..kgsskkss|..kgssssss|...kgsssrr|....kkgggg|...kkgGGGG|..bkgggggg|.bbkgwwggg|.bBkgwgggg|bBBkggggGG|bBBkggyyyy|bBBkgggggg|bBBkkGGGGG|.bBBkgggGG|.bBBkgggGk|..bBkgggGk|..bBkgggGk|...bkkgggk|..kkGGGGGk|..kkkkkkkk',10,0,g=>{const s=(x,y,c)=>{if(g[y]&&x>=0&&x<20)g[y][x]=c};
 for(let y=5;y<=19;y++){s(16,y,'k');s(17,y,'w');s(18,y,'g');s(19,y,'k')}
 s(17,4,'w');s(18,4,'g');s(17,3,'k');s(18,3,'k');for(let x=14;x<=19;x++){s(x,20,'y');s(x,21,'Y')}s(17,22,'n');s(18,22,'n');s(17,23,'n');s(18,23,'n');s(17,24,'y');s(18,24,'y')});
hrs('owl','.kp.....|.kpp....|.kppkkkk|kppppppp|kpwwwppp|kpwwkppp|kpppppyy|kpPpwwww|kPPpwwww|kPPpwPwP|.kPPpwww|.kPPPpww|..kPPPPP|..kkPPPP|...kyykk|....kkkk',8);
function spr(n,sw){const key=n+(sw?JSON.stringify(sw):'');if(SC[key])return SC[key];
 const bo=n.startsWith('B:')?n.split(':'):0,nm=bo?BS[bo[1]][bo[2]][0]:n,b=hd(SPR[nm].split('|'),sw,!HR[nm]);
 if(!bo)return SC[key]=b;
 const c=document.createElement('canvas'),ex=12,ox=((b.width-10)/2)|0;c.width=b.width;c.height=b.height+ex;const g=c.getContext('2d');g.drawImage(b,0,ex);
 const gl=GL[bo[1]][bo[2]].split('|');[0,1].forEach(pass=>gl.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch=='.')return;if(!pass){g.fillStyle='#1a1226';g.fillRect(ox+x*2-2,y*2,6,2)}else{g.fillStyle=PAL[ch];g.fillRect(ox+x*2,y*2,2,2)}})));
 return SC[key]=c}
/* ===== ÂM THANH SỬA LẠI: master gain, mở khóa iOS, to hơn, nhạc nền 8 nốt ===== */
let MAU=null;
function au(){try{if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();MAU=AC.createGain();MAU.gain.value=1;MAU.connect(AC.destination);
  try{navigator.audioSession&&(navigator.audioSession.type='playback')}catch(e){}
  try{if(/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform=='MacIntel'&&navigator.maxTouchPoints>1)){const n=8000,u=new Uint8Array(44+n),dv=new DataView(u.buffer),w=(o,t)=>{for(let i=0;i<t.length;i++)u[o+i]=t.charCodeAt(i)};w(0,'RIFF');dv.setUint32(4,36+n,true);w(8,'WAVEfmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,8000,true);dv.setUint32(28,8000,true);dv.setUint16(32,1,true);dv.setUint16(34,8,true);w(36,'data');dv.setUint32(40,n,true);u.fill(128,44);let bs='';for(let i=0;i<u.length;i++)bs+=String.fromCharCode(u[i]);const sa=new Audio('data:audio/wav;base64,'+btoa(bs));sa.loop=true;sa.play().catch(()=>{})}}catch(e){}}
  if(AC.state!='running')AC.resume()}catch(e){}return AC}
var NL=0;function tone(f,d,ty,v,t0,f2){const a=au();if(!a||!GV||!MAU||NL>14)return;const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+(t0||0),p=Math.min(.9,(v||.12)*GV*2.5);
 o.type=ty||'square';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
 g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(p,t+.01);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(MAU);NL++;o.onended=()=>{NL--;try{o.disconnect();g.disconnect()}catch(e){}};o.start(t);o.stop(t+d+.02)}
['click','touchend','keydown'].forEach(e=>addEventListener(e,au,true));
const MU={math:[262,330,392,523,392,330,294,349],en:[294,370,440,587,440,370,330,392],it:[220,262,330,440,330,262,247,294]};let ms=0;
setInterval(()=>{if(document.hidden)return;const sn=$('#snd');if(sn)sn.style.display=AC&&AC.state=='running'?'none':'block';if(!cfg.mus||!AC||AC.state!='running')return;GV=cfg.mv;
 const k=G?G.k:X?X.k:'math',s=MU[k],b=view=='play'&&G&&G.boss,n=s[ms%8]*(view=='play'?1:.5)/(b?2:1);tone(n,.3,b?'sawtooth':'triangle',b?.05:.08);if(ms%4==0)tone(s[0]/(b?4:2),.7,'sine',.1);ms++},300);
/* ===== TỰ XOAY NGANG: thử toàn màn hình + khóa ngang; nếu trình duyệt chặn thì CSS tự xoay khung game ===== */
function land(){try{if(!matchMedia('(pointer:coarse)').matches)return;const d=document.documentElement;(d.requestFullscreen?d.requestFullscreen():Promise.reject()).then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape')).catch(()=>{})}catch(e){}}
function size(){const s=$('#stage'),ph=s.clientHeight,k=Math.min(1,(window.__lite?432:576)/Math.max(1,ph));cv.width=W=Math.max(1,Math.round(s.clientWidth*k));cv.height=H=Math.max(1,Math.round(ph*k))}
function jm(e){const b=jv.getBoundingClientRect(),R2=b.width/2;let x=(e.clientX-b.left-R2)/R2,y=(e.clientY-b.top-R2)/R2;if(matchMedia('(orientation:portrait) and (pointer:coarse)').matches){const t=x;x=y;y=-t}
 const m=Math.hypot(x,y);if(m>1){x/=m;y/=m}jy.x=Math.abs(x)<.2?0:x;jy.y=Math.abs(y)<.2?0:y;kn.style.transform=`translate(${x*35}px,${y*35}px)`}
/* ===== NHÂN VẬT VẼ BẰNG HÌNH KHỐI (độ phân giải cao, có viền tô màu và đổ bóng tự động) ===== */
Object.assign(PAL,{u:'#a5f3fc',v:'#c4b5fd',q:'#fde68a',t:'#2dd4bf'});
function pg(w,h,ops){const g=Array.from({length:h},()=>Array(w).fill('.')),st=(x,y,c)=>{x=Math.floor(x);y=Math.floor(y);if(x>=0&&y>=0&&x<w&&y<h)g[y][x]=c};
 for(const o of ops){const t=o[0],c=o[1],a=o.slice(2);
  if(t=='r')for(let j=0;j<a[3];j++)for(let i=0;i<a[2];i++)st(a[0]+i,a[1]+j,c);
  else if(t=='e')for(let y=0;y<h;y++)for(let x=0;x<w;x++){if(((x+.5-a[0])/a[2])**2+((y+.5-a[1])/a[3])**2<=1)st(x,y,c)}
  else if(t=='p'){for(let y=0;y<h;y++)for(let x=0;x<w;x++){let n=0;for(let i=0,j=a.length-2;i<a.length;j=i,i+=2){const ay=a[i+1],by=a[j+1];if((ay>y+.5)!=(by>y+.5)&&x+.5<(a[j]-a[i])*(y+.5-ay)/(by-ay)+a[i])n=!n}if(n)st(x,y,c)}}
  else for(let i=0;i<a.length;i+=2)st(a[i],a[i+1],c)}
 const o=g.map(r=>r.slice());for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(g[y][x]=='.'&&[[0,1],[1,0],[0,-1],[-1,0]].some(([dx,dy])=>g[y+dy]&&g[y+dy][x+dx]&&g[y+dy][x+dx]!='.'))o[y][x]='k';
 return o.map(r=>r.join('')).join('|')}
const chr=(n,w,h,ops)=>{SPR[n]=pg(w,h,ops);HR[n]=1};
chr('hero',32,40,[['p','B',9,13,23,13,29,37,3,37],['p','b',10,14,22,14,27,36,5,36],['r','G',11,28,4,8],['r','G',17,28,4,8],['r','N',10,35,6,4],['r','N',16,35,6,4],['r','g',10,15,12,14],['r','G',10,26,12,3],['r','y',14,26,4,3],['e','c',16,21,2.5,3],['s','u',15,20,15,21],['r','g',6,17,4,11],['r','g',22,17,4,11],['e','g',8,16,4,3.4],['e','g',24,16,4,3.4],['s','y',5,15,6,14,26,14,27,15],['e','s',7.5,29,2,2],['e','s',24.5,29,2,2],['e','g',16,9,7,7],['r','s',12,8,8,7],['p','r',16,0,21,7,11,7],['s','k',13,10,14,10,13,11,14,11,18,10,19,10,18,11,19,11],['s','w',13,10,18,10],['s','R',15,13,16,13,17,13],['r','w',26,3,2,23],['r','u',28,3,1,23],['p','w',26,3,28,0,28,3],['r','y',23,26,8,2],['r','N',26,28,2,5],['e','y',27,34,1.7,1.7],['e','b',6,25,4.6,5.6],['e','y',6,25,3.4,4.4],['e','b',6,25,2.4,3.4],['s','w',6,24,6,25]]);
chr('owl',32,32,[['e','P',6.5,20,4.2,8],['e','P',25.5,20,4.2,8],['e','p',16,20,9,10],['e','v',16,23,5.5,6.5],['s','P',13,21,15,21,17,21,19,21,14,24,18,24,13,26,16,26,19,26],['e','p',16,12,9.5,8],['p','p',7,9,9,1,14,7],['p','p',25,9,23,1,18,7],['p','P',9,8,9.5,3,12,7],['p','P',23,8,22.5,3,20,7],['e','w',12,12.5,4.2,4.2],['e','w',20,12.5,4.2,4.2],['e','u',12.5,13,2.6,2.8],['e','u',19.5,13,2.6,2.8],['e','k',12.8,13.2,1.5,1.7],['e','k',19.2,13.2,1.5,1.7],['s','w',12,12,19,12],['p','y',14.5,15.5,17.5,15.5,16,19],['p','c',16,2.5,18.2,5.2,16,8,13.8,5.2],['s','u',15,4,16,3],['r','y',11,29,4,2],['r','y',17,29,4,2],['s','Y',11,30,12,30,17,30,18,30]]);
chr('tomo',32,36,[['r','l',7,29,6,6],['r','l',19,29,6,6],['e','L',16,24,12,9],['e','l',10,24,3.2,2.6],['e','l',16,21.5,3.2,2.6],['e','l',22,24,3.2,2.6],['e','l',16,27,3.2,2.6],['s','y',16,21,15,21,17,21,16,20,16,22],['r','l',13,16,6,5],['e','l',16,12,6.5,6],['e','Y',12.6,12,3.4,3.4],['e','Y',19.4,12,3.4,3.4],['e','w',12.6,12,2.6,2.6],['e','w',19.4,12,2.6,2.6],['r','Y',15,12,2,1],['s','k',12,12,13,12,19,12,20,12],['s','R',14,16,15,17,16,17,17,17,18,16],['p','B',5,5,16,1,27,5,16,8],['r','B',11,6,10,3],['s','y',26,6,26,7,26,8,25,9]]);
chr('lexa',32,40,[['p','B',9,16,23,16,28,39,4,39],['p','b',10,17,22,17,26,38,6,38],['p','y',4,37,28,37,28,39,4,39],['p','p',10,16,22,16,16,26],['e','s',16,11,5.5,6.2],['e','g',16,7.5,7,5],['e','g',16,2.5,3.2,2.6],['e','g',9.5,12,2.2,4],['e','g',22.5,12,2.2,4],['r','s',12,9,8,8],['e','Y',13.5,12,2.4,2.4],['e','Y',18.5,12,2.4,2.4],['e','w',13.5,12,1.7,1.7],['e','w',18.5,12,1.7,1.7],['s','k',13,12,18,12],['s','R',15,16,16,16,17,16],['r','r',8,24,16,9],['r','w',9,25,14,7],['r','k',15,25,2,7],['s','Y',10,27,11,27,12,27,19,27,20,27,21,27,10,29,11,29,12,29,19,29,20,29,21,29],['e','s',8,29,2.2,2.2],['e','s',24,29,2.2,2.2]]);
chr('bit7',32,36,[['r','G',11,28,4,6],['r','G',17,28,4,6],['r','g',10,33,6,3],['r','g',16,33,6,3],['r','g',9,17,14,12],['r','k',12,19,8,7],['r','c',13,20,6,1],['r','c',13,22,4,1],['r','t',13,24,5,1],['r','G',5,18,3,10],['r','G',24,18,3,10],['e','g',6.5,29,2.2,2.2],['e','g',25.5,29,2.2,2.2],['r','G',6,8,2,6],['r','G',24,8,2,6],['r','g',8,6,16,11],['r','k',10,8,12,7],['r','c',12,10,3,3],['r','c',17,10,3,3],['s','u',12,10,17,10],['r','c',13,13,6,1],['r','G',15,1,2,5],['e','y',16,1.8,1.9,1.9]]);
NSP.math=['tomo',0];NSP.en=['lexa',0];NSP.it=['bit7',0];
/* ===== HẦM NGỤC ĐẸP HƠN THEO CHỦ ĐỀ: tường đá khắc số / giá sách / mạch neon, ánh sáng đuốc, tối dần, hạt bay ===== */
const BC=['#b91c1c','#1d4ed8','#15803d','#a16207','#7e22ce','#0e7490'],PCH={math:['+','×','π','7','∑','√'],en:['A','Z','&','?','§','B'],it:['0','1','0','1','{','}']},PCOL={math:'#fbbf24',en:'#bfdbfe',it:'#4ade80'},PT=[];
/* Kiến trúc riêng cho từng môn: vẽ trên các bức tường để không chắn đường đi. */
function drawRoomArchitecture(m,i,k,ts,sx,sy){
 const px=x=>sx(x),py=y=>sy(y),rect=(col,x,y,w,h)=>{cx.fillStyle=col;cx.fillRect(px(x),py(y),Math.max(1,w*ts),Math.max(1,h*ts))};
 if(k==='math'){
  // Đền toán học: trụ đá vàng, mái tam giác và ký hiệu hình học.
  rect('#3b2410',m.x+1.1,m.y+.05,1.2,.9);rect('#a8793e',m.x+1.2,m.y+.05,1,.12);rect('#d6a45e',m.x+1.2,m.y+.78,1,.12);
  rect('#3b2410',m.x+9.7,m.y+.05,1.2,.9);rect('#a8793e',m.x+9.8,m.y+.05,1,.12);rect('#d6a45e',m.x+9.8,m.y+.78,1,.12);
  rect('#d6a45e',m.x+4.2,m.y+.05,3.6,.12);rect('#6b4525',m.x+4.5,m.y+.18,3,.18);
  cx.fillStyle='#ffe7a3';cx.font=Math.max(8,ts*.58)+'px monospace';cx.fillText(['∑','π','√','△','∞'][i%5],px(m.x+6),py(m.y+.58));
 }else if(k==='en'){
  // Thư viện cổ: kệ sách nhiều màu và ô kính màu trên tường.
  rect('#24170f',m.x+1.05,m.y+.05,1.45,.95);rect('#9a6233',m.x+1.12,m.y+.12,1.3,.1);rect('#c69a58',m.x+1.12,m.y+.85,1.3,.1);
  ['#b91c1c','#2563eb','#15803d','#d97706','#7c3aed'].forEach((c,j)=>rect(c,m.x+1.18+j*.22,m.y+.28,.16,.48));
  rect('#24170f',m.x+9.5,m.y+.05,1.45,.95);rect('#9a6233',m.x+9.57,m.y+.12,1.3,.1);rect('#c69a58',m.x+9.57,m.y+.85,1.3,.1);
  ['#2563eb','#d97706','#15803d','#b91c1c','#7c3aed'].forEach((c,j)=>rect(c,m.x+9.63+j*.22,m.y+.28,.16,.48));
  rect('#182f50',m.x+4.5,m.y+.04,3,.9);rect('#93c5fd',m.x+4.62,m.y+.14,.72,.68);rect('#fbbf24',m.x+5.42,m.y+.14,.72,.68);rect('#c4b5fd',m.x+6.22,m.y+.14,.72,.68);rect('#dbeafe',m.x+5.9,m.y+.14,.06,.68);
  cx.fillStyle='#fff1c2';cx.font='bold '+Math.max(8,ts*.42)+'px serif';cx.fillText(['A','文','?','BOOK','ABC'][i%5],px(m.x+6),py(m.y+.58));
 }else{
  // Thành phố bit: tủ máy chủ, bo mạch và các điểm LED phát sáng.
  rect('#031018',m.x+1.05,m.y+.02,1.45,1);rect('#0e7490',m.x+1.12,m.y+.1,1.3,.08);rect('#22d3ee',m.x+1.2,m.y+.3,.9,.08);rect('#4ade80',m.x+1.2,m.y+.5,.55,.08);rect('#22d3ee',m.x+1.2,m.y+.72,1,.08);
  rect('#031018',m.x+9.5,m.y+.02,1.45,1);rect('#0e7490',m.x+9.57,m.y+.1,1.3,.08);rect('#4ade80',m.x+9.65,m.y+.3,.8,.08);rect('#22d3ee',m.x+9.65,m.y+.5,1,.08);rect('#4ade80',m.x+9.65,m.y+.72,.6,.08);
  rect('#064e5b',m.x+4.3,m.y+.02,3.4,.14);rect('#22d3ee',m.x+4.55,m.y+.16,.12,.35);rect('#22d3ee',m.x+4.55,m.y+.45,.75,.1);rect('#4ade80',m.x+5.2,m.y+.45,.1,.32);rect('#22d3ee',m.x+5.2,m.y+.67,1.4,.1);rect('#4ade80',m.x+6.5,m.y+.4,.1,.37);
  cx.fillStyle='#a5f3fc';cx.font='bold '+Math.max(8,ts*.45)+'px monospace';cx.fillText(['01','{}','</>','CPU','010'][i%5],px(m.x+6),py(m.y+.25));
 }
}
function render(){const ts=H/9,vw=W/ts,cxm=Math.max(0,Math.min(MW-vw,X.x-vw/2)),cym=Math.max(0,Math.min(MH-9,X.y-4.5)),k=X.k,sx=x=>(x-cxm)*ts,sy=y=>(y-cym)*ts,
 S=(n,sw,x,y,z)=>{const c=spr(n,sw),h=z*ts,w2=h*c.width/c.height;cx.drawImage(c,sx(x)-w2/2,sy(y)-h/2,w2,h)},w=Math.ceil(ts);
 cx.setTransform(1,0,0,1,0,0);cx.imageSmoothingEnabled=false;cx.fillStyle='#000';cx.fillRect(0,0,W,H);cx.textAlign='center';cx.textBaseline='middle';
 for(let ty=cym|0;ty<Math.min(MH,cym+10);ty++)for(let tx=cxm|0;tx<Math.min(MW,cxm+vw+1);tx++){const v=TM[ty][tx],px=sx(tx),py=sy(ty),hh=(tx*73+ty*151)%97;
  if(v==1){
   if(k=='en'){cx.fillStyle='#2a1a0e';cx.fillRect(px,py,w,w);for(let i=0;i<4;i++){cx.fillStyle=BC[(tx*3+ty*5+i)%6];cx.fillRect(px+i*w/4+1,py+3,w/4-2,w-6)}cx.fillStyle='#5b3a1d';cx.fillRect(px,py,w,3);cx.fillRect(px,py+w-3,w,3)}
   else if(k=='it'){cx.fillStyle='#031018';cx.fillRect(px,py,w,w);cx.fillStyle='#22d3ee44';cx.fillRect(px,py+w/2,w,2);cx.fillRect(px+(hh%3)*w/3,py,2,w/2);if(hh%5==0){cx.fillStyle='#4ade80';cx.fillRect(px+w*.7,py+w*.2,4,4)}}
   else{cx.fillStyle='#3b2410';cx.fillRect(px,py,w,w);cx.fillStyle='rgba(255,220,150,.12)';cx.fillRect(px,py,w,2);cx.fillRect(px,py+w/2,w,2);cx.fillRect(px+((ty&1)?w/4:3*w/4),py,2,w/2);if(hh%7==0){cx.fillStyle='rgba(251,191,36,.5)';cx.font=(w*.55|0)+'px serif';cx.fillText('+×π∑√7'[hh%6],px+w/2,py+w/2)}}
  }else{
   if(k=='en'){cx.fillStyle=(ty&1)?'#4a3320':'#42301d';cx.fillRect(px,py,w,w);cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(px,py+w-2,w,2);cx.fillRect(px+(hh%4)*w/4,py,2,w)}
   else if(k=='it'){cx.fillStyle=(tx+ty)&1?'#08242c':'#0a2a33';cx.fillRect(px,py,w,w);cx.fillStyle='#22d3ee22';cx.fillRect(px,py+w/2,w,2);if(hh%6==0){cx.fillStyle='#22d3ee88';cx.fillRect(px+w/2-2,py+w/2-2,5,5)}}
   else{cx.fillStyle=(tx+ty)&1?'#8a6a40':'#7a5a34';cx.fillRect(px,py,w,w);cx.fillStyle='rgba(0,0,0,.14)';cx.fillRect(px,py,w,2);cx.fillRect(px,py,2,w);if(hh%5==0){cx.fillStyle='rgba(0,0,0,.2)';cx.fillRect(px+w*.3,py+w*.4,w*.12,w*.12)}}
   if(v==2){if(DI[ty*MW+tx]<ai){cx.strokeStyle='#fbbf24';cx.strokeRect(px+2,py+2,w-4,w-4)}else{cx.fillStyle='#3a2a14';cx.fillRect(px,py,w,w);S('lock',0,tx+.5,ty+.5,.9)}}}}
 for(let ri=0;ri<10;ri++){const rm=RM(ri);if(rm.x+RW<cxm||rm.x>cxm+vw||rm.y+RH<cym||rm.y>cym+10)continue;drawRoomArchitecture(rm,ri,k,ts,sx,sy)}
 cx.globalCompositeOperation='lighter';
 for(let i=0;i<=ai;i++){const m=RM(i);[3,8].forEach(a=>{const gx=sx(m.x+a+.5),gy=sy(m.y+.7),r=ts*3.2,gr=cx.createRadialGradient(gx,gy,0,gx,gy,r);gr.addColorStop(0,k=='it'?'rgba(34,211,238,.28)':'rgba(255,170,70,.30)');gr.addColorStop(1,'rgba(0,0,0,0)');cx.fillStyle=gr;cx.fillRect(gx-r,gy-r,r*2,r*2)})}
 cx.globalCompositeOperation='source-over';
 for(let i=0;i<10;i++){const m=RM(i);[3,8].forEach(a=>S('torch',0,m.x+a+.5,m.y+.7,.9));DEC[k].forEach((d,j)=>S(DS[k],0,m.x+[2,9,9][j]+.5,m.y+[2,2,7][j]+.5,.9));
  if(i<=ai)S(NSP[k][0],NSP[k][1],m.x+3.5,m.y+7.5,1.3);
  if(i>=ai){const f=(X.g-1)*10+i+1,b=i==9,bob=Math.sin(X.t2*3+i)*.06,q=monSp(k,f);if(b){cx.shadowColor='#ff3b8d';cx.shadowBlur=ts*.6}S(q[0],q[1],m.x+6,m.y+(b?(q[0][0]=='X'?7.2-bz(q)/2:5.7):5)+bob,b?bz(q):1.3);cx.shadowBlur=0;
   cx.font='bold '+(.28*ts|0)+'px sans-serif';cx.fillStyle='#fff';cx.fillText((b?'👑 BOSS · ':'Tầng ')+f,sx(m.x+6),sy(m.y+5+(b?2.7:.95)))}
  if(i>ai){cx.fillStyle='rgba(0,0,0,.62)';cx.fillRect(sx(m.x),sy(m.y),RW*ts,RH*ts)}else if(i==9){cx.fillStyle='rgba(150,0,0,.2)';cx.fillRect(sx(m.x),sy(m.y),RW*ts,RH*ts)}}
 cx.save();cx.translate(sx(X.x),sy(X.y)-(X.mv?Math.abs(Math.sin(X.t*10))*ts*.08:0));cx.scale(X.face,1);{const c=spr('hero'),h=1.5*ts,w2=h*c.width/c.height;cx.drawImage(c,-w2/2,-h*.55,w2,h)}cx.restore();
 S('owl',0,X.x-.8*X.face,X.y-.85+Math.sin(X.t2*4)*.08,.8);
 const p0=sx(X.x),p1=sy(X.y),vg=cx.createRadialGradient(p0,p1,ts*3.5,p0,p1,ts*9.5);vg.addColorStop(0,'rgba(0,0,12,0)');vg.addColorStop(1,'rgba(0,0,12,.72)');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
 const ch=PCH[k];if(PT.length<26)PT.push({x:Math.random()*W,y:Math.random()*H,v:18+Math.random()*30,c:Math.random()});
 PT.forEach(p=>{p.y+=(k=='it'?1:-1)*p.v*(X.dt||.016);if(p.y<-20)p.y=H+10;if(p.y>H+20)p.y=-10;cx.globalAlpha=.25;cx.fillStyle=PCOL[k];cx.font=(ts*.42|0)+'px monospace';cx.fillText(ch[(p.c*ch.length)|0],p.x,p.y)});cx.globalAlpha=1}
/* ===== 36 BOSS + BIỂU TƯỢNG 52x52: ghép từ mẫu thân + màu + phụ kiện riêng, đối xứng tự động, viền tô màu + đổ bóng ===== */
Object.assign(PAL,{a:'#888888',d:'#555555',h:'#cccccc',x:'#ff00ff'});
const E=(c,x,y,rx,ry)=>['e',c,x,y,rx,ry],Rr=(c,x,y,w,h)=>['r',c,x,y,w,h],Pl=(c,...p)=>['p',c,...p],Ln=(c,...p)=>['l',c,...p],Pt=(c,...p)=>['s',c,...p],Ro=(c,x,y,rx,ry)=>['o',c,x,y,rx,ry],ey=(x,y,s=1)=>[E('w',x,y,3.3*s,3.7*s),E('e',x+.7,y+.5,1.9*s,2.5*s),Pt('w',x-.5,y-1)];
function dr(g,ops){const st=(x,y,c)=>{x=Math.floor(x);y=Math.floor(y);if(x>=0&&y>=0&&x<52&&y<52)g[y][x]=c};
 for(const o of ops){const t=o[0],c=o[1],a=o.slice(2);
  if(t=='r')for(let j=0;j<a[3];j++)for(let i=0;i<a[2];i++)st(a[0]+i,a[1]+j,c);
  else if(t=='e'||t=='o'){for(let y=0;y<52;y++)for(let x=0;x<52;x++){const d=((x+.5-a[0])/a[2])**2+((y+.5-a[1])/a[3])**2;if(t=='e'?d<=1:d<=1&&d>=.62)st(x,y,c)}}
  else if(t=='p'){for(let y=0;y<52;y++)for(let x=0;x<52;x++){let n=0;for(let i=0,j=a.length-2;i<a.length;j=i,i+=2){const ay=a[i+1],by=a[j+1];if((ay>y+.5)!=(by>y+.5)&&x+.5<(a[j]-a[i])*(y+.5-ay)/(by-ay)+a[i])n=!n}if(n)st(x,y,c)}}
  else if(t=='l'){const n=Math.max(Math.abs(a[2]-a[0]),Math.abs(a[3]-a[1]),1);for(let i=0;i<=n;i++)st(a[0]+(a[2]-a[0])*i/n,a[1]+(a[3]-a[1])*i/n,c)}
  else for(let i=0;i<a.length;i+=2)st(a[i],a[i+1],c)}}
function mk52(ops,late){const g=Array.from({length:52},()=>Array(52).fill('.'));dr(g,ops);for(let y=0;y<52;y++)for(let x=0;x<26;x++)if(g[y][x]!='.')g[y][51-x]=g[y][x];dr(g,late||[]);
 const o=g.map(r=>r.slice());for(let y=0;y<52;y++)for(let x=0;x<52;x++)if(g[y][x]=='.'&&[[0,1],[1,0],[0,-1],[-1,0]].some(([dx,dy])=>g[y+dy]&&g[y+dy][x+dx]&&g[y+dy][x+dx]!='.'))o[y][x]='k';return o.map(r=>r.join('')).join('|')}
const TP={
blob:p=>[E('d',26,40,22,11),E('a',26,35,22,14),E('h',19,26,8,4),E('d',26,45,19,6),...ey(18,32,1.3),Rr('k',19,41,14,2),Pt('w',22,42,25,42,28,42,31,42)],
snake:p=>[E('d',26,46,20,5),E('a',26,43,19,6),E('d',26,36,15,5),E('a',26,33,14,6),E('d',26,26,10,5),E('a',26,23,10,6),E('a',26,13,10,8),E('h',26,17,6,4),...ey(20,11,.9),Pl('r',25,19,26,25,27,19),Rr('x',15,42,5,2),Rr('x',16,41,3,4),Rr('x',19,34,5,2),Rr('x',20,31,3,6)],
beast:p=>[...(p.m?[E('x',26,23,21,19)]:[]),E('a',26,43,15,9),E('h',26,45,9,6),E('d',16,50,6,2.5),...({round:[E('a',14,11,6,6),E('x',14,11,3.5,3.5)],cat:[Pl('a',10,18,11,2,22,12),Pl('x',13,15,14,6,19,12)],long:[E('a',19,8,4,11),E('x',19,8,2,8)],deer:[Ln('n',18,13,12,1),Ln('n',19,13,13,1),Ln('n',15,7,8,6),Ln('n',13,4,7,2)]}[p.e]||[]),E('a',26,24,14,12),E('h',26,29,7,5),Rr('k',25,26,2,2),...ey(19,21,1),Rr('k',23,32,6,1),Pt('w',22,32,30,32),...(p.cap?[Pl('B',10,5,26,0,42,5,26,9),Rr('B',20,6,12,4),Ln('y',41,5,41,12)]:[])],
spider:p=>[E('a',26,37,13,11),E('d',26,36,8,7),E('d',26,20,9,8),...ey(21,19,.7),Rr('k',22,26,2,2),Ln('d',14,30,4,18),Ln('d',14,31,4,19),Ln('d',13,35,2,32),Ln('d',13,36,2,33),Ln('d',14,40,3,48),Ln('d',14,41,3,49),Ln('d',17,44,8,51),Ln('d',17,45,8,51),Ln('h',22,32,26,45),Ln('h',18,36,26,45)],
golem:p=>p.srv?[Rr('d',9,2,34,48),Rr('a',11,4,30,44),...[8,17,26,35].flatMap(y=>[Rr('k',14,y,24,6),Rr('x',16,y+2,3,2),Rr('h',22,y+2,12,2)]),Rr('y',20,44,12,2)]:[Rr('d',17,3,18,15),Rr('a',18,4,16,13),Rr('k',20,8,12,5),Rr(p.rb?'c':'y',21,9,4,3),Rr(p.rb?'c':'y',27,9,4,3),Rr('a',10,20,32,17),Rr('h',11,21,30,3),Rr('d',4,21,7,17),Rr('a',2,38,9,8),Rr('d',15,37,9,13),Rr('x',23,26,6,6),Rr('k',16,40,7,1)],
dragon:p=>[...(p.ring?[Ro('c',12,18,12,10),Ro('c',40,18,12,10)]:[]),...(p.hy?[Ln('a',18,30,10,16),Ln('a',19,30,11,17),Ln('a',20,30,12,17),E('a',10,13,6,5),...ey(9,12,.6)]:[Pl('d',20,28,1,10,5,26,2,42,10,38,12,50,20,42),Pl('x',20,30,5,20,7,28,6,40,11,38,13,45,19,40)]),E('a',26,38,10,12),E('h',26,40,6,9),E('d',16,48,4,3),E('a',26,16,9,8),E('h',26,21,5,3),Pl('x',18,11,14,1,22,8),...ey(21,15,.8),Pt('k',24,21,28,21),Pt('w',22,23,30,23),...(p.crown?[Pl('y',19,9,19,2,23,6,26,1,29,6,33,2,33,9)]:[])],
hum:p=>[...(p.cl?[E('w',9,28,9,11),Ro('k',9,28,9,11),Pt('k',9,24,9,28,12,28),E('w',11,43,6,7)]:[]),...(p.hat=='horns'?[Pl('x',17,12,10,0,21,8)]:[]),Pl('a',18,24,34,24,45,51,7,51),Pl('d',23,28,29,28,33,51,19,51),Rr('a',8,25,7,18),E('s',11,45,4,3),E(p.hat=='horns'?'a':'s',26,14,8,9),...(p.hat=='hood'?[E('d',26,12,11,12),E('s',26,16,6,7)]:p.hat=='witch'?[Pl('d',26,-4,14,11,38,11),Rr('d',13,10,26,3),Rr('y',17,9,18,2)]:p.hat=='helm'?[E('g',26,12,10,10),Rr('k',19,12,14,3),E('r',26,3,3,5)]:p.hat=='crown'?[Pl('y',17,8,17,0,21,5,26,-1,31,5,35,0,35,8)]:[]),...(p.beard?[Pl('w',20,19,32,19,26,34)]:[]),...ey(22,15,.6),Rr('R',24,20,4,1)],
bird:p=>[Pl('x',22,26,2,12,5,28,3,40,9,38,7,48,16,44,21,46),Pl('a',22,28,6,16,9,30,8,40,12,39,11,46,18,43,21,44),E('a',26,36,10,12),E('h',26,39,6,8),E('a',26,19,8,8),Pl('y',22,20,26,29,30,20),...ey(21,17,.7),Pl('x',20,10,22,2,26,8),Rr('d',22,47,3,4),Rr('x',26,48,2,3)],
ghost:p=>[E('a',26,23,17,15),Rr('a',9,23,34,21),...[13,22,30,39].map(x=>E('a',x,45,5,6)),E('h',19,15,7,4),...ey(19,24,1.2),E('k',26,34,5,3),Rr('a',23,32,6,1)],
bug:p=>[E('a',26,35,18,15),Rr('d',25,22,2,28),E('h',18,28,5,4),E('d',26,17,8,7),...ey(21,16,.7),Ln('d',20,12,12,2),Ln('d',20,13,12,3),Ln('d',12,32,3,30),Ln('d',13,38,3,40),Ln('d',14,44,5,50),Pt('x',14,36,36,40,18,43)],
turtle:p=>[Rr('a',9,36,9,13),E('a',26,34,21,14),E('d',26,36,17,10),E('k',26,33,15,10),E('c',26,33,13,8),Rr('x',16,30,8,2),Rr('x',16,34,12,2),E('h',26,16,8,7),...ey(22,15,.7),Rr('k',23,21,6,1)],
horse:p=>[Rr('a',10,38,5,13),Rr('a',18,40,5,11),Rr('a',31,40,5,11),Rr('a',39,38,5,13),E('a',26,34,17,10),Pl('a',30,28,38,8,46,12,40,32),E('a',42,10,7,5),Pl('x',36,7,38,0,42,6),E('w',44,9,2,2),E('e',44.5,9.5,1,1),Pl('d',30,28,38,8,34,8,28,30),Rr('k',16,30,20,1),E('r',26,36,3,3)]};
const pal=(a,d,h,x)=>({a,d,h,x}),BD={
math:[['blob',pal('#4ade80','#15803d','#bbf7d0','#fbbf24')],['snake',pal('#22c55e','#166534','#bbf7d0','#fbbf24')],['beast',pal('#9ca3af','#4b5563','#d1d5db','#6b7280'),{e:'round'},[Rr('Y',21,38,10,1),Rr('Y',21,41,10,1),Rr('Y',21,44,10,1),Rr('Y',22,36,1,10),Rr('Y',26,36,1,10),Rr('Y',30,36,1,10)]],['spider',pal('#a855f7','#6b21a8','#e9d5ff','#f0abfc')],['golem',pal('#d1a05a','#7c5a2b','#f5d9a8','#fbbf24'),{}],['dragon',pal('#fb923c','#9a3412','#fed7aa','#fbbf24'),{},[Pt('c',12,34,14,30,10,40,17,38)]],['hum',pal('#f5f3ff','#4c1d95','#ffffff','#a855f7'),{hat:'hood'},[Pl('P',26,24,34,24,45,51,26,51)]],['hum',pal('#dc2626','#7f1d1d','#fca5a5','#fbbf24'),{hat:'horns'},[Ln('y',8,27,44,27),Ln('y',26,27,26,38),E('Y',9,33,5,2),E('Y',43,33,5,2)]],['hum',pal('#9ca3af','#4b5563','#e5e7eb','#fbbf24'),{hat:'helm'},[Pl('b',19,28,33,28,26,44),Pl('y',22,30,30,30,26,40)]],['beast',pal('#f59e0b','#b45309','#fde68a','#92400e'),{e:'cat',m:1},[Pt('c',6,22,7,18,9,15,12,13,15,13,37,13,40,13,43,15,45,18,46,22)]],['bird',pal('#ef4444','#991b1b','#fdba74','#fbbf24')],['dragon',pal('#7c3aed','#4c1d95','#c4b5fd','#fbbf24'),{crown:1,ring:1}]],
en:[['beast',pal('#f3f4f6','#9ca3af','#ffffff','#f9a8d4'),{e:'cat'}],['beast',pal('#fbcfe8','#db2777','#fff1f2','#f472b6'),{e:'long'},[Rr('r',33,38,12,9),Rr('w',34,39,10,7),Rr('k',39,39,1,7)]],['bird',pal('#22c55e','#15803d','#bbf7d0','#ef4444')],['blob',pal('#fb923c','#9a3412','#fed7aa','#fbbf24')],['hum',pal('#f9a8d4','#be185d','#fce7f3','#fbbf24'),{hat:'crown',cl:1}],['beast',pal('#a16207','#713f12','#facc15','#d97706'),{e:'deer'}],['ghost',pal('#c4b5fd','#6d28d9','#ede9fe','#a78bfa')],['dragon',pal('#334155','#0f172a','#94a3b8','#a855f7'),{}],['hum',pal('#15803d','#14532d','#86efac','#fbbf24'),{hat:'witch'},[Ln('n',40,26,48,8),Ln('n',41,26,49,8),Pt('y',49,6,48,5,50,5)]],['ghost',pal('#e2e8f0','#64748b','#ffffff','#94a3b8')],['beast',pal('#2563eb','#1e3a8a','#93c5fd','#fbbf24'),{e:'cat',m:1,cap:1}],['hum',pal('#be185d','#831843','#f9a8d4','#fbbf24'),{hat:'crown'}]],
it:[['beast',pal('#9ca3af','#4b5563','#e5e7eb','#f9a8d4'),{e:'round'}],['golem',pal('#334155','#0f172a','#64748b','#22d3ee'),{rb:1}],['turtle',pal('#4ade80','#166534','#bbf7d0','#22d3ee')],['spider',pal('#22d3ee','#0e7490','#a5f3fc','#4ade80')],['ghost',pal('#4ade80','#15803d','#bbf7d0','#22d3ee')],['beast',pal('#22d3ee','#0e7490','#a5f3fc','#4ade80'),{e:'cat'},[Ro('y',20,20,6,5),Ro('y',32,20,6,5),Rr('y',25,20,2,1)]],['bug',pal('#4ade80','#166534','#bbf7d0','#ef4444')],['golem',pal('#22d3ee','#0e7490','#a5f3fc','#4ade80'),{}],['horse',pal('#92400e','#451a03','#d97706','#4ade80')],['golem',pal('#facc15','#854d0e','#fef08a','#22d3ee'),{rb:1}],['dragon',pal('#0e7490','#164e63','#67e8f9','#4ade80'),{hy:1}],['golem',pal('#475569','#0f172a','#94a3b8','#4ade80'),{srv:1}]]};
const glyph=(k,i)=>GL[k][i].split('|').flatMap((r,y)=>[...r].flatMap((c,x)=>c=='.'?[]:[Rr(c,2+x*3,2+y*3,3,3)]));
for(const k of['math','en','it'])BD[k].forEach((b,i)=>{try{const t=TP[b[0]](b[2]||{}),lt=[...(b[3]||[]),...glyph(k,i)];SPR['X'+k+i]=b[0]=='horse'?mk52([],[...t,...lt]):mk52(t,lt);HR['X'+k+i]=1;CUS[k+i]=1}catch(e){}});
const star=(cx,cy,a,b)=>{const p=[];for(let i=0;i<10;i++){const t=-Math.PI/2+i*Math.PI/5,r=i%2?b:a;p.push(cx+r*Math.cos(t),cy+r*Math.sin(t))}return p};
const spkO=[Ro('c',32,26,10,12),Ro('c',32,26,18,20),Pl('g',6,18,16,18,28,6,28,46,16,34,6,34)];
const IDEF={coin:[E('Y',26,26,23,23),E('y',26,26,20,20),E('Y',26,26,14,14),E('q',26,26,12,12),Rr('Y',24,17,4,18),Rr('Y',20,20,12,3)],star:[Pl('Y',...star(26,28,24,10)),Pl('y',...star(26,27,21,9)),E('q',20,19,3,3)],
heart:[E('r',17,19,11,10),E('r',35,19,11,10),Pl('r',6,23,46,23,26,48),E('w',14,15,3,2.5),Pl('R',34,30,44,24,30,46)],heartx:[E('G',17,19,11,10),E('G',35,19,11,10),Pl('G',6,23,46,23,26,48),E('g',14,15,3,2.5)],
cut:[Pl('g',26,26,44,4,48,7,30,31),Pl('g',26,26,8,4,4,7,22,31),E('r',15,42,8,8),E('r',37,42,8,8),E('k',15,42,4,4),E('k',37,42,4,4),E('y',26,26,3,3)],
bulb:[E('y',26,20,16,16),E('q',20,14,5,5),Rr('g',20,34,12,6),Rr('G',21,40,10,3),Rr('G',23,43,6,4),Ln('Y',22,24,22,34),Ln('Y',30,24,30,34),Ln('Y',22,24,30,24)],
swap:[Ro('c',26,26,19,19),Pl('c',36,6,48,16,34,20),Pl('c',16,46,4,36,18,32)],lock:[Ro('g',26,19,11,13),Rr('y',10,22,32,26),Rr('Y',10,40,32,8),E('k',26,33,4,4),Rr('k',24,35,4,8)],
torch:[Rr('n',22,26,8,24),Rr('N',22,26,3,24),E('o',26,19,11,15),E('y',26,22,7,10),E('w',26,25,3,6)],crown:[Pl('y',5,42,5,12,17,26,26,6,35,26,47,12,47,42),Rr('Y',5,38,42,6),E('r',26,30,4,4),E('c',14,30,3,3),E('c',38,30,3,3)],
trophy:[Ro('y',9,16,8,9),Ro('y',43,16,8,9),Pl('y',13,6,39,6,36,28,26,36,16,28),Rr('Y',23,36,6,8),Rr('Y',14,44,24,6),E('q',20,14,3,6)],spk:spkO,mute:[...spkO,Ln('r',35,17,48,33),Ln('r',36,17,49,33),Ln('r',48,17,35,33),Ln('r',49,17,36,33)],
gear:[...[0,1,2,3,4,5,6,7].map(i=>E('g',26+19*Math.cos(i*Math.PI/4),26+19*Math.sin(i*Math.PI/4),5,5)),E('g',26,26,16,16),E('k',26,26,6,6)]};
for(const n in IDEF){SPR[n]=mk52([],IDEF[n]);HR[n]=1}
/* thay emoji trong giao diện bằng biểu tượng pixel (tự động theo dõi thay đổi giao diện) */
const IC={'\ud83e\ude99':'coin','\u2b50':'star','\u2764\ufe0f':'heart','\ud83d\udda4':'heartx','\u2702\ufe0f':'cut','\ud83d\udca1':'bulb','\ud83d\udd04':'swap','\ud83d\udd12':'lock','\ud83d\udd25':'torch','\ud83d\udc51':'crown','\ud83c\udfc6':'trophy','\ud83d\udd0a':'spk','\ud83d\udd07':'mute','\u2699':'gear','\ud83e\udd89':'owl'},RX=new RegExp(Object.keys(IC).sort((a,b)=>b.length-a.length).join('|'),'g');
function ico(n){if(n.nodeType==3){const t=n.nodeValue;RX.lastIndex=0;if(!RX.test(t))return;RX.lastIndex=0;const f=document.createDocumentFragment();let i=0,m;while((m=RX.exec(t))){f.appendChild(document.createTextNode(t.slice(i,m.index)));const c=spr(IC[m[0]],0),im=new Image();im.className='ic';im.src=c.u||(c.u=c.toDataURL());f.appendChild(im);i=m.index+m[0].length}f.appendChild(document.createTextNode(t.slice(i)));n.replaceWith(f)}else if(n.nodeType==1&&n.tagName!='SCRIPT')Array.from(n.childNodes).forEach(ico)}
try{new MutationObserver(ms=>ms.forEach(m=>{m.addedNodes.forEach(ico);if(m.type=='characterData')ico(m.target)})).observe($('#stage'),{childList:true,subtree:true,characterData:true})}catch(e){}
/* Lưu tiến trình */
/*MIGRATE: chuyển tiến trình từ các khóa cũ*/try{[['eldoria_v1','xungoc_v1','ngoctrithuc_v1','pltgtt_v1'],['eldoria_cfg','xungoc_cfg','ngoctrithuc_cfg','pltgtt_cfg'],['eldoria_academy_v2','xungoc_academy_v2','ngoctrithuc_academy_v2','pltgtt_academy_v2']].forEach(a=>{const n=a[3];if(localStorage.getItem(n)!==null)return;for(let i=2;i>=0;i--){const v=localStorage.getItem(a[i]);if(v!==null){localStorage.setItem(n,v);break}}})}catch(e){}
const KEY='pltgtt_v1';let D,G,lock=0,view='menu',msg='Chào Khôi! Chọn một thế giới nhé.',rc=0;
function load(){try{D=JSON.parse(localStorage.getItem(KEY))}catch(e){D=null}
 if(!D||!D.p)D={coins:0,xp:0,free:[3,3,3],p:{math:{cur:1,hi:0},en:{cur:1,hi:0},it:{cur:1,hi:0}}};
 D.memory=D.memory||[];D.stones=D.stones||[];D.lastScene=D.lastScene||'forest';D.memory.forEach(m=>{if(!Array.isArray(m.review))m.review=[]});}
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){}}
const title=()=>{let i=0;TX.forEach((x,j)=>{if(D.xp>=x)i=j});return TITLES[i]};
function menu(){view='menu';G=null;rc=0;leave();$('#app').className='';document.body.dataset.w='menu';document.body.classList.remove('boss');$('#app').innerHTML=`<h1>🦉 PHIÊU LƯU THẾ GIỚI TRI THỨC</h1><p class="sub">Dũng sĩ Khôi · ${title()}</p><div class="bar"><span>🪙 ${D.coins} xu edu</span><span>⭐ ${D.xp} XP</span></div>`+
 ` <div class="stonebar">${[{id:'calc',name:'Tính Toán',icon:'🔴'},{id:'words',name:'Ngôn Từ',icon:'🔵'},{id:'reason',name:'Suy Luận',icon:'🟢'}].map(st=>`<span class="stone ${D.stones.some(v=>v.id===st.id)?'':'locked'}">${st.icon} ${st.name}</span>`).join('')}</div>`+
 SUB.map(s=>{const p=D.p[s.k],g=Math.ceil(p.cur/10);return `<div class="card"><div class="big">${s.e}</div><div><b>${s.w}</b><br><small>${s.n} · ${Z[s.k][Math.ceil(g/3)-1]}<br>Tầng ${p.cur}/120 · Lớp ${g}</small></div><button onclick="explore('${s.k}')">Vào</button></div>`}).join('')+
 `<p class="sub">🦉 ${msg}</p><p class="sub"><a id="rs" onclick="reset()">Xóa tiến trình</a> · <a onclick="mute=!mute;menu()">${mute?'🔇 Bật âm thanh':'🔊 Tắt âm thanh'}</a></p>`}
function reset(){if(!rc){rc=1;$('#rs').textContent='Bấm lần nữa để xóa hẳn';return}try{localStorage.removeItem(KEY)}catch(e){}load();menu()}
function start(k){leave();const p=D.p[k],f=p.cur,boss=f%10==0;
 // Độ khó tự tăng theo từng tầng: thử thách/boss cứng cáp hơn dần, không có lựa chọn thủ công.
 const maxHp=boss?Math.round(100+(f-1)*0.5):Math.round(50+(f-1)*0.25),damage=10;
 G={k,f,boss,difficulty:f,diffLabel:`Tự động ${f}/120`,h:boss?5:3,maxH:boss?5:3,damage,mh:maxHp,hp:maxHp,rep:f<=p.hi,used:new Set(),el:[],hint:-1,ok:0,review:[],stoneUsed:{},feedback:'',mon:boss?BO[k][f/10-1]:SM[k][f%3],sp:monSp(k,f)};
 msg=boss?'Boss đây rồi, bình tĩnh nào!':'Trả lời đúng để kiếm phát sáng!';sfx(boss?'boss':'door');nextQ();draw()}
function nextQ(){let q,n=0;do{q=mkQ(G.k,G.f)}while(G.used.has(q.t)&&++n<12);G.used.add(q.t);G.q=q;G.el=[];G.hint=-1;G.stoneUsed={};G.feedback='';lock=0}
function draw(){view='play';document.body.dataset.w=G.k;document.body.classList.toggle('boss',G.boss);$('#app').className='bt';const s=SUB.find(x=>x.k==G.k),g=Math.ceil(G.f/10),[em,nm]=G.mon.split(/ (.+)/),mx=G.boss?5:3;
 $('#app').innerHTML=`<div class="top"><button class="ghost" onclick="menu()">←</button><div><b>${s.w}</b><br><small>${Z[G.k][Math.ceil(g/3)-1]} · Lớp ${g} · Độ khó: ${G.diffLabel||'Thường'}</small></div><div class="r"><b>Tầng ${G.f}/120</b><br>${'❤️'.repeat(G.h)}${'🖤'.repeat((G.maxH||mx)-G.h)}</div></div>
<div class="arena"><div class="hero">${IM('hero')}<span class="chest-stones">${D.stones.map(st=>st.icon).join('')}</span></div><div class="mon ${G.boss?'boss':''}" id="mon">${IM(G.sp[0],G.sp[1])}</div></div>
<div class="name">${G.boss?'👑 BOSS · ':''}${nm}${G.rep?' · luyện tập':''}</div><div class="hpb"><i style="width:${G.hp/G.mh*100}%"></i></div>
<div class="q">${G.q.t}</div>
<div class="ans">${G.q.o.map((o,i)=>`<button class="a ${G.el.includes(i)?'off':''} ${G.hint==i?'hint':''}" onclick="pick(${i})"><b>${'ABCD'[i]}.</b> ${o}</button>`).join('')}</div>
<div class="perks">${['✂️ Loại 2 đáp án','💡 Gợi ý','🔄 Đổi câu'].map((n,i)=>`<button onclick="perk(${i})">${n}<small>${D.free[i]>0?'miễn phí ×'+D.free[i]:'60 🪙'}</small></button>`).join('')}</div>
<div class="stone-tools">${[{id:'calc',icon:'🔴',name:'Đá Tính Toán',desc:'Gợi ý từng bước'},{id:'words',icon:'🔵',name:'Đá Ngôn Từ',desc:'Gợi ý từ khóa'},{id:'reason',icon:'🟢',name:'Đá Suy Luận',desc:'Loại một đáp án sai'}].filter(st=>D.stones.some(v=>v.id===st.id)).map(st=>`<button class="stone-tool" onclick="useStone('${st.id}')" ${G.stoneUsed[st.id]?'disabled':''}>${st.icon} ${st.name}<small>${G.stoneUsed[st.id]?'Đã dùng câu này':st.desc}</small></button>`).join('')}</div>
<div id="feedback">${G.feedback||''}</div><div class="cubut" id="cubut">🦉 ${msg}</div>`}
function say(t){msg=t;const l=$('#cubut');if(l)l.textContent='🦉 '+t}
function explainCurrent(selected){
 const q=G.q.t,ans=G.q.o[G.q.c];let why='Đọc kỹ dữ kiện trong câu hỏi, xác định từ khóa quan trọng rồi đối chiếu với đáp án.';
 if(G.k==='math'){
  let m;
  if((m=q.match(/^(-?\d+(?:[.,]\d+)?)\s*\+\s*(-?\d+(?:[.,]\d+)?)\s*=\s*\?$/)))why=`Phép cộng: giữ nguyên hai số hạng rồi cộng chúng. Có thể kiểm tra bằng phép trừ ngược.`;
  else if((m=q.match(/^(-?\d+(?:[.,]\d+)?)\s*-\s*(-?\d+(?:[.,]\d+)?)\s*=\s*\?$/)))why='Phép trừ: lấy số bị trừ trừ đi số trừ. Kiểm tra bằng cách cộng hiệu với số trừ.';
  else if(q.includes('×'))why='Phép nhân: có thể dùng bảng nhân hoặc tách một thừa số thành các phần dễ tính.';
  else if(q.includes('÷'))why='Phép chia: tìm số mà khi nhân với số chia sẽ được số bị chia.';
  else if(q.includes('% của'))why='Tính phần trăm bằng cách đổi p% thành p/100 rồi nhân với giá trị đã cho.';
  else if(q.includes('Giải '))why='Phương trình bậc nhất: thực hiện phép toán ngược ở hai vế để cô lập x.';
  else if(q.includes('Tam giác vuông'))why='Dùng định lý Pythagore: bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.';
  else if(q.includes('x²'))why='Thay giá trị x vào biểu thức, tính lũy thừa trước rồi thực hiện nhân và cộng/trừ.';
  else if(q.includes('ƯCLN'))why='ƯCLN là ước chung lớn nhất. Phân tích các số hoặc dùng thuật toán Euclid.';
  else if(q.includes('Tích vô hướng'))why='Tích vô hướng hai vectơ bằng tích các tọa độ tương ứng rồi cộng lại.';
  else if(q.includes('Cấp số cộng'))why='Số hạng thứ n của cấp số cộng: uₙ = u₁ + (n − 1)d.';
  else if(q.includes('y’('))why='Với y = ax² + bx, đạo hàm là y’ = 2ax + b; thay x đã cho vào.';
  else if(q.includes('Tích phân'))why='Tìm nguyên hàm rồi lấy giá trị tại cận trên trừ giá trị tại cận dưới.';
  else if(q.includes('Môđun'))why='Với z = a + bi, môđun là √(a² + b²).';
  else if(q.includes('parabol'))why='Với y = ax² + bx + c, hoành độ đỉnh là x = −b/(2a).';
  else why='Hãy tách bài toán thành dữ kiện, quy tắc cần dùng và phép tính cuối cùng; sau đó kiểm tra lại kết quả.';
 } else if(G.k==='en'){
  if(q.includes('nghĩa là gì'))why='Đọc từ tiếng Anh, nhớ ngữ cảnh và loại từ; chọn nghĩa tiếng Việt phù hợp nhất.';
  else if(q.includes('___'))why='Quan sát chủ ngữ, thời gian và cấu trúc ngữ pháp xung quanh chỗ trống trước khi chọn.';
  else why='Xác định từ khóa trong câu, sau đó loại các lựa chọn sai ngữ cảnh hoặc sai nghĩa.';
 } else {
  why='Xác định chức năng chính của thuật ngữ hoặc thiết bị được hỏi; loại đáp án thuộc nhóm chức năng khác.';
 }
 return `<div class="feedback"><b>${selected===G.q.c?'✨ Giải thích đáp án':'📘 Cùng ghi nhớ'}</b><br>${why}<br><span class="correct-answer">Đáp án đúng: ${ans}</span></div>`;
}
function pick(i){if(lock||!G||G.el.includes(i))return;lock=1;const ok=i==G.q.c,B=document.querySelectorAll('.a');
 B[G.q.c].classList.add('good');if(!ok)B[i].classList.add('bad');
 G.review.push({q:G.q.t,selected:G.q.o[i],answer:G.q.o[G.q.c],correct:ok,explanation:explainCurrent(i).replace(/<[^>]*>/g,' ')});
 G.feedback=explainCurrent(i);
 if(ok){sfx('ok');G.hp-=G.damage||10;G.ok++;if(!G.rep)D.xp+=5;say('Chính xác! Hãy ghi nhớ vì sao đáp án này đúng.');atk();$('.hpb i').style.width=Math.max(0,G.hp/G.mh*100)+'%'}
 else{sfx('bad');G.h--;say('Chưa chính xác — đọc lời giải rồi thử áp dụng ở câu tiếp theo nhé.');hurt();if(cfg.shake&&!cfg.noFx)document.body.classList.add('shake')}
 const fb=$('#feedback');if(fb)fb.innerHTML=G.feedback;
 B.forEach(b=>b.disabled=true);
 const g0=G;let done=0;const adv=()=>{if(done||G!==g0)return;done=1;clearTimeout(g0.__tm);g0.__fin=null;document.body.classList.remove('shake');if(!G)return;if(G.hp<=0){$('#mon').classList.add('die');return setTimeout(()=>end(1),650)}if(G.h<=0)return end(0);nextQ();draw()};
const wait=cfg.skipExp?700:(ok?6000:8000);g0.__fin=adv;g0.__tm=setTimeout(adv,wait);
if(!cfg.skipExp&&fb){fb.insertAdjacentHTML('afterbegin','<div class="cdrow"><div class="cd" id="cdbar"><i style="animation-duration:'+wait+'ms"></i></div><button class="skip" id="cdskip" onclick="G&&G.__fin&&G.__fin()">Bỏ qua ▶</button></div>')}}
function perk(i){if(lock||!G)return;if((i==0&&G.el.length)||(i==1&&G.hint>=0))return say('Đã dùng cho câu này rồi');
 if(D.free[i]>0)D.free[i]--;else if(D.coins>=60)D.coins-=60;else return say('Không đủ xu edu 🪙');
 if(i==0)G.el=sh([0,1,2,3].filter(x=>x!=G.q.c)).slice(0,2);
 if(i==1){G.hint=-2;say('Gợi ý: xác định từ khóa trong câu hỏi và loại đáp án không phù hợp; đặc quyền này không tiết lộ đáp án.');}
 if(i==2){nextQ();sfx('buy');save();draw();$('#mon')?.classList.add('flip');return}
 sfx('buy');save();draw()}
function useStone(id){if(lock||!G||G.stoneUsed[id])return;if(!D.stones.some(v=>v.id===id))return say('Bạn chưa thu thập viên đá này.');
 G.stoneUsed[id]=true;let html='',tip='';
 if(id==='calc'){
  const q=G.q.t;
  if(q.includes('% của'))tip='Bước 1: đổi phần trăm thành phân số trên 100. Bước 2: nhân phân số đó với số đã cho. Bước 3: kiểm tra đơn vị.';
  else if(q.includes(' + '))tip='Bước 1: xác định hai số hạng. Bước 2: cộng theo hàng hoặc tách thành số tròn chục. Bước 3: thử phép trừ để kiểm tra.';
  else if(q.includes(' - '))tip='Bước 1: xác định số bị trừ và số trừ. Bước 2: thực hiện phép trừ. Bước 3: cộng hiệu với số trừ để kiểm tra.';
  else if(q.includes(' × '))tip='Bước 1: xác định hai thừa số. Bước 2: dùng bảng nhân hoặc phân phối phép nhân nếu cần. Bước 3: ước lượng để kiểm tra.';
  else if(q.includes(' ÷ '))tip='Hãy tìm số thương sao cho thương nhân với số chia bằng số bị chia.';
  else if(q.includes('Giải '))tip='Thực hiện phép toán ngược ở cả hai vế theo cùng thứ tự để đưa các số hạng chứa x về một phía.';
  else if(q.includes('Tam giác vuông'))tip='Áp dụng a² + b² = c², trong đó c là cạnh huyền; sau đó lấy căn bậc hai.';
  else if(q.includes('Cấp số cộng'))tip='Dùng công thức uₙ = u₁ + (n − 1)d; thay u₁, n và công sai d từ đề bài.';
  else if(q.includes('Tích vô hướng'))tip='Nhân hoành độ với hoành độ, tung độ với tung độ, rồi cộng hai tích.';
  else if(q.includes('Tích phân'))tip='Tìm nguyên hàm trước, sau đó tính F(cận trên) − F(cận dưới).';
  else if(q.includes('Môđun'))tip='Với z = a + bi, dùng công thức |z| = √(a² + b²).';
  else tip='Gạch chân dữ kiện, chọn công thức liên quan, thay số cẩn thận và kiểm tra kết quả bằng cách tính ngược. Đá không hiển thị đáp án để bạn vẫn tự tư duy.';
  html=`<div class="feedback"><b>🔴 Thạch Tính Toán kích hoạt</b><br>${tip}</div>`;
 } else if(id==='words'){
  const a=String(G.q.o[G.q.c]||'');const first=[...a.trim()][0]||'?';const len=[...a.trim()].length;
  tip=G.k==='en'&&G.q.t.includes('nghĩa là gì')?'Hãy nhớ nghĩa của từ tiếng Anh trong câu hỏi và chọn bản dịch sát nhất.':'Tìm từ khóa trong câu hỏi, nghĩ đến khái niệm/cụm từ liên quan rồi so sánh các lựa chọn.';
  html=`<div class="feedback"><b>🔵 Thạch Ngôn Từ kích hoạt</b><br>${tip}<br>Manh mối: đáp án bắt đầu bằng chữ “${first}” và có ${len} ký tự (tính cả khoảng trắng).</div>`;
 } else if(id==='reason'){
  const wrong=G.q.o.map((_,i)=>i).filter(i=>i!==G.q.c&&!G.el.includes(i));
  if(wrong.length){const gone=wrong[Math.floor(Math.random()*wrong.length)];G.el.push(gone);}
  tip='Đã loại một phương án sai. Hãy so sánh các lựa chọn còn lại với dữ kiện và quy tắc trong câu hỏi.';
  html=`<div class="feedback"><b>🟢 Thạch Suy Luận kích hoạt</b><br>${tip}</div>`;
 }
 G.feedback=html;sfx('buy');draw();const fb=$('#feedback');if(fb)fb.innerHTML=html;const hero=$('.hero');if(hero){hero.classList.remove('stone-pulse');void hero.offsetWidth;hero.classList.add('stone-pulse')}say(({calc:'Đá Tính Toán đã đưa ra các bước gợi ý.',words:'Đá Ngôn Từ đã tiết lộ manh mối từ khóa.',reason:'Đá Suy Luận đã loại một đáp án sai.'})[id]);
}
function end(w){sfx(w?'win':'lose');const p=D.p[G.k],f=G.f;let t,d;
 if(w){if(!G.rep){const c=G.boss?30:10,x=20+(G.boss?100:0);D.coins+=c;D.xp+=x;p.hi=Math.max(p.hi,f);t=`🎉 Qua tầng ${f}!`;d=`+${c} 🪙 · +${x+G.ok*5} XP`}
  else{t=`✅ Xong tầng ${f}`;d='Tầng luyện tập: không nhận thưởng'}
  if(f==p.cur)p.cur=Math.min(120,f+1);
D.memory.unshift({at:new Date().toLocaleString('vi-VN'),world:SUB.find(z=>z.k===G.k).n,floor:f,boss:G.boss?G.mon:'',result:'Thắng',correct:G.ok,review:G.review.slice(-20)});D.memory=D.memory.slice(0,80);
const sm={100:{id:'calc',name:'Thạch Tính Toán',icon:'🔴'},110:{id:'words',name:'Thạch Ngôn Từ',icon:'🔵'},120:{id:'reason',name:'Thạch Suy Luận',icon:'🟢'}};
if(G.boss&&sm[f]&&!D.stones.some(v=>v.id===sm[f].id)){D.stones.push(sm[f]);d+=`<br>💎 Nhận được ${sm[f].icon} ${sm[f].name}!`;}
if(G.boss&&f<120)d+=`<br>🚪 Lên lớp ${f/10+1}!`;if(f==120)d+='<br>🏆 Bạn đã chinh phục thế giới này!'}
 else{p.cur=Math.max(1,f-(G.boss?5:1));t='🔄 Hết lượt tim';d=`Lùi xuống tầng ${p.cur}. Phải vượt lại!`;D.memory.unshift({at:new Date().toLocaleString('vi-VN'),world:SUB.find(z=>z.k===G.k).n,floor:f,boss:G.boss?G.mon:'',result:'Thất bại',correct:G.ok,review:G.review.slice(-20)});D.memory=D.memory.slice(0,80)}
 save();msg=w?'Tuyệt vời, Khôi!':'Đừng nản, thử lại nhé!';
 $('#app').innerHTML=`<div class="res">${podium(w,t,d)}<button onclick="explore('${G.k}')">Tiếp tục hành trình</button><button class="ghost" onclick="menu()">Về menu</button></div>`;view='res'}
addEventListener('keydown',e=>{if(view=='ex')return exKey(e,1);if(view!='play')return;if(lock&&G&&G.__fin&&(e.key=='Enter'||e.key==' ')){e.preventDefault();G.__fin();return}const k=e.key.toLowerCase(),i='1234'.indexOf(k),j='abcd'.indexOf(k),p='qwe'.indexOf(k);
 if(i>=0)pick(i);else if(j>=0)pick(j);else if(p>=0)perk(p);else if(k=='escape')menu()});
// Độ khó được xác định tự động theo tầng, không có menu chọn độ khó.
/* MENU NGANG + CÀI ĐẶT (ghi đè menu cũ) */
const cfg={mus:1,sfx:1,mv:.6,sv:.8,shake:1,noFx:0,lite:0,skipExp:0,gateCut:1};try{Object.assign(cfg,JSON.parse(localStorage.getItem('pltgtt_cfg')||'{}'))}catch(e){}
const saveCfg=()=>{try{localStorage.setItem('pltgtt_cfg',JSON.stringify(cfg))}catch(e){}};
function cf(k){cfg[k]=cfg[k]?0:1;saveCfg();window.applyCfg&&applyCfg();sfx('ok');settings()}
function setv(k,v){cfg[k]=v/100;saveCfg()}
function menu(){leave();view='menu';G=null;rc=0;$('#app').className='mn';document.body.dataset.w='menu';document.body.classList.remove('boss');
 $('#app').innerHTML=`<div class="mh"><div class="logo"><h1>🦉 PHIÊU LƯU THẾ GIỚI TRI THỨC</h1><p class="sub">Hành trình của người thủ thư</p><div class="pf">${IM('hero')}${IM('owl')}</div><div class="bar"><span>🪙 ${D.coins}</span><span>⭐ ${D.xp} XP</span></div><p class="sub"><b>${title()}</b><br>${msg}</p></div>
 <div class="wl">${SUB.map(s=>{const p=D.p[s.k],g=Math.ceil(p.cur/10);return `<div class="wc w-${s.k}">${IM(...MS[s.k][0])}<b>${s.w}</b><small>${s.n} · ${Z[s.k][Math.ceil(g/3)-1]}</small><span class="floor-chip">LỚP ${g} / 12 · TẦNG ${p.cur} / 120</span><div class="pb"><i style="width:${p.cur/1.2}%"></i></div><small>Đã chinh phục ${p.hi||0}/120 tầng</small><small class="auto-diff">⚔️ Độ khó tự tăng · Mức ${p.cur}/120</small><button onclick="explore('${s.k}')">🗝️ Vào hầm ngục</button></div>`}).join('')}</div></div>
 <div class="stonebar">${[{id:'calc',name:'Tính Toán',icon:'🔴'},{id:'words',name:'Ngôn Từ',icon:'🔵'},{id:'reason',name:'Suy Luận',icon:'🟢'}].map(st=>`<span class="stone ${D.stones.some(v=>v.id===st.id)?'':'locked'}">${st.icon} ${st.name}</span>`).join('')}</div><div class="nav"><button class="ghost" onclick="memoryBook()">📜 Ký ức</button><button class="ghost" onclick="settings()">⚙ Cài đặt</button><button class="ghost" onclick="help()">❓ Cách chơi</button></div>`}
function memoryBook(){leave();view='memory';$('#app').className='mn';document.body.dataset.w='menu';
 const stones=[{id:'calc',name:'Thạch Tính Toán',icon:'🔴',power:'Hỗ trợ tính toán: xác định dữ kiện, chọn phép tính và kiểm tra từng bước.'},{id:'words',name:'Thạch Ngôn Từ',icon:'🔵',power:'Hỗ trợ tìm từ ngữ: nhận diện từ khóa, nghĩa gần đúng và cách diễn đạt.'},{id:'reason',name:'Thạch Suy Luận',icon:'🟢',power:'Hỗ trợ suy luận: tách dữ kiện, tìm quy luật và đánh giá kết luận.'}];
 $('#app').innerHTML=`<h2>📜 Bộ lưu ký ức màn chơi</h2><p class="sub">Tiến trình được lưu trên trình duyệt của thiết bị này.</p><h3>💎 Ba viên đá tri thức</h3>${stones.map(st=>`<div class="sp ${D.stones.some(v=>v.id===st.id)?'':'locked'}"><b>${st.icon} ${st.name}</b><p>${st.power}</p><small>${D.stones.some(v=>v.id===st.id)?'Đã thu thập':'Chưa thu thập · Boss tầng '+({calc:100,words:110,reason:120}[st.id])}</small></div>`).join('')}<h3>🧠 Nhật ký hành trình</h3><div class="memory-list">${D.memory.length?D.memory.map(m=>`<div class="sp"><b>${m.result==='Thắng'?'⚔️':'📍'} ${m.world} · Tầng ${m.floor}</b><br><small>${m.at}</small><p>${m.boss?'Boss: '+m.boss:'Thử thách thường'} · Trả lời đúng: ${m.correct}</p>${m.review&&m.review.length?`<details><summary>Xem lại ${m.review.length} câu đã làm</summary>${m.review.map((r,i)=>`<div class="review-q"><b>Câu ${i+1}:</b> ${r.q}<br><span class="${r.correct?'right':'wrong'}">Bạn chọn: ${r.selected||'—'}${r.correct?' ✓':' ✗'}</span><br><span class="right">Đáp án đúng: ${r.answer}</span><br><small>${r.explanation||''}</small></div>`).join('')}</details>`:''}</div>`).join(''):'Chưa có ký ức. Hãy bắt đầu một trận đấu trí!'}</div><div class="nav"><button onclick="menu()">← Quay lại</button></div>`;
}
function settings(){leave();view='set';rc=0;$('#app').className='mn';document.body.dataset.w='menu';
 const tg=k=>`<button class="tg ${cfg[k]?'on':''}" onclick="cf('${k}')">${cfg[k]?'BẬT':'TẮT'}</button>`,sl=(k,t)=>`<input type="range" min="0" max="100" value="${cfg[k]*100}" oninput="setv('${k}',this.value)" onchange="${t}">`;
 $('#app').innerHTML=`<h2 style="text-align:center;margin:4px 0 10px">⚙ Cài đặt</h2><div class="sg">
 <div class="sp"><h3>🔊 Âm thanh</h3><div class="row"><span>Nhạc nền</span>${tg('mus')}</div><div class="row"><span>Âm lượng nhạc</span>${sl('mv','')}</div><div class="row"><span>Hiệu ứng âm thanh</span>${tg('sfx')}</div><div class="row"><span>Âm lượng hiệu ứng</span>${sl('sv',"sfx('ok')")}</div></div>
 <div class="sp"><h3>✨ Hiệu ứng</h3><div class="row"><span>Rung màn hình khi sai</span>${tg('shake')}</div><div class="row"><span>Tắt hiệu ứng / animation</span>${tg('noFx')}</div><div class="row"><span>Chế độ nhẹ (30 khung/giây)</span>${tg('lite')}</div><div class="row"><span>Bỏ qua giải thích</span>${tg('skipExp')}</div>${window.gateCutRow?gateCutRow():''}<h3 style="margin-top:12px">🌐 Ngôn ngữ</h3><div class="row"><span>Tiếng Việt</span><b>✓</b></div></div>
 <div class="sp"><h3>🎮 Điều khiển</h3><small>Máy tính: WASD hoặc phím mũi tên để đi, E nói chuyện, 1-4 hoặc A-D chọn đáp án, Q/W/E dùng đặc quyền, Esc về menu.<br>Điện thoại: cần gạt góc trái dưới, chạm đáp án trực tiếp, xoay ngang màn hình.</small></div>
 <div class="sp"><h3>💾 Dữ liệu</h3><div class="row"><small>Tiến trình lưu trên trình duyệt này</small></div><button id="rs" class="ghost" onclick="reset()">Xóa tiến trình</button></div></div>
 <div class="nav"><button onclick="menu()">← Quay lại</button></div>`}
function help(){leave();view='set';$('#app').className='mn';document.body.dataset.w='menu';
 $('#app').innerHTML=`<h2 style="text-align:center;margin:4px 0 10px">❓ Cách chơi</h2><div class="sp"><small>🗺️ Có 120 tầng: cứ 10 tầng là một lớp học, từ lớp 1 đến lớp 12. Mỗi lần vào hầm, các vách phụ trong mê cung được tạo ngẫu nhiên; lối chính luôn thông để bạn không bị kẹt. Độ khó tự động tăng theo từng tầng; không có lựa chọn dễ/vừa/khó.<br>⚔️ Đến gần thử thách để vào trận: tầng thường 5 câu, 3 tim; boss 10 câu, 5 tim. Đúng làm thử thách mất 10 sức, sai mất 1 tim.<br>📘 Sau mỗi câu, đọc phần giải thích để ghi nhớ kiến thức.<br>💎 Ba đá tri thức mở khóa sau các boss tầng 100, 110 và 120: Tính Toán gợi ý cách làm, Ngôn Từ đưa manh mối, Suy Luận loại một phương án sai. Mỗi đá dùng một lần cho mỗi câu và không tiết lộ thẳng đáp án.<br>🔄 Hết lượt tim: lùi 1 tầng (boss: lùi 5 tầng) và phải vượt lại.<br>🪙 Qua tầng nhận xu edu và XP, dùng xu edu mua đặc quyền ở Hiệu thuốc của Dược sư Hạnh.<br>✂️ 💡 🔄 Loại 2 đáp án, gợi ý tư duy, đổi câu (mỗi loại 3 lượt miễn phí).</small></div><div class="nav"><button onclick="menu()">← Quay lại</button></div>`}

