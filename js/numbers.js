'use strict';

/*
 * Математичні оператори (+, -, *, /, %, **)
 * % - остача від ділення
 * ** - підняття в степінь
 */
// const num1 = 10;
// const num2 = 3;

// const result = num1 ** num2;

// console.log(result);

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

//? Перевірте парність чисел 15, 20, 45, 30.
// const isEven = 99.9 % 2;

// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі знаходить годин та хвилин.
  ? Результат виведіть в консоль.
*/

// всі хвилини, і віднімаємо останчу
// const allTime = 190;
// const hours = (allTime - (allTime % 60)) / 60;
// const minutes = allTime - hours * 60;
// const minutes = allTime % 60;
// // 10 % 3 = 3 (1)

// console.log(hours, minutes);

// console.log(String(hours).padStart(2, 0), ':', String(minutes).padStart(2, 0));

/*
 * Number.parseInt() Number.parseFloat()
 */

// const userAge = prompt('Введіть свій вік');
// console.log(typeof userAge);

// const num1 = Number.parseInt(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const num1 = Number(prompt('Введите первое число'));
// const num2 = Number.parseFloat(prompt('Введите второе число'));

// const result = num1 * num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number);

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат в консоль.
  ? Приведіть строку до числa.
*/

// const userNumber = prompt('Введіть число');
// console.log(userNumber);
// console.log(Number(userNumber));

//? Дана строка '24px', достаньте з цієї строки ціле число.

// let str = '24px';
// const parsedInt = Number.parseInt(str);
// console.log(parsedInt);
// console.log(str);

//? Дана строка '25.5%', достаньте з цієї строки дробне число.

// const num = '25.5%';
// const int = Number.parseFloat(num);

// console.log(int);
// console.log(str);

//? Спробуйте привести до числа, дану строку 'abc'.
// const str = Number('abc');

// console.log(str);

//? Запитайте у користувача ввести два числа, сложите их и выведите результат в консоль.

// const num1 = Number(prompt('Введи перше число'));
// const num2 = Number(prompt('Введи друге число'));

// console.log(num1 * num2);

/*
  * Math.floor, Math.ceil, Math.round,  
* floor - в меншу сторону
* ceil - в більшу сторону
* round - заокруглює правильно
! Math.max(), Math.min(), Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, використайте різні методи округлення.
  ? Протестируйте на числах, 23.3, 23.9
*/
// const number = 23.5;
// const result = Math.ceil(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та степень.
  ? Підніміть число в степень та виведіть результат в консоль.
*/

// const number = Number(prompt('Ваше число'));
// const pow = Number(prompt('Введите степень'));

// const result = Math.pow(number, pow);

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
  ? від 10 до 50.
*/

const randomNumber = Math.floor(Math.random() * 41) + 10;
console.log(randomNumber);

//? Згенеруйте рандомне число. Мінімальне і максимальне значення, отримайте від користувача
// const min = 0;
// const max = 10;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
