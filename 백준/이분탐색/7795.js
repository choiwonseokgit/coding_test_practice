const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = parseInt(input[0]);
const arr = input.slice(1);

let answerStr = "";

for (let i = 0; i < testCase; i++) {
  const arrA = arr[3 * i + 1].split(" ").map((el) => parseInt(el, 10));
  const arrB = arr[3 * i + 2].split(" ").map((el) => parseInt(el, 10));
  arrB.sort((a, b) => a - b);
  let cnt = 0;
  arrA.forEach((el) => {
    cnt += binarySearch(arrB, 0, arrB.length - 1, el);
  });
  answerStr += cnt + "\n";
}

console.log(answerStr);

function binarySearch(arr, startIdx, endIdx, compareNum) {
  const midIdx = Math.floor((startIdx + endIdx) / 2);

  if (startIdx > midIdx) return startIdx;

  if (arr[midIdx] < compareNum) {
    return binarySearch(arr, midIdx + 1, endIdx, compareNum);
  }
  if (arr[midIdx] >= compareNum) {
    return binarySearch(arr, startIdx, midIdx - 1, compareNum);
  }
}

// 1 3 6
// 0 1 2 / 0 1 2 3
