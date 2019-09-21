document.addEventListener('DOMContentLoaded', function () { 

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
    rightSide = document.querySelector('.result'),

    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
    
const AppData = function () {   // создали прототип
  this.income = {};
  this.incomeMonth = 0;           
  this.addIncome = [];         
  this.AddExpenses = [];     
  this.deposit = false;
  this.moneyDeposit = 0;
  this.percentDeposit = 0;
  this.expenses = {};         
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.mission = 0;
};

AppData.prototype.start = function () {
  if (isNaN(salaryAmount.value) || salaryAmount.value.trim() === '') {
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
    this.getInfoDeposit();

    this.getDepositCheck();

    this.getBudget();
    this.getTargetMonth();
    this.getStartNone();
    this.showResult();  
};

AppData.prototype.showResult = function () {
  const _this = this;  
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.AddExpenses.join(','); // разбить массив на строки 
  additionalIncomeValue.value = this.addIncome.join(',');
  targetMonthValue.value = Math.floor(this.getTargetMonth());
  incomePeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('input', this.getPeriodSelectValue.bind(this));  
},

AppData.prototype.addExpensesBlock = function () { 
  let cloneExpensesItems = expensesItems[0].cloneNode(true),                       
      cloneExpensesTitle = cloneExpensesItems.querySelector('.expenses-title'),
      cloneExpensesAmount = cloneExpensesItems.querySelector('.expenses-amount');
      cloneExpensesTitle.value = '';
      cloneExpensesAmount.value = '';
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);  
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
         expensesPlus.style.display = 'none';                               
      }
};

AppData.prototype.getExpenses = function () {
  const  _this = this;
    expensesItems.forEach(function(item){ // перебор элементов expensesItems
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
              _this.expenses[itemExpenses] = +cashExpenses;
            }
    });
};

AppData.prototype.getAddExpenses = function () {
  let addExpenses = additionalExpensesItem.value.split(',');
  const  _this = this;
      addExpenses.forEach(function(item){
        item = item.trim(); // метод уберает пробелы вначале и в конце
        if (item !== ''){
          _this.AddExpenses.push(item);
        }
      }); 
};

AppData.prototype.getExpensesMonth = function () {
  const  _this = this;
    for(let key in _this.expenses){ 
      _this.expensesMonth += +_this.expenses[key];
    } 
};

AppData.prototype.addIncomeBlock = function () { 
  let cloneIncomeItems = incomeItems[0].cloneNode(true),
      cloneIncomeTitle = cloneIncomeItems.querySelector('.income-title'),
			cloneIncomeAmount = cloneIncomeItems.querySelector('.income-amount');
			cloneIncomeTitle.value = '';
			cloneIncomeAmount.value = '';                         
      incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);  
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){ 
         incomePlus.style.display = 'none';                                       
      }   
};

AppData.prototype.getIncome = function () {
  const  _this = this;
  incomeItems.forEach(function(item){   
    let itemIcom = item.querySelector('.income-title').value,
        cashIcom = item.querySelector('.income-amount').value;
        if(itemIcom !== '' && cashIcom !== ''){
          _this.income[itemIcom] = +cashIcom;
        }
});    
};

AppData.prototype.getaddIncome = function () {
  const  _this = this;
  additionalIncomeItems.forEach(function(item){
    let itemValue = item.value.trim();
      if (itemValue !== ''){
        _this.addIncome.push(itemValue);
      }
    });
};

AppData.prototype.getIncomeMonth = function () {
  const  _this = this;
  for(let key in this.income){ 
    _this.incomeMonth += +_this.income[key];
  }
};

AppData.prototype.getInfoDeposit = function () {
if (this.deposit){
  this.moneyDeposit = depositAmount.value;
  this.percentDeposit = depositPercent.value;
}
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12);
  this.budgetDay = Math.floor(this.budgetMonth / 30); 
};

AppData.prototype.getTargetMonth = function () {
  this.mission = +targetAmount.value; 
  return this.mission / this.budgetMonth;
};

AppData.prototype.calcPeriod = function () {
  return Math.ceil(this.budgetMonth * periodSelect.value);
};

AppData.prototype.getPeriodSelect = function () {
  periodAmount.textContent = periodSelect.value;
};

AppData.prototype.getPeriodSelectValue = function () {
  periodAmount.textContent = periodSelect.value;
  incomePeriodValue.value = this.calcPeriod();
};

AppData.prototype.getStartNone = function () {    
  let inputTextLeft = leftSide.querySelectorAll("input[type='text']");
  inputTextLeft.forEach(function(item) {
    item.setAttribute('disabled', '');
  });
  incomePlus.disabled = true;
  expensesPlus.disabled = true;
  depositCheck.disabled = true;
  start.style.display = 'none';
  cancel.style.display = 'block';
};

AppData.prototype.getDepositCheck = function () {
  if(depositCheck.checked){   // если галочка в депозите есть, то... ( === true писать не обязательно)
    depositBank.style.display = 'inline-block';
    depositAmount.style.display = 'inline-block';
    this.deposit = 'true';
    depositBank.addEventListener('change', function(){
      let selectIndex = this.options[this.selectedIndex].value; // обращение к элементу по его индексу
       if (selectIndex === 'other') {
         depositPercent.style.display = 'inline-block';
         depositPercent.disabled = false;
         depositPercent.value = '';
         // console.log(this.options);      получили все option и в конце индекс нащего выбранного банка
       } else {
         depositPercent.style.display = 'none';
         depositPercent.value = selectIndex;
       }
     });

 } else {
   depositBank.style.display = 'none';
   depositAmount.style.display = 'none';
   depositAmount.value = '';
   this.deposit = 'false';
 }
};

AppData.prototype.getReset = function () {
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
    depositCheck.checked=false;
    depositBank.style.display = 'none';
    depositBank.options.selectedIndex = 0;  // депозит начальный сделали 0
    depositAmount.style.display = 'none';
    depositAmount.value = '';
    depositPercent.value = '';
    start.style.display = 'block';
    cancel.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = '1';

    this.deposit = false;
    this.moneyDeposit = 0;
    this.percentDeposit = 0;        
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.mission = 0;
    this.incomeMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.AddExpenses = [];
    this.expenses = {};

    incomeItems = document.querySelectorAll('.income-items');
      for(let i = 1; i <= incomeItems.length - 1; i++){
        incomeItems[i].remove();
      }

    expensesItems = document.querySelectorAll('.expenses-items');
      for(let i = 1; i <= expensesItems.length -1; i++){
        expensesItems[i].remove();
      }   
};

AppData.prototype.eventListeners = function () { // привязка с глобального this к нашему прототипу
  start.addEventListener('click', this.start.bind(this));
  cancel.addEventListener('click', this.getReset.bind(this));
  expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
  incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
  periodSelect.addEventListener('input', this.getPeriodSelect.bind(this));
  depositCheck.addEventListener('change', this.getDepositCheck.bind(this));
};

const appData = new AppData();  // обозначили переменную прототипа
appData.eventListeners();



// depositCheck.addEventListener('change', function(){
//   if(depositCheck.checked){   // если галочка в депозите есть, то... ( === true писать не обязательно)
//      depositBank.style.display = 'inline-block';
//      depositAmount.style.display = 'inline-block';
//      appData.deposit = 'true';
//      depositBank.addEventListener('change', function(){
//        let selectIndex = this.options[this.selectedIndex].value; // обращение к элементу по его индексу
//         if (selectIndex === 'other') {
//           depositPercent.style.display = 'inline-block';
//           depositPercent.disabled = false;
//           depositPercent.value = '';
//           // console.log(this.options);      получили все option и в конце индекс нащего выбранного банка
//         } else {
//           depositPercent.style.display = 'none';
//           depositPercent.value = selectIndex;
//         }
//       });

//   } else {
//     depositBank.style.display = 'none';
//     depositAmount.style.display = 'none';
//     depositAmount.value = '';
//     appData.deposit = 'false';
//   }
// });

});

















 