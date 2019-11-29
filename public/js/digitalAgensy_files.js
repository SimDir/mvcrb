window.onload = function() {
   //ДОКУМЕНТЫ
   let li_docs = document.querySelector('#li_docs');
   let docs = document.querySelector('#docs');
   li_docs.onclick = function() {
      docs.style.transform = "scale(1)";
      li_docs.style.textDecoration = "underline";

      requisites.style.transform = "scale(0)";
      li_requisites.style.textDecoration = "none";
      mediaFiles.style.transform = "scale(0)";
      li_mediaFiles.style.textDecoration = "none";
      presentation.style.transform = "scale(0)";
      li_presentation.style.textDecoration = "none"; 
   }


   //РЕКВИЗИТЫ
   let li_requisites = document.querySelector('#li_requisites');
   let requisites = document.querySelector('#requisites');
   li_requisites.onclick = function() {
      requisites.style.transform = "scale(1)";
      li_requisites.style.textDecoration = "underline";

      docs.style.transform = "scale(0)";
      li_docs.style.textDecoration = "none";
      mediaFiles.style.transform = "scale(0)";
      li_mediaFiles.style.textDecoration = "none";
      presentation.style.transform = "scale(0)";
      li_presentation.style.textDecoration = "none";
   }


   //ПРЕЗЕНТАЦИИ
   let li_presentation = document.querySelector('#li_presentation');
   let presentation = document.querySelector('#presentation');
   li_presentation.onclick = function() {
      presentation.style.transform = "scale(1)";
      li_presentation.style.textDecoration = "underline";

      docs.style.transform = "scale(0)";
      li_docs.style.textDecoration = "none";
      requisites.style.transform = "scale(0)";
      li_requisites.style.textDecoration = "none";
      mediaFiles.style.transform = "scale(0)";
      li_mediaFiles.style.textDecoration = "none";
   }


   //МЕДИА-ФАЙЛЫ
   let li_mediaFiles = document.querySelector('#li_mediaFiles');
   let mediaFiles = document.querySelector('#mediaFiles');
   li_mediaFiles.onclick = function() {
      mediaFiles.style.transform = "scale(1)";
      li_mediaFiles.style.textDecoration = "underline";

      docs.style.transform = "scale(0)";
      li_docs.style.textDecoration = "none";
      requisites.style.transform = "scale(0)";
      li_requisites.style.textDecoration = "none";
      presentation.style.transform = "scale(0)";
      li_presentation.style.textDecoration = "none";
   }
}