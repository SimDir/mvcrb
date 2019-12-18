'use strict';
$( document ).ready(function() {  
   
    // specauto
    $('#specauto-item').click(function(){
      let heightBlock = $('#SPECUATO-PAGE').height();
      $('#SPECUATO-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#specauto-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#specauto-back-btn').click(function(){
      $('#SPECUATO-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // dantist
    $('#dantist-item').click(function(){
      let heightBlock = $('#DANTIST-PAGE').height();
      $('#DANTIST-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#dantist-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#dantist-back-btn').click(function(){
      $('#DANTIST-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // dilav
   $('#dilav-item').click(function(){
      let heightBlock = $('#DILAV-PAGE').height();
      $('#DILAV-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#dilav-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#dilav-back-btn').click(function(){
      $('#DILAV-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // full-service
   $('#full-service-item').click(function(){
      let heightBlock = $('#FULL-SERVICE-PAGE').height();
      $('#FULL-SERVICE-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#full-service-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#full-service-back-btn').click(function(){
      $('#FULL-SERVICE-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // fkm
   $('#fkm-item').click(function(){
      let heightBlock = $('#FKM-PAGE').height();
      $('#FKM-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#fkm-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#fkm-back-btn').click(function(){
      $('#FKM-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // goal
   $('#goal-item').click(function(){
      let heightBlock = $('#GOAL-PAGE').height();
      $('#GOAL-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#goal-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#goal-back-btn').click(function(){
      $('#GOAL-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });


   // vizcenter
   $('#vizcenter-item').click(function(){
      let heightBlock = $('#VIZCENTER-PAGE').height();
      $('#VIZCENTER-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#vizcenter-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#vizcenter-back-btn').click(function(){
      $('#VIZCENTER-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // wedding-gown
   $('#wedding-gown-item').click(function(){
      let heightBlock = $('#WEDDING-GOWN-PAGE').height();
      $('#WEDDING-GOWN-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#wedding-gown-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#wedding-gown-back-btn').click(function(){
      $('#WEDDING-GOWN-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });

   // green-street
   $('#green-street-item').click(function(){
      let heightBlock = $('#GREEN-STREET-PAGE').height();
      $('#GREEN-STREET-PAGE').css({"transform" : "scale(1)"});
      $('.colutions__center').css({"minHeight" : heightBlock});
   });
   $('#green-street-item').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#colutions').offset().top }, 1000);
      e.preventDefault();
    });
   $('#green-street-back-btn').click(function(){
      $('#GREEN-STREET-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
   });



   $(document).click(function (e) {
      if (($(e.target).closest("#SPECUATO-PAGE").length) ||
      ($(e.target).closest("#DANTIST-PAGE").length) ||
      ($(e.target).closest("#DILAV-PAGE").length) ||
      ($(e.target).closest("#FULL-SERVICE-PAGE").length) ||
      ($(e.target).closest("#FKM-PAGE").length) ||
      ($(e.target).closest("#GOAL-PAGE").length) ||
      ($(e.target).closest("#VIZCENTER-PAGE").length) ||
      ($(e.target).closest("#WEDDING-GOWN-PAGE").length) ||
      ($(e.target).closest("#GREEN-STREET-PAGE").length) ||
      ($(e.target).closest("#specauto-item").length) ||
      ($(e.target).closest("#dantist-item").length) ||
      ($(e.target).closest("#dilav-item").length) ||
      ($(e.target).closest("#full-service-item").length) ||
      ($(e.target).closest("#fkm-item").length) ||
      ($(e.target).closest("#goal-item").length) ||
      ($(e.target).closest("#vizcenter-item").length) ||
      ($(e.target).closest("#wedding-gown-item").length) ||
      ($(e.target).closest("#green-street-item").length))
          return;

      $('#SPECUATO-PAGE').css({"transform" : "scale(0)"});
      $('#DANTIST-PAGE').css({"transform" : "scale(0)"});
      $('#DILAV-PAGE').css({"transform" : "scale(0)"});
      $('#FULL-SERVICE-PAGE').css({"transform" : "scale(0)"});
      $('#FKM-PAGE').css({"transform" : "scale(0)"});
      $('#GOAL-PAGE').css({"transform" : "scale(0)"});
      $('#VIZCENTER-PAGE').css({"transform" : "scale(0)"});
      $('#WEDDING-GOWN-PAGE').css({"transform" : "scale(0)"});
      $('#GREEN-STREET-PAGE').css({"transform" : "scale(0)"});
      $('.colutions__center').css({"minHeight" : "100px"});
  });
});

