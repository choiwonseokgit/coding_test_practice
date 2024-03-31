const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input
  .slice(1)
  .map((el) => el.split(" ").map((str) => parseInt(str, 10)));

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

const answer = arr.join("\n").replaceAll(",", " ");

console.log(answer);
