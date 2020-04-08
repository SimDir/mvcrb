'use strict';
$( document ).ready(function() { 
    let stocksOfferTitle = document.querySelectorAll('.stc-main-offer-title');
    let stocksOfferList = document.querySelectorAll('.stc-main-offer-list--wrap');
    for(let i=0; i<stocksOfferTitle.length; i++) {
        stocksOfferTitle[i].onclick = function() {
            for(let i=0; i< stocksOfferList.length; i++) {
                stocksOfferList[i].classList.toggle('stc-main-offer-list--active-complex')
            }
        }
    }

    let stockHeader = document.querySelector('.stc-header');
    window.addEventListener('scroll', function() {
        if(pageYOffset > 0) {
            stockHeader.classList.add('stc-header-bgc--complex');     
        }
        else {
            stockHeader.classList.remove('stc-header-bgc--complex');
        }
    });


    let quizStartImg = document.querySelector('.stc-main__quiz__start__img');
    let quiz = document.querySelector('.stc-main__quiz');
    let quizStartImgMain = document.querySelector('.stc-main__quiz__start__img-main')
    quiz.addEventListener('mousemove', function(e) {
        let amountMovedX = (e.pageX * -1 / 70);
        quizStartImg.style.transform = 'translateX(' + amountMovedX + 'px)'; 
        let mainAmountMovedX = (e.pageX * 1 / 70);
        quizStartImgMain.style.transform = 'translateX(' + mainAmountMovedX + 'px)';
    });



    let quizStartBtn = document.querySelector('.stc-main__quiz__start__btn');
    let quizStart = document.querySelector('.stc-main__quiz__start');
    let quizStep = document.querySelector('.stc-main__quiz__step')
    quizStartBtn.onclick = function(e) {
        quizStart.style.transition = 'all 0.2s ease';
        quizStart.style.transform = 'scale(0)';
        quizStep.style.transition = 'all 0.2s ease 0.2s';
        quizStep.style.transform = 'scale(1)';
    }
});