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
    depositPercent = document.querySelector('.deposit-percent'),


    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount');

  class AppData {
    constructor() {
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
    }

    start() {
      if (isNaN(salaryAmount.value) || salaryAmount.value.trim() === '') {
        alert(' Не верно заполнено поле "Месячный доход!"');
        return;
      }
      this.budget = +salaryAmount.value;

      this.getExpenses();
      this.getExpensesMonth();
      this.getAddIncomeExpenses(additionalExpensesItem);
      this.getIncome();
      this.getIncomeMonth();
      this.getAddIncomeExpenses(additionalIncomeItems);
      this.getInfoDeposit();
      this.getDepositCheck();
      this.getBudget();
      this.getTargetMonth();
      this.getStartNone();
      this.showResult();
    }

    showResult() {
      const _this = this;
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.AddExpenses.join(','); // разбить массив на строки 
      additionalIncomeValue.value = this.addIncome.join(',');
      targetMonthValue.value = Math.floor(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriod();
      periodSelect.addEventListener('input', this.getPeriodSelectValue.bind(this));
    }

    getAddBlockPlus(blockItems, title, amount, items, allBtnPlus) {
      let cloneBlockItems = blockItems[0].cloneNode(true),
        cloneTitle = cloneBlockItems.querySelector(title),
        cloneAmount = cloneBlockItems.querySelector(amount);
      cloneTitle.value = '';
      cloneAmount.value = '';
      blockItems[0].parentNode.insertBefore(cloneBlockItems, allBtnPlus);
      blockItems = document.querySelectorAll(items);
      if (blockItems.length === 3) {
        allBtnPlus.style.display = 'none';
      }
      return blockItems;
    }

    getExpenses() {
      const _this = this;
      expensesItems.forEach(function (item) { // перебор элементов expensesItems
        let itemExpenses = item.querySelector('.expenses-title').value,
          cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          _this.expenses[itemExpenses] = +cashExpenses;
        }
      });
    }

    getAddIncomeExpenses (addItems) {
      const _this = this;
      if (addItems[0] === undefined) {
        let addExpenses = addItems.value.split(',');
        addExpenses.forEach(function (item) {
          item = item.trim(); // метод уберает пробелы вначале и в конце
          if (item !== '') {
            _this.AddExpenses.push(item);
          }
        });
      } else {
        additionalIncomeItems.forEach(function (item) {
          let itemValue = item.value.trim();
          if (itemValue !== '') {
            _this.addIncome.push(itemValue);
          }
        });
      }
    }

    getExpensesMonth () {
      const _this = this;
      for (let key in _this.expenses) {
        _this.expensesMonth += +_this.expenses[key];
      }
    }

    getIncome () {
      const _this = this;
      incomeItems.forEach(function (item) {
        let itemIcom = item.querySelector('.income-title').value,
          cashIcom = item.querySelector('.income-amount').value;
        if (itemIcom !== '' && cashIcom !== '') {
          _this.income[itemIcom] = +cashIcom;
        }
      });
    }

    getIncomeMonth() {
      const _this = this;
      for (let key in this.income) {
        _this.incomeMonth += +_this.income[key];
      }
    }

    getInfoDeposit() {
      if (this.deposit) {
        this.moneyDeposit = depositAmount.value;
        this.percentDeposit = depositPercent.value;
      }
    }

    getBudget() {
      this.budgetMonth = Math.floor(this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12);
      this.budgetDay = Math.floor(this.budgetMonth / 30);
    }

    getTargetMonth() {
      this.mission = +targetAmount.value;
      return this.mission / this.budgetMonth;
    }

    calcPeriod = function () {
      return Math.ceil(this.budgetMonth * periodSelect.value);
    }

    getPeriodSelect() {
      periodAmount.textContent = periodSelect.value;
    }

    getPeriodSelectValue() {
      periodAmount.textContent = periodSelect.value;
      incomePeriodValue.value = this.calcPeriod();
    }

    getStartNone() {
      let inputTextLeft = leftSide.querySelectorAll("input[type='text']");
      inputTextLeft.forEach(function (item) {
        item.setAttribute('disabled', '');
      });
      incomePlus.disabled = true;
      expensesPlus.disabled = true;
      depositCheck.disabled = true;
      start.style.display = 'none';
      cancel.style.display = 'block';
    }

    getDepositCheck() {
      if (depositCheck.checked) { // если галочка в депозите есть, то... ( === true писать не обязательно)
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = 'true';
        depositBank.addEventListener('change', function () {
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
    }

    getReset() {
      let inputTextLeft = leftSide.querySelectorAll("input[type='text']");
      inputTextLeft.forEach(function (item) {
        item.value = '';
        item.disabled = false;
      });
      let inputTextRight = rightSide.querySelectorAll("input[type='text']");
      inputTextRight.forEach(function (item) {
        item.value = '';
        item.disabled = false;
      });

      expensesPlus.disabled = false;
      expensesPlus.style.display = 'inline-block';
      incomePlus.disabled = false;
      incomePlus.style.display = 'inline-block';
      depositCheck.disabled = false;
      depositCheck.checked = false;
      depositBank.style.display = 'none';
      depositBank.options.selectedIndex = 0;
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
      for (let i = 1; i <= incomeItems.length - 1; i++) {
        incomeItems[i].remove();
      }

      expensesItems = document.querySelectorAll('.expenses-items');
      for (let i = 1; i <= expensesItems.length - 1; i++) {
        expensesItems[i].remove();
      }
    }

    eventListeners() { // привязка с глобального this к нашему прототипу
      let newBlock = this.getAddBlockPlus.bind(this);

      start.addEventListener('click', this.start.bind(this));
      cancel.addEventListener('click', this.getReset.bind(this));
      incomePlus.addEventListener('click', function () {
        incomeItems = newBlock(incomeItems, '.income-title', '.income-amount', '.income-items', incomePlus);
      });
      expensesPlus.addEventListener('click', function () {
        expensesItems = newBlock(expensesItems, '.expenses-title', '.expenses-amount', '.expenses-items', expensesPlus);
      });
      periodSelect.addEventListener('input', this.getPeriodSelect.bind(this));
      depositCheck.addEventListener('change', this.getDepositCheck.bind(this));
    }
  }

  const appData = new AppData();
  appData.eventListeners();

});