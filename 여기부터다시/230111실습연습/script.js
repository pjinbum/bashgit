// $(function () {
//   $(".gnb > li").hover(function (){
//     //sub 메뉴가 보이게 
//     $(this).find("ul").stop().slideDown(500);
//     $(this).children("a").addClass("on")
//   },function(){
//     $(this).find("ul").stop().slideUp(500);
//     $(this).children("a").removeClass("on")
//   })
// })

const dropDown = document.querySelectorAll('.gnb-list >li');
const subDrop = document.querySelectorAll('.sub');



dropDown.forEach (function (element , index) {
  element.addEventListener('click', function() {
    subDrop[index].style.display = 'block';
  });
});

const closeB = document.querySelector('.hamberg');
closeB.addEventListener('click' , function () {
  document.querySelector('.sub').style.display = 'none'
})








// 슬라이드


let bt1 = document.querySelector('.bt1');
let bt2 = document.querySelector('.bt2');
let bt3 = document.querySelector('.bt3');

bt1.addEventListener('click' , function () {
  document.querySelector('.piclist').style.transform = 'translateX(0)'
})



bt2.addEventListener('click' , function () {
  document.querySelector('.piclist').style.transform = 'translateX(-100vw)'
})



bt3.addEventListener('click' , function () {
  document.querySelector('.piclist').style.transform = 'translateX(-200vw)'
})