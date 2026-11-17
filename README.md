# PHIÊU LƯU THẾ GIỚI TRI THỨC

Game quiz phiêu lưu pixel (Toán, Tiếng Anh, Tin học). **Bản giao nộp giai đoạn 3.** Mở `index.html` bằng cú nhấp đúp (không cần máy chủ).

## Cấu trúc thư mục

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Khung HTML, nạp CSS và các script theo thứ tự |
| `css/main.css` | CSS giao diện quiz, menu, đấu trường |
| `js/01-loi-game.js` | Lõi game: sinh câu Toán, ngân hàng Tiếng Anh/Tin học cũ, NPC, hầm ngục cũ, âm thanh cũ, lưu trữ, menu, trận quiz, cài đặt. |
| `js/02-hoc-tap-thanh-tuu.js` | Thống kê học tập, thành tựu, pha boss, ôn tập câu sai, nhật ký. |
| `js/03-hoc-vien.js` | Học viện tri thức (ngân hàng câu hỏi tích hợp ở data/hoc-vien.js). |
| `js/04-sprite-pixel-nhan-vat.js` | Sprite 64x64 vẽ bằng code, phòng nhân vật. |
| `js/05-the-gioi-ngoai-troi.js` | 36 boss pixel, ngân hàng Tin học, đổi tên Thế Giới Bit, thế giới ngoài trời nhìn từ trên xuống. |
| `js/06-ham-nguc-ngau-nhien.js` | Sinh hầm ngục ngẫu nhiên (trùng thuật toán dungeon_gen.cpp), bản đồ nhỏ hầm ngục. |
| `js/07-ham-nguc-noi-that-cot-truyen.js` | Chống đơ phím, nội thất hầm ngục, cốt truyện, hiệu ứng chiêu thức. |
| `js/08-nhan-vat-hoat-anh-truyen.js` | Nhân vật nhiều khung hình, cú vỗ cánh, truyện mở rộng, nhật ký truyện. |
| `js/09-menu-pixel-ngoai-troi.js` | Màn hình chính pixel, nhập tên, menu tạm dừng, vật thể và NPC ngoài trời. |
| `js/10-cua-hang-ban-do.js` | Hiệu thuốc, bản đồ nhỏ và bản đồ lớn. |
| `js/12-canh-vao-ham.js` | Cảnh nhân vật đi vào cổng hầm ngục (máy quay từ trên xuống, cổng phát sáng và mở theo nhịp, tên hầm và tầng, cổng đóng lại), cài đặt kiểu cảnh |
| `js/11-vao-cong-cai-dat.js` | Bỏ qua cảnh vào cổng, chuyển cảnh mờ dần, áp dụng cài đặt (tắt hiệu ứng, chế độ nhẹ), sửa nhãn cũ. |
| `js/99-khoi-dong.js` | Khởi động game. |
| `data/tin-hoc.json` / `.js` | Ngân hàng câu hỏi Tin học (tầng 1–89 không có Python) |
| `data/hoc-vien.json` / `.js` | Ngân hàng câu hỏi của Học viện (có giải thích và nguồn) |
| `dungeon_gen.cpp` | Thuật toán sinh hầm ngục, trùng với JavaScript |
| `tools/` | Công cụ đo hiệu năng, thăm dò luồng chơi, quét từ cấm |

## Vì sao có file `.js` cạnh file `.json`

Trình duyệt chặn `fetch()` file JSON cục bộ khi mở bằng `file://`. Vì vậy mỗi file `.json` có một bản `.js` gán vào biến toàn cục (`window.TIN_BANK`, `window.NGOC_BANK`) và được nạp bằng thẻ `<script src>`. Khi sửa `.json`, chạy lại `python tools/build_data.py` để sinh `.js` .

## Ghi chú giai đoạn 1

- Các file `js/` được cắt theo đúng các lớp mã đã chồng lên nhau trong bản gốc, **giữ nguyên thứ tự và hành vi**. Việc hợp nhất sâu thành các mô-đun (âm thanh, lưu trữ, quiz...) làm ở các giai đoạn sau khi viết lại từng phần.
- Tiến trình cũ (khóa `eldoria_*`, `xungoc_*`) được tự chuyển sang khóa mới `ngoctrithuc_*`.

## Từ thương hiệu đã đổi (lịch sử; từ giai đoạn 3 tên game là PHIÊU LƯU THẾ GIỚI TRI THỨC)

| Cũ | Mới | Số chỗ |
|---|---|---|
| `XỨ NGỌC` | `NGỌC TRI THỨC` | 11 |
| `Xứ Ngọc` | `Ngọc Tri Thức` | 4 |
| `xu Eldo` | `xu` | 4 |
| `xungoc_academy_v2` | `ngoctrithuc_academy_v2` | 2 |
| `xungoc_cfg` | `ngoctrithuc_cfg` | 3 |
| `xungoc_v1` | `ngoctrithuc_v1` | 2 |
| `class="lumi" id="lumi"` | `class="cubut" id="cubut"` | 1 |
| `$('#lumi')` | `$('#cubut')` | 1 |
| `🧌 Gro bán thêm lượt` | `🛒 Bác Sáu bán thêm lượt` | 1 |
| `mua đặc quyền ở Gro` | `mua đặc quyền ở Hiệu thuốc của Dược sư Hạnh` | 1 |
| `cửa hàng Gro` | `cửa hàng Bác Sáu` | 1 |
| `ELD_ACH` | `DS_THANH_TUU` | 6 |
| `_eld([A-Z]\w*)` | `_goc\1` | 16 |
| `eld_lite` | `ngoctrithuc_lite` | 2 |
| `eldPrologue` | `moDauTruyen` | 4 |
| `[Xx]ứ Ngọc được thắp sáng bởi ba Viên Ngọc Tri Thức` | `vương quốc Ngọc Tri Thức được thắp sáng bởi ba Viên Ngọc` | 2 |
| `Eldoria` | `Ngọc Tri Thức` | 1 |
| `eldPending` | `truyenChoDuyet` | 3 |
| `HIỆU THUỐC LUMI` | `HIỆU THUỐC HẠNH` | 1 |
| `SPRITE DƯỢC SƯ LUMI` | `SPRITE DƯỢC SƯ HẠNH` | 1 |
| `.lumi{` | `.cubut{` | 3 |
| `xungoc-tin-hoc` | `ngoctrithuc-tin-hoc` | 1 |
| `xungoc_integrated_bank_v2` | `ngoctrithuc_integrated_bank_v2` | 1 |

## Từ ngữ đã thay (cũ → mới)

| Cũ | Mới | Số chỗ |
|---|---|---|
| `Bóng Ma` | `Bóng Sương` | 1 |
| `Bóng ma` | `Bóng sương` | 3 |
| `👹 Quỷ Phương Trình` | `🧮 Hộ Vệ Phương Trình` | 1 |
| `Quái Vật Vòng Lặp` | `Hộ Vệ Vòng Lặp` | 1 |
| `Sách cắn` | `Sách tinh nghịch` | 2 |
| `Phù Thủy Điều Kiện` | `Pháp Sư Điều Kiện` | 1 |
| `gây (\d+) sát thương` | `làm thử thách mất \1 sức` | 2 |
| `quái nhận sát thương` | `thử thách mất sức` | 1 |
| `t='💥 Hết tim!'` | `t='🔄 Hết lượt tim'` | 1 |
| `💥 Hết tim: tụt 1 tầng (boss: tụt 5 tầng)` | `🔄 Hết lượt tim: lùi 1 tầng (boss: lùi 5 tầng)` | 1 |
| `Tụt xuống tầng` | `Lùi xuống tầng` | 1 |
| `tấn công theo môn` | `ra chiêu theo môn` | 1 |
| `đi tới quái để đấu` | `đi tới thử thách để vào trận` | 1 |
| `đến gần quái để đấu` | `đến gần thử thách để vào trận` | 1 |
| `Đến gần quái để vào trận` | `Đến gần thử thách để vào trận` | 1 |
| `Trận quái thường` | `Thử thách thường` | 1 |
| `hạ quái` | `vượt thử thách` | 1 |
| `quái/boss` | `thử thách/boss` | 2 |
| `quái` | `thử thách` | 4 |
| `Hãy bắt đầu một trận chiến!` | `Hãy bắt đầu một trận đấu trí!` | 1 |
| `Đánh bại một boss.` | `Vượt qua một boss.` | 1 |
| `Đánh bại boss ở cả ba thế giới.` | `Vượt qua boss ở cả ba thế giới.` | 1 |
| `name:'Kẻ săn boss'` | `name:'Người vượt ải'` | 1 |
| `Mỗi đáp án đúng là một đòn đánh!` | `Mỗi đáp án đúng là một chiêu tri thức!` | 1 |
| `⚔️ Đánh</button>` | `⚔️ Ra chiêu</button>` | 1 |
| `💥 Đau</button>` | `😮 Giật mình</button>` | 1 |
| `không bao giờ chết im lặng` | `không bao giờ dừng im lặng` | 1 |
| `Trận chiến lớn nhất bắt đầu!` | `Thử thách lớn nhất bắt đầu!` | 1 |
| `bị đánh bại` | `bị vượt qua` | 1 |
| `với kẻ thù` | `với người lạ` | 1 |
| `cô độc và hung hăng` | `cô đơn và bướng bỉnh` | 1 |
| `{n} gục xuống, mảnh ngọc` | `{n} ngồi xuống, mảnh ngọc` | 1 |
| `trả lời đúng để tấn công!` | `trả lời đúng để ra chiêu!` | 1 |
| `Đến gần quái để đấu` | `Đến gần thử thách để vào trận` | 1 |
| `'👑 BOSS':'Quái'` | `'👑 BOSS':'Thử thách'` | 1 |
| `hoặc đánh quái nhé` | `hoặc vượt thử thách nhé` | 1 |

Vật phẩm: "Rượu Thông Thái" → "Bình Kinh Nghiệm" (+40 XP), biểu tượng bình xanh có ngôi sao.

## Kiểm tra

- `python tools/quet_tu_cam.py` — quét tên cũ và từ không phù hợp.
- `python tools/do_hieu_nang.py file:///.../index.html tên` — đo khung hình, interval, listener, canvas (cần `pip install playwright` và `playwright install chromium`).

Hướng dẫn Brave: mở `brave://gpu`, kiểm tra "Graphics Feature Status"; bật Cài đặt → Hệ thống → "Use graphics acceleration when available".

## Giai đoạn 2 (đã làm)

- **Đủ 120 tầng cho cả 3 thế giới (tổng 360 tầng, 36 boss):** đã sửa lỗi Tin học chỉ chơi được tới tầng 110 (thiếu bộ câu hỏi lớp 12, báo lỗi `L is not iterable`). Thêm 10 câu Tin học/Python cho tầng 111–120.
- **Bỏ màn "Đền Đại Số".** Nhân vật và Cú Bút tự đi bộ lên bậc thềm vào cổng, cửa mở sáng, nhân vật mờ dần rồi chuyển cảnh mờ vào hầm (khoảng 1,4 giây). Bấm phím bất kỳ hoặc chạm màn hình để bỏ qua.
- **Vẽ lại 3 cổng:** Đền Số Giới (đền bậc thang, cột, đài lửa), Thư Viện Cổ Ngữ (tháp đồng hồ, kính màu, biểu ngữ, chồng sách), Thế Giới Bit (khối máy chủ, ăng-ten, tủ máy, dây cáp sáng, cửa an ninh có máy quét). NPC canh cổng đứng lệch sang bên, không chắn cổng hay lối đi.
- **Bản đồ nhỏ** ngoài trời có chú giải (Bạn, Cổng, Rương, NPC); bản đồ hầm ngục có chú giải (Bạn, Thử thách, Cửa, Người giúp).
- **Nghỉ đọc giải thích:** sau mỗi câu có thanh đếm ngược (6 giây khi đúng, 8 giây khi sai) và nút "Bỏ qua ▶" (hoặc phím Enter/Space).
- **Cài đặt mới:** Tắt hiệu ứng / animation, Chế độ nhẹ (30 khung/giây), Bỏ qua giải thích. Đã bỏ dòng "English – sắp có".
- **Sửa nhãn:** Tin học chỉ hiện "Tin học"; chữ "(có Python)" chỉ hiện khi từ tầng 90 trở lên. Dữ liệu nhật ký cũ tự đổi nhãn khi tải.

### Bộ kiểm thử (thư mục `tools/`)
| File | Kiểm tra |
|---|---|
| `kiem_tra_120_tang.py` | Sinh 4.800 câu cho mỗi môn ở tầng 1–120, kiểm tra trùng đáp án, chỉ số đúng; chơi từ tầng 1 tới 120 ở cả 3 môn |
| `kiem_tra_canh_vao_ham.py` | Cảnh vào cổng: đầy đủ lần đầu, rút gọn lần sau, bỏ qua bằng Enter/chạm, khóa điều khiển, tải lại giữa cảnh, không đổi tầng |
| `kiem_tra_phim_ket.py` | Mất focus, đổi tab, giữ phím khi chuyển cảnh, mở menu: nhân vật không tự đi |
| `kiem_tra_giao_dien.py` | Cài đặt, thanh đếm ngược, bỏ qua, tắt hiệu ứng, chế độ nhẹ |
| `do_hieu_nang.py` | Khung hình, thời gian bận của luồng chính, interval, listener, canvas |
| `quet_tu_cam.py` | Quét tên cũ và từ không phù hợp |

## Giai đoạn 3 (đã làm)

- **Đổi tên game** thành PHIÊU LƯU THẾ GIỚI TRI THỨC (tiêu đề, menu, Học viện, logo hai dòng, phụ đề "Hành trình của người thủ thư"). Thế giới trong truyện gọi là **Vương quốc Tri Thức**. Tiền gọi là **xu edu**. Khóa lưu đổi sang `pltgtt_*`; tiến trình từ các khóa cũ (`eldoria_*`, `xungoc_*`, `ngoctrithuc_*`) tự chuyển sang.
- **Ba cổng vẽ lại theo kiểu Việt cổ phong:** Đền Số Giới (tam quan mái cong, trống đồng), Thư Khố Cổ Ngữ (gác Khuê Văn, cuộn thư, chồng sách), Thế Giới Bit (cổng thành, bánh răng, tủ máy chủ, mạch sáng).
- **Cảnh vào hầm** (`js/12-canh-vao-ham.js`): dừng trước cổng, máy quay lia lên mái rồi hạ xuống cửa, cổng phát sáng ba nhịp kèm hạt pixel (tối đa 36 hạt, dùng lại một mảng cố định), cửa mở riêng cho từng hầm, hiện "Hầm ngục … · khu · Tầng/120 · Lớp", nhân vật và Cú Bút đi vào, cổng đóng lại, mờ dần vào tầng đã lưu. Điều khiển bị khóa trong lúc chiếu. Bỏ qua bằng Enter, Space, Esc hoặc chạm (giữ phím di chuyển không làm bỏ qua). Bỏ qua chỉ bỏ phần trình diễn, không đổi tầng.
- **Cài đặt "Cảnh vào hầm ngục":** Đầy đủ mỗi lần / Đầy đủ lần đầu rồi rút gọn (mặc định) / Luôn rút gọn. Chế độ "Tắt hiệu ứng" cũng dùng bản rút gọn, không hạt.
- **Chưa làm / chưa xác minh:** âm thanh mở cổng và bước chân đã viết nhưng chưa nghe thử (môi trường kiểm thử không có loa); chưa đo trên Brave và GPU thật.
