const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input
  .slice(1)
  .map((el) => parseInt(el, 10))
  .sort((a, b) => a - b);

console.log(numbers.join("\n"));
