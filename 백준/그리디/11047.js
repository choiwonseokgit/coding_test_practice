const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [len, targetMoney] = input[0].split(" ").map((el) => +el);
const arr = input.slice(1).map((el) => +el);

arr.sort((a, b) => b - a);

let leftMoney = targetMoney;
let cnt = 0;

arr.forEach((el) => {
  if (!leftMoney) return;
  else if (leftMoney >= el) {
    const currMoneyCnt = parseInt(leftMoney / el);
    cnt += currMoneyCnt;
    leftMoney = parseInt(leftMoney % el);
  }
});

console.log(cnt);
