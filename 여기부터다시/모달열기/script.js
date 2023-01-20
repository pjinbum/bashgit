let openModal = document.getElementById('open-btn');
openModal.addEventListener('click' , function () {
  document.getElementById('img-modal').style.display = 'block'
})

let cloModal = document.getElementById('img-modal-btn')
cloModal.addEventListener('click' , function () {
  document.getElementById('img-modal').style.display = 'none'
})

let pic = document.querySelector('.img-list>img');
pic.addEventListener('click' , function () {
  document.getElementById('modal').style.display = 'block'
  document.getElementById('modal').style.scale = '1.20'
})


let cloPic = document.getElementById('modal-close');
cloPic.addEventListener('click' , function () {
  document.getElementById('modal').style.display = 'none'
})


// src

let change = document.getElementById('modal-sec>img');






