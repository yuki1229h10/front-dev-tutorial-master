const arry = new Array(1, 2, 3, 4, 5, 6);
arry[5] = 8;
console.log(arry);

const arry2 = [1, 2, 3, 4, 5, 6, 'str', false];

arry2.push('new item');
arry2.unshift('new item');
const val = arry2.pop();
const val2 = arry2.shift();
console.log(arry2);
console.log(val);
console.log(val2);
