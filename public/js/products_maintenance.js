window.onload = function () {
   function scrolling() {
      window.scrollTo(0,0);
   }

   //tariff-1
   let item_1 = document.querySelector('#item-1');
   let tarrif_1 = document.querySelector('#tariff-1');
   let cross_1 = document.querySelector('#cross-tariff-1');
   item_1.onclick = function() {
      tarrif_1.style.transform = "scale(1)";
     
   }
   cross_1.onclick= function() {
      tarrif_1.style.transform = "scale(0)";
   }

   //tariff-2
   let item_2 = document.querySelector('#item-2');
   let tarrif_2 = document.querySelector('#tariff-2');
   let cross_2 = document.querySelector('#cross-tariff-2');
   item_2.onclick = function() {
      tarrif_2.style.transform = "scale(1)";
   }
   cross_2.onclick= function() {
      tarrif_2.style.transform = "scale(0)";
   }

   //tariff-3
   let item_3 = document.querySelector('#item-3');
   let tarrif_3 = document.querySelector('#tariff-3');
   let cross_3 = document.querySelector('#cross-tariff-3');
   item_3.onclick = function() {
      tarrif_3.style.transform = "scale(1)";
   }
   cross_3.onclick= function() {
      tarrif_3.style.transform = "scale(0)";
   }

   //tariff-4
   let item_4 = document.querySelector('#item-4');
   let tarrif_4 = document.querySelector('#tariff-4');
   let cross_4 = document.querySelector('#cross-tariff-4');
   item_4.onclick = function() {
      tarrif_4.style.transform = "scale(1)";
   }
   cross_4.onclick= function() {
      tarrif_4.style.transform = "scale(0)";
   }


}