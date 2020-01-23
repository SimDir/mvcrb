'use strict';
$( document ).ready(function() {  
   $('#Moscow').click(e=>{
      $('#UlskContacts').hide();
      $('#MoscowContacts').show();
      $('#Ulsk').css({"borderBottom": "none"});
      $('#Moscow').css({"borderBottom": "1px solid #000A6C"});
      // $('.ULCITY').css({"display": "none"});
      // $('.MCITY').css({"display": "block"});
      // $('.LCITY').css({"display": "none"});
      // $('.VCITY').css({"display": "none"});
      // $('#Ulsk').css({"borderBottom": "none"});
      // $('#Moscow').css({"borderBottom": "1px solid grey"});
      // $('#Liny').css({"borderBottom": "none"});
      // $('#Vilnus').css({"borderBottom": "none"});
   });

   $('#Ulsk').click(e=>{
      $('#MoscowContacts').hide();
      $('#UlskContacts').show();
      $('#Moscow').css({"borderBottom": "none"});
      $('#Ulsk').css({"borderBottom": "1px solid #000A6C"});
      // $('.ULCITY').css({"display": "block"});
      // $('.MCITY').css({"display": "none"});
      // $('.LCITY').css({"display": "none"});
      // $('.VCITY').css({"display": "none"});
      // $('#Ulsk').css({"borderBottom": "1px solid grey"});
      // $('#Moscow').css({"borderBottom": "none"});
      // $('#Liny').css({"borderBottom": "none"});
      // $('#Vilnus').css({"borderBottom": "none"});
   });
});









 