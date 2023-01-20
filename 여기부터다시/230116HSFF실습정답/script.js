$('.gnb-main-item').hover(function(){
  $(this).find('.sub').stop().slideDown(500);
  $(this).children('a').addClass('active');
}, function(){
  $(this).find('.sub').stop().slideUp(500);
  $(this).children('a').removeClass('active');
});



  //  $('.gnb-main-list>a').hover(function(){
  //   $(this).css('color' , 'red');
  // })


// $('.gnb-main-item').hover.css({'color' : 'red'});

// let hoho = document.querySelector('.gnb-main-item');
// hoho.addEventListener('mouseOver' , function(){
//   document.querySelector('.gnb-main-item').style.hover = 'red'
// });

