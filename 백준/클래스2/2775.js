const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = +input[0];
const testArr = input.slice(1).map((el) => +el);

let answerStr = "";

const arr = new Array(15).fill().map((_, i) => {
  if (i === 0) return new Array(15).fill().map((_, i) => i);
  return new Array(15).fill(0);
});

for (let i = 1; i < 15; i++) {
  for (let j = 1; j < 15; j++) {
    arr[i][j] = arr[i - 1].slice(0, j + 1).reduce((acc, el) => acc + el, 0);
  }
}

for (let i = 0; i < testCase; i++) {
  const row = testArr[i * 2];
  const col = testArr[i * 2 + 1];
  answerStr += arr[row][col] + "\n";
}

console.log(answerStr);

//1층 3호

// 3층     1명 5명 15명
// 2층     1명 4명 10명
// 1층     1명 3명 6명
// 0층     1명 2명 3명
//     0호 1호 2호 3호
