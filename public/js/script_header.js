'use strict';
$( document ).ready(function() { 


    let header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if(pageYOffset > 0) {
            header.classList.add('header-bgc');     
        }
        else {
            header.classList.remove('header-bgc');
        }
    });
    

    let burger = document.querySelector('.header-burger');
    let headerMobileWrap = document.querySelector('.header-mobile--wrap');
    burger.onclick = function() {
        this.classList.toggle('header-burger--rotate');
        headerMobileWrap.classList.toggle('header-mobile--active');
    }


    let expandAll = document.querySelectorAll('.header-mobile-expand-arrow--wrap');
    for(let i=0; i<expandAll.length; i++) {
        expandAll[i].onclick = function() {
            for(let i=0; i<expandAll.length; i++) {
                expandAll[i].parentElement.nextElementSibling.classList.remove('header-mobile__menu-item__bottom--active');
                expandAll[i].parentElement.classList.remove('header-mobile__menu-item__link--wrap-active');
                expandAll[i].classList.remove('header-mobile-expand-arrow--wrap-active');
            }
            this.parentElement.nextElementSibling.classList.toggle('header-mobile__menu-item__bottom--active');
            this.parentElement.classList.toggle('header-mobile__menu-item__link--wrap-active');
            this.classList.toggle('header-mobile-expand-arrow--wrap-active');
        }
    }
    


    // popup
    let callbtn = document.querySelectorAll('.call-popup-btn');
    let popup = document.querySelector('.popup--wrap');
    for(let i=0;i<callbtn.length;i++) {
        callbtn[i].onclick = function() {
            popup.style.display = 'flex';
        }
    }
   
    document.addEventListener('click', e => {
        let target = e.target;
        let targetPopup = target == popup;

        if (targetPopup) {
            popup.style.display = 'none';
        }
    })

    
    let headerMenuLinkBtn = [];
    for(let elem of document.querySelectorAll('.header-menu__link')) {
        headerMenuLinkBtn.push(elem);
    }
    
    if((window.location.pathname.search('company') > -1) || (window.location.pathname.search('team') > -1) || (window.location.pathname.search('progress') > -1) || (window.location.pathname.search('contacts') > -1) || (window.location.pathname.search('files') > -1)) {
        headerMenuLinkBtn[0].style.borderBottom = "3px solid #fff";
    }
    else if((window.location.pathname.search('mediacenter') > -1)){
        headerMenuLinkBtn[1].style.borderBottom = "3px solid #fff";
    }
    else if (window.location.pathname.search('solutions') > -1) {
        headerMenuLinkBtn[2].style.borderBottom = "3px solid #fff";
    }
    else if(window.location.pathname.search('products') > -1 ){
        headerMenuLinkBtn[3].style.borderBottom = "3px solid #fff";
    }
    
    else if(window.location.pathname.search('cooperation') > -1) {
        headerMenuLinkBtn[4].style.borderBottom = "3px solid #fff";
    }



    
    
        
      

});
