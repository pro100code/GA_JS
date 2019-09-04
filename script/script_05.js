'use strict';

let money;

let start = function() {
	do{ 
		money = +prompt('Ваш месячный доход? ', 5432);
	}while(isNaN(money) || money === '' || money === null || money <= 0);
};
start();
console.log('Ваш месячный доход: ' + money);

let inCome = 'фриланс', 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка'),
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 123456, 
period,
exprenses1,
exprenses2;

let showTypeof = function(data) {
	console.log(data, typeof(data));
};
showTypeof(money);
showTypeof(inCome);
showTypeof(deposit);


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
let expensesMonth = getExpensesMonth();



let getAccumulatedMonth = function(){
	return money - expensesMonth;
};
let accumulatedMonth = getAccumulatedMonth();


// 3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
let getTargetMonth = function() {
	period = mission / accumulatedMonth;
	if(period > 0) {
		return ('Цель будет достигнута!');

	} else if(period < 0){
		return ('Цель не будет достигнута!');
	}
};
let statusPeriod = getTargetMonth();
console.log(statusPeriod);
console.log('Cрок достижения цели (в месяцах:) ' + Math.floor(period));


let getBudgetDay = function() {
	return accumulatedMonth / 30;
};
let budgetDay = getBudgetDay();


// 4) Если budgetDay отрицательное значение, то вместо уровня дохода пусть выводится сообщение “Что то пошло не так”
let getStatusIncome = function(){
	if(budgetDay > 800) {
		return ('Высокий уровень дохода');
	} else if(budgetDay >= 300 && budgetDay < 800) {
		return ('Средний уровень дохода');
	} else if(budgetDay >= 0 && budgetDay < 300) {
		return ('Низкий уровень дохода');
	}  else if (budgetDay < 0) {
		return ('Что-то пошло не так');
	} 
};
getStatusIncome();
console.log(getStatusIncome());









