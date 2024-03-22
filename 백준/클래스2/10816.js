const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const myCards = input[1].split(" ").map((el) => parseInt(el));
const map = new Map();

myCards.forEach((card) => {
  if (map.has(card)) {
    let newVal = map.get(card);
    newVal += 1;
    map.set(card, newVal);
    return;
  }
  map.set(card, 1);
});

const targetCards = input[3].split(" ").map((el) => parseInt(el));

let answerStr = "";

targetCards.forEach((card) => {
  const cardCnt = map.get(card) ? map.get(card) : 0;
  answerStr += `${cardCnt} `;
});

console.log(answerStr);
