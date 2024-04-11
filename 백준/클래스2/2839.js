const fs = require("fs");
const sugarWeight = +fs.readFileSync("/dev/stdin").toString();

// tow pointer
// 9 =  5*1 + 3*1
//      5*1 + 3*2 break
//   =  5*0 + 3*3

let startNum = Math.floor(sugarWeight / 5);

const answerArr = [];

for (let i = startNum; i >= 0; i--) {
  for (let j = 0; ; j++) {
    const bags = 5 * i + 3 * j;
    if (bags > sugarWeight) break;
    if (bags === sugarWeight) answerArr.push(i + j);
  }
}

const answer = answerArr.length ? Math.min(...answerArr) : -1;

console.log(answer);
