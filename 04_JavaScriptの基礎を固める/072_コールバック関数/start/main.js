// コールバック関数をうまく使うことで同じ関数でも処理結果を変えることができる
function hello(callback) {
  console.log(callback);
  console.log('hello ' + callback());
}

function getName() {
  return 'Neo';
}

function getFirstName() {
  return 'Akira';
}

hello(getFirstName);



function hi(callback, lastname) {
  console.log(callback);
  console.log('hi ' + callback(lastname));
}

function getName_2() {
  return 'Sakamoto';
}

const getFirstName_2 = function () {
  return 'Ryoma';
}

hi(function (name) {
  return 'Ryoma' + name;
}, 'Sakamoto');

hi(() => 'Ryoma');

// const getFirstName_2 = function (name) {
//   return 'Ryoma' + name;
// }

// hi(getFirstName_2, 'Sakamoto');



function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 2, plus);
