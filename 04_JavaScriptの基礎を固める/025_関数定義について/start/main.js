const hello = function (name, age) {
  // let name = 'World';
  console.log('hello ' + name + age);
  return name + age;
}

hello('World', 10);
const returnVal = hello('Japan', 20);
console.log(returnVal);
