'use srtict';

let btnCalculate = document.getElementById('start'),
    cansel = document.getElementById('cansel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    inputAddIncome = document.querySelectorAll('.additional_income-item'),
    incomeItemFirst = inputAddIncome[0],
    incomeItemSecond = inputAddIncome[1],
    
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title')[1],
    incomeAmount = document.querySelector('.income-amount'),
    
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    
    targetAmount = document.querySelector('.target-amount'),

    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    periodSelect = document.querySelector('.period-select');

     
  
  console.log(btnCalculate, cansel, btnPlus, expensesPlus, depositCheck, inputAddIncome, incomeItemFirst, 
            incomeItemSecond, budgetMonthValue, budgetDayValue, expensesMonthValue, additionalIncomeValue, 
            additionalExpensesValue, incomePeriodValue, targetMonthValue, salaryAmount, incomeTitle, incomeAmount, 
            expensesTitle, expensesAmount, additionalExpensesItem, targetAmount, depositAmount, depositPercent, periodSelect);
 

            





















 