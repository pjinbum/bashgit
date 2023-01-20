
// // 바닐라 js 방법

// document.querySelector('.gnb-open-btn').addEventListener('click' , function(){
//   //.gnb-open-btn 클릭했을 때 sidebar한테 is-active라는 클래스를 추가
//   document.querySelector('.sidebar').classList.add('is-active');
// });

// document.querySelector('.sidebar-btn').addEventListener('click' , function(){
//  //.sidebar-btn 을 클릭했을때 sidebar한테 is-active라는 클래스를 제거
//  document.querySelector('.sidebar').classList.remove('is-active');
// });








// 제이쿼리방법

$('.gnb-open-btn').on('click' , function(){
  $('.sidebar').addClass('is-active');
});

$('.sidebar-btn').on('click' , function(){
  $('.sidebar').removeClass('is-active');
})