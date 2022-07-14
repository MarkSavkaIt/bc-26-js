'use strict';

/*
 * Математичні оператори (+, -, *, /, %, **)
 */
// const num = 20;
// const num2 = 3;

// const result = num % num2;

// console.log(result);

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

//? Перевірте парність чисел 15, 20, 45, 30.
// const isEven = 30 % 2;

// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі знаходить годин та хвилин.
  ? Результат виведіть в консоль.
*/
// const totalMinutes = 140;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;

// console.log(String(hours).padStart(2, 0), ':', String(minutes).padStart(2, 0));

/*
 * Number.parseInt() Number.parseFloat()
 */
// const num = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number);

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат в консоль.
  ? Приведіть строку до числу.
*/

//? Дана строка '24px', достаньте з цієї строки ціле число.
// const str = Number.parseInt('24px');

// console.log(str);

//? Дана строка '25.5%', достаньте з цієї строки дробне число.
// const str = Number.parseFloat('25.5%');

// console.log(str);

//? Спробуйте привести до числа, дану строку 'abc'.
// const str = Number('abc');

// console.log(str);

//? Запитайте у користувача ввести два числа, сложите их и выведите результат в консоль.

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, використайте різні методи округлення.
  ? Протестируйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

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
// Math.floor(min + Math.random() * (max + 1 - min));
// const randomNumber = Math.random();

// console.log(randomNumber);
//? Згенеруйте рандомне число. Мінімальне і максимальне значення, отримайте від користувача
// const min = 0;
// const max = 10;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
