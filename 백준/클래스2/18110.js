const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const allCase = +input[0];

if (allCase === 0) return console.log(0);

const arr = input.slice(1).map((el) => +el);

const excludeNum = Math.round(allCase * 0.15);

arr.sort((a, b) => a - b);

const slicedArr = arr.slice(excludeNum, allCase - excludeNum);

const answer = Math.round(
  slicedArr.reduce((acc, el) => acc + el, 0) / slicedArr.length
);

console.log(answer);
