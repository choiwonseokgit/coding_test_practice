const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const targetNum = parseInt(input[0].split(" ")[1]);
const cableArr = input.slice(1).map((el) => parseInt(el, 10));
const maxLen = Math.max(...cableArr);

let curLen = 0;

function binarySearch(startLen, endLen) {
  const midLen = Math.floor((startLen + endLen) / 2);

  let cnt = 0;

  cableArr.forEach((cable) => {
    const num = Math.floor(cable / midLen);
    cnt += num;
  });

  if (cnt >= targetNum) {
    curLen = Math.max(curLen, midLen);
    if (startLen >= endLen) return;
    return binarySearch(midLen + 1, endLen);
  }

  return binarySearch(startLen, midLen - 1);
}

binarySearch(1, maxLen);

console.log(curLen);
