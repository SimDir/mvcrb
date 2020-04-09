'use strict';
document.addEventListener('DOMContentLoaded', function() {
   let citiesItems = document.querySelectorAll('.cities__item');
   let ulsk = document.querySelector('#contactsUlsk');
   let moscow = document.querySelector('#contactMoscow');
   for(let i=0; i<citiesItems.length; i++) {
      
      citiesItems[0].onclick = function() {
         for(let i=0; i<citiesItems.length; i++) {
            citiesItems[i].classList.remove('cities__item--active');
         }
         this.classList.add('cities__item--active');
         ulsk.style.display = "block";
         moscow.style.display = "none";
      }
      citiesItems[1].onclick = function() {
         for(let i=0; i<citiesItems.length; i++) {
            citiesItems[i].classList.remove('cities__item--active');
         }
         this.classList.add('cities__item--active');
         ulsk.style.display = "none";
         moscow.style.display = "block";
      }
   }
})


