'use strict';
$( document ).ready(function() {  
   $('#Moscow').click(function(){
      $('.ULCITY').css({"display": "none"});
      $('.MCITY').css({"display": "block"});
      $('.LCITY').css({"display": "none"});
      $('.VCITY').css({"display": "none"});
      $('#Ulsk').css({"borderBottom": "none"});
      $('#Moscow').css({"borderBottom": "1px solid grey"});
      $('#Liny').css({"borderBottom": "none"});
      $('#Vilnus').css({"borderBottom": "none"});
   });

   $('#Ulsk').click(function(){
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
});








// document.querySelector('#Moscow').onclick = function() {
   //    document.querySelector('.MCITY').style.display = "block";
   //    document.querySelector('#Moscow').style.borderBottom ="1px solid grey";
   //    document.querySelector('.MoscowMap').style.display ="block";
   //    document.querySelector('.ULCITY').style.display = "none";
   //    document.querySelector('#Ulsk').style.borderBottom ="none";
   //    document.querySelector('.UlMap').style.display ="none";
   //    document.querySelector('.LCITY').style.display = "none";
   //    document.querySelector('#Liny').style.borderBottom ="none";
   //    document.querySelector('.LMap').style.display ="none";
   //    document.querySelector('.VCITY').style.display = "none";
   //    document.querySelector('#Vilnus').style.borderBottom ="none";
   //    document.querySelector('.VMap').style.display ="none";
   // }
   // document.querySelector('#Ulsk').onclick = function() {
   //    document.querySelector('.ULCITY').style.display = "block";
   //    document.querySelector('#Ulsk').style.borderBottom ="1px solid grey";
   //    document.querySelector('.UlMap').style.display ="block";
   //    document.querySelector('.MCITY').style.display = "none";
   //    document.querySelector('#Moscow').style.borderBottom ="none";
   //    document.querySelector('.MoscowMap').style.display ="none";
   //    document.querySelector('.LCITY').style.display = "none";
   //    document.querySelector('#Liny').style.borderBottom ="none";
   //    document.querySelector('.LMap').style.display ="none";
   //    document.querySelector('.VCITY').style.display = "none";
   //    document.querySelector('#Vilnus').style.borderBottom ="none";
   //    document.querySelector('.VMap').style.display ="none";
   // }
   // document.querySelector('#Liny').onclick = function() {
   //    document.querySelector('.LCITY').style.display = "block";
   //    document.querySelector('#Liny').style.borderBottom ="1px solid grey";
   //    document.querySelector('.LMap').style.display ="block";
   //    document.querySelector('.ULCITY').style.display = "none";
   //    document.querySelector('#Ulsk').style.borderBottom ="none";
   //    document.querySelector('.UlMap').style.display ="none";
   //    document.querySelector('.MCITY').style.display = "none";
   //    document.querySelector('#Moscow').style.borderBottom ="none";
   //    document.querySelector('.MoscowMap').style.display ="none";
   //    document.querySelector('.LCITY').style.display = "none";
   //    document.querySelector('#Liny').style.borderBottom ="none";
   //    document.querySelector('.LMap').style.display ="none";
   //    document.querySelector('.VCITY').style.display = "none";
   //    document.querySelector('#Vilnus').style.borderBottom ="none";
   //    document.querySelector('.VMap').style.display ="none";
   // }



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

 