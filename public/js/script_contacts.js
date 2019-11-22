window.onload = function() {
   function showMoscow_contacts() {
         document.querySelector('.MCITY_contacts').style.display = "block";
         document.querySelector('#Moscow_contacts').style.borderBottom ="1px solid grey";
         document.querySelector('.MoscowMap').style.display = "block";
      }
      function hideMoscow_contacts() {
         document.querySelector('.MCITY_contacts').style.display = "none";
         document.querySelector('#Moscow_contacts').style.borderBottom ="none";
         document.querySelector('.MoscowMap').style.display = "none";
      }
      function showUlsk_contacts() {
         document.querySelector('.ULCITY_contacts').style.display = "block";
         document.querySelector('#Ulsk_contacts').style.borderBottom ="1px solid grey";
         document.querySelector('.UlMap').style.display = "block";
      }
      function hideUlsk_contacts() {
         document.querySelector('.ULCITY_contacts').style.display = "none";
         document.querySelector('#Ulsk_contacts').style.borderBottom ="none";
         document.querySelector('.UlMap').style.display = "none";
      }
      function showLiny_contacts() {
         document.querySelector('.LCITY_contacts').style.display = "block";
         document.querySelector('#Liny_contacts').style.borderBottom ="1px solid grey";
      }
      function hideLiny_contacts() {
         document.querySelector('.LCITY_contacts').style.display = "none";
         document.querySelector('#Liny_contacts').style.borderBottom ="none";
      }
      function showVilnus_contacts() {
         document.querySelector('.VCITY_contacts').style.display = "block";
         document.querySelector('#Vilnus_contacts').style.borderBottom ="1px solid grey";
      }
      function hideVilnus_contacts() {
         document.querySelector('.VCITY_contacts').style.display = "none";
         document.querySelector('#Vilnus_contacts').style.borderBottom ="none";
      }
   
      document.querySelector('#Moscow_contacts').onclick = function() {
         showMoscow_contacts();
         hideUlsk_contacts();
         hideLiny_contacts();
         hideVilnus_contacts();
      }
      document.querySelector('#Ulsk_contacts').onclick = function() {
         showUlsk_contacts();
         hideMoscow_contacts();
         hideLiny_contacts();
         hideVilnus_contacts();
      }
      // document.querySelector('#Liny_contacts').onclick = function() {
      //    showLiny_contacts();
      //    hideMoscow_contacts();
      //    hideUlsk_contacts();
      //    hideVilnus_contacts();
      // }
      // document.querySelector('#Vilnus_contacts').onclick = function() {
      //    showVilnus_contacts();
      //    hideMoscow_contacts();
      //    hideUlsk_contacts();
      //    hideLiny_contacts();
      // }
}