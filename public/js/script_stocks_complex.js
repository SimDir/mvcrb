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
    let quizStep = document.querySelector('.stc-main__quiz__steps');
    let quizStepBtnPrev = document.querySelector('.stc-main__quiz__step__footer__prev-btn');
    let quizStepBtnNext = document.querySelector('.stc-main__quiz__step__footer__next-btn');
    let quizStepProgressTrack = document.querySelector('.stc-main__quiz__step__footer__progress__track');
    let quizStepProgressValue = document.querySelector('.stc-main__quiz__step__footer__progress__title-value');
    quizStartBtn.onclick = function(e) {
        quizStart.style.transition = 'all 0.2s ease';
        quizStart.style.transform = 'scale(0)';
        quizStep.style.transition = 'all 0.2s ease 0.2s';
        quizStep.style.transform = 'scale(1)';
    }


    let step_1 = document.querySelector('.stc-main__quiz__step-1');
    let step_2 = document.querySelector('.stc-main__quiz__step-2');
    let step_3 = document.querySelector('.stc-main__quiz__step-3');
    let step_4 = document.querySelector('.stc-main__quiz__step-4');
    let step_5 = document.querySelector('.stc-main__quiz__step-5');
    let step_6 = document.querySelector('.stc-main__quiz__step-6');
    let step_7 = document.querySelector('.stc-main__quiz__step-7');
    let step_8 = document.querySelector('.stc-main__quiz__step-8');
    let step_9 = document.querySelector('.stc-main__quiz__step-9');
    let stepFinal = document.querySelector('.stc-main__quiz__step__final');
    

    quizStep.addEventListener('click', function(e) {
        if(step_1.style.transform == "scale(1)") {
            let labelStep_1 = document.querySelectorAll('.stc-main__quiz__step-1 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_1.length; i++) {
                if(e.target == labelStep_1[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9;
                        let sterpValuePercentRound = Math.round(100/9);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_1.style.transition = 'all .2s ease';
                        step_1.style.transform = 'scale(0)';
                        step_2.style.transition = 'all .2s ease .2s';
                        step_2.style.transform = 'scale(1)';
                        quizStepBtnPrev.classList.add('stc-main__quiz__step__footer__prev-btn--active');
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
        }
    
        if(step_2.style.transform == "scale(1)") {
            let inputStep_2 = document.querySelector('.stc-main__quiz__step-2__input');
            inputStep_2.addEventListener('keydown', function() {
                if(inputStep_2.value !== '') {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick = function() {
                        let sterpValuePercent = 100/9 * 2;
                        let sterpValuePercentRound = Math.round(100/9 * 2);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_2.style.transition = 'all .2s ease';
                        step_2.style.transform = 'scale(0)';
                        step_3.style.transition = 'all .2s ease .2s';
                        step_3.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
                else {
                    quizStepBtnNext.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick = function() {
                        return false;
                    }
                   
                }
            }) 
            quizStepBtnPrev.onclick = function() {
                step_2.style.transition = 'all .2s ease';
                step_2.style.transform = 'scale(0)';
                step_1.style.transition = 'all .2s ease .2s';
                step_1.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_3.style.transform == "scale(1)") {
            let labelStep_3 = document.querySelectorAll('.stc-main__quiz__step-3 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_3.length; i++) {
                if(e.target == labelStep_3[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*3;
                        let sterpValuePercentRound = Math.round(100/9*3);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_3.style.transition = 'all .2s ease';
                        step_3.style.transform = 'scale(0)';
                        step_4.style.transition = 'all .2s ease .2s';
                        step_4.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
                
            }
            quizStepBtnPrev.onclick = function() {
                step_3.style.transition = 'all .2s ease';
                step_3.style.transform = 'scale(0)';
                step_2.style.transition = 'all .2s ease .2s';
                step_2.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }

        if(step_4.style.transform == "scale(1)") {
            let labelStep_4 = document.querySelectorAll('.stc-main__quiz__step-4 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_4.length; i++) {
                if(e.target == labelStep_4[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*4;
                        let sterpValuePercentRound = Math.round(100/9*4);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_4.style.transition = 'all .2s ease';
                        step_4.style.transform = 'scale(0)';
                        step_5.style.transition = 'all .2s ease .2s';
                        step_5.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_4.style.transition = 'all .2s ease';
                step_4.style.transform = 'scale(0)';
                step_3.style.transition = 'all .2s ease .2s';
                step_3.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_5.style.transform == "scale(1)") {
            let labelStep_5 = document.querySelectorAll('.stc-main__quiz__step-5 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_5.length; i++) {
                if(e.target == labelStep_5[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*5;
                        let sterpValuePercentRound = Math.round(100/9*5);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_5.style.transition = 'all .2s ease';
                        step_5.style.transform = 'scale(0)';
                        step_6.style.transition = 'all .2s ease .2s';
                        step_6.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_5.style.transition = 'all .2s ease';
                step_5.style.transform = 'scale(0)';
                step_4.style.transition = 'all .2s ease .2s';
                step_4.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_6.style.transform == "scale(1)") {
            let labelStep_6 = document.querySelectorAll('.stc-main__quiz__step-6 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_6.length; i++) {
                if(e.target == labelStep_6[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*6;
                        let sterpValuePercentRound = Math.round(100/9*6);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_6.style.transition = 'all .2s ease';
                        step_6.style.transform = 'scale(0)';
                        step_7.style.transition = 'all .2s ease .2s';
                        step_7.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_6.style.transition = 'all .2s ease';
                step_6.style.transform = 'scale(0)';
                step_5.style.transition = 'all .2s ease .2s';
                step_5.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_7.style.transform == "scale(1)") {
            let labelStep_7 = document.querySelectorAll('.stc-main__quiz__step-7 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_7.length; i++) {
                if(e.target == labelStep_7[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*7;
                        let sterpValuePercentRound = Math.round(100/9*7);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_7.style.transition = 'all .2s ease';
                        step_7.style.transform = 'scale(0)';
                        step_8.style.transition = 'all .2s ease .2s';
                        step_8.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_7.style.transition = 'all .2s ease';
                step_7.style.transform = 'scale(0)';
                step_6.style.transition = 'all .2s ease .2s';
                step_6.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_8.style.transform == "scale(1)") {
            let labelStep_8 = document.querySelectorAll('.stc-main__quiz__step-8 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_8.length; i++) {
                if(e.target == labelStep_8[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*8;
                        let sterpValuePercentRound = Math.round(100/9*8);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_8.style.transition = 'all .2s ease';
                        step_8.style.transform = 'scale(0)';
                        step_9.style.transition = 'all .2s ease .2s';
                        step_9.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_8.style.transition = 'all .2s ease';
                step_8.style.transform = 'scale(0)';
                step_7.style.transition = 'all .2s ease .2s';
                step_7.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


        if(step_9.style.transform == "scale(1)") {
            let labelStep_9 = document.querySelectorAll('.stc-main__quiz__step-9 .stc-main__quiz__step__content__label');
            for(let i=0; i<labelStep_9.length; i++) {
                if(e.target == labelStep_9[i]) {
                    quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
                    quizStepBtnNext.onclick=function() {
                        let sterpValuePercent = 100/9*9;
                        let sterpValuePercentRound = Math.round(100/9*9);
                        quizStepProgressTrack.style.width = sterpValuePercent+'%';
                        quizStepProgressValue.innerText = sterpValuePercentRound+'%';
                        step_9.style.transition = 'all .2s ease';
                        step_9.style.transform = 'scale(0)';
                        stepFinal.style.transition = 'all .2s ease .2s';
                        stepFinal.style.transform = 'scale(1)';
                        this.classList.remove('stc-main__quiz__step__footer__next-btn--active');
                    }
                }
            }
            quizStepBtnPrev.onclick = function() {
                step_9.style.transition = 'all .2s ease';
                step_9.style.transform = 'scale(0)';
                step_8.style.transition = 'all .2s ease .2s';
                step_8.style.transform = 'scale(1)';
                quizStepBtnNext.classList.add('stc-main__quiz__step__footer__next-btn--active');
            }
        }


    })
        

    
});