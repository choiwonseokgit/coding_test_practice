const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = input[0];
const arr = input.slice(1).map((el) => +el);
const sortedArr = [...arr].sort((a, b) => a - b);

const averageNum = arr.reduce((acc, el) => acc + el, 0) / len;

const average =
  averageNum > 0 ? parseInt(averageNum + 0.5) : parseInt(averageNum - 0.5);
const midNum = sortedArr[Math.floor(arr.length / 2)];
const range = Math.max(...arr) - Math.min(...arr);

const map = new Map();
arr.forEach((el) => map.set(el, (map.get(el) || 0) + 1));

const mapArr = Array.from(map);
mapArr.sort((a, b) => b[1] - a[1]);
const maxCnt = mapArr[0][1];
const maxCntArr = mapArr.filter((el) => el[1] === maxCnt);
maxCntArr.sort((a, b) => b[0] - a[0]);
const modeNum =
  maxCntArr.length === 1 ? maxCntArr[0][0] : maxCntArr[maxCntArr.length - 2][0];

const answerArr = [average, midNum, modeNum, range];
const answerStr = answerArr.toString().replaceAll(",", "\n");
console.log(answerStr);
