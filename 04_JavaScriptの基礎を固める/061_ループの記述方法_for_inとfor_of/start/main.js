const arry = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arry.length; i++) {
    console.log(i);
}

for (let j in arry) {
    console.log(j);
}

// 値
for (let v of arry) {
    console.log(v);
}

// 添字
for (let i in arry) {
    let v = arry[i];
    console.log(v);
}
