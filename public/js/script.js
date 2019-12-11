'use strict';
$( document ).ready(function() {  
   $('#Moscow').click(e=>{
      $('.ULCITY').css({"display": "none"});
      $('.MCITY').css({"display": "block"});
      $('.LCITY').css({"display": "none"});
      $('.VCITY').css({"display": "none"});
      $('#Ulsk').css({"borderBottom": "none"});
      $('#Moscow').css({"borderBottom": "1px solid grey"});
      $('#Liny').css({"borderBottom": "none"});
      $('#Vilnus').css({"borderBottom": "none"});
   });

   $('#Ulsk').click(e=>{
      $('.ULCITY').css({"display": "block"});
      $('.MCITY').css({"display": "none"});
      $('.LCITY').css({"display": "none"});
      $('.VCITY').css({"display": "none"});
      $('#Ulsk').css({"borderBottom": "1px solid grey"});
      $('#Moscow').css({"borderBottom": "none"});
      $('#Liny').css({"borderBottom": "none"});
      $('#Vilnus').css({"borderBottom": "none"});
   });

   // $('#Liny').click(function(){ 
   //    $('.ULCITY').css({"display": "none"});
   //    $('.MCITY').css({"display": "none"});
   //    $('.LCITY').css({"display": "block"});
   //    $('.VCITY').css({"display": "none"});
   //    $('#Ulsk').css({"borderBottom": "none"});
   //    $('#Moscow').css({"borderBottom": "none"});
   //    $('#Liny').css({"borderBottom": "1px solid grey"});
   //    $('#Vilnus').css({"borderBottom": "none"});
   // });
   
   // $('#Vilnus').click(function(){ 
   //    $('.ULCITY').css({"display": "none"});
   //    $('.MCITY').css({"display": "none"});
   //    $('.LCITY').css({"display": "none"});
   //    $('.VCITY').css({"display": "block"});
   //    $('#Ulsk').css({"borderBottom": "none"});
   //    $('#Moscow').css({"borderBottom": "none"});
   //    $('#Liny').css({"borderBottom": "none"});
   //    $('#Vilnus').css({"borderBottom": "1px solid grey"});
   // });
   
   //СЛАЙДЕР-ГРАФИК НА СТРАНИЦЕ АГАТЕЧ
   let graphic = document.querySelector('.digital-agatech__graphic');
   let rightArrow = document.querySelector('.arrow_graphic-right');
   let leftArrow = document.querySelector('.arrow_graphic-left');
   let block = document.querySelector('.g2009');
   let widthBlock = block.clientWidth || block.offsetWidth;
   console.log(widthBlock);
   let x = 0;

   rightArrow.onclick = function() {
      x = x + widthBlock;
      if(x > widthBlock*2) {
         x=0;
      }

      if(x >= widthBlock ) {
         document.querySelector('.g2009').style.opacity="0";
         document.querySelector('.g2010').style.opacity="0";
         document.querySelector('.g2016').style.opacity="1";
         document.querySelector('.g2017').style.opacity="1";
      }
      else {
         document.querySelector('.g2009').style.opacity="1";
         document.querySelector('.g2010').style.opacity="1";
         document.querySelector('.g2016').style.opacity="0";
         document.querySelector('.g2017').style.opacity="0";
      }

      if(x == widthBlock*2 ) {
         document.querySelector('.g2011').style.opacity="0";
         document.querySelector('.g2012').style.opacity="0";
         document.querySelector('.g2018').style.opacity="1";
         document.querySelector('.g2019').style.opacity="1";
      }
      else {
         document.querySelector('.g2011').style.opacity="1";
         document.querySelector('.g2012').style.opacity="1";
         document.querySelector('.g2018').style.opacity="0";
         document.querySelector('.g2019').style.opacity="0"; 
      }

      graphic.style.right = x + "px";
   }

   leftArrow.onclick = function() {
      x = x - widthBlock;
      if(x < 0) {
         x=0;
      }
      if(x >= widthBlock ) {
         document.querySelector('.g2009').style.opacity="0";
         document.querySelector('.g2010').style.opacity="0";
         document.querySelector('.g2016').style.opacity="1";
          document.querySelector('.g2017').style.opacity="1";
      }
      else {
         document.querySelector('.g2009').style.opacity="1";
         document.querySelector('.g2010').style.opacity="1";
         document.querySelector('.g2016').style.opacity="0";
         document.querySelector('.g2017').style.opacity="0";
      }

      if(x == widthBlock*2 ) {
         document.querySelector('.g2011').style.opacity="0";
         document.querySelector('.g2012').style.opacity="0";
         document.querySelector('.g2018').style.opacity="1";
         document.querySelector('.g2019').style.opacity="1";
      }
      else {
         document.querySelector('.g2011').style.opacity="1";
         document.querySelector('.g2012').style.opacity="1";
         document.querySelector('.g2018').style.opacity="0";
         document.querySelector('.g2019').style.opacity="0"; 
      }
      graphic.style.right = x + "px";
   }

});









 