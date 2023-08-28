// 탭 버튼 정의
const all_tab = document.querySelector('.all_tab');
const notice_tab = document.querySelector('.notice_tab');
const news_tab = document.querySelector('.news_tab');
const channel_tab = document.querySelector('.channel_tab');

// 탭 창 정의
const all_tabtab = document.querySelector('.tab_all');
const notice_tabtab = document.querySelector('.tab_notice');
const news_tabtab = document.querySelector('.tab_news');
const channel_tabtab = document.querySelector('.tab_channel');

// 클릭 - 블록/가리기
all_tab.addEventListener("click", ()=>{
    all_tab.style.background = "#FFCE32";
    notice_tab.style.background = "#ddd";
    news_tab.style.background = "#ddd";
    channel_tab.style.background = "#ddd";
    all_tabtab.style.display = "flex";
    notice_tabtab.style.display = "none";
    news_tabtab.style.display = "none";
    channel_tabtab.style.display = "none";
})

notice_tab.addEventListener("click", ()=>{
    all_tab.style.background = "#ddd";
    notice_tab.style.background = "#FFCE32";
    news_tab.style.background = "#ddd";
    channel_tab.style.background = "#ddd";
    all_tabtab.style.display = "none";
    notice_tabtab.style.display = "flex";
    news_tabtab.style.display = "none";
    channel_tabtab.style.display = "none";
})

news_tab.addEventListener("click", ()=>{
    all_tab.style.background = "#ddd";
    notice_tab.style.background = "#ddd";
    news_tab.style.background = "#FFCE32";
    channel_tab.style.background = "#ddd";
    all_tabtab.style.display = "none";
    notice_tabtab.style.display = "none";
    news_tabtab.style.display = "flex";
    channel_tabtab.style.display = "none";
})

channel_tab.addEventListener("click", ()=>{
    all_tab.style.background = "#ddd";
    notice_tab.style.background = "#ddd";
    news_tab.style.background = "#ddd";
    channel_tab.style.background = "#FFCE32";
    all_tabtab.style.display = "none";
    notice_tabtab.style.display = "none";
    news_tabtab.style.display = "none";
    channel_tabtab.style.display = "flex";
})

// 모달 열기
const mo1 = document.querySelector('.mo1');
const mo2 = document.querySelector('.mo2');
const mo3 = document.querySelector('.mo3');
const mo4 = document.querySelector('.mo4');
const mo5 = document.querySelector('.mo5');
const mo6 = document.querySelector('.mo6');


const modal0 = document.querySelector('.modal_container');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const modal5 = document.querySelector('.modal5');
const modal6 = document.querySelector('.modal6');

mo1.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

mo2.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "none";
    modal2.style.display = "block";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

mo3.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "block";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

mo4.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "block";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

mo5.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "block";
    modal6.style.display = "none";
})

mo6.addEventListener("click", ()=>{
    modal0.style.display = "block";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "block";
})


// 모달 닫기
const modal_close = document.querySelector('#modal_close_a');
const modal_close2 = document.querySelector('#modal_close_b');
const modal_close3 = document.querySelector('#modal_close_c');
const modal_close4 = document.querySelector('#modal_close_d');
const modal_close5 = document.querySelector('#modal_close_e');
const modal_close6 = document.querySelector('#modal_close_f');

modal_close.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

modal_close2.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

modal_close3.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

modal_close4.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

modal_close5.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})

modal_close6.addEventListener("click", ()=>{
    modal0.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
})