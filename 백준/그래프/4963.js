const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input)

let i = 0;
let answer = "";

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

while (1) {
  const [w, h] = input[i].split(" ").map(Number);
  let cnt = 0;

  if (w === 0 && h === 0) break;

  const map = input
    .slice(i + 1, i + h + 1)
    .map((el) => el.split(" ").map(Number));
  const ch = Array.from({ length: h }, () => Array(w).fill(false));

  //dfs
  function dfs(startIdx, endIdx) {
    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [startIdx + dx[i], endIdx + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < h &&
        ny < w &&
        !ch[nx][ny] &&
        map[nx][ny] === 1
      ) {
        ch[nx][ny] = true;
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!ch[i][j] && map[i][j] === 1) {
        dfs(i, j);
        cnt += 1;
      }
    }
  }

  answer += cnt + "\n";

  i += h + 1;
}

console.log(answer);
