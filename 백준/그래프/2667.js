const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = +input[0];
const arr = input.slice(1).map((el) => el.split("").map(Number));
const ch = Array.from({ length: len }, () => new Array(len).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const answerArr = [];
let cnt = 0;

function DFS(x, y) {
  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < len &&
      ny < len &&
      !ch[nx][ny] &&
      arr[nx][ny] === 1
    ) {
      ch[nx][ny] = true;
      cnt += 1;
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    if (!ch[i][j] && arr[i][j] === 1) {
      ch[i][j] = true;
      cnt += 1;
      DFS(i, j);
      answerArr.push(cnt);
      cnt = 0;
    }
  }
}

answerArr.sort((a, b) => a - b);

const answer = [answerArr.length, ...answerArr];

console.log(answer.join("\n"));
