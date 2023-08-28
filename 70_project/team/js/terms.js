// 동의 모두선택 / 해제
const agreeChkAll = document.querySelector('input[name=access_all]');
    agreeChkAll.addEventListener('change', (e) => {
    let agreeChk = document.querySelectorAll('input[name=access_terms]');
    for(let i = 0; i < agreeChk.length; i++){
      agreeChk[i].checked = e.target.checked;
    }
});

// 회원가입으로 넘어가기
const next = document.querySelector('.next_button');
next.addEventListener('click', () => {
  window.location.href = "member.html"
});