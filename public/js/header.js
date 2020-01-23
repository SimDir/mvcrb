'use strict';
$( document ).ready(function() {    
    let burger = document.querySelector('.burger');
    let allLines = document.querySelectorAll('.burger span');
    let navBAr = document.querySelector('.header__menu');
    let header = document.querySelector('header');
    let line = [];
    for(let elem of allLines) {
        line.push(elem);
    }
    let headerMenuLink = [];
    for(let elem of document.querySelectorAll('.header__menu_link')) {
        headerMenuLink.push(elem);
    }

    let headerBottom = [];
    for(let elem of document.querySelectorAll('.header_bottom')) {
        headerBottom.push(elem);
    }

    if($(document).width()<=1200) {
        headerMenuLink[0].onclick = function() {
            headerBottom[0].style.height = "initial";
            headerBottom[1].style.height = "0";
            headerBottom[2].style.height = "0";
            headerBottom[3].style.height = "0";
            headerBottom[4].style.height = "0";
        }
        headerMenuLink[1].onclick = function() {
            headerBottom[0].style.height = "0";
            headerBottom[1].style.height = "initial";
            headerBottom[2].style.height = "0";
            headerBottom[3].style.height = "0";
            headerBottom[4].style.height = "0";
        }
        headerMenuLink[2].onclick = function() {
            headerBottom[0].style.height = "0";
            headerBottom[1].style.height = "0";
            headerBottom[2].style.height = "initial";
            headerBottom[3].style.height = "0";
            headerBottom[4].style.height = "0";
        }
        headerMenuLink[3].onclick = function() {
            headerBottom[0].style.height = "0";
            headerBottom[1].style.height = "0";
            headerBottom[2].style.height = "0";
            headerBottom[3].style.height = "initial";
            headerBottom[4].style.height = "0";
        }
        headerMenuLink[4].onclick = function() {
            headerBottom[0].style.height = "0";
            headerBottom[1].style.height = "0";
            headerBottom[2].style.height = "0";
            headerBottom[3].style.height = "0";
            headerBottom[4].style.height = "initial";
        }
    }
    


    window.addEventListener('scroll', function() {
        if(pageYOffset > 0) {
            header.style.backgroundColor = "#3B487C";
            burger.onclick = function() {
                if(burger.classList.contains('burger-rotate')) {
                    burger.classList.remove('burger-rotate');
                    line[0].classList.add('header-burger__line');
                    line[0].classList.remove('line1-rotate');
                    line[1].classList.remove('line2-rotate');
                    line[2].classList.add('header-burger__line');
                    line[2].classList.remove('line3-rotate');
                    navBAr.style.left = '100%';
                    navBAr.style.opacity = '0';
                }
                else {
                    burger.classList.add('burger-rotate')
                    line[0].classList.remove('header-burger__line');
                    line[0].classList.add('line1-rotate');
                    line[1].classList.add('line2-rotate');
                    line[2].classList.remove('header-burger__line');
                    line[2].classList.add('line3-rotate');
                    navBAr.style.left = '10%';
                    navBAr.style.opacity = '1';
                }
            }
        }
        else {
            header.style.backgroundColor = "transparent";
            burger.onclick = function() {
                if(burger.classList.contains('burger-rotate')) {
                    burger.classList.remove('burger-rotate');
                    line[0].classList.add('header-burger__line');
                    line[0].classList.remove('line1-rotate');
                    line[1].classList.remove('line2-rotate');
                    line[2].classList.add('header-burger__line');
                    line[2].classList.remove('line3-rotate');
                    navBAr.style.left = '100%';
                    navBAr.style.opacity = '0';
                    header.style.backgroundColor = "transparent";
                }
                else {
                    burger.classList.add('burger-rotate')
                    line[0].classList.remove('header-burger__line');
                    line[0].classList.add('line1-rotate');
                    line[1].classList.add('line2-rotate');
                    line[2].classList.remove('header-burger__line');
                    line[2].classList.add('line3-rotate');
                    navBAr.style.left = '10%';
                    navBAr.style.opacity = '1';
                    header.style.backgroundColor = "#3B487C";
                }
            }
        }
    });

    burger.onclick = function() {
        if(burger.classList.contains('burger-rotate')) {
            burger.classList.remove('burger-rotate');
            line[0].classList.add('header-burger__line');
            line[0].classList.remove('line1-rotate');
            line[1].classList.remove('line2-rotate');
            line[2].classList.add('header-burger__line');
            line[2].classList.remove('line3-rotate');
            navBAr.style.left = '100%';
            navBAr.style.opacity = '0';
            header.style.backgroundColor = "transparent";
        }
        else {
            burger.classList.add('burger-rotate')
            line[0].classList.remove('header-burger__line');
            line[0].classList.add('line1-rotate');
            line[1].classList.add('line2-rotate');
            line[2].classList.remove('header-burger__line');
            line[2].classList.add('line3-rotate');
            navBAr.style.left = '10%';
            navBAr.style.opacity = '1';
            header.style.backgroundColor = "#3B487C";
        }
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



    
    
        var lazyloadImages = document.querySelectorAll("img.lazy");    
        var lazyloadThrottleTimeout;
        
        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    
          
          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                  }
              });
              if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
          }, 20);
        }
        
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
     
      

});
