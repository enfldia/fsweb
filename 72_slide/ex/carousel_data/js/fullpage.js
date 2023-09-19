const wrap = document.querySelector(".wrap");
const sec = document.querySelectorAll(".sec");
const sec_h = window.innerHeight;
// console.log(sec_h);
const html = document.documentElement;
let scrollY_val = html.scrollTop;




for (let i = 0; i < sec.length; i++) {
  sec[i].addEventListener("wheel", (e) => {
    // 기본 이벤트 제거
    e.preventDefault();
    // 마우스 휠 내림
    if (e.deltaY > 0) {
      if (e.currentTarget === sec[sec.length - 1]) return;
      scrollY_val += sec_h;
      // console.log(event.currentTarget);
    } else {
      // 마우스 휠 올림

      if (e.currentTarget === sec[0]) return;
      /*
      try ~ catch 구분
      try{
        정상코드;
      }catch(err){
        에러 일때 코드;
      }finally{
        무조건 실행할 코드;
      }
      

      */ 
 
      // console.log(event.currentTarget);
      scrollY_val -= sec_h;
    }
    html.scrollTop = scrollY_val;
  });
}
