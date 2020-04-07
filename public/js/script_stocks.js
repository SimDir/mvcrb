'use strict';
$( document ).ready(function() { 
    let stocksOfferTitle = document.querySelectorAll('.stc-main-offer-title');
    let stocksOfferList = document.querySelectorAll('.stc-main-offer-list--wrap');
    for(let i=0; i<stocksOfferTitle.length; i++) {
        stocksOfferTitle[i].onclick = function() {
            for(let i=0; i< stocksOfferList.length; i++) {
                stocksOfferList[i].classList.toggle('stc-main-offer-list--active')
            }
        }
    }

    let stockHeader = document.querySelector('.stc-header');
    window.addEventListener('scroll', function() {
        if(pageYOffset > 0) {
            stockHeader.classList.add('header-bgc');     
        }
        else {
            stockHeader.classList.remove('header-bgc');
        }
    });
});