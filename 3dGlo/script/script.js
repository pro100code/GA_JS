window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    const deadLine = '29 september 2019';

    setInterval(function () {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;

        timeRemaining = timeRemaining < 0 ? 0 : timeRemaining;

        function getTimeRemaining(timeRemaining) {
            let seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            timerHours.textContent = hours < 10 ? '0' + hours : hours;
            timerMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            timerSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        }

        getTimeRemaining(timeRemaining);

    }, 1000, deadLine);

    // menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');

        body.addEventListener('click', (event) => {
            let target = event.target;

            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

                if (target.classList.contains('menu') || target.closest('.menu')) {
                    menu.classList.toggle('active-menu');
                } else if (menu.classList.contains('active-menu') && !(target.closest('.active-menu'))) {
                    menu.classList.toggle('active-menu');
                } else if (target.closest('.active-menu') && !(target.classList.contains('active-menu'))) {
                    menu.classList.toggle('active-menu');
                }

            } else {
                if (target.classList.contains('menu') || target.closest('.menu')) {
                    menu.style.transform = `translate(0)`;
                } else if (target.closest('menu') && !(target.classList.contains('menu'))) {
                    menu.style.transform = `translate(-100%)`;
                }
            }
        });
    };
    toggleMenu();

    // popup
    const togglePopup = () => {
        const popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

        const handlerPopUp = () => {
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) &&
                window.innerWidth >= 1000) {
                popUp.style.display = 'block';
                popUp.style.transform = 'translateX(-100%)';
                setTimeout(function () {
                    popUp.style.transform = 'translateX(0%)';
                    popUp.style.transition = '0.8s';
                }, 500);
            } else {
                popUp.style.display = 'block';
            }
        };

        popUp.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popUp.style.display = 'none';
                }
            }

        });

        popUpBtn.forEach((elem) => elem.addEventListener('click', handlerPopUp));
    };
    togglePopup();

    // табы 
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');


        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            // метод проверяет у елемента селектор, если у элемента нет класса, то он проверяет есть ли у родителя такой класс
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    // слайдер
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn');
        // dot = document.querySelectorAll('.dot');

        let currentSlide = 0, //наш слайд
            interval;

        // Добавляем количество dot's равному кол-ву слайдов
        let portfolioDots = document.querySelector('.portfolio-dots');
        const addDot = () => {
            for (let i = 0; i < slide.length; i++) {
                let dots = document.createElement('li');
                dots.classList.add('dot');
                portfolioDots.append(dots);
            }
        };
        addDot();
        let dot = document.querySelectorAll('.dot');
        
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            //slide[currentSlide].classList.remove('portfolio-item-active'); удаляет класс portfolio-item-active, заменили на функцию prevSlide 
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active'); //точки слайдов
            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            //slide[currentSlide].classList.add('portfolio-item-active'); добавляет класс portfolio-item-active, заменили на функцию nextSlide
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active'); //точки слайдов
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time); //каждые 2 секунды меняется картинка слайдера
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault(); // убираем переключение в слайдере

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length - 1; //длинна элемента всегда на 1 больше чем последний индекс элемента 
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };

    slider();


// pracric 2 from lesson 14 SliderCarousel
class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) { // если пользователь не укажет, то по умолчанию будет '0'

        if (!main || !wrap) { // если в index.html пользователь не укажет main и wrap, то в консоле будет ощибка
            console.warm('slider-carousel: неоходимо 2 свойства, "main" и "wrap"!');
        }

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };

        this.responsive = responsive;
    }

    init() {
        this.addGloClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }

        if (this.responsive) {
            this.responseInit();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');

        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById('sliderCarousel-style');

        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }

        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }

            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }

            .glo-slider__item {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex: 0 0 ${this.options.widthSlide}% !important;               
                margin: auto 0 !important;
            }`; // flex: 0 0 25%;   сколько слайдов влазит у нас в области видимости

        document.head.appendChild(style);
    }

    controlSlider() { //запускаем если пользователь передал стрелки (в index.html в <script> prev и next)
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;

            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;

            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%`;
        }
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);


        const style = document.createElement('style');

        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }

            .glo-slider__prev {
                border-right-color: #19b5fe;
            }

            .glo-slider__next {
                border-left-color: #19b5fe;
            }

            .glo-slider__prev:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:hover,
            .glo-slider__next:focus {
                background: transparent;
                outline: transparent;
            }`;

        document.head.appendChild(style);
    }

    responseInit() {
        const slidesToShowDefauld = this.slidesToShow,
            allRespone = this.responsive.map(item => item.breakpoint),
            maxResponse = Math.max(...allRespone); // получаем из всех чисел самое большое, у нас это 1024

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {

                for (let i = 0; i < allRespone.length; i++) {
                    if (widthWindow < allRespone[i]) {
                        this.slidesToShow = this.responsive[i].slideToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }

            } else {
                this.slidesToShow = slidesToShowDefauld;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);
    }   
}


// урок 15, работа с img и dataset
const changePicture = () => {
    let command = document.querySelector('#command');
    let imgAll = command.querySelectorAll('img');
    let curSrc;
    
    imgAll.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
            curSrc = element.getAttribute('src');
            event.target.src = event.target.dataset.img;
        });
        element.addEventListener('mouseleave', (e) => {
            event.target.src = curSrc;
        });
    });
};
changePicture();

// regex калькулятора валидация для цифр
const validationNumber = () => {
    const calcBlock = document.querySelector('.calc-block');
    let inputCalc = calcBlock.querySelectorAll('input');

    inputCalc.forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D/g, '');
        });
    });
};
validationNumber();






});