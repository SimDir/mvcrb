'use strict';
$( document ).ready(function() {  
   
   function scrolling() {
      window.scrollTo(0,0);
   }

   // toyota
   $('#toyota-item').click(function(){
      $('#TOYOTA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3240px"});
      scrolling();
   });
   $('#toyota-back-btn').click(function(){
      $('#TOYOTA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // canon
   $('#canon-item').click(function(){
      $('#CANON-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4100px"});
      scrolling();
   });
   $('#canon-back-btn').click(function(){
      $('#CANON-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // forma
   $('#forma-item').click(function(){
      $('#FORMA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2480px"});
      scrolling();
   });
   $('#forma-back-btn').click(function(){
      $('#FORMA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // cronos
   $('#cronos-item').click(function(){
      $('#CRONOS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4020px"});
      scrolling();
   });
   $('#cronos-back-btn').click(function(){
      $('#CRONOS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // arb
   $('#ARB-item').click(function(){
      $('#ARB-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3180px"});
      scrolling();
   });
   $('#arb-back-btn').click(function(){
      $('#ARB-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // comet
   $('#comet-item').click(function(){
      $('#COMET-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3180px"});
      scrolling();
   });
   $('#comet-back-btn').click(function(){
      $('#COMET-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // bebrand
   $('#bebrand-item').click(function(){
      $('#BEBRAND-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2450px"});
      scrolling();
   });
   $('#bebrand-back-btn').click(function(){
      $('#BEBRAND-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // bsk
   $('#BSK-item').click(function(){
      $('#BSK-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2250px"});
      scrolling();
   });
   $('#bsk-back-btn').click(function(){
      $('#BSK-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // rmh
   $('#RMH-item').click(function(){
      $('#RMH-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3100px"});
      scrolling();
   });
   $('#rmh-back-btn').click(function(){
      $('#RMH-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // business
   $('#BUSINESS-item').click(function(){
      $('#BUSINESS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "3500px"});
      scrolling();
   });
   $('#business-back-btn').click(function(){
      $('#BUSINESS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // circus
   $('#circus-item').click(function(){
      $('#CIRCUS-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "2350px"});
      scrolling();
   });
   $('#circus-back-btn').click(function(){
      $('#CIRCUS-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
   });

   // evita
   $('#evita-item').click(function(){
      $('#EVITA-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : "4170px"});
      scrolling();
   });
   $('#evita-back-btn').click(function(){
      $('#EVITA-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "800px"});
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
      $('.colutions__center').css({"minHeight" : "800px"});
  });

});

