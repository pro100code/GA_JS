'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    body = document.querySelector('body'),  
    heading = document.querySelectorAll('h2'),
    headingLink = document.querySelectorAll('a'); 

// выравнял главы по порядку
let getReplaceBook = function(){   
        books[0].insertBefore(book[1], book[0]);
        books[0].insertBefore(book[2], null);
        books[0].insertBefore(book[4], book[3]);
   };


// замена картинки
let getReplaceImg = function(){
     body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
   };


// замена названия главы
 let getHeading = function(){
     let newHeadingLink = headingLink[4].cloneNode();
         newHeadingLink.textContent = '"Книга 3. this и Прототипы Объектов"';
         heading[4].removeChild(headingLink[4]);
         heading[4].appendChild(newHeadingLink);
 };
 

 // удаление рекламы
 let getDeleteReclam = function(){
     let reclam = document.querySelectorAll('.adv');
         body.removeChild(reclam[0]);    
 };
 

 // востановление глав
 let callRestoreChapter = document.querySelectorAll('ul'),
     callRestoreChapterElem = document.querySelectorAll('li');
 let getRestoreChapter = function(){
    callRestoreChapter[1].insertBefore(callRestoreChapterElem[10], null);
    callRestoreChapter[1].insertBefore(callRestoreChapterElem[11], null);
 };
 

 // изменение в 6-й главе
 let getRestoreChapterNew = function(){
    let  book = document.querySelectorAll('ul'),
         charper = document.querySelectorAll('li');
    let  clone  = charper[56].cloneNode(true);
         clone.textContent = 'Глава 8: За пределами ES6” и поставить её в правильное место';
         book[5].appendChild(clone);
         book[5].insertBefore(charper[55], clone); 
         book[5].insertBefore(charper[56], null);          
}; 


getReplaceBook();
getReplaceImg();
getHeading();
getDeleteReclam();
getRestoreChapter();
getRestoreChapterNew();






