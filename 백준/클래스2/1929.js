const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const [n, m] = input;
const arr = [];

for (let i = n; i <= m; i++) {
  arr.push(i);
}

answerStr = "";

arr.forEach((el) => {
  if (el === 1) return;

  let cnt = 0;

  for (let i = 2; i <= Math.sqrt(el); i++) {
    console.log(el, i);

    if (el % i === 0) {
      cnt += 1;
      break;
    }
  }

  if (cnt === 0) answerStr += el + "\n";
});

console.log(answerStr);
