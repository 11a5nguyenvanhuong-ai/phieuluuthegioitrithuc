/* PHIÊU LƯU THẾ GIỚI TRI THỨC — Vào cổng (bỏ qua bằng phím/chạm), chuyển cảnh mờ dần, áp dụng cài đặt (hiệu ứng, chế độ nhẹ), sửa nhãn cũ. */
(()=>{
 window.applyCfg=()=>{document.body.classList.toggle('no-fx',!!cfg.noFx);window.__lite=cfg.lite?1:0;try{localStorage.setItem('pltgtt_lite',cfg.lite?'1':'0')}catch(e){}};
 try{if(!cfg.lite&&localStorage.getItem('pltgtt_lite')=='1')cfg.lite=1}catch(e){}
 applyCfg();
 /* Mờ dần từ đen khi vào hầm ngục (dùng lại một phần tử duy nhất) */
 let FD=null;const fade=()=>{if(cfg.noFx)return;const st=document.getElementById('stage');if(!st)return;if(!FD){FD=document.createElement('div');FD.id='ntt-fade';}if(FD.parentNode!==st)st.appendChild(FD);FD.className='';void FD.offsetWidth;FD.className='go'};
 const _ex=explore;explore=function(){const r=_ex.apply(this,arguments);fade();return r};
 /* Sửa nhãn cũ trong dữ liệu đã lưu: "Tin học · Python từ tầng 90" -> "Tin học" */
 const OLD='Tin học · Python từ tầng 90';
 const _ld=load;load=function(){const r=_ld.apply(this,arguments);try{['memory','stats'].forEach(k=>{if(D[k]){const s=JSON.stringify(D[k]);if(s.indexOf(OLD)>=0)D[k]=JSON.parse(s.split(OLD).join('Tin học'))}})}catch(e){}return r};
})();
