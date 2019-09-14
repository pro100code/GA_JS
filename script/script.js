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
    expensesTitleBlock = document.querySelectorAll('.expenses-title')[0],
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
    rightSide = document.querySelector('.result'), 
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
           expensesPlus.disabled = true;  
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
          incomePlus.disabled = true;  
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

    incomePlus.disabled = false;
    expensesPlus.disabled = false;
    depositCheck.disabled = false;
    start.style.display = 'block';
    cancel.style.display = 'none';


  
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

















 