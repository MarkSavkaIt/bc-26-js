'use strict';
/*
 * Логічні оператори (&& || !)
 */

//* && - перше false або останнє true
//* Якщо всі операнди були істинні то повернеться останній
//* Якщо результат false, зупиняється та повертає значення цього операнда.
// const result = 4 && 0 && 'Hello!';

// console.log(result);

//* || - перше true або останнє false
//* Повертає первое істинне значення або останнє, якщо таке значення не знайдено.

// const username = prompt('Your name?').trim() || 'Anonymus';

// console.log(`Hello ${username}`);

//* ! - інвертиртує правду в брехню, а брехню в правду

// console.log(!1);

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Приведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
