const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => {
  if (el.length === 1) return +el;
  return el.split(" ").map((el) => +el);
});

const [cardsLen, cards, checksLen, checks] = arr;

cards.sort((a, b) => a - b);
const answerArr = Array.from({ length: checksLen }, () => 0);

for (let i = 0; i < checksLen; i++) {
  const item = checks[i];
  let left = 0,
    right = cardsLen - 1;
  let isFound = false;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (item === cards[mid]) {
      isFound = true;
      break;
    } else if (item > cards[mid]) {
      left = mid + 1;
    } else if (cards[mid] > item) {
      right = mid - 1;
    }
  }
  if (isFound) answerArr[i] = 1;
}

console.log(answerArr.join(" ").trim());
