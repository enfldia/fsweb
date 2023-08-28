// 모달 열기
const open_modal = document.querySelector('#btn');
const box_modal = document.querySelector('#modal_box');

open_modal.addEventListener("click", ()=>{
    box_modal.style.display = "block";
})

// 모달 닫기
const close_modal = document.querySelector('#modal_close');

close_modal.addEventListener("click", ()=>{
    box_modal.style.display = "none";
})

// 좋아하는 메뉴의 변수를 선언
const eggmayo = document.querySelector('.eggmayo');
const chickenslice = document.querySelector('.chickenslice');
const tuna = document.querySelector('.tuna');
const pulledporkbarbecue = document.querySelector('.pulledporkbarbecue');
const subwayclub = document.querySelector('.subwayclub');
const roastedchicken = document.querySelector('.roastedchicken');
const chickenbaconavocado = document.querySelector('.chickenbaconavocado');
const rotisseriebarbecuechicken = document.querySelector('.rotisseriebarbecuechicken');
const shrimp = document.querySelector('.shrimp');

const egg_display = document.querySelector('.egg_display');
const cs_display = document.querySelector('.cs_display');
const tuna_display = document.querySelector('.tuna_display');
const ppb_display = document.querySelector('.ppb_display');
const sc_display = document.querySelector('.sc_display');
const rc_display = document.querySelector('.rc_display');
const cba_display = document.querySelector('.cba_display');
const rbc_display = document.querySelector('.rbc_display');
const ns_display = document.querySelector('.ns_display');

// const menubox_favorite = document.querySelector('.favorite_menu_box');

// 클릭한다. 그러면 원하는걸 보여준다. 그리고 원하지 않는건 가린다.
eggmayo.addEventListener("click", ()=>{
    egg_display.style.display = "block";
    cs_display.style.display = "none";
    tuna_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

chickenslice.addEventListener("click", ()=>{
    cs_display.style.display = "block";
    egg_display.style.display = "none";
    tuna_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

tuna.addEventListener("click", ()=>{
    tuna_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

pulledporkbarbecue.addEventListener("click", ()=>{
    ppb_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    tuna_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

subwayclub.addEventListener("click", ()=>{
    sc_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    tuna_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

roastedchicken.addEventListener("click", ()=>{
    rc_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    tuna_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

chickenbaconavocado.addEventListener("click", ()=>{
    cba_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    tuna_display.style.display = "none";
    rbc_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

rotisseriebarbecuechicken.addEventListener("click", ()=>{
    rbc_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    tuna_display.style.display = "none";
    ns_display.style.display = "none";
    box_modal.style.display = "none";
})

shrimp.addEventListener("click", ()=>{
    ns_display.style.display = "block";
    egg_display.style.display = "none";
    cs_display.style.display = "none";
    ppb_display.style.display = "none";
    sc_display.style.display = "none";
    rc_display.style.display = "none";
    cba_display.style.display = "none";
    rbc_display.style.display = "none";
    tuna_display.style.display = "none";
    box_modal.style.display = "none";
})

// 메뉴1~메뉴9가 favorite menu box에 들어가있는 경우를 만들어라. v
// 일단 다 숨겨라. v 
// 클릭하면 위에꺼로 보여줘라 v
// good