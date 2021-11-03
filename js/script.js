// Task #1
const arr = [`a`, `b`, `c`, `d`];
const arr2 = arr.splice(2).join(`+`);
const arr1 = arr.splice(0).join(`+`);
const result = arr1 + `,` + arr2;

console.log(result);

// Task #2
const secondArr = [2, 5, 3, 9];
const result2 = secondArr[0] * secondArr[1] + secondArr[2] * secondArr[3];
console.log(result2);

// Task #3
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const result3 = arr3[1].find(item => item === 4);
console.log(result3);

// Task #4
 const arr4 = {
     js: [`jQuery`, `Angular`],
     php: `hello`,
     css: `world`,
}
console.log(arr4.js[0]);

 // Task #5
const arr5 = [];
let str = ``;
for (let i = 0; i < 10; i++) {
    str += `x`;
    arr5.push(str);
}
console.log(arr5);

// Task #6
const arr6 = [];
for (let i = 1; i < 10; i++) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += i;
    }
    arr6.push(str);
}
console.log(arr6);


// Task #7
function arrayFill(value, length) {
    const arr7 = [];
    for (let i = 0; i < length; i++) {
        arr7.push(value);
    }
    return arr7;
}
console.log(arrayFill(`x`, 5));


// Task #8
const arr8 = [2, 1, 7, 1];
let sum = 0;

for (let i = 0; i < arr8.length; i++) {
    sum += arr8[i];

    if (sum > 10) {
        console.log('Нужно сложить' + ` ` + (i) + ` ` + `элемента`);
    }
}


// Task #9
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
arr9.sort((a,b) => b - a);
console.log(arr9);


// Task #10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum10 = 0;
for (let i = 0; i < arr10.length; i++) {

    for (let j = 0; j < arr10[i].length; j++) {
        sum10 += arr10[j][i];
    }
}
console.log(sum10);

//Task #11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum11 = 0;
for (let i = 0; i < arr11.length; i++) {
    for (let j = 0; j < arr11[i].length; j++) {
        for (let q = 0; q < arr11[i][j].length; q++) {
            sum11 += arr11[i][j][q];
        }
    }
}
console.log(sum11);


















