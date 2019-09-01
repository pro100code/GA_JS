'use strict';

let money,                                    
inCome = 'фриланс', 
//addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка'),
//deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 123456, 
period;





let start = function() {
	 money = +prompt('Ваш месячный доход? ', '5432');
	  
	 while(isNaN(money) || money === '' || money === null){
		money = +prompt('Ваш месячный доход? ', '5432');
		console.log('Ваш месячный доход? ', money); 
	 }
};
start();





let showTypeof = function(data) {
	console.log('Основные данные: ', data, typeof(data));
};
showTypeof(money);
showTypeof(inCome);
//showTypeof(deposit);

//console.log(addExpenses.split(', '));

 let exprenses1,
	 exprenses2,
	 
     budgetMonth = money - (exprenses1 + exprenses1);






 
let getExpensesMonth =function() {
	let sum = 0;
	for(let i = 0; i < 2; i++){
       if(i === 0){
		exprenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Люблю потусоваться, знаете...');
	   }

	   if(i === 1){
		exprenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Вечер пятницы...');
	   }

		sum += +prompt('Во сколько это обойдется?', 555);
	}
	return sum;
};
let expensesAmount = getExpensesMonth()
console.log('sum: :', expensesAmount);






// 1) — функция getAccumulatedMonth возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function(){
	return money - (exprenses1 + exprenses1);
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

let budgetDay = money / 30;
console.log('Даход за день: ', budgetDay);
console.log('А точнее: ', Math.floor(budgetDay));


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
