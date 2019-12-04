'use strict';
$( document ).ready(function() {    
    $('#HeaderMenuBurger').click(function() {
        $('#HeaderMenuBurger').css({ "visibility": "hidden", "transform": "rotate(0deg)" });
        $('#HeaderMenuCross').css({ "visibility": "visible", "transform": "rotate(180deg)" });
        $('#HeaderMenu').css({ "visibility": "visible", "opacity": "1" });
    });
    $(document).click(function (e) {
        if ($(e.target).closest("#HeaderMenu").length)
            return;
        if ($(e.target).closest("#HeaderMenuBurger").length)
            return;
        $('#HeaderMenuBurger').css({"visibility": "visible", "transform": "rotate(180deg)"});
        $('#HeaderMenu').css({"visibility": "hidden", "opacity": "0"});
        $('#HeaderMenuCross').css({"visibility": "hidden", "transform": "rotate(0deg)"});
    });
    $('.header__menu_link>img').click(function(e) {
        let parDiv = $(e.target).parent();
        let ImgCild = parDiv.children("img");
        let DivCild = parDiv.children("div");
        if(ImgCild.hasClass('MnuActiv')){
            DivCild.removeClass("header_bottom_mobile").addClass("header_bottom");
        }else{
            DivCild.removeClass("header_bottom").addClass("header_bottom_mobile");
        }
        ImgCild.toggleClass('MnuActiv');
//        console.log($(e.target).parent());
    });
});
