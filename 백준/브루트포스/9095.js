const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);
const targets = input.slice(1);

const arr = [1, 2, 3];
const answers = [];
let cnt = 0;

function DFS(sum, targetNum) {
  if (sum > targetNum) return;

  if (sum === targetNum) cnt += 1;
  else {
    for (let i = 0; i < arr.length; i++) {
      DFS(sum + arr[i], targetNum);
    }
  }
}

for (let i = 0; i < targets.length; i++) {
  DFS(0, targets[i]);
  answers.push(cnt);
  cnt = 0;
}

console.log(answers.join("\n"));
