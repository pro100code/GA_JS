'use strict';


let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    body = document.querySelector('body'),  
    heading = document.querySelectorAll('h2'),
    headingLink = document.querySelectorAll('a'), 
    callRestoreChapter = document.querySelectorAll('ul'),
    callRestoreChapterElem = document.querySelectorAll('li');

console.log(book);
console.log(callRestoreChapter);
console.log(callRestoreChapterElem);

// выравнял главы по порядку
let getReplaceBooks = function(){   
        books[0].insertBefore(book[1], book[0]);
        books[0].insertBefore(book[2], null);
        books[0].insertBefore(book[4], book[3]);
};


let getReplaceBook2 = function(){ 
    callRestoreChapter[0].insertBefore(callRestoreChapterElem[5], null);  
    callRestoreChapter[0].insertBefore(callRestoreChapterElem[4], callRestoreChapterElem[8]);
    callRestoreChapter[0].insertBefore(callRestoreChapterElem[8], callRestoreChapterElem[6]);
    callRestoreChapter[0].insertBefore(callRestoreChapterElem[6], callRestoreChapterElem[8]);
};


let getReplaceBook5 = function(){ 
    callRestoreChapter[5].insertBefore(callRestoreChapterElem[53], null);  
    callRestoreChapter[5].insertBefore(callRestoreChapterElem[55], callRestoreChapterElem[48]);
    callRestoreChapter[5].insertBefore(callRestoreChapterElem[55], callRestoreChapterElem[49]);
    callRestoreChapter[5].insertBefore(callRestoreChapterElem[48], callRestoreChapterElem[52]);
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
 let getRestoreChapter = function(){
    callRestoreChapter[1].insertBefore(callRestoreChapterElem[10], null);
    callRestoreChapter[1].insertBefore(callRestoreChapterElem[11], null);
};
 

 // изменение в 6-й главе
 let getRestoreChapterNew = function(){
    let  book = document.querySelectorAll('ul'),
         charper = document.querySelectorAll('li'),
         clone  = charper[56].cloneNode(true);
         clone.textContent = 'Глава 8: За пределами ES6” и поставить её в правильное место';
         book[5].appendChild(clone);
         book[5].insertBefore(charper[55], clone); 
         book[5].insertBefore(charper[56], null);          
}; 


getReplaceBooks();
getReplaceBook2();
getReplaceBook5();
getReplaceImg();
getHeading();
getDeleteReclam();
getRestoreChapter();
getRestoreChapterNew();






