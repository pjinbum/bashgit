let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
console.log(btn1);
console.log(btn2);
console.log(btn3);

btn1.addEventListener('click' , function() {
 document.querySelector('.slide-list').style.transform = 'translateX(0)';
})



btn2.addEventListener('click' , function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
 })


 
btn3.addEventListener('click' , function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
 })
 

// 콜백함수

let bibbig = document.querySelector('.slide-item>img');
console.log(bibbig);

bibbig.addEventListener('click' , function () {
  document.querySelector('.btn1').style. width = '300px';
  document.querySelector('.btn1').style. height = '100px';
  
 
})

let lame = document.querySelector('.mama');
console.log(lame);

lame





