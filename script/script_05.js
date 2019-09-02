'use strict';

let money,                                    
inCome = 'фриланс', 
//addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка'),
//deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 123456,
budgetDay, 
period,
exprenses1,
exprenses2;

// 1) Переписать функцию start циклом do while
let start = function() {
	do{ 
		money = prompt('Ваш месячный доход? ', 5432);
	}while(isNaN(money) || money === '' || money === null || money < -money);
};
start();
console.log('Ваш месячный доход: ', money);


// Вывод типов данных
// let showTypeof = function(data) {
// 	console.log('Основные данные: ', data, typeof(data));
// };
// showTypeof(money);
// showTypeof(inCome);
// showTypeof(deposit);

// Вывод массива addExpenses
// console.log(addExpenses.split(', '));


// 2) Добавить валидацию (проверку) на данные которые мы получаем на вопрос 'Во сколько это обойдется?’  
let getExpensesMonth =function() {
	let sum = 0,
	    checkSum;
	for(let i = 0; i < 2; i++){
		if(i === 0){
			exprenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Люблю потусоваться, знаете...');
		}
		if(i === 1){
			exprenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Вечер пятницы...');
		}
		do{ 
			checkSum = +prompt('Во сколько это обойдется?', 555);
		}while(isNaN(checkSum) || checkSum === 0 || checkSum === null);
		sum += checkSum; 
	}

	return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Обязательные ежемесячные расходы: ', expensesAmount);


let getCleanMoney = function() {
	return money - expensesAmount;
};
getCleanMoney();
let cleanMoney = getCleanMoney();
console.log('Выш чистый доход: ', cleanMoney);


// 3) Если getTargetMonth возвращает нам отрицательное значение то вместо “Цель будет достигнута”, необходимо выводить “Цель не будет достигнута”
let getAccumulatedMonth = function(){
	if(cleanMoney > 0) {
		return ('Цель будет достигнута!');
	} else if(cleanMoney < -cleanMoney){
		return ('Цель не будет достигнута!');
	}
};
getAccumulatedMonth();
// Результат сохранить в переменную accumulatedMonth
let accumulatedMonth = getAccumulatedMonth();
console.log('Статус вашгего дохода: ', accumulatedMonth);


// функция getTargetMonth подсчитывает за какой период будет достигнута цель, зная результат месячного накопления 
// let getTargetMonth = function() {
// 	return  mission / expensesAmount;
// };
// getTargetMonth();
// period = getTargetMonth();
// console.log('Период накопления: ', period, 'месяцев');
// console.log('Сумму ', mission, ' - Вы накопите за ', period, 'месяцев');
// console.log('А точнее за', Math.floor(period));


// 4) Если budgetDay отрицательное значение то вместо уровня дохода пусть выводится сообщение “Что то пошло не так”
let getStatusIncome = function(){
	budgetDay = cleanMoney / 30;  
	if(budgetDay > 800) {
		return ('Высокий уровень дохода');
	} else if(budgetDay > 300 && budgetDay < 800) {
		return ('Средний уровень дохода');
	} else if(budgetDay > 0 && budgetDay < 300) {
		return ('Низкий уровень дохода');
	}  else if (budgetDay < -budgetDay) {
		return ('Что-то пошло не так');
	} else {
		return ('Что-то пошло не так');
	}
};
getStatusIncome();
let statusBudgetDay = getStatusIncome();
console.log('Ваш дневной доход: ', budgetDay);
console.log('А точнее: ', Math.floor(budgetDay));
console.log('Статус дневного дохода: ', statusBudgetDay);
