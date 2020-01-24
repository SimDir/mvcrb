'use strict';
$( document ).ready(function() {  
   $('#headerMoscow').click(function(){
      $('#contactsUlsk').fadeOut();
      $('#contactMoscow').fadeIn(1000);
      $('#contactLiny').fadeOut();
      $('#contactVilnus').fadeOut();

      $('#headerUlsk').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});
      $('#headerMoscow').css({"borderBottom": "2px solid #fff", "fontWeight" : "bold"});
      $('#headerLiny').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});
      $('#headerVilnus').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});

   });

   $('#headerUlsk').click(function(){
      $('#contactsUlsk').fadeIn(1000);
      $('#contactMoscow').fadeOut();
      $('#contactLiny').fadeOut();
      $('#contactVilnus').fadeOut();

      $('#headerUlsk').css({"borderBottom": "2px solid #fff", "fontWeight" : "bold"});
      $('#headerMoscow').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});
      $('#headerLiny').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});
      $('#headerVilnus').css({"borderBottom": "2px solid transparent", "fontWeight" : "normal"});
   });
});


