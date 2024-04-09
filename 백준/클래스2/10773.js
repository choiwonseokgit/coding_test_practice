const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);
const arr = input.slice(1);

const stack = [];

arr.forEach((el) => {
  if (el === 0) return stack.pop();
  return stack.push(el);
});

console.log(stack.reduce((acc, el) => acc + el, 0));
