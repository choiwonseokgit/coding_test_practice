const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((el) => +el);

arr.sort((a, b) => b - a);

const sum = arr.reduce((acc, el) => acc + el, 0);

const answer = sum % 3 === 0 && arr.includes(0) ? arr.join("") : -1;

console.log(answer);
