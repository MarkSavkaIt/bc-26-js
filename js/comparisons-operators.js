/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом порівнянні буде булеве значення.
 * Строки порівнюються по unicode.
 * При порівнянні строк, строки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 * null не рівний нічому окрім себе та undefined.
 * undefined не рівний нічому окрім себе и null.
 */

/*
 * Приведення різних типів до числа:

 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'ananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або рівно (<=)
// console.log(5 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або рівно (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не строге дорівнює (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == null);

// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строге дорівнює (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не рівно (!=)
// console.log('4' != 4);

//* Строге не рівно (!==)
// console.log('4' !== 4);
