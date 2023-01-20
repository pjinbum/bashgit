// let opendoor = document.querySelector('.subject');
// opendoor.addEventListener('click' , function () {
//   document.querySelector('.subb').style.display = 'block'
// })

// let opendoor = document.querySelector('.subject');
// opendoor.addEventListener('click' , function () {
//   document.querySelector('.subb').style.display = 'block'
// })


let dropDown = document.querySelectorAll('.subject');


dropDown.forEach (function (element , index) {
  element.addEventListener('click', function() {
    subDrop[index].style.display = 'block';
  });
});


let closeB = document.querySelector('.closeB');
closeB.addEventListener('click' , function () {
  document.querySelector('.subb').style.display = 'none'
})













// 슬라이드

let bt1 = document.querySelector('.bt1')
bt1.addEventListener('click' , function () {
  document.querySelector('.slide').style.transform = 'translateX(0)';
})

let bt2 = document.querySelector('.bt2')
bt2.addEventListener('click' , function () {
  document.querySelector('.slide').style.transform = 'translateX(-100vw)';
})

let bt3 = document.querySelector('.bt3')
bt3.addEventListener('click' , function () {
  document.querySelector('.slide').style.transform = 'translateX(-200vw)';
})

let bt4 = document.querySelector('.bt4')
bt4.addEventListener('click' , function () {
  document.querySelector('.slide').style.transform = 'translateX(-300vw)';
})

let bt5 = document.querySelector('.bt5')
bt5.addEventListener('click' , function () {
  document.querySelector('.slide').style.transform = 'translateX(-400vw)';
})

