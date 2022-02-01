"use strict"
// Измените пример с занятия по замыканию (counter) так, чтобы при каждом вызове значение счетчика менялось не на 1, а на переданное пользователем число (передать его при вызове внешней функции customCounter).

// function customValue(){
//   return +prompt("Введите шаг");
// }

// function customCounter1(value) {
//   let i = 0;
//   const num = value;
//   return function () {
//     return i += num;
//   };
// }

// const myCounter = customCounter1(customValue());

// console.log('myCounter() :>> ', myCounter());
// console.log('myCounter() :>> ', myCounter());
// console.log('myCounter() :>> ', myCounter());
// console.log('myCounter() :>> ', myCounter());

/*************************************************/

// Или:

// * Измените пример с занятия по замыканию (counter) так, чтобы пользователь задавал
// начальное значение счетчика (в примере с занятия это 0)
// и
// шаг изменения счетчика (в примере с занятия это 1).

function customValue1(){
  return +prompt("начальное значение счетчика");
}
function customValue2(){
  return +prompt("шаг изменения счетчика");
}

function customCounter2(start, step) {
  const num = step;
  return function () {
    return start += num;
  };
}

const myCounter = customCounter2(customValue1(), customValue2());

console.log('myCounter() :>> ', myCounter());
console.log('myCounter() :>> ', myCounter());
console.log('myCounter() :>> ', myCounter());
console.log('myCounter() :>> ', myCounter());

// Пример использования:
// const myCounter = customCounter2(1, 5);
// const result1 = myCounter();  // => 6
// const result2 = myCounter();  // => 11
// const result3 = myCounter();  // => 16

// В ОТЛАДЧИКЕ отследить переменные, которые находятся в ЗАМЫКАНИИ.