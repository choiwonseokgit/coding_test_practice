const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
const arr = input[1].split(" ").map((el) => +el);

arr.sort((a, b) => a - b);

let start = 1;
let end = Math.max(...arr);
let answer = 0;

function getCutSum(mid) {
  let sum = 0;
  arr.forEach((el) => {
    const cutLen = el - mid;
    if (cutLen > 0) sum += cutLen;
  });
  return sum;
}

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const cutSum = getCutSum(mid);

  //m 보다 클때 -> 자르는 높이 키워야함
  if (cutSum >= m) {
    start = mid + 1;
    answer = mid;
  } else if (cutSum < m) {
    //m 보다 작을때 -> 자르는 높이 줄여야함
    end = mid - 1;
  }
}

console.log(answer);
