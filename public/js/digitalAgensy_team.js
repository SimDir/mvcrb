'use strict';
$( document ).ready(function() {  
   $('#lenaItem').click(function(){
      $('#lenaIcons').show(1000);
      $('#guzelIcons').hide(1000);
   });   
   $('#guzelItem').click(function(){
      $('#guzelIcons').show(1000);
      $('#lenaIcons').hide(1000);
   });
});