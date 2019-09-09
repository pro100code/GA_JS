'use srtict';

let start = function(){
    let btnCalculate = document.getElementById('start');

        console.log(btnCalculate);
        return btnCalculate; 
};


 let getBtnPlus = function(){
     let btnPlus = document.getElementsByTagName('button'),
         btnPlusFirst = btnPlus[0],
         btnPlusSecond = btnPlus[1];

         console.log(btnPlusFirst);
         console.log(btnPlusSecond);

 };
 

let getCheckbox = function(){
    let checkbox = document.querySelectorAll('#deposit-check');
      console.log(checkbox);
    return checkbox;  
};


let getInputAddIncome = function(){
    let inputAddIncome = document.querySelectorAll('.additional_income-item'),
        incomeItemFirst = inputAddIncome[0],
        incomeItemSecond = inputAddIncome[1];

        console.log(incomeItemFirst);
        console.log(incomeItemSecond);
};


let getAllBlock = function(){
    let budgetMonthValue = document.querySelectorAll('.budget_month-value'),
        budgetDayValue = document.querySelectorAll('.budget_day-value'),
        expensesMonthValue = document.querySelectorAll('.expenses_month-value'),
        additionalIncomeValue = document.querySelectorAll('.additional_income-value'),
        additionalExpensesValue = document.querySelectorAll('.additional_expenses-value'),
        incomePeriodValue = document.querySelectorAll('.income_period-value'),
        targetMonthValue = document.querySelectorAll('.target_month-value');
        
        console.log(budgetMonthValue);
        console.log(budgetDayValue);
        console.log(expensesMonthValue);
        console.log(additionalIncomeValue);
        console.log( additionalExpensesValue);
        console.log(incomePeriodValue);
        console.log(targetMonthValue);
};


let getRemainBlock = function(){
    let  salaryAmount = document.querySelectorAll('.salary-amount'),
         incomeTitle = document.querySelectorAll('.income-title'),
         incomeAmount = document.querySelectorAll('.income-amount'),
         expensesTitle = document.querySelectorAll('.expenses-title'),
         expensesAmount = document.querySelectorAll('.expenses-amount'),
         additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),
         depositmount = document.querySelectorAll('.deposit-amount'),
         depositPercent = document.querySelectorAll('.deposit-percent'),
         periodSelect = document.querySelectorAll('.period-select');


         console.log(salaryAmount);
         console.log(incomeTitle);
         console.log(incomeAmount);
         console.log(expensesTitle);
         console.log(expensesAmount);
         console.log(additionalExpensesItem);
         console.log(depositPercent);
         console.log(periodSelect);
};

start();
getBtnPlus();
getCheckbox();
getInputAddIncome();
getAllBlock();
getRemainBlock();





















 