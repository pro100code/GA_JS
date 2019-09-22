function Time(deadline){
    let goodDay = document.querySelector('.goodDay'),
     goodDatSpan = goodDay.childNodes[3],
     toDay = document.querySelector('.toDay'),
     toDaySpan = toDay.childNodes[3],
     curTime = document.querySelector('.curTime'),
     curTimeSpan = curTime.childNodes[3],
     endYear = document.querySelector('.endYear'),
    endYearSpan = endYear.childNodes[3],
    dayArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
   
    function getTimeRemaining(){
        let date = new Date(),
         day = date.getDay() - 1,
         localTime = date.toLocaleTimeString('en'),
         localTimeRU = date.toLocaleTimeString('ru'),
         dateStop = new Date(deadline).getTime(),
         dateNow = date.getTime(),
         timeRemaining = (dateStop - dateNow) / 1000,
         stopDay = Math.floor(timeRemaining / 60 / 60 / 24);
    
        return {timeRemaining, day, localTime, stopDay, localTimeRU};
    } 

    function CalculateDate() {
        let timer = getTimeRemaining();
        // Показывает день неледели
        for (let i = 0; i < dayArr.length; i++){
                if (i === timer.day){
                    toDaySpan.textContent = dayArr[i];
                }
        }
        
        // показывает текущую дату
        curTimeSpan.textContent = timer.localTime;

        // показывает отставшиеся дни до НГ
        endYearSpan.textContent = timer.stopDay + ' ' + 'Дней';

        // время суток
        if (timer.localTimeRU > 4 || timer.localTimeRU < 12) {
            goodDatSpan.textContent = 'Утро';
        } else if (timer.localTimeRU > 12|| timer.localTimeRU < 17) {
            goodDatSpan.textContent = 'день';
        } else if (timer.localTimeRU > 17 + 'AM'|| timer.localTimeRU < 23) {
            goodDatSpan.textContent = 'вечер';
        } else {
            goodDatSpan.textContent = 'ночь';
        }
        

        if (timer.timeRemaining > 0) {
            setTimeout(CalculateDate, 1000);
        }

    }
    CalculateDate();

    
}

Time('1 january 2020');