window.onload = function () {
   //CONTACTS
   document.querySelector('#Moscow').onclick = function() {
      document.querySelector('.ULCITY').style.display = "none";
      document.querySelector('.MCITY').style.display = "block";
      document.querySelector('#Moscow').style.borderBottom ="1px solid grey";
      document.querySelector('#ul').style.borderBottom ="none";
      document.querySelector('.MoscowMap').style.display ="block";
      document.querySelector('.UlMap').style.display ="none";
   }
   document.querySelector('#ul').onclick = function() {
      document.querySelector('.ULCITY').style.display = "block";
      document.querySelector('.MCITY').style.display = "none";
      document.querySelector('#ul').style.borderBottom ="1px solid grey";
      document.querySelector('#Moscow').style.borderBottom ="none";
      document.querySelector('.MoscowMap').style.display ="none";
      document.querySelector('.UlMap').style.display ="block";
   }



//    //HEADER
//    let first = document.querySelector('.header__menu_link_first');
//    first.onmouseover = showBorderFirst;
//    first.onmouseout = hideBorderFirst;
//    function showBorderFirst() {
//       first.style.borderBottom ="3px solid #fff";
//    }
//    function hideBorderFirst() {
//       first.style.borderBottom ="none";
//    }


//    let two = document.querySelector('.header__menu_link_two');
//    two.onmouseover = showBorderTwo;
//    two.onmouseout = hideBorderTwo;
//    function showBorderTwo() {
//       two.style.borderBottom ="3px solid #fff";
//    }
//    function hideBorderTwo() {
//       two.style.borderBottom ="none";
//    }


//    let three = document.querySelector('.header__menu_link_three');
//    three.onmouseover = showBorderThree;
//    three.onmouseout = hideBorderThree;
//    function showBorderThree() {
//       three.style.borderBottom ="3px solid #fff";
//    }
//    function hideBorderThree() {
//       three.style.borderBottom ="none";
//    }


//    let four = document.querySelector('.header__menu_link_four');
//    four.onmouseover = showBorderFour;
//    four.onmouseout = hideBorderFour;
//    function showBorderFour() {
//       four.style.borderBottom ="3px solid #fff";
//    }
//    function hideBorderFour() {
//       four.style.borderBottom ="none";
//    }


//    let five = document.querySelector('.header__menu_link_five');
//    five.onmouseover = showBorderFive;
//    five.onmouseout = hideBorderFive;
//    function showBorderFive() {
//       five.style.borderBottom ="3px solid #fff";
//    }
//    function hideBorderFive() {
//       five.style.borderBottom ="none";
//    }



// //FOOTER
//    let firstFooterLink = document.querySelector('.footer__menu_link_first');
//    let firstFooterBTN = document.querySelector('.footer__menu_link_btn_first');
//    firstFooterLink.onmouseover = showBorderFirstFooterBTN;
//    firstFooterLink.onmouseout = hideBorderFirstFooterBTN;
//    function showBorderFirstFooterBTN() {
//       firstFooterBTN.style.borderBottom ="2px solid #fff";
//    }
//    function hideBorderFirstFooterBTN() {
//       firstFooterBTN.style.borderBottom ="none";
//    }

//    let twoFooterLink = document.querySelector('.footer__menu_link_two');
//    let twoFooterBTN = document.querySelector('.footer__menu_link_btn_two');
//    twoFooterLink.onmouseover = showBorderTwoFooterBTN;
//    twoFooterLink.onmouseout = hideBorderTwoFooterBTN;
//    function showBorderTwoFooterBTN() {
//       twoFooterBTN.style.borderBottom ="2px solid #fff";
//    }
//    function hideBorderTwoFooterBTN() {
//       twoFooterBTN.style.borderBottom ="none";
//    }

//    let threeFooterLink = document.querySelector('.footer__menu_link_three');
//    let threeFooterBTN = document.querySelector('.footer__menu_link_btn_three');
//    threeFooterLink.onmouseover = showBorderThreeFooterBTN;
//    threeFooterLink.onmouseout = hideBorderThreeFooterBTN;
//    function showBorderThreeFooterBTN() {
//       threeFooterBTN.style.borderBottom ="2px solid #fff";
//    }
//    function hideBorderThreeFooterBTN() {
//       threeFooterBTN.style.borderBottom ="none";
//    }

//    let fourFooterLink = document.querySelector('.footer__menu_link_four');
//    let fourFooterBTN = document.querySelector('.footer__menu_link_btn_four');
//    fourFooterLink.onmouseover = showBorderFourFooterBTN;
//    fourFooterLink.onmouseout = hideBorderFourFooterBTN;
//    function showBorderFourFooterBTN() {
//       fourFooterBTN.style.borderBottom ="2px solid #fff";
//    }
//    function hideBorderFourFooterBTN() {
//       fourFooterBTN.style.borderBottom ="none";
//    }

//    let fiveFooterLink = document.querySelector('.footer__menu_link_five');
//    let fiveFooterBTN = document.querySelector('.footer__menu_link_btn_five');
//    fiveFooterLink.onmouseover = showBorderFiveFooterBTN;
//    fiveFooterLink.onmouseout = hideBorderFiveFooterBTN;
//    function showBorderFiveFooterBTN() {
//       fiveFooterBTN.style.borderBottom ="2px solid #fff";
//    }
//    function hideBorderFiveFooterBTN() {
//       fiveFooterBTN.style.borderBottom ="none";
//    }



//    function checkurl() {
//       let location = window.location.href;
//       if(location == "http://agatech.local/include/DigitalAgency.html") {
//          showBorderFirst();
//          first.onmouseout = showBorderFirst;
//          showBorderFirstFooterBTN();
//          firstFooterLink.onmouseout = showBorderFirstFooterBTN;
//       }
//       if(location == "http://agatech.local/include/digitalAgensy/team.html") {
//          showBorderFirst();
//          first.onmouseout = showBorderFirst;
//          showBorderFirstFooterBTN();
//          firstFooterLink.onmouseout = showBorderFirstFooterBTN;

//       }
//       if(location == "http://agatech.local/include/digitalAgensy/achievements.html") {
//          showBorderFirst();
//          first.onmouseout = showBorderFirst;
//          showBorderFirstFooterBTN();
//          firstFooterLink.onmouseout = showBorderFirstFooterBTN;
//       }
//       if(location == "http://agatech.local/include/digitalAgensy/contacts.html") {
//          showBorderFirst();
//          first.onmouseout = showBorderFirst;
//          showBorderFirstFooterBTN();
//          firstFooterLink.onmouseout = showBorderFirstFooterBTN;
//       }
//       if(location == "http://agatech.local/include/digitalAgensy/files.html") {
//          showBorderFirst();
//          first.onmouseout = showBorderFirst;
//          showBorderFirstFooterBTN();
//          firstFooterLink.onmouseout = showBorderFirstFooterBTN;
//       }







//       else if(location == "http://agatech.local/include/NewCenter.html") {
//          showBorderTwo();
//          two.onmouseout = showBorderTwo;
//          showBorderTwoFooterBTN();
//          twoFooterLink.onmouseout = showBorderTwoFooterBTN;
//       }
//       else if(location == "http://agatech.local/include/Colutions.html") {
//          showBorderThree();
//          three.onmouseout = showBorderThree;
//          showBorderThreeFooterBTN();
//          threeFooterLink.onmouseout = showBorderThreeFooterBTN;
//       }
//       else if(location == "http://agatech.local/include/Products.html") {
//          showBorderFour();
//          four.onmouseout = showBorderFour;
//          showBorderFourFooterBTN();
//          fourFooterLink.onmouseout = showBorderFourFooterBTN;
//       }
//       else if(location == "http://agatech.local/include/BusinessCooperation.html") {
//          showBorderFive();
//          five.onmouseout = showBorderFive;
//          showBorderFiveFooterBTN();
//          fiveFooterLink.onmouseout = showBorderFiveFooterBTN;
//       }
//    }
//    checkurl();

 
   


   
  




}