const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);

const pokemonArr = input.slice(1, n + 1);
const questions = input.slice(n + 1);

const map = new Map();
const numMap = new Map();

pokemonArr.forEach((p, i) => {
  map.set(p, i + 1);
  numMap.set(i + 1, p);
});

let answerStr = "";

questions.forEach((el) => {
  if (!isNaN(el)) return (answerStr += numMap.get(parseInt(el)) + "\n");
  return (answerStr += map.get(el) + "\n");
});

console.log(answerStr);
