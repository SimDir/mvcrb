'use strict';
$( document ).ready(function() {    
    $(window).scroll(function() {
      var top = $(this).scrollTop();
      if ( top > 500 ) {
         $(".data-select").css({'position':'fixed', 'top' : '150px', 'right': '15%'});
      } 
      else {
         $(".data-select").css({'position':'absolute', 'top' : '650px', 'right': '15%'})
         }
    });

    $('#data-select--plus-2019').click(function() {
      $('#data-select__link-2019').css({'height':'75px'});
      $('#data-select--down-2019 dl').css({'display':'block'});
      $('#data-select--plus-2019').css({'display':'none'});
      $('#data-select--minus-2019').css({'display':'block'});
    });
    $('#data-select--minus-2019').click(function() {
      $('#data-select--plus-2019').css({'display':'block'});
      $('#data-select--minus-2019').css({'display':'none'});
      $('#data-select__link-2019').css({'height':'initial'});
      $('#data-select--down-2019 dl').css({'display':'none'});
    });


    $('#data-select--plus-2018').click(function() {
      $('#data-select__link-2018').css({'height':'75px'});
      $('#data-select--down-2018 dl').css({'display':'block'});
      $('#data-select--plus-2018').css({'display':'none'});
      $('#data-select--minus-2018').css({'display':'block'});
    });
    $('#data-select--minus-2018').click(function() {
      $('#data-select--plus-2018').css({'display':'block'});
      $('#data-select--minus-2018').css({'display':'none'});
      $('#data-select__link-2018').css({'height':'initial'});
      $('#data-select--down-2018 dl').css({'display':'none'});
    });

    $('#data-select--plus-2017').click(function() {
      $('#data-select__link-2017').css({'height':'75px'});
      $('#data-select--down-2017 dl').css({'display':'block'});
      $('#data-select--plus-2017').css({'display':'none'});
      $('#data-select--minus-2017').css({'display':'block'});
    });
    $('#data-select--minus-2017').click(function() {
      $('#data-select--plus-2017').css({'display':'block'});
      $('#data-select--minus-2017').css({'display':'none'});
      $('#data-select__link-2017').css({'height':'initial'});
      $('#data-select--down-2017 dl').css({'display':'none'});
    });
});