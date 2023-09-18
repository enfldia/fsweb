/* fullpage.js - layout */
const docEle = document.documentElement;
const sec = document.querySelectorAll('.sec');
const wh = window.innerHeight;



for (let i = 0; i < sec.length; i++) {
    sec[i].onwheel = (e) => {
        // 기본 이벤트 방지
        e.preventDefault();
        if (e.deltaY > 0) {
            if(docEle.scrollTop > wh * (sec.length-2) + 10) return;
            let next = e.currentTarget.nextElementSibling.offsetTop;
            docEle.scrollTop = next;
        } else {
            // html의 스크롤 값이 창의 높이보다 작으면 휠 이벤트를 리턴해서 빠져 나온다.
            if(docEle.scrollTop < wh) return;
            let prev = e.currentTarget.previousElementSibling.offsetTop;
            docEle.scrollTop = prev;
        }
    };
}
/* 
    try ~ catch 구분

    try {
        정상 코트;
    } catch(err) {
        에러 일떄 코드;
    } finally {
        무조건 실행할 코드;
    }
 */
    

/* 
    try ~ catch 구분
    try {
        let next = e.currentTarget.nextElementSibling.offsetTop;
            docEle.scrollTop = next;;
    } catch(err) {
        alot('더 이상 올라갈 수 없습니다.');
    } finally {
        무조건 실행할 코드;
    }
 */