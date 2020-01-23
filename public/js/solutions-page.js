'use strict';
$( document ).ready(function() {  
   
   // toyota
   $('#toyota-item').click(function(){
      let heightBlock = $('#TOYOTA-PAGE').height();
      $('#TOYOTA-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#toyota-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#toyota-back-btn').click(function(){
      $('#TOYOTA-PAGE').css({"transform" : "scale(0)"});
      $('.main-content').css({"minHeight" : "100px"});
   });
   
   // canon
   $('#canon-item').click(function(){
      let heightBlock = $('#CANON-PAGE').height();
      $('#CANON-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#canon-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#canon-back-btn').click(function(){
      $('#CANON-PAGE').css({"transform" :  "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // forma
   $('#forma-item').click(function(){
      let heightBlock = $('#FORMA-PAGE').height();
      $('#FORMA-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#forma-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#forma-back-btn').click(function(){
      $('#FORMA-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // cronos
   $('#cronos-item').click(function(){
      let heightBlock = $('#CRONOS-PAGE').height();
      $('#CRONOS-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#cronos-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#cronos-back-btn').click(function(){
      $('#CRONOS-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // arb
   $('#ARB-item').click(function(){
      let heightBlock = $('#ARB-PAGE').height();
      $('#ARB-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#ARB-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#arb-back-btn').click(function(){
      $('#ARB-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // comet
   $('#comet-item').click(function(){
      let heightBlock = $('#COMET-PAGE').height();
      $('#COMET-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#comet-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#comet-back-btn').click(function(){
      $('#COMET-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // bebrand
   $('#bebrand-item').click(function(){
      let heightBlock = $('#BEBRAND-PAGE').height();
      $('#BEBRAND-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#bebrand-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#bebrand-back-btn').click(function(){
      $('#BEBRAND-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // bsk
   $('#BSK-item').click(function(){
      let heightBlock = $('#BSK-PAGE').height();
      $('#BSK-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#BSK-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#bsk-back-btn').click(function(){
      $('#BSK-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // rmh
   $('#RMH-item').click(function(){
      let heightBlock = $('#RMH-PAGE').height();
      $('#RMH-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#RMH-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#rmh-back-btn').click(function(){
      $('#RMH-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // business
   $('#BUSINESS-item').click(function(){
      let heightBlock = $('#BUSINESS-PAGE').height();
      $('#BUSINESS-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#BUSINESS-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#business-back-btn').click(function(){
      $('#BUSINESS-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // circus
   $('#circus-item').click(function(){
      let heightBlock = $('#CIRCUS-PAGE').height();
      $('#CIRCUS-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#circus-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#circus-back-btn').click(function(){
      $('#CIRCUS-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
   });

   // evita
   $('#evita-item').click(function(){
      let heightBlock = $('#EVITA-PAGE').height();
      $('#EVITA-PAGE').css({"transform" : "scale(1)"});
      $('.main-content ').css({"minHeight" : heightBlock});
   });
   $('#evita-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#solutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#evita-back-btn').click(function(){
      $('#EVITA-PAGE').css({"transform" : "scale(0)"});
      $('.main-content ').css({"minHeight" : "100px"});
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
      $('.main-content ').css({"minHeight" : "100px"});
  });

});

