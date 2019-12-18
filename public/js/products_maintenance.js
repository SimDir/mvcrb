'use strict';
$( document ).ready(function() {  

   $('#item-1').click(function(){
      $('#tariff-1').css({"transform" : "scale(1)"});
   });
   $('#cross-tariff-1').click(function(){
      $('#tariff-1').css({"transform" : "scale(0)"});
   });

   $('#item-2').click(function(){
      $('#tariff-2').css({"transform" : "scale(1)"});
   });
   $('#cross-tariff-2').click(function(){
      $('#tariff-2').css({"transform" : "scale(0)"});
   });

   $('#item-3').click(function(){
      $('#tariff-3').css({"transform" : "scale(1)"});
   });
   $('#cross-tariff-3').click(function(){
      $('#tariff-3').css({"transform" : "scale(0)"});
   });

   $('#item-4').click(function(){
      $('#tariff-4').css({"transform" : "scale(1)"});
   });
   $('#cross-tariff-4').click(function(){
      $('#tariff-4').css({"transform" : "scale(0)"});
   });
   
   $(document).click(function (e) {
      if (($(e.target).closest("#tariff-1").length) ||  
      ($(e.target).closest("#tariff-2").length) || 
      ($(e.target).closest("#tariff-3").length) ||  
      ($(e.target).closest("#tariff-4").length) ||
      ($(e.target).closest("#item-1").length) ||
      ($(e.target).closest("#item-2").length) ||
      ($(e.target).closest("#item-3").length) ||
      ($(e.target).closest("#item-4").length))
          return; 
         $('#tariff-1').css({"transform" : "scale(0)"});
         $('#tariff-2').css({"transform" : "scale(0)"});
         $('#tariff-3').css({"transform" : "scale(0)"});
         $('#tariff-4').css({"transform" : "scale(0)"});
  });
});

