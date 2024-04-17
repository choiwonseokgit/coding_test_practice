const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const permutation = input.slice(1).map((el) => +el);
const len = +input[0];
const stack = [];

let i = 0;
let j = 1;

const answer = [];
let answerStr = "";
// 1 2 5 4 3


// i 
// 1 
// stack [2]
while (i < len) {
  if (j > len + 1) break;

  const popNum = stack[stack.length - 1];

  if (popNum === permutation[i]) {
    answer.push(stack.pop());
    answerStr += "-\n";
    i++;
  } else {
    stack.push(j++);
    answerStr += "+\n";
  }
}

const isRight = answer.join("") === permutation.join("");

console.log(isRight ? answerStr : "NO");
