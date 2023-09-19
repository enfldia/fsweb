 const slide = document.querySelector(".slide"),
 indi = document.querySelector('.indi');

 
 //  DataOBJ
 // 데이터 정의

// imgSrc의 경로는 js를 담아 실행되는 html의 기준으로 작성(상대경로)

 const imgObj = {
   imgData1: {
     imgSrc: "./images/pic4.jpg",
     imgAlt: "img4",
    },
  imgData2: {
    imgSrc: "./images/pic5.jpg",
    imgAlt: "img5",
  },
  imgData3: {
    imgSrc: "./images/pic6.jpg",
    imgAlt: "img6",
  },
  imgData4: {
    imgSrc: "./images/pic7.jpg",
    imgAlt: "img7",
  },
  imgData5: {
    imgSrc: "./images/pic8.jpg",
    imgAlt: "img8",
  },
  imgData6: {
    imgSrc: "./images/pic9.jpg",
    imgAlt: "img9",
  },
  imgData7: {
    imgSrc: "./images/pic10.jpg",
    imgAlt: "img10"
  }
};


// 슬라이드 이미지 개수 초기화
let slideCount = 0;

// for ~ in 제어문
for (let i in imgObj) {
  slideCount++;
  // console.log(slideCount);
}

// 요소 선택

// 이미지를 요소에 삽입
for (let i = 1; i <= slideCount; i++) {
  slide.innerHTML += `
  <li><img src="${
    imgObj["imgData" + i].imgSrc
  }" alt="${imgObj["imgData" + i].imgAlt}"></li>
  `;
  newindi = document.createElement('li');
  indi.appendChild(newindi);
}

// console.log('slideCount :' + slideCount);  => 7  데이터 갯수만큼

const slideList = slide.querySelectorAll("li"),
npBtn = document.querySelectorAll(".ctls a"),
indiBtn = document.querySelectorAll(".indi li"),
speed = 700;

indiBtn[0].classList.add('on'); 
// 변수 선언
let idx = 0,
eDelay = 0,
currentIdx = 0,
auto;

// 로딩 시 자동 슬라이드
 autoSlide();
 
 function autoSlide() {
   // setInterval(함수, 시간): 시간(밀리초) 후 반복
   // auto 변수는 사용자가 버튼 클릭 시 자동 슬라이드를 정지
   auto = setInterval(() => nextSlide(), speed * 4);
  }
  
  // prev
  npBtn[0].onclick = () => {
   // 사용자가 버튼 클릭 시 자동 슬라이드 정지
   clearInterval(auto);
   
   // 만약 dDelay가 0이 아니면 click 이벤트 벗어남.
   if (eDelay) return;
   // 두 번째 클릭시 적용
   eDelay = 1;
   setTimeout(() => {
     eDelay = 0;
     autoSlide();
   }, speed);

   prevSlide();
 }; //prev

 // next
 npBtn[1].onclick = () => {
   // 사용자가 버튼 클릭 시 자동 슬라이드 정지
   clearInterval(auto);

   // 만약 dDelay가 0이 아니면 click 이벤트 벗어남.
   if (eDelay) return;
   // 두 번째 클릭시 적용
   eDelay = 1;
   setTimeout(() => {
     eDelay = 0;
     autoSlide();
   }, speed);

   nextSlide();
 }; //next

 function prevSlide() {
   // 0 -> 4 -> 3 -> 2 -> 1
   slideList[idx].style.left = "-100%";
   slideList[idx].style.transition = `left ${speed / 1000}s ease-out`;
   // 4 -> 3 -> 2 -> 1 -> 0
   if (idx === 0) idx = slideList.length;
   slideList[idx - 1].style.left = "0%";
   slideList[idx - 1].style.transition = `left ${speed / 1000}s ease-out`;
   indiActive(idx - 1, idx);

   // setTimeout(함수, 시간): 시간후 1회
   // setInterval(함수, 시간): 시간후 반복
   setTimeout(function () {
     if (idx === slideList.length) idx = 0;
     slideList[idx].style.left = "100%";
     slideList[idx].style.transition = "none";
     idx--;
     if (idx === -1) idx = slideCount-1;
   }, 700);
 }

 function nextSlide() {
   // 0 -> 1 -> 2 -> 3 -> 4
   slideList[idx].style.left = "-100%";
   slideList[idx].style.transition = `left ${speed / 1000}s ease-out`;
   // 1 -> 2 -> 3 -> 4 -> 5
   if (idx === slideCount-1) idx = -1;
   slideList[idx + 1].style.left = "0%";
   slideList[idx + 1].style.transition = `left ${speed / 1000}s ease-out`;
   indiActive(idx + 1, idx);

   // setTimeout(함수, 시간): 시간후 1회
   // setInterval(함수, 시간): 시간후 반복
   setTimeout(function () {
     if (idx === -1) idx = slideCount-1;
     slideList[idx].style.left = "100%";
     slideList[idx].style.transition = "none";
     idx++;
     if (idx === slideCount) idx = 0;
   }, 700);
 }

 for (let i = 0; i < indiBtn.length; i++) {
   indiBtn[i].onclick = () => {
     // 사용자가 버튼 클릭 시 자동 슬라이드 정지
     clearInterval(auto);

     // 만약 dDelay가 0이 아니면 click 이벤트 벗어남.
     if (eDelay) return;
     // 두 번째 클릭시 적용
     eDelay = 1;
     setTimeout(() => {
       eDelay = 0;
       autoSlide();
     }, speed);

     // 인디케이터의 누른 버튼 순번과 0%의 이미지 순번이 같으면 클릭 함수를 벗어남.
     if (currentIdx === i) return;

     // i = 0,1,2,3,4
     currentIdx = i;

     // idx는 0
     // 0% 이미지(currentIdx)는 -100%로
     slideList[idx].style.left = "-100%";
     slideList[idx].style.transition = `left ${speed / 1000}s ease-out`;

     // i는 0,1,2,3,4
     // 인디 버튼 순번에 해당하는 이미지는 0%로
     slideList[currentIdx].style.left = "0%";
     slideList[currentIdx].style.transition = `left ${
       speed / 1000
     }s ease-out`;
     indiActive(currentIdx, idx);

     // 일정 시간 후 -100% 이미지는 100%로
     setTimeout(function () {
       slideList[idx].style.left = "100%";
       slideList[idx].style.transition = "none";

       idx = currentIdx;
     }, speed);
   }; // indiBtn[i].onclick
 } // for

 function indiActive(currentIdx, idx) {
   // -1(x), 0,1,2,3,4, 5(x)
   // next
   if (idx === slideCount) idx = 0;
   // prev
   if (idx === -1) idx = slideCount-1;
   indiBtn[idx].classList.remove("on");
   indiBtn[currentIdx].classList.add("on");
 }