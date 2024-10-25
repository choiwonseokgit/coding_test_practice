const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("");

const stack = [];

const [left, right] = ["(", ")"];
let answer = 0;
let prev = null;

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (item === left) {
    stack.push(item);
  } else if (item === right) {
    stack.pop();
    if (prev === left) {
      //레이저 일때
      answer += stack.length;
    } else {
      //레이저가 아닐 때
      answer += 1;
    }
  }
  prev = item;
}

console.log(answer);
