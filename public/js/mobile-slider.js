'use strict';
$( document ).ready(function() {  
  $('#mobileCircle_1').click(function(){
      $('#mobileIcons_1').delay(300).fadeIn(800);
      $('#mobileIcons_2').delay(0).fadeOut(0);
      $('#mobileIcons_3').delay(0).fadeOut(0);
   });
   
   $('#mobileCircle_2').click(function(){
      $('#mobileIcons_2').delay(300).fadeIn(800);
      $('#mobileIcons_1').delay(0).fadeOut(0);
      $('#mobileIcons_3').delay(0).fadeOut(0);
   });
   $('#mobileCircle_3').click(function(){
      $('#mobileIcons_3').delay(300).fadeIn(800);
      $('#mobileIcons_1').delay(0).fadeOut(0);
      $('#mobileIcons_2').delay(0).fadeOut(0);
   });


   $(document).click(function (e) {
      if (($(e.target).closest("#mobileCircle_1").length) ||
      ($(e.target).closest("#mobileCircle_2").length) ||
      ($(e.target).closest("#mobileCircle_3").length) ||
      ($(e.target).closest("#mobileIcons_1").length) ||
      ($(e.target).closest("#mobileIcons_2").length) ||
      ($(e.target).closest("#mobileIcons_3").length))
          return;

          $('#mobileIcons_1').delay(0).fadeOut(300);
          $('#mobileIcons_2').delay(0).fadeOut(300);
          $('#mobileIcons_3').delay(0).fadeOut(300);
  });

});
  
   // $('#mobileIcons_2').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
   // $('#mobileIcons_3').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
   //    if($('#mobileIcons_1').hasClass('mobile-slider__bottom-active')){
   //       $('#mobileIcons_1').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom'); 
   //       $('html,body').stop().animate({ scrollTop: $('#header').offset().top }, 2000);
   //       e.preventDefault(); 
   //    }
   //    else {
   //       $('#mobileIcons_1').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
   //       $('html,body').stop().animate({ scrollTop: $('#mobileIcons_1').offset().top }, 2000);
   //       e.preventDefault();
   //    }
   // });
   

//   $('#mobileCircle_2').click(function(){
//    $('#mobileIcons_1').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//    $('#mobileIcons_3').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//       if($('#mobileIcons_2').hasClass('mobile-slider__bottom-active')){
//          $('#mobileIcons_2').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//          $('html,body').stop().animate({ scrollTop: $('#header').offset().top }, 2000);
//          e.preventDefault(); 
//       }
//       else {
//          $('#mobileIcons_2').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
//          $('html,body').stop().animate({ scrollTop: $('#mobileIcons_2').offset().top }, 2000);
//          e.preventDefault();
//       }
//    });
  

//    $('#mobileCircle_3').click(function(){
//       $('#mobileIcons_1').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//       $('#mobileIcons_2').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//       if($('#mobileIcons_3').hasClass('mobile-slider__bottom-active')){
//          $('#mobileIcons_3').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
//          $('html,body').stop().animate({ scrollTop: $('#header').offset().top }, 2000);
//          e.preventDefault(); 
//       }
//       else {
//          $('#mobileIcons_3').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
//          $('html,body').stop().animate({ scrollTop: $('#mobileIcons_3').offset().top }, 2000);
//          e.preventDefault();
//       }
      
//    });
  
