# Sinh lại data/*.js từ data/*.json (để mở được bằng file://). Chạy: python tools/build_data.py
import json,os
D=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'data')
V={'tin-hoc':'TIN_BANK','hoc-vien':'NGOC_BANK'}
for n,v in V.items():
    t=open(f'{D}/{n}.json',encoding='utf-8').read(); json.loads(t)
    open(f'{D}/{n}.js','w',encoding='utf-8').write(f'/* Tự sinh từ data/{n}.json bằng tools/build_data.py. Không sửa tay file này. */\nwindow.{v}={t};\n'); print('đã sinh',n+'.js')
