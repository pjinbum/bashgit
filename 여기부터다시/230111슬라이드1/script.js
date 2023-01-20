let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
console.log(btn1);
console.log(btn2);
console.log(btn3);

btn1.addEventListener('click' , function() {
 document.querySelector('.slide-list').style.transform = 'translateX(0)';
})

btn1.addEventListener('click' , function() {
  document.querySelector('.slide-list').style.transform = 'rotate(180deg)';
 })
 


btn2.addEventListener('click' , function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
 })


 
btn3.addEventListener('click' , function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
 })
 
 

// 콜백함수

let hama = document.getElementById('newnew');
console.log(hama);

hama.addEventListener('click' , function() {
  document.getElementById('newnew').style.fontSize= '100px'

})