'use strict';
$( document ).ready(function() {  
   $('#Moscow_contacts').click(function(){
      $('.ULCITY_contacts').css({"display": "none"});
      $('.MCITY_contacts').css({"display": "block"});
      $('.LCITY_contacts').css({"display": "none"});
      $('.VCITY_contacts').css({"display": "none"});

      $('#Ulsk_contacts').css({"borderBottom": "none"});
      $('#Moscow_contacts').css({"borderBottom": "1px solid grey"});
      $('#Liny_contacts').css({"borderBottom": "none"});
      $('#Vilnus_contacts').css({"borderBottom": "none"});

      $('.UlMap').css({"display": "none"});
      $('.MoscowMap').css({"display": "block"});
   });

   $('#Ulsk_contacts').click(function(){
      $('.ULCITY_contacts').css({"display": "block"});
      $('.MCITY_contacts').css({"display": "none"});
      $('.LCITY_contacts').css({"display": "none"});
      $('.VCITY_contacts').css({"display": "none"});

      $('#Ulsk_contacts').css({"borderBottom": "1px solid grey"});
      $('#Moscow_contacts').css({"borderBottom": "none"});
      $('#Liny_contacts').css({"borderBottom": "none"});
      $('#Vilnus_contacts').css({"borderBottom": "none"});

      $('.UlMap').css({"display": "block"});
      $('.MoscowMap').css({"display": "none"});
   });

   // $('#Liny_contacts').click(function(){
   //    $('.ULCITY_contacts').css({"display": "none"});
   //    $('.MCITY_contacts').css({"display": "none"});
   //    $('.LCITY_contacts').css({"display": "block"});
   //    $('.VCITY_contacts').css({"display": "none"});

   //    $('#Ulsk_contacts').css({"borderBottom": "none"});
   //    $('#Moscow_contacts').css({"borderBottom": "none"});
   //    $('#Liny_contacts').css({"borderBottom": "1px solid grey"});
   //    $('#Vilnus_contacts').css({"borderBottom": "none"});

   //    $('.UlMap').css({"display": "none"});
   //    $('.MoscowMap').css({"display": "none"});
   // });

   // $('#Vilnus_contacts').click(function(){
   //    $('.ULCITY_contacts').css({"display": "none"});
   //    $('.MCITY_contacts').css({"display": "none"});
   //    $('.LCITY_contacts').css({"display": "none"});
   //    $('.VCITY_contacts').css({"display": "block"});

   //    $('#Ulsk_contacts').css({"borderBottom": "none"});
   //    $('#Moscow_contacts').css({"borderBottom": "none"});
   //    $('#Liny_contacts').css({"borderBottom": "none"});
   //    $('#Vilnus_contacts').css({"borderBottom": "1px solid grey"});

   //    $('.UlMap').css({"display": "none"});
   //    $('.MoscowMap').css({"display": "none"});
   // });
   
});


