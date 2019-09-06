'use strict';

let money,
    start = function() {
	do{ 
		money = +prompt('Ваш месячный доход? ', 5432);
	}while(isNaN(money) || money === '' || money === null || money <= 0);
};
start();
//console.log('Ваш месячный доход: ' + money);

let appData = {
  income: {},        // доп. доходы
  addIcome: [],      // перечесление доп. доходов 
  
  AddExpenses: [],   // массив с возможными расходами
  deposit: false,
  mission: 100000,
  period: 12,



  expenses: {},      // доп. расходы
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
      let  expense,
           whatExpense;    
       for(let i = 0; i < 2; i++){
            do{
              expense = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Расход' + (i+1));
            }while(typeof(expense) === 'number' || expense === '' || expense === null);  
          
          do{
            whatExpense = prompt('Во сколько это обойдется?', 555);
          }while(isNaN(whatExpense) || whatExpense === 0 || whatExpense === null);
            appData.expenses[expense] = +whatExpense;         
        }
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0
};
 appData.asking();
console.log('appData.expenses', appData.expenses);

 






let
expenses1,
expenses2;

appData.getExpensesMonth = function() {
	let sum = 0,
	checkSum;
	for(let i = 0; i < 2; i++){
		if(i === 0){
			expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'маршрутка');
		}
		if(i === 1){
			expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'развлечения');
		}
		do{ 
			checkSum = +prompt('Во сколько это обойдется?', 555);
		}while(isNaN(checkSum) || checkSum === 0 || checkSum === null);
		sum += checkSum; 
	}
	return sum;
};
let expensesMonth = appData.getExpensesMonth();



appData.getAccumulatedMonth = function(){
	return money - expensesMonth;
};
let accumulatedMonth = appData.getAccumulatedMonth();

appData.getTargetMonth = function() {
	appData.period = appData.mission / accumulatedMonth;
	if(appData.period > 0) {
		return ('Цель будет достигнута!');

	} else if(appData.period < 0){
		return ('Цель не будет достигнута!');
	}
};
let statusPeriod = appData.getTargetMonth();
console.log(statusPeriod);
console.log('Cрок достижения цели (в месяцах:) ' + Math.floor(appData.period));


let getBudgetDay = function() {
	return accumulatedMonth / 30;
};
let budgetDay = getBudgetDay();

appData.getStatusIncome = function(){
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
appData.getStatusIncome();
console.log(appData.getStatusIncome());









