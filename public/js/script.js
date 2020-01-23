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
   
   //СЛАЙДЕР-ГРАФИК НА СТРАНИЦЕ АГАТЕЧ
   let graphic = document.querySelector('.digital-agatech__graphic');
   let rightArrow = document.querySelector('.arrow_graphic-right');
   let leftArrow = document.querySelector('.arrow_graphic-left');
   let block = document.querySelector('.graphic-top-item-1');
   let widthBlock = block.clientWidth || block.offsetWidth;
   console.log(widthBlock);
   let x = 0;

   rightArrow.onclick = function() {
      x = x + widthBlock;
      if(x > widthBlock*2) {
         x=0;
      }

      if(x >= widthBlock ) {
         document.querySelector('.graphic-top-item-1').style.opacity="0";
         document.querySelector('.graphic-top-item-2').style.opacity="0";
         document.querySelector('.graphic-top-item-8').style.opacity="1";
         document.querySelector('.graphic-top-item-9').style.opacity="1";
      }
      else {
         document.querySelector('.graphic-top-item-1').style.opacity="1";
         document.querySelector('.graphic-top-item-2').style.opacity="1";
         document.querySelector('.graphic-top-item-8').style.opacity="0";
         document.querySelector('.graphic-top-item-9').style.opacity="0";
      }

      if(x == widthBlock*2 ) {
         document.querySelector('.graphic-top-item-3').style.opacity="0";
         document.querySelector('.graphic-top-item-4').style.opacity="0";
         document.querySelector('.graphic-top-item-10').style.opacity="1";
         document.querySelector('.graphic-top-item-11').style.opacity="1";
      }
      else {
         document.querySelector('.graphic-top-item-3').style.opacity="1";
         document.querySelector('.graphic-top-item-4').style.opacity="1";
         document.querySelector('.graphic-top-item-10').style.opacity="0";
         document.querySelector('.graphic-top-item-11').style.opacity="0"; 
      }

      graphic.style.right = x + "px";
   }

   leftArrow.onclick = function() {
      x = x - widthBlock;
      if(x < 0) {
         x=0;
      }
      if(x >= widthBlock ) {
         document.querySelector('.graphic-top-item-1').style.opacity="0";
         document.querySelector('.graphic-top-item-2').style.opacity="0";
         document.querySelector('.graphic-top-item-8').style.opacity="1";
          document.querySelector('.graphic-top-item-9').style.opacity="1";
      }
      else {
         document.querySelector('.graphic-top-item-1').style.opacity="1";
         document.querySelector('.graphic-top-item-2').style.opacity="1";
         document.querySelector('.graphic-top-item-8').style.opacity="0";
         document.querySelector('.graphic-top-item-9').style.opacity="0";
      }

      if(x == widthBlock*2 ) {
         document.querySelector('.graphic-top-item-3').style.opacity="0";
         document.querySelector('.graphic-top-item-4').style.opacity="0";
         document.querySelector('.graphic-top-item-10').style.opacity="1";
         document.querySelector('.graphic-top-item-11').style.opacity="1";
      }
      else {
         document.querySelector('.graphic-top-item-3').style.opacity="1";
         document.querySelector('.graphic-top-item-4').style.opacity="1";
         document.querySelector('.graphic-top-item-10').style.opacity="0";
         document.querySelector('.graphic-top-item-11').style.opacity="0"; 
      }
      graphic.style.right = x + "px";
   }



   document.querySelector('#graphic-top-button-1').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = "1";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="block";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-2').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = "1";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="block";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-3').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = "1";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="block";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-4').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = "1";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="block";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-5').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = "1";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="block";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-6').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = "1";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="block";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#graphic-top-button-7').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = "1";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="block";
   }



   document.querySelector('#pagination-item-1').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = "1";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="block";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-2').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = "1";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="block";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-3').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = "1";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="block";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-4').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = "1";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="block";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-5').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = "1";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="block";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-6').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = "1";
      document.querySelector('#pagination-item-7').style.opacity = ".5";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="block";
      document.querySelector('#slide-bottom-7').style.display="none";
   }
   document.querySelector('#pagination-item-7').onclick = function() {
      document.querySelector('#pagination-item-1').style.opacity = ".5";
      document.querySelector('#pagination-item-2').style.opacity = ".5";
      document.querySelector('#pagination-item-3').style.opacity = ".5";
      document.querySelector('#pagination-item-4').style.opacity = ".5";
      document.querySelector('#pagination-item-5').style.opacity = ".5";
      document.querySelector('#pagination-item-6').style.opacity = ".5";
      document.querySelector('#pagination-item-7').style.opacity = "1";
      document.querySelector('#slide-bottom-1').style.display="none";
      document.querySelector('#slide-bottom-2').style.display="none";
      document.querySelector('#slide-bottom-3').style.display="none";
      document.querySelector('#slide-bottom-4').style.display="none";
      document.querySelector('#slide-bottom-5').style.display="none";
      document.querySelector('#slide-bottom-6').style.display="none";
      document.querySelector('#slide-bottom-7').style.display="block";
   }
});









 