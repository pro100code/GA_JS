document.addEventListener('DOMContentLoaded', function(){ 
'use srtict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    additionalIncomeItemFirst = additionalIncomeItems[0],
    additionalIncomeItemSecond = additionalIncomeItems[1],
    
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items');

let appData = {
    income: {},
    incomeMonth: 0,           // доп. заработки  за месяц
    addIncome: [],         // перечесление доп. доходов 
    AddExpenses: [],      // массив с возможными расходами
    deposit: false,
    moneyDeposit: 0,
    percentDeposit: 0,
    expenses: {},         // доп. расходы
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    mission: 0,
    start: function(){
        if(salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');    
            return;
        }
        appData.budget = +salaryAmount.value;
        
        
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getIncome();
        appData.getIncomeMonth();
        appData.getaddIncome();
        appData.getBudget();
        appData.getTargetMonth();
        //appData.getPeriodSelect();
        appData.showResult();
    },

showResult: function(){  
    budgetMonthValue.value = +appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.AddExpenses.join(',');                   // разбить массив на строки 
    additionalIncomeValue.value = appData.addIncome.join(',');
    targetMonthValue.value = Math.floor(appData.getTargetMonth());
    incomePeriodValue.value = +appData.calcPeriod();
    periodSelect.value = appData.getPeriodSelect(); 
},

addExpensesBlock: function(){ 
    let cloneExpensesItems = expensesItems[0].cloneNode(true);                       // клонируем обьект   
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);  // вставляем клона после кнопки плюс
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){                                              // после 3-х кликов кнопка expensesPlus исчезнет
            expensesPlus.style.display = 'none';  
        }
},

getExpenses: function(){
    expensesItems.forEach(function(item){                                            // перебор элементов expensesItems
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
    });
},

getAddExpenses: function(){
  let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();                                        // метод уберает пробелы вначале и в конце
        if (item !== ''){
           appData.AddExpenses.push(item);
        }
      }); 
},

getExpensesMonth: function() {
    for(let key in appData.expenses){ 
      appData.expensesMonth += +appData.expenses[key];
    } 
},

// addIncomeBlock
addIncomeBlock: function(){ 
  let cloneIncomeItems = incomeItems[0].cloneNode(true);                         
      incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);  
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){                                              
          incomePlus.style.display = 'none';  
      }
},

// getIncome
getIncome: function(){
  incomeItems.forEach(function(item){                                            // перебор элементов expensesItems
    let itemIcom = item.querySelector('.income-title').value,
        cashIcom = item.querySelector('.income-amount').value;
        if(itemIcom !== '' && cashIcom !== ''){
            appData.income[itemIcom] = +cashIcom;
        }
});    
},

getaddIncome: function(){
  additionalIncomeItems.forEach(function(item){
    let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
},

getIncomeMonth: function(){
  for(let key in appData.income){ 
    appData.incomeMonth += +appData.income[key];
  }
},

getBudget: function(){
  appData.budgetMonth = Math.floor(appData.budget + appData.incomeMonth - appData.expensesMonth);
  appData.budgetDay = Math.floor(appData.budgetMonth / 30); 
},

getTargetMonth: function(){
      appData.mission = +targetAmount.value; 
      return appData.mission / appData.budgetMonth;
},

calcPeriod: function(){
  return Math.ceil(appData.budgetMonth * periodSelect.value);
},


getPeriodSelect: function(){
  periodAmount.textContent = periodSelect.value;
   
},
};


start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodSelect);





// getStatusIncome: function(){
// 	if(appData.budgetDay > 800) {
// 		return ('Высокий уровень дохода');
// 	} else if(appData.budgetDay >= 300 && appData.budgetDay < 800) {
// 		return ('Средний уровень дохода');
// 	} else if(appData.budgetDay >= 0 && appData.budgetDay < 300) {
// 		return ('Низкий уровень дохода');
// 	}  else if (appData.budgetDay < 0) {
// 		return ('Что-то пошло не так');
// 	} 
// },

// getInfoDeposit: function(){
//   if(appData.deposit){
//     do{
//       appData.moneyDeposit = +prompt('Какая сумма вашего депозита?', 13000);
//     } while(isNaN(appData.moneyDeposit) || appData.moneyDeposit <= 0);
 
//     do{
//       appData.percentDeposit = +prompt('Какой годовой процент вашего депозита?', 25);
//     } while(isNaN(appData.percentDeposit) || appData.percentDeposit <= 0);
//   }
// },



//  getPeriodMonths: function(){
//   let startNew = document.getElementById('start');
//   startNew.addEventListener('click', appData.calcPeriod);
//  }






});



           





















 