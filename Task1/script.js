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
                    elem.textContent = this.selector;
                    document.body.append(elem);
                } else if (this.selector[0] == '#') {
                    elem = document.createElement('p');   // создаем P
                    elem.className = this.selector.slice(1, (this.selector).length);
                    elem.textContent = this.selector;
                    document.body.append(elem);
                }
                elem.style.cssText = `height:  ${this.height};
                                      width: ${this.width};
                                      background-color: ${this.bg};
                                      font-size: ${this.fontSize};
                                     `;

                

      };

      let domElementDiv = new DomElement('.helloDiv', '300px', '300px', 'red', '30px');
          domElementDiv.conditionCreateElement();
         
      let domElementP = new DomElement('#helloP', '200px', '200px', 'blue', '30px');
          domElementP.conditionCreateElement();
      
     
});   