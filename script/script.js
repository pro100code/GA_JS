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
    incomeItems = document.querySelectorAll('.income-items'),

    leftSide = document.querySelector('.data'),
    inputTypeTextName = document.querySelectorAll('input[placeholder="Наименование"]'),
    inputTypeTextSum = document.querySelectorAll('input[placeholder="Сумма"]'),
    inputTypeText = document.querySelectorAll("input[type='text']"); 

let appData = {
    income: {},
    incomeMonth: 0,           
    addIncome: [],         
    AddExpenses: [],     
    deposit: false,
    moneyDeposit: 0,
    percentDeposit: 0,
    expenses: {},         
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    mission: 0,
    start: function(){
      if (isNaN(salaryAmount.value) || salaryAmount.value.trim() === ''){
        alert(' Не верно заполнено поле "Месячный доход!"');
				return;
			}
        this.budget = +salaryAmount.value;
  
        this.getExpenses();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getIncome();
        this.getIncomeMonth();
        this.getaddIncome();
        this.getBudget();
        this.getTargetMonth();
        this.getStartNone();
        this.showResult();  
    },

showResult: function(){  
    budgetMonthValue.value = +appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.AddExpenses.join(','); // разбить массив на строки 
    additionalIncomeValue.value = appData.addIncome.join(',');
    targetMonthValue.value = Math.floor(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();
    periodSelect.addEventListener('input', appData.getPeriodSelectValue);   
},

addExpensesBlock: function(){ 
    let cloneExpensesItems = expensesItems[0].cloneNode(true),                       
        cloneExpensesTitle = cloneExpensesItems.querySelector('.expenses-title'),
        cloneExpensesAmount = cloneExpensesItems.querySelector('.expenses-amount');
        cloneExpensesTitle.value = '';
        cloneExpensesAmount.value = '';
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);  
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){                                              
           expensesPlus.disabled = true;  
        }
},

getExpenses: function(){
    expensesItems.forEach(function(item){ // перебор элементов expensesItems
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
        item = item.trim(); // метод уберает пробелы вначале и в конце
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

addIncomeBlock: function(){ 
  let cloneIncomeItems = incomeItems[0].cloneNode(true),
      cloneIncomeTitle = cloneIncomeItems.querySelector('.income-title'),
			cloneIncomeAmount = cloneIncomeItems.querySelector('.income-amount');
			cloneIncomeTitle.value = '';
			cloneIncomeAmount.value = '';                         
      incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);  
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){                                              
          incomePlus.disabled = true;  
      }   
},

// перебор элементов expensesItems
getIncome: function(){
  incomeItems.forEach(function(item){   
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

getPeriodSelectValue: function(){
  periodAmount.textContent = periodSelect.value;
  incomePeriodValue.value = appData.calcPeriod();
},

// блокировка всех input[type=text]
getStartNone: function() {    
  let inputText = leftSide.querySelectorAll("input[type='text']");
  inputText.forEach(function(item) {
    item.setAttribute('disabled', '');
  });

  //periodSelect.disabled = true; 
  start.style.display = 'none';
  cancel.style.display = 'block';
},
};


start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodSelect);
});




















 