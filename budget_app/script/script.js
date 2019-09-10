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
    
    budgetMonthValue = document.getElementsByClassName('.budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('.budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('.expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('.additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('.income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('.target_month-value')[0],
    
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    // expenses-title
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    // target-amount
    targetAmount = document.querySelector('.target-amount'),

    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    periodSelect = document.querySelector('.period-select');

console.log(btnCalculate, cansel, btnPlus, expensesPlus, depositCheck, inputAddIncome, incomeItemFirst, 
            incomeItemSecond, budgetMonthValue, budgetDayValue, expensesMonthValue, additionalIncomeValue, 
            additionalExpensesValue, incomePeriodValue, targetMonthValue, salaryAmount, incomeTitle, incomeAmount, 
            expensesTitle, expensesAmount, additionalExpensesItem, targetAmount, depositAmount, depositPercent, periodSelect);
 

            





















 