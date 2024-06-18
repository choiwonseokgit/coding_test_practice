const fs = require("fs");
const [w, m, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

// 2w 1m -> 1팀

let leftMan = m;
let leftWoman = w;
let teamCnt = 0;

while (leftMan >= 1 && leftWoman >= 2 && leftMan + leftWoman >= 3 + k) {
  leftMan -= 1;
  leftWoman -= 2;
  teamCnt++;
}

console.log(teamCnt);
