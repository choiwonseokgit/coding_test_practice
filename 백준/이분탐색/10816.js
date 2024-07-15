const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [checksLen, checks, cardsLen, cards] = input.map((el) => {
  const arr = el.split(" ").map((el) => +el);

  if (arr.length === 1) return arr[0];
  return arr;
});

checks.sort((a, b) => a - b);

const checksMap = new Map();

checks.forEach((el) => {
  checksMap.set(el, (checksMap.get(el) || 0) + 1);
});

const checksMapToArr = Array.from(checksMap);

const answerArr = Array.from({ length: cardsLen }, () => 0);

for (let i = 0; i < cardsLen; i++) {
  let leftIdx = 0;
  let rightIdx = checksMapToArr.length - 1;

  while (leftIdx <= rightIdx) {
    const midIdx = parseInt((leftIdx + rightIdx) / 2);
    const midVal = checksMapToArr[midIdx][0];

    if (cards[i] === midVal) {
      answerArr[i] = checksMapToArr[midIdx][1];
      break;
    } else if (cards[i] > midVal) {
      leftIdx = midIdx + 1;
    } else if (cards[i] < midVal) {
      rightIdx = midIdx - 1;
    }
  }
}

console.log(answerArr.join(" ").trim());
