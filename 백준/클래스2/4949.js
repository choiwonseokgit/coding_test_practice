const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(".\n");

let answerStr = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;

  const str = input[i];
  const stack = [];
  let isStack = true;

  for (let i = 0; i < str.length; i++) {
    if (str === " ") break;

    if (str[i] === "(") stack.push("(");
    if (str[i] === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        isStack = false;
        break;
      }
      stack.pop();
    }

    if (str[i] === "[") stack.push("[");
    if (str[i] === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        isStack = false;
        break;
      }
      stack.pop();
    }
  }

  if (isStack && stack.length === 0) answerStr += "yes\n";
  else answerStr += "no\n";
}

console.log(answerStr);
