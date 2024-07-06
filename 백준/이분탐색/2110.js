const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
const arr = input.slice(1).map((el) => +el);

arr.sort((a, b) => a - b);

let left = 1;
let right = arr[arr.length - 1] - arr[0];
let answer;

function countWifi(mid) {
  let prevVal = arr[0];
  let cnt = 1;

  for (let i = 1; i < arr.length; i++) {
    const currDist = arr[i] - prevVal;
    if (currDist >= mid) {
      cnt++;
      prevVal = arr[i];
    }
  }
  return cnt;
}

while (left <= right) {
  const mid = parseInt((left + right) / 2);

  if (countWifi(mid) >= m) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
