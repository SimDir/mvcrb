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
});
