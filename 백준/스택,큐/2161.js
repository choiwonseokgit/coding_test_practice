/* 
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString()

const length = parseInt(input)

const arr = new Array(length).fill().map((_, i) => i+1);
const thrownArr = [];

function change(arr) {
    const top = arr[0];
    thrownArr.push(top);
    arr.splice(0, 1);
    const newTop = arr[0];
    arr.splice(0 , 1);
    arr.push(newTop);
}

for(let i=0; i<length-1; i++) {
    change(arr);    
}

let resultStr = ''
const newArr = [...thrownArr, ...arr];

newArr.map((el) => resultStr += (el.toString() + ' '));
console.log(resultStr)
*/
