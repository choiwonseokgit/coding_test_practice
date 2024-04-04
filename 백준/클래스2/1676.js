const fs = require("fs");
const inputNum = +fs.readFileSync("/dev/stdin").toString();

let factorialNum = BigInt(1);
for (let i = BigInt(1); i <= inputNum; i++) {
  factorialNum *= i;
}
const numArr = factorialNum.toString().split("");
const reversedArr = numArr.reverse();

let answer = 0;

function DFS(L, selected) {
  if (selected !== "0") {
    answer = L;
    return;
  }

  DFS(L + 1, reversedArr[L + 1]);
}

DFS(0, reversedArr[0]);

console.log(answer);
