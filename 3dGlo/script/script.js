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

        const handlerMenu = () => {
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) &&
                window.innerWidth >= 1000) {
                menu.classList.toggle('active-menu'); // добавляет или убирает класс с файла css, который уже написан
            } else {
                if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                    menu.style.transform = `translate(0)`;
                } else {
                    menu.style.transform = `translate(-100%)`;
                }
            }
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    // popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupBtnClose = document.querySelector('.popup-close');

        const handlerPopUp = () => {
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) &&
                window.innerWidth >= 1000) {
                popup.style.display = 'block';
                popup.style.transform = 'translateX(-100%)';
                setTimeout(function () {
                    popup.style.transform = 'translateX(0%)';
                    popup.style.transition = '0.8s';
                }, 500);
            } else {
                popup.style.display = 'block';
            }
        };

        popupBtn.forEach((elem) => elem.addEventListener('click', handlerPopUp));
        popupBtnClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopup();

});