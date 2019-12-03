window.onload = function() {
   let header_menu  = document.querySelector('.header__menu');
   let burger = document.querySelector('.burger');
   let cross_menu = document.querySelector('.cross_menu');
   
   burger.onclick = ShowMenu;
   cross_menu.onclick = HideMenu; 
   
      function ShowMenu() {
         header_menu.style.visibility = "visible";
         header_menu.style.opacity = "1";
         burger.style.visibility = "hidden";
         cross_menu.style.visibility = "visible";
         cross_menu.style.transform += "rotate(180deg)";
         
      }
      function HideMenu() {
         header_menu.style.visibility = "hidden";
         header_menu.style.opacity = "0";
         burger.style.visibility = "visible";
         burger.style.transform += "rotate(180deg)";
         cross_menu.style.visibility = "hidden";
      }

      let expand_1 = document.querySelector('#expand_1');
      expand_1.onclick = function() {
         document.querySelector('.header_bottom').style.visibility="visible";
      }
      
   }
