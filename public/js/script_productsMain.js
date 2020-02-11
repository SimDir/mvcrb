'use strict';
document.addEventListener('DOMContentLoaded', function() {
   if(window.innerWidth<=1300) {
      let item_1Circle = document.querySelector('.productsMain-mobile .item__circle-1');
      let item_2Circle = document.querySelector('.productsMain-mobile .item__circle-2');
      let item_3Circle = document.querySelector('.productsMain-mobile .item__circle-3');
      let item1 = document.querySelector('.productsMain-mobile .item-1');
      let item2 = document.querySelector('.productsMain-mobile .item-2');
      let item3 = document.querySelector('.productsMain-mobile .item-3');

      let item__box = document.querySelectorAll('.bottom-item__box');
      let item__text = document.querySelectorAll('.bottom-item__text');
      for(let i=0; i<item__box.length; i++) {
         item__box[i].removeAttribute('href');
        
         item__box[i].onclick = function() {
            for(let i=0; i<item__text.length; i++) {
               item__text[i].style.opacity = '0';
               item__text[i].style.transform = 'translate(0,500px)';
            }
            for(let i=0; i<item__box.length; i++) {
               this.nextElementSibling.style.opacity = '1';
               this.nextElementSibling.style.transform = 'translate(0,0)';
            }
         }
      }
      
      item_1Circle.removeAttribute('href');
      item_2Circle.removeAttribute('href');
      item_3Circle.removeAttribute('href');

      
     
         item1.onclick = function() {
            if((this.classList.contains('item-not-active-left')) && (item3.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-left');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-right');
            }
            else if((this.classList.contains('item-not-active-left')) && (item2.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-right');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item3.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-right');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item2.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-left');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-right');
            }
         }

         item2.onclick = function() {
            if((this.classList.contains('item-not-active-left')) && (item1.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-left');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-right');
            }
            else if((this.classList.contains('item-not-active-left')) && (item3.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-right');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item1.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-right');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item3.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item3.classList.remove('item-active');
               item3.classList.add('item-not-active-left');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-right');
            }
         }

         item3.onclick = function() {
            if((this.classList.contains('item-not-active-left')) && (item1.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-left');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-right');
            }
            else if((this.classList.contains('item-not-active-left')) && (item2.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-right');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item1.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-right');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-left');
            }
            else if((this.classList.contains('item-not-active-right')) && (item2.classList.contains('item-not-active-left'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-right');
               item2.classList.remove('item-active');
               item2.classList.add('item-not-active-left');
               item1.classList.remove('item-active');
               item1.classList.add('item-not-active-right');
            }
         }
   }
  
});

