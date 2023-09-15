/* fullpage.js - layout */
const docEle = document.documentElement;
const sec = document.querySelectorAll('.sec');

for (let i = 0; i < sec.length; i++) {
    sec[i].onwheel = (e) => {
        // 기본 이벤트 방지
        e.preventDefault();
        if (e.deltaY > 0) {
            let next = e.currentTarget.nextElementSibling.offsetTop;
            docEle.scrollTop = next;
        } else {
            let prev = e.currentTarget.previousElementSibling.offsetTop;
            docEle.scrollTop = prev;
        }
    };
}