const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = BigInt(input[0]);
const arr = input.slice(1).map((el) => BigInt(el));

const map = new Map();

arr.forEach((el) => map.set(el, (map.get(el) || 0n) + 1n));

const mapToArr = Array.from(map);

let answer = mapToArr[0][0];
let maxCnt = mapToArr[0][1];

for (let i = 1; i < mapToArr.length; i++) {
  const key = mapToArr[i][0];
  const cnt = mapToArr[i][1];

  if (cnt > maxCnt) {
    maxCnt = cnt;
    answer = key;
  } else if (cnt === maxCnt) {
    if (key < answer) answer = key;
  }
}

console.log(answer.toString());
