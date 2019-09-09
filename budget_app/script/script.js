'use srtict';

let btnCalculate = document.getElementById('start'),
    reset = document.getElementById('censel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelectorAll('#deposit-check'),
    inputAddIncome = document.querySelectorAll('.additional_income-item'),
    incomeItemFirst = inputAddIncome[0],
    incomeItemSecond = inputAddIncome[1],
    
    budgetMonthValue = document.querySelectorAll('.budget_month-value'),
    budgetDayValue = document.querySelectorAll('.budget_day-value'),
    expensesMonthValue = document.querySelectorAll('.expenses_month-value'),
    additionalIncomeValue = document.querySelectorAll('.additional_income-value'),
    additionalExpensesValue = document.querySelectorAll('.additional_expenses-value'),
    incomePeriodValue = document.querySelectorAll('.income_period-value'),
    targetMonthValue = document.querySelectorAll('.target_month-value'),
  
    salaryAmount = document.querySelectorAll('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title'),
    incomeAmount = document.querySelectorAll('.income-amount'),
    expensesTitle = document.querySelectorAll('.expenses-title'),
    expensesAmount = document.querySelectorAll('.expenses-amount'),
    additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),
    depositmount = document.querySelectorAll('.deposit-amount'),
    depositPercent = document.querySelectorAll('.deposit-percent'),
    periodSelect = document.querySelectorAll('.period-select');

console.log(btnCalculate, reset, btnPlus, expensesPlus, depositCheck, inputAddIncome, incomeItemFirst, 
            incomeItemSecond, budgetMonthValue, budgetDayValue, expensesMonthValue, additionalIncomeValue, 
            additionalExpensesValue, incomePeriodValue, targetMonthValue, salaryAmount, incomeTitle, incomeAmount, 
            expensesTitle, expensesAmount, additionalExpensesItem, depositmount, depositPercent, periodSelect);

// let start = function(){
//     let btnCalculate = document.getElementById('start');
//         return btnCalculate; 
// };


//  let getBtnPlus = function(){
//      let btnPlus = document.getElementsByTagName('button'),
//          btnPlusFirst = btnPlus[0],
//          btnPlusSecond = btnPlus[1];
//  };
 

// let getCheckbox = function(){
//     let checkbox = document.querySelectorAll('#deposit-check');
      
//     return checkbox;  
// };


// let getInputAddIncome = function(){
//     let inputAddIncome = document.querySelectorAll('.additional_income-item'),
//         incomeItemFirst = inputAddIncome[0],
//         incomeItemSecond = inputAddIncome[1];
// };


// let getAllBlock = function(){
//     let budgetMonthValue = document.querySelectorAll('.budget_month-value'),
//         budgetDayValue = document.querySelectorAll('.budget_day-value'),
//         expensesMonthValue = document.querySelectorAll('.expenses_month-value'),
//         additionalIncomeValue = document.querySelectorAll('.additional_income-value'),
//         additionalExpensesValue = document.querySelectorAll('.additional_expenses-value'),
//         incomePeriodValue = document.querySelectorAll('.income_period-value'),
//         targetMonthValue = document.querySelectorAll('.target_month-value');
// };


// let getRemainBlock = function(){
//     let  salaryAmount = document.querySelectorAll('.salary-amount'),
//          incomeTitle = document.querySelectorAll('.income-title'),
//          incomeAmount = document.querySelectorAll('.income-amount'),
//          expensesTitle = document.querySelectorAll('.expenses-title'),
//          expensesAmount = document.querySelectorAll('.expenses-amount'),
//          additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),
//          depositmount = document.querySelectorAll('.deposit-amount'),
//          depositPercent = document.querySelectorAll('.deposit-percent'),
//          periodSelect = document.querySelectorAll('.period-select');
// };

// start();
// getBtnPlus();
// getCheckbox();
// getInputAddIncome();
// getAllBlock();
// getRemainBlock();





















 