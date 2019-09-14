document.addEventListener('DOMContentLoaded', function(){ 

'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    
    salaryAmount = document.querySelector('.salary-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),  

    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    
    leftSide = document.querySelector('.data'),
    rightSide = document.querySelector('.result'); 
    

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
        //alert(' Не верно заполнено поле "Месячный доход!"');
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
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.AddExpenses.join(','); // разбить массив на строки 
    additionalIncomeValue.value = this.addIncome.join(',');
    targetMonthValue.value = Math.floor(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', appData.getPeriodSelectValue.bind(appData));   
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
           expensesPlus.style.display = 'none';                               
           //expensesPlus.disabled = true;   деактивация кнопки
        }
},

getExpenses: function(){
  const  _this = this;
    expensesItems.forEach(function(item){ // перебор элементов expensesItems
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
              _this.expenses[itemExpenses] = +cashExpenses;
            }
    });
},

getAddExpenses: function(){
  let addExpenses = additionalExpensesItem.value.split(',');
  const  _this = this;
      addExpenses.forEach(function(item){
        item = item.trim(); // метод уберает пробелы вначале и в конце
        if (item !== ''){
          _this.AddExpenses.push(item);
        }
      }); 
},

getExpensesMonth: function() {
  const  _this = this;
    for(let key in _this.expenses){ 
      _this.expensesMonth += +_this.expenses[key];
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
         incomePlus.style.display = 'none';                                      
          //incomePlus.disabled = true;  
      }   
},

getIncome: function(){
  const  _this = this;
  incomeItems.forEach(function(item){   
    let itemIcom = item.querySelector('.income-title').value,
        cashIcom = item.querySelector('.income-amount').value;
        if(itemIcom !== '' && cashIcom !== ''){
          _this.income[itemIcom] = +cashIcom;
        }
});    
},

getaddIncome: function(){
  const  _this = this;
  additionalIncomeItems.forEach(function(item){
    let itemValue = item.value.trim();
      if (itemValue !== ''){
        _this.addIncome.push(itemValue);
      }
    });
},

getIncomeMonth: function(){
  const  _this = this;
  for(let key in this.income){ 
    _this.incomeMonth += +_this.income[key];
  }
},

getBudget: function(){
  this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth);
  this.budgetDay = Math.floor(this.budgetMonth / 30); 
},

getTargetMonth: function(){
      this.mission = +targetAmount.value; 
      return this.mission / this.budgetMonth;
},

calcPeriod: function(){
  return Math.ceil(this.budgetMonth * periodSelect.value);
},

getPeriodSelect: function(){
  periodAmount.textContent = periodSelect.value;
},

getPeriodSelectValue: function(){
  periodAmount.textContent = periodSelect.value;
  incomePeriodValue.value = this.calcPeriod();
},

getStartNone: function() {    
  let inputTextLeft = leftSide.querySelectorAll("input[type='text']");
  inputTextLeft.forEach(function(item) {
    item.setAttribute('disabled', '');
  });

  
  incomePlus.disabled = true;
  expensesPlus.disabled = true;
  depositCheck.disabled = true;
  start.style.display = 'none';
  cancel.style.display = 'block';
},

getReset: function(){
  let inputTextLeft = leftSide.querySelectorAll("input[type='text']");
  inputTextLeft.forEach(function(item){
    item.value = '';
    item.disabled = false;
  });
  let inputTextRight = rightSide.querySelectorAll("input[type='text']");
  inputTextRight.forEach(function(item){
    item.value = '';
    item.disabled = false;
  });

    expensesPlus.disabled = false; 
    expensesPlus.style.display = 'inline-block';
    incomePlus.disabled = false; 
    incomePlus.style.display = 'inline-block';
    depositCheck.disabled = false;
    start.style.display = 'block';
    cancel.style.display = 'none';
    periodSelect.value = '1';
    periodAmount.textContent = '1';

    this.deposit = false;
    this.moneyDeposit = 0;
    this.percentDeposit = 0;        
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.mission = 0;

    for(let key in this.income){ // удаление свойств обьекта
      delete this.income.key; 
    }
    for(let key in this.expenses){ // удаление свойств обьекта
      delete this.expenses.key; 
    }
    
   const _this = this;
   this.addIncome.forEach(function(item){
        delete this.addIncome[item];
   });

   this.AddExpenses.forEach(function(item){
    delete this.AddExpenses[item];
});      
   
    incomeItems = document.querySelectorAll('.income-items');
      for(let i = 1; i <= incomeItems.length - 1; i++){
        incomeItems[i].remove();
      }

    expensesItems = document.querySelectorAll('.expenses-items');
      for(let i = 1; i <= expensesItems.length -1; i++){
        expensesItems[i].remove();
      }   
}
};

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.getReset.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));
periodSelect.addEventListener('input', appData.getPeriodSelect.bind(appData));
});

















 