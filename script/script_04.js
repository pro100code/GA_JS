'use strict';

let money = +prompt('Ваш месячный доход: ', '5432'),                                     
inCome = 'фриланс', 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка'),
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 123456, 
period;

// 1) — Оставить функцию showTypeof, которые написали в уроке
let showTypeof = function(data) {
	console.log('Основные данные: ', data, typeof(data));
};
showTypeof(money);
showTypeof(inCome);
showTypeof(deposit);

//console.log(addExpenses.split(', '));

let exprensesMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Люблю потусоваться, знаете...'),
exprenses1 = +prompt('Во сколько это обойдется?', 987),
exprensesMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Вечер пятницы...'),
exprenses2 = +prompt('Во сколько это обойдется?', 567);

// 1) getExpensesMonth, которая возвращает сумму всех расходов за месяц
let getExpensesMonth =function() {
	return exprenses1 + exprenses2;
};
getExpensesMonth();
let expensesMonth = getExpensesMonth();

// 1) — функция getAccumulatedMonth возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function(){
	return money - expensesMonth;
};
getAccumulatedMonth();
// Результат сохранить в переменную accumulatedMonth
let accumulatedMonth = getAccumulatedMonth();

// 1) — функция getTargetMonth подсчитывает за какой период будет достигнута цель, зная результат месячного накопления 
let getTargetMonth = function() {
	return  mission / accumulatedMonth; 
};
getTargetMonth();
period = getTargetMonth();
console.log('Сумму в:', mission, ' - Вы накопите за ', period, 'месяцев');
console.log('А точнее за', Math.floor(period));


// console.log('Сумму в:', mission, ' - Вы накопите за ', period, 'месяцев');
// console.log('А точнее за', Math.ceil(period));

let getBudgetDay = function() {
	return accumulatedMonth / 30;
};
getBudgetDay();
let budgetDay = getBudgetDay();
console.log('Даход за день: ', budgetDay);
console.log('А точнее: ', Math.ceil(budgetDay));


// 2) — Оставить функцию getStatusIncome, которые написали в уроке
let getStatusIncome = function(){
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
console.log(getStatusIncome());
