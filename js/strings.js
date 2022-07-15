'use strict';
/*
 * Конкатенація строк, шаблонні строки
 */

/*
  ? Запитайте у юзера і'мя з віком та виведіть в консоль повідомлення:
  ? Hello і'мя_юзера, your age is вік_юзера .
*/

// const userName = prompt('Enter name');
// const userAge = prompt('Enter age');

// // console.log('Hello ' + userName + ', your age is ' + userAge);
// console.log(`Hello ${userName}, your age is ${userAge}`);

// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = 'Hello' + ' ' + username + ',' + ' ' + 'your age is' + ' ' + age + '.';

// console.log(message);

//? Виконайте задачу вище, використовуючи шаблонні строки
// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = `Hello ${username}, your age is ${age}`;

// console.log(message);

/*
 * Властивості та Методы строк
 */

//? Запитайте у юзера і'мя та дізнайтеся із сколькох символов, складається і'мя.
// const username = prompt('Your name?');

// console.log(username.length);

//? Попросіть юзера ввести email та переведіть в нижній регістр.
// let userEmail = prompt('Your email?');
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросіть юзера ввести email и переведіть в верхній регістр
// let userEmail = prompt('Your email?');
// userEmail = userEmail.toUpperCase();

// console.log(userEmail);

/*
  ? Існує строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтесь чи є в цій строці мова: 'JavaScript', или 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій знаходиться дана підстрока
*/

// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const resultIncludes = languages.includes('J5S');
// const resultIndexOf = languages.indexOf('J5S');
// console.log(resultIncludes, resultIndexOf);

// let languagesStr = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLowerCase();
// const subStr = 'js';
// const isInclude = languagesStr.includes(subStr.toLowerCase());
// const indexOfSubStr = languagesStr.indexOf(subStr);

// console.log(indexOfSubStr);

//? У нас є строка '24px', дізнайтесь на що закінчується дана строка, на %, rem, em или px;
// const str = '24%';
// const subStr = '%';
// const result = str.endsWith(subStr);

// console.log(result);

// console.log(str.endsWith(subStr));

//? У нас є строка '23,4', замініть кому на крапку
// let str = '23,4';
// str = str.replace(',', '.');
// str = Number.parseFloat(str);

// console.log(str);

/*
  ? У нас є строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть всі вхожденя dog на monkey.
*/
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// str = str.replaceAll('dog', 'monkey');

// console.log(str);

//? У нас є дата в форматі '12:05:21', замініть (:) на (.)
// let someDate = '12:05:21';
// someDate = someDate.replaceAll(':', '.');

// console.log(someDate);

/*
  ? Дана строка 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з ціюї строки окремо і'мя з прізвищем та окремо вік.
*/
const someStr = 'Vasyl Pupkin is 24 years old';
const subStr = '24';

let firstSpacesIndex = someStr.indexOf(' ');
let userName = someStr.slice(0, firstSpacesIndex);

let tempStr = someStr.slice(0, firstSpacesIndex) + someStr.slice(firstSpacesIndex + 1);
let secondSpacesIndex = tempStr.indexOf(' ');
let userSecondName = tempStr.slice(firstSpacesIndex, secondSpacesIndex);

let ageIndex = someStr.indexOf(subStr);
let age = someStr.slice(ageIndex, ageIndex + subStr.length);

console.log(userName, userSecondName, age);

//! slice (звідки -> доки) 
//! звідки -> звідки + довжина шуканої стрічки 

