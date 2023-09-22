const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
  { transform: "rotate(0deg) scale(1)" },
];

const newspaperTiming = {
  // 수행시간
  duration: 2000,
  // 반복횟수
  iterations: 1
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  // animate(적용효과, 적용시간)
  newspaper.animate(newspaperSpinning, newspaperTiming);
});