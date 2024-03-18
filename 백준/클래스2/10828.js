const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const times = parseInt(input[0]);
const orderArr = input.slice(1).map((order) => {
  if (order.slice(0, 4) === "push") return order.split(" ");
  return order;
});

const stack = [];
let answerStr = "";

orderArr.forEach((order) => {
  if (typeof order === "object") {
    const item = parseInt(order[1]);
    stack.push(item);
    return;
  }
  if (order === "pop") {
    const item = stack.pop();
    if (!item) {
      answerStr += "-1\n";
      return;
    }
    answerStr += item + "\n";
    return;
  }
  if (order === "size") {
    answerStr += stack.length + "\n";
    return;
  }
  if (order === "empty") {
    if (stack.length) answerStr += "0";
    else answerStr += "1";
    answerStr += "\n";
    return;
  }
  if (order === "top") {
    const item = stack[stack.length - 1];
    if (!item) {
      answerStr += "-1\n";
      return;
    }
    answerStr += item + "\n";
    return;
  }
});

console.log(answerStr);
