# Quét toàn bộ mã nguồn và dữ liệu để tìm tên cũ / từ ngữ không phù hợp thi cử.
# Chạy từ thư mục gốc của game:  python tools/quet_tu_cam.py
import re,os,sys
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAM=[r'NGỌC TRI THỨC',r'(?<!Viên )Ngọc Tri Thức',r'ngoctrithuc',r'Thư Viện Cổ Ngữ',r'[Ee]ldoria',r'[Ee]ldo\b',r'XỨ NGỌC',r'[Xx]ứ [Nn]gọc',r'xungoc',r'[Ll]umi',r'[Rr]ượu',r'\bbia\b',r'thuốc lá',r'\bma\b',r'[Qq]uỷ',r'[Qq]uỷ',r'địa ngục',r'\bmáu\b',r'giết',r'\bchết\b',r'tử vong',r'đánh đập',r'bạo lực',r'sát thương',r'(?<!n)gục xuống',r'\bGro\b',r'🍷|🍺|🥂|🍸|🍹|🍶|🧌|👹|💀|☠|🩸|🔪',r'[Qq]uái\b',r'[Ss]ắp có',r'mê tín']
bad=0
for dp,_,fs in os.walk(ROOT):
    if os.sep+'tools' in dp: continue
    for f in fs:
        if not f.endswith(('.js','.json','.css','.html','.cpp')): continue
        p=os.path.join(dp,f); t=open(p,encoding='utf-8').read()
        t='\n'.join(l for l in t.split('\n') if 'MIGRATE' not in l)
        for pat in set(CAM):
            for m in re.finditer(pat,t):
                bad+=1; print(os.path.relpath(p,ROOT),'|',pat,'|',t[max(0,m.start()-40):m.end()+40].replace('\n',' '))
print('TỔNG số chỗ nghi ngờ:',bad); sys.exit(1 if bad else 0)
