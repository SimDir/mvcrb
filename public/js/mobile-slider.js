'use strict';
$( document ).ready(function() {  
  $('#mobileCircle_1').click(function(){
      $('#mobileIcons_1').delay(300).fadeIn(800);
      $('#mobileIcons_2').delay(0).fadeOut(0);
      $('#mobileIcons_3').delay(0).fadeOut(0);  
      $('#mobileIcons_1').slideDown("slow");
   });
   $('#mobileCircle_1').on('click', function(){
     
    
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
  
