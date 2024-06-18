const fs = require("fs");
const [num, squareNum] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const answerMap = new Map();

function getNum(num) {
  if (answerMap.get(num) >= 2) return;
  answerMap.set(num, (answerMap.get(num) || 0) + 1);
  const nextNum = num
    .toString()
    .split("")
    .map((el) => +el)
    .reduce((acc, el) => acc + el ** squareNum, 0);
  getNum(nextNum);
}

getNum(num);

const answer = Array.from(answerMap).filter((el) => el[1] === 1);

console.log(answer.length);

// 좋은 풀이
// const [A, P] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
// const arr = [A];
// while (true) {
//     const curNum = String(arr[arr.length-1]);
//     const nextNum = curNum.split("").reduce((acc, v) => acc + Number(v)**P, 0);
//     if (arr.includes(nextNum)) {
//         console.log(arr.indexOf(nextNum));
//         break;
//     }
//     arr.push(nextNum);
// }
