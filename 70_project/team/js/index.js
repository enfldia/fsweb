


// 숫자값 지정
const qs = sel =>document.querySelector(sel);
const prevButton = qs('.prev');
const nextButton = qs('.next');
const carousel = qs('.Carousel');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0) return;
   index -= 1;
   
   carousel.style.transform = `translate3d(-${760 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 2) return;
   index += 1;
   
   carousel.style.transform = `translate3d(-${760 * index}px, 0, 0)`;
});
