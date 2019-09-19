document.addEventListener('DOMContentLoaded', function () { 

    'use strict';

    function DomElement(selector, height, width, bg, fontSize) {  // создал класс со свойствами
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
      }

      DomElement.prototype.conditionCreateElement = function() {
              
              let elem;
                if (this.selector[0] == '.') {
                    elem = document.createElement('div');  // создаем div
                    elem.className = this.selector.slice(1, (this.selector).length); // задаем и называем класс, начиная со второго символа ввода
                } else if (this.selector[0] == '#') {
                    elem = document.createElement('p');   // создаем P
                    elem.className = this.selector.slice(1, (this.selector).length); 
                }

                elem.innerHtml = this.selector;
                 document.body.append(elem);
                elem.style.cssText = `height:  this.height
                                      width: this.width;
                                      bg: this.bg;
                                      fontSize: this.fontSize;
                                     `;

      };

      let domElementDiv = new DomElement('.helloDiv', '300px', '300px', 'red', '50px'),
          domElementP = new DomElement('#helloP', '200px', '200px', 'blue', '50px');
          
          domElementDiv.conditionCreateElement();
          domElementP.conditionCreateElement();
      
     
});   