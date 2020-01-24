'use strict';
$( document ).ready(function() {  
   $('#li_docs').click(function(){
      $('#li_docs').css({"textDecoration" : "underline"});
      $('#li_requisites').css({"textDecoration" : "none"});
      $('#li_presentation').css({"textDecoration" : "none"});
      $('#li_mediaFiles').css({"textDecoration" : "none"});
      
      $('#docs').css({"transform" : "scale(1)"});
      $('#requisites').css({"transform" : "scale(0)"});
      $('#presentation').css({"transform" : "scale(0)"});
      $('#mediaFiles').css({"transform" : "scale(0)"});
   });

   $('#li_requisites').click(function(){
      $('#li_docs').css({"textDecoration" : "none"});
      $('#li_requisites').css({"textDecoration" : "underline"});
      $('#li_presentation').css({"textDecoration" : "none"});
      $('#li_mediaFiles').css({"textDecoration" : "none"});
      
      $('#docs').css({"transform" : "scale(0)"});
      $('#requisites').css({"transform" : "scale(1)"});
      $('#presentation').css({"transform" : "scale(0)"});
      $('#mediaFiles').css({"transform" : "scale(0)"});
   });

   $('#li_presentation').click(function(){
      $('#li_docs').css({"textDecoration" : "none"});
      $('#li_requisites').css({"textDecoration" : "none"});
      $('#li_presentation').css({"textDecoration" : "underline"});
      $('#li_mediaFiles').css({"textDecoration" : "none"});
      
      $('#docs').css({"transform" : "scale(0)"});
      $('#requisites').css({"transform" : "scale(0)"});
      $('#presentation').css({"transform" : "scale(1)"});
      $('#mediaFiles').css({"transform" : "scale(0)"});
   });

   $('#li_mediaFiles').click(function(){
      $('#li_docs').css({"textDecoration" : "none"});
      $('#li_requisites').css({"textDecoration" : "none"});
      $('#li_presentation').css({"textDecoration" : "none"});
      $('#li_mediaFiles').css({"textDecoration" : "underline"});
      
      $('#docs').css({"transform" : "scale(0)"});
      $('#requisites').css({"transform" : "scale(0)"});
      $('#presentation').css({"transform" : "scale(0)"});
      $('#mediaFiles').css({"transform" : "scale(1)"});
   });
});