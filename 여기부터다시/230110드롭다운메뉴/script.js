$(function () {
  $(".gnb > li").hover(function (){
    //sub 메뉴가 보이게 
    $(this).find("ul").stop().slideDown(500);
    $(this).children("a").addClass("on")
  },function(){
    $(this).find("ul").stop().slideUp(500);
    $(this).children("a").removeClass("on")
  })
})