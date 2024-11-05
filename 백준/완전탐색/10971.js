const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

const ch = Array.from({ length: n }, () => 0);
const answers = [];

function dfs(x, y, sum) {
  if (ch.every((el) => el === 1)) {
    const lastAdd = arr[y][0];
    if (lastAdd) answers.push(sum + lastAdd);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!ch[i] && arr[y][i]) {
      ch[i] = 1;
      dfs(y, i, sum + arr[y][i]);
      ch[i] = 0;
    }
  }
}

ch[0] = 1;
dfs(0, 0, 0);

console.log(Math.min(...answers));
