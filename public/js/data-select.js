'use strict';
$( document ).ready(function() {    
    $(window).scroll(function() {
      var top = $(this).scrollTop();

      if($(document).width()>1400) {
         if ( top > 500 ) {
            $(".data-select").css({'position':'fixed', 'top' : '150px', 'right': '4%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '650px', 'right': '4%'})
         }
      }
      
      if($(document).width()<1400) {
         if ( top > 450 ) {
            $(".data-select").css({'position':'fixed', 'top' : '140px', 'right': '4%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '580px', 'right': '4%'})
         }
      }

      if($(document).width()<1200) {
         if ( top > 400 ) {
            $(".data-select").css({'position':'fixed', 'top' : '130px', 'right': '4%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '530px', 'right': '4%'})
         }
      }

      if($(document).width()<1000) {
         if ( top > 350 ) {
            $(".data-select").css({'position':'fixed', 'top' : '130px', 'right': '5%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '480px', 'right': '5%'})
         }
      }

      if($(document).width()<900) {
         if ( top > 300 ) {
            $(".data-select").css({'position':'fixed', 'top' : '110px', 'right': '5%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '400px', 'right': '5%'})
         }
      }

      if($(document).width()<800) {
         if ( top > 280 ) {
            $(".data-select").css({'position':'fixed', 'top' : '110px', 'right': '6%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '360px', 'right': '6%'})
         }
      }

      if($(document).width()<600) {
         if ( top > 240 ) {
            $(".data-select").css({'position':'fixed', 'top' : '110px', 'right': '7%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '310px', 'right': '7%'})
         }
      }

      if($(document).width()<500) {
         if ( top > 200 ) {
            $(".data-select").css({'position':'fixed', 'top' : '100px', 'right': '7%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '275px', 'right': '7%'})
         }
      }

      if($(document).width()<400) {
         if ( top > 200 ) {
            $(".data-select").css({'position':'fixed', 'top' : '100px', 'right': '8%'});
         } 
         else {
            $(".data-select").css({'position':'absolute', 'top' : '260px', 'right': '8%'})
         }
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