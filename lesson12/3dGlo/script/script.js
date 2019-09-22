window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerNumbers = document.querySelectorAll('.timer-numbers');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24;

            if (hours < 10 || minutes < 10 || seconds < 10) {
                hours = ('0' + hours).slice(-2);
                minutes = ('0' + minutes).slice(-2);
                seconds = ('0' + seconds).slice(-2);
            }

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        let updateClock = setInterval(function () {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                timerNumbers.forEach((elem) => {
                    elem.style.color = 'Red';
                });
                clearInterval(updateClock);
            }
        }, 1000);

    }
    
    countTimer('25 september 2019');





    
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