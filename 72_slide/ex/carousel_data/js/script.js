const tit1 = document.querySelector('.sec3 .tit1');
const tit2 = document.querySelector('.sec3 .tit2');
const proBtn = document.querySelector('.sec3 .proBtn');
const des = document.querySelector('.des');
const proImg = document.querySelector('#product');
window.addEventListener('scroll', ()=>{
    console.log(document.documentElement.scrollTop);
    let st = document.documentElement.scrollTop;
    if(st >1700){
      tit1.style.transform = 'translateX(0)';
      tit2.style.transform = 'translateX(0)';
      proBtn.style.transform = 'translateX(0)';
      proImg.style.scale ='1';
      des.style.opacity = '1';
    }else{
      tit1.style.transform = 'translateX(-400px)';
      tit2.style.transform = 'translateX(-400px)';
      proBtn.style.transform = 'translateX(-400px)';
      proImg.style.scale ='1.5';
      des.style.opacity = '0';

    }
})



// carousel

     