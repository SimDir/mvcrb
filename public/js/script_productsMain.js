'use strict';
document.addEventListener('DOMContentLoaded', function() {
   if(window.innerWidth<=1300) {
      let item_1Circle = document.querySelector('.item__circle-1');
      let item_2Circle = document.querySelector('.item__circle-2');
      let item_3Circle = document.querySelector('.item__circle-3');
      let item1 = document.querySelector('.item-1');
      let item2 = document.querySelector('.item-2');
      let item3 = document.querySelector('.item-3');
      let item_1Bottom = document.querySelector('.item-1 .productsMain-item__bottom');
      let item_2Bottom = document.querySelector('.item-2 .productsMain-item__bottom');
      
      item_1Circle.removeAttribute('href');
      item_2Circle.removeAttribute('href');
      item_3Circle.removeAttribute('href');
      item1.classList.add('item-not-active-left');
      item2.classList.add('item-active');
      item3.classList.add('item-not-active-right');
      item1.onclick = function() {
         this.classList.add('item-active');
         this.classList.remove('item-not-active-left');
         item2.classList.remove('item-active');
         item3.classList.remove('item-active');
         item2.classList.add('item-not-active-left');
         item3.classList.add('item-not-active-right');
      }
      item2.onclick = function() {
         this.classList.add('item-active');
         this.classList.remove('item-not-active-left');
         item1.classList.remove('item-active');
         item3.classList.remove('item-active');
         item1.classList.add('item-not-active-left');
         item3.classList.add('item-not-active-right');
      }
   }
  
});

