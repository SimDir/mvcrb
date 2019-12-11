'use strict';
$( document ).ready(function() {  
   
   // toyota
   $('#toyota-item').click(function(){
      $('#TOYOTA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3350px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "3150px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2850px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2650px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2120px"});
      if($(document).width()<900) $('.colutions__center').css({"minHeight" : "2150px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "2050px"});
      if($(document).width()<700) $('.colutions__center').css({"minHeight" : "1850px"});
      if($(document).width()<550) $('.colutions__center').css({"minHeight" : "1580px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#toyota-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#toyota-back-btn').click(function(){
      $('#TOYOTA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });
   
   // canon
   $('#canon-item').click(function(){
      $('#CANON-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4320px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "4000px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "3620px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "3200px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2600px"});
      if($(document).width()<900) $('.colutions__center').css({"minHeight" : "2630px"});
      if($(document).width()<700) $('.colutions__center').css({"minHeight" : "2300px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "2020px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#canon-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#canon-back-btn').click(function(){
      $('#CANON-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // forma
   $('#forma-item').click(function(){
      $('#FORMA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2450px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "2300px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2100px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2020px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "1680px"});
      if($(document).width()<900) $('.colutions__center').css({"minHeight" : "1710px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "1540px"});
      if($(document).width()<550) $('.colutions__center').css({"minHeight" : "1500px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "800"});
   });
   $('#forma-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#forma-back-btn').click(function(){
      $('#FORMA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // cronos
   $('#cronos-item').click(function(){
      $('#CRONOS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4150px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "3850px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "3480px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "3050px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2500px"});
      if($(document).width()<900) $('.colutions__center').css({"minHeight" : "2530px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "2420px"});
      if($(document).width()<700) $('.colutions__center').css({"minHeight" : "2200px"});
      if($(document).width()<550) $('.colutions__center').css({"minHeight" : "1810px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#cronos-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#cronos-back-btn').click(function(){
      $('#CRONOS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // arb
   $('#ARB-item').click(function(){
      $('#ARB-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3380px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "3130px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2850px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2600px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2150px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "2420px"});
      if($(document).width()<700) $('.colutions__center').css({"minHeight" : "1850px"});
      if($(document).width()<550) $('.colutions__center').css({"minHeight" : "1600px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#ARB-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#arb-back-btn').click(function(){
      $('#ARB-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // comet
   $('#comet-item').click(function(){
      $('#COMET-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2550px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "2400px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2180px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2100px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "1720px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "1600px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "1340px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#comet-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#comet-back-btn').click(function(){
      $('#COMET-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // bebrand
   $('#bebrand-item').click(function(){
      $('#BEBRAND-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2650px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "2500px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2280px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2150px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "1780px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "1650px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "1370px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#bebrand-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#bebrand-back-btn').click(function(){
      $('#BEBRAND-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // bsk
   $('#BSK-item').click(function(){
      $('#BSK-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2450px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "2300px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2100px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2000px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "1670px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "1520px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "1280px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#BSK-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#bsk-back-btn').click(function(){
      $('#BSK-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // rmh
   $('#RMH-item').click(function(){
      $('#RMH-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3280px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "3050px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "2790px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2550px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2080px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "1970px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "1600px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#RMH-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#rmh-back-btn').click(function(){
      $('#RMH-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // business
   $('#BUSINESS-item').click(function(){
      $('#BUSINESS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3650px"});
      if($(document).width()<1600) $('.colutions__center').css({"minHeight" : "3400px"});
      if($(document).width()<1400) $('.colutions__center').css({"minHeight" : "3080px"});
      if($(document).width()<1200) $('.colutions__center').css({"minHeight" : "2780px"});
      if($(document).width()<1000) $('.colutions__center').css({"minHeight" : "2260px"});
      if($(document).width()<800) $('.colutions__center').css({"minHeight" : "2180px"});
      if($(document).width()<600) $('.colutions__center').css({"minHeight" : "1750px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#BUSINESS-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#business-back-btn').click(function(){
      $('#BUSINESS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // circus
   $('#circus-item').click(function(){
      $('#CIRCUS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2500px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#circus-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#circus-back-btn').click(function(){
      $('#CIRCUS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // evita
   $('#evita-item').click(function(){
      $('#EVITA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4300px"});
      if($(document).width()<450) $('.colutions__center').css({"minHeight" : "100px"});
   });
   $('#evita-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#evita-back-btn').click(function(){
      $('#EVITA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });



   $(document).click(function (e) {
      if (($(e.target).closest("#TOYOTA-PAGE").length) ||
      ($(e.target).closest("#CANON-PAGE").length) ||
      ($(e.target).closest("#FORMA-PAGE").length) ||
      ($(e.target).closest("#CRONOS-PAGE").length) ||
      ($(e.target).closest("#ARB-PAGE").length) ||
      ($(e.target).closest("#COMET-PAGE").length) ||
      ($(e.target).closest("#BEBRAND-PAGE").length) ||
      ($(e.target).closest("#BSK-PAGE").length) ||
      ($(e.target).closest("#RMH-PAGE").length) ||
      ($(e.target).closest("#BUSINESS-PAGE").length) ||
      ($(e.target).closest("#CIRCUS-PAGE").length) ||
      ($(e.target).closest("#EVITA-PAGE").length) ||
      ($(e.target).closest("#toyota-item").length) ||
      ($(e.target).closest("#canon-item").length) ||
      ($(e.target).closest("#forma-item").length) ||
      ($(e.target).closest("#cronos-item").length) ||
      ($(e.target).closest("#ARB-item").length) ||
      ($(e.target).closest("#comet-item").length) ||
      ($(e.target).closest("#bebrand-item").length) ||
      ($(e.target).closest("#BSK-item").length) ||
      ($(e.target).closest("#RMH-item").length) ||
      ($(e.target).closest("#BUSINESS-item").length) ||
      ($(e.target).closest("#circus-item").length) ||
      ($(e.target).closest("#evita-item").length))
          return;

      $('#TOYOTA-PAGE').css({"transform" : "scale(0)"});
      $('#CANON-PAGE').css({"transform" : "scale(0)"});
      $('#FORMA-PAGE').css({"transform" : "scale(0)"});
      $('#CRONOS-PAGE').css({"transform" : "scale(0)"});
      $('#ARB-PAGE').css({"transform" : "scale(0)"});
      $('#COMET-PAGE').css({"transform" : "scale(0)"});
      $('#BEBRAND-PAGE').css({"transform" : "scale(0)"});
      $('#BSK-PAGE').css({"transform" : "scale(0)"});
      $('#RMH-PAGE').css({"transform" : "scale(0)"});
      $('#BUSINESS-PAGE').css({"transform" : "scale(0)"});
      $('#CIRCUS-PAGE').css({"transform" : "scale(0)"});
      $('#EVITA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
  });

});

