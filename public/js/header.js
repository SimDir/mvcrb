'use strict';
$( document ).ready(function() {
$('#HeaderMenuCross').click(function() {
    $('#HeaderMenuBurger').css({ "visibility": "visible", "transform": "rotate(180deg)" });
    $('#HeaderMenu').css({ "visibility": "hidden", "opacity": "0" });
    $('#HeaderMenuCross').css({ "visibility": "hidden", "transform": "rotate(0deg)" });
});
//$( document ).click(function() {
//    $('#HeaderMenuBurger').css({ "visibility": "visible", "transform": "rotate(180deg)" });
//    $('#HeaderMenu').css({ "visibility": "hidden", "opacity": "0" });
//    $('#HeaderMenuCross').css({ "visibility": "hidden", "transform": "rotate(0deg)" });
//  console.log( "HeaderMenuCross .click() called." );
//});
$('#HeaderMenuBurger').click(function() {
    $('#HeaderMenuBurger').css({ "visibility": "hidden", "transform": "rotate(0deg)" });
    $('#HeaderMenuCross').css({ "visibility": "visible", "transform": "rotate(180deg)" });
    $('#HeaderMenu').css({ "visibility": "visible", "opacity": "1" });
});
});