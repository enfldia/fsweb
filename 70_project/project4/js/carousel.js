// 캐로셀, carousel.js


// 변수 선언
let idx = 0,
    eDelay = 0,
    currentIdx = 0,
    auto;


// 요소 선택
const slide = document.querySelector('.slide'),
    slideList = slide.querySelectorAll('li'),
    npBtn = document.querySelectorAll('.ctls a'),
    indiBtn = document.querySelectorAll('.indi li'),
    speed = 700;;

// setInterval(함수,tlrks) 시간(밀리초) 후 반복
autoSlide();

function autoSlide() {
    // auto 변수는 사용자가 버튼 클릭시 자동 슬라이들 정지
    auto = setInterval(() => nextSlide(), speed * 4);
};

// prev
// npBtn[0]
npBtn[0].onclick = () => {
    // auto 변수는 사용자가 버튼 클릭시 자동 슬라이들 정지
    clearInterval(auto);
    // 만약 eDelay가 1이면 click 이벤트 벗어남.
    if (eDelay) return;
    // 두 번째 클릭시 적용
    eDelay = 1;
    setTimeout(() => { eDelay = 0; autoSlide(); }, speed);
    prevSlide()
};//npBtn

// next
npBtn[1].onclick = () => {
    // auto 변수는 사용자가 버튼 클릭시 자동 슬라이들 정지
    clearInterval(auto);
    // 만약 eDelay가 1이면 click 이벤트 벗어남.
    if (eDelay) return;
    // 두 번째 클릭시 적용
    eDelay = 1;
    setTimeout(() => { eDelay = 0; autoSlide(); }, speed);
    nextSlide();
};//npBtn

function prevSlide() {
    // 0 -> 4 -> 3 -> 2 -> 1
    slideList[idx].style.left = '-100%';
    slideList[idx].style.transition = `left ${speed / 1000}s`;

    // 4 -> 3 -> 2 -> 1 -> 0
    if (idx === 0) idx = 5;
    slideList[idx - 1].style.left = '0%';
    slideList[idx - 1].style.transition = `left ${speed / 1000}s`;
    indiActive(idx - 1, idx);
    // setTiomeout(함수, 시간): 시간 후 1회
    // setInterval(함수, 시간): 시간 후 반복
    setTimeout(function () {
        if (idx === 5) idx = 0
        slideList[idx].style.left = '100%';
        slideList[idx].style.transition = 'none';
        idx--;
        if (idx === -1) idx = 4;
    }, speed);
}

function nextSlide() {
    slideList[idx].style.left = '-100%';
    slideList[idx].style.transition = `left ${speed / 1000}s`;
    if (idx === 4) idx = -1;
    slideList[idx + 1].style.left = '0%';
    slideList[idx + 1].style.transition = `left ${speed / 1000}s`;
    indiActive(idx + 1, idx);
    // setTiomeout(함수, 시간): 시간 후 1회
    // setInterval(함수, 시간): 시간 후 반복
    setTimeout(function () {
        if (idx === -1) idx = 4
        slideList[idx].style.left = '100%';
        slideList[idx].style.transition = 'none';
        idx++;
        if (idx === 5) idx = 0;
    }, speed);
};
for (let i = 0; i < indiBtn.length; i++) {
    indiBtn[i].onclick = () => {
        clearInterval(auto);
        //     // 만약 eDelay가 1이면 click 이벤트 벗어남.
        if (eDelay) return;
        //     // 두 번째 클릭시 적용
        eDelay = 1;
        setTimeout(() => { eDelay = 0; autoSlide(); }, speed);

        // 인디케이터의 누른 버튼 순번과 0%의 이미지 순번이 같으면 클릭 함수를 벗어남.
        if (currentIdx === i) return
        currentIdx = i;
        // idx는 0
        // 0% 이미지(currentIdx)는 -100%로
        slideList[idx].style.left = '-100%';
        slideList[idx].style.transition = `left ${speed / 1000}s`;

        // 인디 버튼 순번에 해당하는 이미지는 0%로
        slideList[currentIdx].style.left = '0%';
        slideList[currentIdx].style.transition = `left ${speed / 1000}s`;
        indiActive(currentIdx, idx);

        // -100% 이미지는 100%로
        setTimeout(function () {
            slideList[idx].style.left = '100%';
            slideList[idx].style.transition = 'none';

            idx = currentIdx;
        }, speed);
    }; //indiBtn[i].onclick
}//for

function indiActive(currentIdx, idx) {
    // next
    if (idx === 5) idx = 0;
    // prev
    if (idx === -1) idx = 4;
    indiBtn[idx].classList.remove('on');
    indiBtn[currentIdx].classList.add('on');
};
