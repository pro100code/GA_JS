'use strict';

let money,
    start = function() {
	do{ 
		money = +prompt('Ваш месячный доход? ', 10000);
	}while(isNaN(money) || money === '' || money === null || money <= 0);
};
start();

let appData = {
    income: {},           // доп. доходы
    addIcome: [],         // перечесление доп. доходов 
    AddExpenses: [],      // массив с возможными расходами
    deposit: false,
    moneyDeposit: 0,
    percentDeposit: 0,
    mission: 100000,
    period: 12,
    expenses: {},         // доп. расходы
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){       
      if(confirm('У вас есть дополнительный источник заработока?')){
        let itemIncome,
            cashIncome;        
         do{
          itemIncome = prompt('Какой у вас дополнительный заработок?', 'Торговля');
        }while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null); 
        do{
          cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 2500);
        } while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null || cashIncome < 0);
            appData.income[itemIncome] = cashIncome;
          }

      let  addExpenses;
       do{
         addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, маршрутка');
       } while(!isNaN(addExpenses) || addExpenses === '' || addExpenses === null);
       appData.addExpenses = addExpenses.toLowerCase().split(', ');
       
       appData.deposit = confirm('Есть ли у вас депозит в банке?');
      
      let  expense,
           whatExpense;    
       for(let i = 0; i < 2; i++){
            do{
              expense = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Расход' + (i+1));
            }while(!isNaN(expense) || expense === '' || expense === null);  
          
          do{
            whatExpense = +prompt('Во сколько это обойдется?', 1000);
          }while(isNaN(whatExpense) || whatExpense === 0 || whatExpense === null || whatExpense === '');
           appData.expenses[expense] = whatExpense;         
        }
  },
  
getExpensesMonth: function() {
    for(let key in appData.expenses){ 
      appData.expensesMonth   += appData.expenses[key];
    } 
},

getBudget: function(){
  appData.budgetMonth = appData.budget - appData.expensesMonth;
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);  
},

getTargetMonth: function() {
	appData.period = appData.mission / appData.budgetMonth;
	if(appData.period > 0) {
		return ('Цель будет достигнута!');
	} else if(appData.period < 0){
		return ('Цель не будет достигнута!');
	}
},

getStatusIncome: function(){
	if(appData.budgetDay > 800) {
		return ('Высокий уровень дохода');
	} else if(appData.budgetDay >= 300 && appData.budgetDay < 800) {
		return ('Средний уровень дохода');
	} else if(appData.budgetDay >= 0 && appData.budgetDay < 300) {
		return ('Низкий уровень дохода');
	}  else if (appData.budgetDay < 0) {
		return ('Что-то пошло не так');
	} 
},

getInfoDeposit: function(){
  if(appData.deposit){
    do{
      appData.moneyDeposit = prompt('Какая сумма вашего депозита?', 13000);
    } while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null || appData.moneyDeposit <= 0);
 
    do{
      appData.percentDeposit = prompt('Какой годовой процент вашего депозита?', 25);
    } while(isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null || appData.percentDeposit === 0);
  }
},

calcSavedMoney: function(){
  return appData.budgetMonth * appData.period;
}
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

appData.getInfoDeposit();

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Cрок достижения цели (в месяцах:) ' + appData.period);
console.log('Уровень дохода: ' + appData.getStatusIncome());

for(let key in appData){
  console.log('Наша программа включает в себя данные: ' + key + '', appData[key]);
}

let AddExpensesOneUpperCase = ''; 
appData.addExpenses.forEach(function(element) {
  AddExpensesOneUpperCase += element[0].toUpperCase() + element.substr(1).toLowerCase() + ', '; 
   });
console.log(AddExpensesOneUpperCase.slice(0, -2));
