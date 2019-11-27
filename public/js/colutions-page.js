window.onload = function () { 
   let colutions__center = document.querySelector('.colutions__center');

   function scrolling() {
      window.scrollTo(0,0);
   }


   //TOYOTA
   let toyota_item = document.querySelector('#toyota-item');
   let toyota_page = document.querySelector('#TOYOTA-PAGE');
   let toyota_back_btn = document.querySelector('#toyota-back-btn');
   toyota_item.onclick = function() {
      toyota_page.style.visibility = "visible";
      toyota_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "3240px";
      scrolling();
   }
   toyota_back_btn.onclick= function() {
      toyota_page.style.transform = "scale(0)";
      toyota_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


   // CANON
   let canon_item = document.querySelector('#canon-item');
   let canon_page = document.querySelector('#CANON-PAGE');
   let canon_back_btn = document.querySelector('#canon-back-btn');
   canon_item.onclick = function() {
      canon_page.style.visibility = "visible";
      canon_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "4100px";
      scrolling();
   }
   canon_back_btn.onclick= function() {
      canon_page.style.transform = "scale(0)";
      canon_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


   //FORMA
   let forma_item = document.querySelector('#forma-item');
   let forma_page = document.querySelector('#FORMA-PAGE');
   let forma_back_btn = document.querySelector('#forma-back-btn');
   forma_item.onclick = function() {
      forma_page.style.visibility = "visible";
      forma_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "2480px";
      scrolling();
   }
   forma_back_btn.onclick= function() {
      forma_page.style.transform = "scale(0)";
      forma_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


   //CRONOS
   let kronos_item = document.querySelector('#kronos-item');
   let cronos_page = document.querySelector('#CRONOS-PAGE');
   let cronos_back_btn = document.querySelector('#cronos-back-btn');
   kronos_item.onclick = function() {
      cronos_page.style.visibility = "visible";
      cronos_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "4020px";
      scrolling();
   }
   cronos_back_btn.onclick= function() {
      cronos_page.style.transform = "scale(0)";
      cronos_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


   //ARB
   let arb_item = document.querySelector('#ARB-item');
   let arb_page = document.querySelector('#ARB-PAGE');
   let arb_back_btn = document.querySelector('#arb-back-btn');
   arb_item.onclick = function() {
      arb_page.style.visibility = "visible";
      arb_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "3180px";
      scrolling();
   }
   arb_back_btn.onclick= function() {
      arb_page.style.transform = "scale(0)";
      arb_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


   //comet
   let comet_item = document.querySelector('#comet-item');
   let comet_page = document.querySelector('#COMET-PAGE');
   let comet_back_btn = document.querySelector('#comet-back-btn');
   comet_item.onclick = function() {
      comet_page.style.visibility = "visible";
      comet_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "2340px";
      scrolling();
   }
   comet_back_btn.onclick= function() {
      comet_page.style.transform = "scale(0)";
      comet_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }

   
   // BEBRAND
   let bebrand_item = document.querySelector('#bebrand-item');
   let bebrand_page = document.querySelector('#BEBRAND-PAGE');
   let bebrand_back_btn = document.querySelector('#bebrand-back-btn');
   bebrand_item.onclick = function() {
      bebrand_page.style.visibility = "visible";
      bebrand_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "2450px";
      scrolling();
   }
   bebrand_back_btn.onclick = function() {
      bebrand_page.style.transform = "scale(0)";
      bebrand_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
   }


    // BSK
    let bsk_item = document.querySelector('#BSK-item');
    let bsk_page = document.querySelector('#BSK-PAGE');
    let bsk_back_btn = document.querySelector('#bsk-back-btn');
    bsk_item.onclick = function() {
      bsk_page.style.visibility = "visible";
      bsk_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "2250px";
      scrolling();
    }
    bsk_back_btn.onclick = function() {
      bsk_page.style.transform = "scale(0)";
      bsk_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
    }


    // RMH
    let rmh_item = document.querySelector('#RMH-item');
    let rmh_page = document.querySelector('#RMH-PAGE');
    let rmh_back_btn = document.querySelector('#rmh-back-btn');
    rmh_item.onclick = function() {
      rmh_page.style.visibility = "visible";
      rmh_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "3100px";
      scrolling();
    }
    rmh_back_btn.onclick = function() {
      rmh_page.style.transform = "scale(0)";
      rmh_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
    }


    // BUSINESS
    let business_item = document.querySelector('#BUSINESS-item');
    let business_page = document.querySelector('#BUSINESS-PAGE');
    let business_back_btn = document.querySelector('#business-back-btn');
    business_item.onclick = function() {
      business_page.style.visibility = "visible";
      business_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "3500px";
      scrolling();
    }
    business_back_btn.onclick = function() {
      business_page.style.transform = "scale(0)";
      business_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
    }


    // CIRCUS
    let circus_item = document.querySelector('#circus-item');
    let circus_page = document.querySelector('#CIRCUS-PAGE');
    let circus_back_btn = document.querySelector('#circus-back-btn');
    circus_item.onclick = function() {
      circus_page.style.visibility = "visible";
      circus_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "2350px";
      scrolling();
    }
    circus_back_btn.onclick = function() {
      circus_page.style.transform = "scale(0)";
      circus_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
    }


    // EVITA
    let evita_item = document.querySelector('#evita-item');
    let evita_page = document.querySelector('#EVITA-PAGE');
    let evita_back_btn = document.querySelector('#evita-back-btn');
    evita_item.onclick = function() {
      evita_page.style.visibility = "visible";
      evita_page.style.transform = "scale(1)";
      colutions__center.style.minHeight = "4170px";
      scrolling();
    }
    evita_back_btn.onclick = function() {
      evita_page.style.transform = "scale(0)";
      evita_page.style.visibility = "hidden";
      colutions__center.style.minHeight = "1000px";
    }
}