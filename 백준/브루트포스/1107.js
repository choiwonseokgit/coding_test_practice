const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const targetNum = +input[0];
const excludeBtnsLen = +input[1];
const excludeBtns = excludeBtnsLen ? input[2].split(" ") : [];

//console.log(targetNum,excludeBtnsLen, excludeBtns)

//case1 -> 100에서 부터 계산
const case1 = Math.abs(targetNum - 100);

let answer = case1;

//case2 -> excludeBtns가 없을때
if (!excludeBtns.length) {
  console.log(Math.min(answer, targetNum.toString().length));
  return;
}

//case3 -> 모든 case 계산 0부터 ~ 500,000
for (let i = 0; i <= 999999; i++) {
  const numToStr = String(i);
  let isPossible = true;

  excludeBtns.forEach((btn) => {
    if (numToStr.includes(btn)) {
      ///console.log(numToStr)
      isPossible = false;
    }
  });

  if (!isPossible) continue;

  const case2 = Math.abs(targetNum - i);
  answer = Math.min(answer, case2 + numToStr.length);
}

console.log(answer);
