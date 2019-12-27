'use strict';
$( document ).ready(function() {    
    $('#HeaderMenuBurger').click(function() {
        $('#HeaderMenuBurger').css({ "visibility": "hidden", "transform": "rotate(0deg)" });
        $('#HeaderMenuCross').css({ "visibility": "visible", "transform": "rotate(180deg)" });
        $('#HeaderMenu').css({ "visibility": "visible", "opacity": "1", "transform": "translateY(0)"});
    });
    $(document).click(function (e) {
        if ($(e.target).closest("#HeaderMenu").length)
            return;
        if ($(e.target).closest("#HeaderMenuBurger").length)
            return;
        if($(document).width()>900)return;
        $('#HeaderMenuBurger').css({"visibility": "visible", "transform": "rotate(180deg)"});
        $('#HeaderMenu').css({"visibility": "hidden", "opacity": "0", "transform": "translateY(-100px)"});
        $('#HeaderMenuCross').css({"visibility": "hidden", "transform": "rotate(0deg)"});
    });
    $('.header__menu_link').click(function(e) {
        let parDiv = $(e.target);
        let ImgCild = parDiv.children("img");
        let DivCild = parDiv.children("div");
        if(ImgCild.hasClass('MnuActiv')){
            DivCild.removeClass("header_bottom_mobile").addClass("header_bottom");
        }else{
            DivCild.removeClass("header_bottom").addClass("header_bottom_mobile");
        }
        ImgCild.toggleClass('MnuActiv');
    });
    

    if (window.location.pathname.search('news--')>-1) {
        $("header").css({'background':'#333'});
        $(".header_bottom").css({'background':'rgba(255,255,255,1)'});
        $('.new_center__center').css({'border-top':'none'})
    }
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top > 0 ) {
            $("header").css({'background':'#333'});
            $(".header_bottom").css({'background':'rgba(255,255,255,1)'});
        } 
        else if (window.location.pathname.search('news--')!==-1){
            return;
        }
        else {
            $("header").css({'background': 'transparent'});
            $(".header_bottom").css({'background':'rgba(255,255,255,.7)'});
        }
    });
});
