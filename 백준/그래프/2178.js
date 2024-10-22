const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const routes = input.slice(1).map((el) => el.split("").map(Number));
const ch = Array.from({ length: n }, () => Array(m).fill(false));

//최소 칸 수

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [];

function bfs() {
  queue.push([0, 0, 1]);
  ch[0][0] = true;

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return cnt;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        routes[nx][ny] === 1 &&
        !ch[nx][ny]
      ) {
        ch[nx][ny] = true;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
}

const answer = bfs();

console.log(answer);
