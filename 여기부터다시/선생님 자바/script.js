// let hello = document.getElementById('hello');
// console.log(hello);

let hello = document.getElementById('hello').innerHTML ='HIBYE';

document.getElementById('hello').style.color = 'red' ;
document.getElementById('hello').style.fontSize = '100px' ;
// document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요'

// let change = document.querySelector('.close-btn');

// change.addEventListener('click' , function () {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요';
// })


// let btn =document.querySelector('.close-btn');
//  btn.addEventListener('click' , function () {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요'
// 콜백 함수 })






// 
// 1번방법
// function 감자() {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요';
// };






// btn1.addEventListener('click' , 감자 );

// 정석방법 

// let baba = document.querySelector('close-btn');



// 2번방법
// function nana(value) {
//   if (value == '감자') {
//     document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요';
//   }}

//   console.log(nana);
//   //

  //선생님이 한거

// let clostbtn = document.querySelector('.close-btn');
// let openbtn = document.querySelector('.open-btn');

// console.log(clostbtn , openbtn);

// function openBox() {
//   //openBtn을 클릭 했을때 box-wrapper 의 display속성을 block으로 바꿔준다
//   document.querySelector('.box-wrapper').style.display = 'block' ;
// }

// // openbtn.addEventListener('click' , openBox);

// function closeBox() {
//   //clostbtn의 dispaly를 none으로 바꿔준다
//   document.querySelector('.box-wrapper').style.display = 'none'

//   }

  // clostbtn.addEventListener( 'click' , closeBox);


  // 3번방법 2번 호출 지우고 html 에서 on 클릭으로 



  // 4번방법 콜백함수

  // clostbtn.addEventListener('click' , function () {
  //   document.querySelector('.box-wrapper').style.display = 'none';
  // })

  // openbtn.addEventListener('click' , function () {
  //   document.querySelector('.box-wrapper').style.display = 'block';
  // })


  


  // 5번째 방법 매개변수 parameter


function Box(display) {
  document.querySelector('.box-wrapper').style.display = display;
}








// if (value == 'open1') {
//   document.getElementById('apple').style.display = 'block' ;
//   document.getElementById('orange').style.display = 'none' ;
//   document.getElementById('banana').style.display = 'none' ;
// }
///
// 내가한거

// let jaja = document.querySelector('.open-btn');

// jaja.addEventListener('click' , function () {
//   document.querySelector('.box').style.display = 'block';
// })

// let noja =document.querySelector('.close-btn');

// noja.addEventListener('click' , function () {
//   document.querySelector('.box').style.display = 'none';
// })


// 






let pictu = document.querySelector('.boxbutton');

pictu.addEventListener('click' ,  function () {
  document.querySelector('.pictu > img').style.width = '100%'

});

let cloclo = document.querySelector('.pictu > img');

cloclo.addEventListener('click' , function () {
  document.querySelector('.pictu > img').style.width = '200px'
  document.querySelector('.pictu > img').style.transform = 'rotate(180deg)'
})


let parctice = document.querySelector('.boxbutton');

parctice.addEventListener('click' , function() {
  
})

