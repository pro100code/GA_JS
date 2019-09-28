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
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'); // нашли все li в ul


        // const handlerMunu = () => {
        //     if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        //         menu.style.transform = `translate(0)`;
        //     } else {
        //         menu.style.transform = `translate(-100%)`;
        //     }
        // };

        const handlerMenu = () => {
            let positionMenu,
                menuTranslate = 'translate',
                count = '1%';
                count = count +count;
            positionMenu = requestAnimationFrame(handlerMenu);
            
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(-100% + ${count})`;
            } else if (menu.style.transform === `translate(0)`) {
                menu.style.transform = `translate(-100%)`;
            }







            // positionMenu = requestAnimationFrame(handlerMenu);

            // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // }
            //menu.classList.toggle('active-menu'); // добавляет или убирает класс с файла css, который уже написан   
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    toggleMenu();

    // const getMenu = () => {
    //     const menu = document.querySelector('menu'),
    // };
    // getMenu();

    // popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupBtnClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popupBtnClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopup();


























    //Timer с урока
    /*  
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSecond = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(), // получим конечную дату
                dateNow = new Date().getTime(), // получим текущую дату
                timeRemaining = (dateStop - dateNow) / 1000, // разница времени в секундах
                seconds = Math.floor(timeRemaining % 60), // наit число никогда не будет больше 59
                minutes = Math.floor((timeRemaining / 60) % 60), // получили минуты которые также не будут больше 59
                hours = Math.floor(timeRemaining / 60 / 60 / 60); // часы не будут больше 23
            //day = Math.floor(timeRemaining / 60 / 60 / 24);  количество дней
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSecond.textContent = timer.seconds;
            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            }
        }
        updateClock();
    }
    // наша функция будет принимать дедлайн, то время до которого наш таймер будет отсчитывать
    countTimer('1 july 2019');
*/
});