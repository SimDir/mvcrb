'use strict';
document.addEventListener('DOMContentLoaded', function() {
   if(window.innerWidth<=1300) {
      let item_1Circle = document.querySelector('.productsMain-mobile-forSlider .item__circle-1');
      let item_2Circle = document.querySelector('.productsMain-mobile-forSlider .item__circle-2');
      let item_3Circle = document.querySelector('.productsMain-mobile-forSlider .item__circle-3');
      let item1 = document.querySelector('.productsMain-mobile-forSlider .item-1');
      let item2 = document.querySelector('.productsMain-mobile-forSlider .item-2');
      let item3 = document.querySelector('.productsMain-mobile-forSlider .item-3');

      
      item_1Circle.removeAttribute('href');
      item_2Circle.removeAttribute('href');
      item_3Circle.removeAttribute('href');
      item1.classList.add('item-not-active-left');
      item2.classList.add('item-active');
      item3.classList.add('item-not-active-right');
      
     
         item1.onclick = function() {
            if((this.classList.contains('item-not-active-left')) && (item3.classList.contains('item-not-active-right'))) {
               this.classList.add('item-active');
               this.classList.remove('item-not-active-left');
               item_1Circle.setAttribute('href', '/page/Products_digital.html');
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

