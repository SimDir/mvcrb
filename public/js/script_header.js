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
    

    // let burger = document.querySelector('.header-burger');
    // let allLines = document.querySelectorAll('.eader-burger__line');
    // let navBAr = document.querySelector('.header__menu');
    // let header = document.querySelector('header');
    // let line = [];
    // for(let elem of allLines) {
    //     line.push(elem);
    // }
    // let headerMenuLink = [];
    // for(let elem of document.querySelectorAll('.header__menu_link')) {
    //     headerMenuLink.push(elem);
    // }

    // let headerBottom = [];
    // for(let elem of document.querySelectorAll('.header_bottom')) {
    //     headerBottom.push(elem);
    // }

    // if($(document).width()<=1200) {
    //     headerMenuLink[0].onclick = function() {
    //         headerBottom[0].style.height = "initial";
    //         headerBottom[1].style.height = "0";
    //         headerBottom[2].style.height = "0";
    //         headerBottom[3].style.height = "0";
    //         headerBottom[4].style.height = "0";
    //     }
    //     headerMenuLink[1].onclick = function() {
    //         headerBottom[0].style.height = "0";
    //         headerBottom[1].style.height = "initial";
    //         headerBottom[2].style.height = "0";
    //         headerBottom[3].style.height = "0";
    //         headerBottom[4].style.height = "0";
    //     }
    //     headerMenuLink[2].onclick = function() {
    //         headerBottom[0].style.height = "0";
    //         headerBottom[1].style.height = "0";
    //         headerBottom[2].style.height = "initial";
    //         headerBottom[3].style.height = "0";
    //         headerBottom[4].style.height = "0";
    //     }
    //     headerMenuLink[3].onclick = function() {
    //         headerBottom[0].style.height = "0";
    //         headerBottom[1].style.height = "0";
    //         headerBottom[2].style.height = "0";
    //         headerBottom[3].style.height = "initial";
    //         headerBottom[4].style.height = "0";
    //     }
    //     headerMenuLink[4].onclick = function() {
    //         headerBottom[0].style.height = "0";
    //         headerBottom[1].style.height = "0";
    //         headerBottom[2].style.height = "0";
    //         headerBottom[3].style.height = "0";
    //         headerBottom[4].style.height = "initial";
    //     }
    // }
    



    // burger.onclick = function() {
    //     if(burger.classList.contains('burger-rotate')) {
    //         burger.classList.remove('burger-rotate');
    //         line[0].classList.add('header-burger__line');
    //         line[0].classList.remove('line1-rotate');
    //         line[1].classList.remove('line2-rotate');
    //         line[2].classList.add('header-burger__line');
    //         line[2].classList.remove('line3-rotate');
    //         navBAr.style.left = '100%';
    //         navBAr.style.opacity = '0';
    //         header.style.backgroundColor = "transparent";
    //     }
    //     else {
    //         burger.classList.add('burger-rotate')
    //         line[0].classList.remove('header-burger__line');
    //         line[0].classList.add('line1-rotate');
    //         line[1].classList.add('line2-rotate');
    //         line[2].classList.remove('header-burger__line');
    //         line[2].classList.add('line3-rotate');
    //         navBAr.style.left = '10%';
    //         navBAr.style.opacity = '1';
    //         header.style.backgroundColor = "#3B487C";
    //     }
    // }
    


    if(window.location.pathname == '/') {
        // header.style.backgroundColor = "transparent";
        // if(burger.classList.contains('header-burger--rotate')) {
        //     burger.onclick = function() {
        //         this.classList.toggle('header-burger--rotate');
        //         headerMobileWrap.classList.toggle('header-mobile--active');
        //         header.style.backgroundColor = 'transparent';
        //     }
        // }
        // else {
        //     burger.onclick = function() {
        //         this.classList.toggle('header-burger--rotate');
        //         headerMobileWrap.classList.toggle('header-mobile--active');
        //         header.style.backgroundColor = "#3B487C";
        //     }
        // }
    }

    
    let headerMenuLinkBtn = [];
    for(let elem of document.querySelectorAll('.header__menu_link_btn')) {
        headerMenuLinkBtn.push(elem);
    }
    
    if(window.location.pathname.search('digitalAgency') > -1) {
        headerMenuLinkBtn[0].style.borderBottom = "3px solid #fff";
    }
    else if((window.location.pathname.search('NewCenter')> -1) || 
    (window.location.pathname.search('news--')>-1)){
        headerMenuLinkBtn[1].style.borderBottom = "3px solid #fff";
    }
    else if (window.location.pathname.search('Solutions') > -1) {
        headerMenuLinkBtn[2].style.borderBottom = "3px solid #fff";
    }
    else if(window.location.pathname.search('Products') > -1 ){
        headerMenuLinkBtn[3].style.borderBottom = "3px solid #fff";
    }
    else if(window.location.pathname.search('BusinessCooperation') > -1) {
        headerMenuLinkBtn[4].style.borderBottom = "3px solid #fff";
    }



    
    
        
      

});
