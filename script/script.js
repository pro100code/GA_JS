'use strict';

// 1)-Следующим переменным присвоить значения
let money = 5000,                                     
income = 'фриланс', 
addExpenses = 'еда, проезд, комуналка',
deposit = true, 
mission = 100000, 
period = 12;

// 2) -Вывести в консоль тип данных значений переменных money, income, deposit
console.log(typeof money);                  
console.log(typeof income);
console.log(typeof deposit);

// 2) -Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) долларов
console.log('Цель заработать', mission, 'долларов'); 
console.log('Период', period, 'месяцев');

// 2) -Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(','));

// 2)-Объявить переменную budgetDay и присвоить дневной бюджет(доход за месяц / 30), вывести в консоль и остаток от деления
let budgetDay = money / 30;                                        //дневной бюджет
console.log('Дневной бюджет: ', budgetDay);
console.log('Остаток от деления дневного бюджета: ', (budgetDay % 30));   //остаток от деления
