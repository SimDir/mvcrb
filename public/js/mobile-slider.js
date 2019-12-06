'use strict';
$( document ).ready(function() {  
  $('#mobileCircle_1').click(function(){
      if($('#mobileIcons_1').hasClass('mobile-slider__bottom-active')){
         $('#mobileIcons_1').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
      }
      else {
         $('#mobileIcons_1').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
      }
   });


  $('#mobileCircle_2').click(function(){
      if($('#mobileIcons_2').hasClass('mobile-slider__bottom-active')){
         $('#mobileIcons_2').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
      }
      else {
         $('#mobileIcons_2').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
      }
   });
  

   $('#mobileCircle_3').click(function(){
      if($('#mobileIcons_3').hasClass('mobile-slider__bottom-active')){
         $('#mobileIcons_3').removeClass('mobile-slider__bottom-active').addClass('mobile-slider__bottom');
      }
      else {
         $('#mobileIcons_3').removeClass('mobile-slider__bottom').addClass('mobile-slider__bottom-active');
      }
   });
  
});