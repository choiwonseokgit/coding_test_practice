const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));
const numArr = input.slice(1).map((el) => el.map((el2) => +el2));

numArr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

console.log(numArr.join("\n").replaceAll(",", " "));
