$('.main-list').hover(function() {
  $('.main-flex').find('.main-sub').stop().slideDown(500);
  $(this).addClass('onMouse');
}, function() {
  $('.main-flex').find('.main-sub').stop().slideUp(500);
  $(this).removeClass('onMouse');
})

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(0)'
})


let btn2 = document.querySelector('.btn2');
btn2.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-100vw)'
})

let btn3 = document.querySelector('.btn3');
btn3.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-200vw)'
})

let btn4 = document.querySelector('.btn4');
btn4.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-300vw)'
})

let btn5 = document.querySelector('.btn5');
btn5.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-400vw)'
})

let btn6 = document.querySelector('.btn6');
btn6.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-500vw)'
})

let btn7 = document.querySelector('.btn7');
btn7.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-600vw)'
})

let btn8 = document.querySelector('.btn8');
btn8.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-700vw)'
})

let btn9 = document.querySelector('.btn9');
btn9.addEventListener('mouseover' , function(){
  document.querySelector('.slide-ul').style.transform = 'translate(-800vw)'
})


$('.sid>li').hover(function(){
  $(this).find('ul').stop().slideDown(500)
}, function(){
  $(this).find('ul').stop().slideUp(500)
})