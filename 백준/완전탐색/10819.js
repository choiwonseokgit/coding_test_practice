const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const len = +input[0];
const arr = input[1].split(" ").map(Number);

function calSum(arr) {
  let sum = 0;
  let prev = arr[0];
  for (let i = 1; i < len; i++) {
    sum += Math.abs(prev - arr[i]);
    prev = arr[i];
  }
  return sum;
}

const ch = Array.from({ length: len }, () => false);

let max = 0;

function DFS(level, selected) {
  if (selected.length === len) {
    const sum = calSum(selected);
    max = Math.max(max, sum);
  } else {
    for (let i = 0; i < len; i++) {
      if (!ch[i]) {
        ch[i] = true;
        DFS(level + 1, [...selected, arr[i]]);
        ch[i] = false;
      }
    }
  }
}

DFS(0, []);

console.log(max);
