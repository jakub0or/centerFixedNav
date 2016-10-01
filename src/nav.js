
$(document).ready(function(){
menubg();
});

function menubg(){
$(window).on('scroll', function () {
     var intro = $('.section1');
    var nav = $('#nav');
    var scrollTop = $(this).scrollTop();
    var height = intro.outerHeight();
    if(scrollTop>60){
    nav.addClass('nav2').fadeIn();   
    } else if (scrollTop<60){
     nav.removeClass('nav2');         
    }
  
});    
}