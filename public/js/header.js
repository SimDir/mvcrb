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
            header.style.backgroundColor = "#3B487C";
        }
    };

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
    
   
        
   

    if (window.location.pathname.search('news--')>-1) {
        $("header").css({'background':'#3B487C'});
        $(".header_bottom").css({'background':'rgba(255,255,255,1)'});
        $('.new_center__center').css({'border-top':'none'})
    }
    
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top > 0 ) {
            $("header").css({'background':'#344D73'});
            $(".header_bottom").css({'background':'rgba(255,255,255,1)'});
        } 
        
        else if (window.location.pathname.search('news--')!==-1){
            return;
        }
        else {
            $("header").css({'background': 'transparent'});
           
        }
    });
    
});
