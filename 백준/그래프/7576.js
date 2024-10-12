const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [col, row] = input[0].split(" ").map(Number);
let box = input.slice(1).map((el) => el.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let queue = [];
let zeroCnt = 0;

// 익은 토마토와 안 익은 토마토 카운트
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
    } else if (box[i][j] === 0) {
      zeroCnt += 1;
    }
  }
}

// 안 익은 토마토가 없으면 바로 종료
if (!zeroCnt) {
  console.log(0);
  return;
}

let days = 0;
let front = 0;

while (front < queue.length) {
  let currQueueLen = queue.length - front;

  for (let i = 0; i < currQueueLen; i++) {
    const [x, y] = queue[front++];

    for (let j = 0; j < 4; j++) {
      const [nx, ny] = [x + dx[j], y + dy[j]];
      if (nx >= 0 && ny >= 0 && nx < row && ny < col && box[nx][ny] === 0) {
        box[nx][ny] = 1; // 토마토 익힘
        zeroCnt--; // 안 익은 토마토 수 감소
        queue.push([nx, ny]);
      }
    }
  }

  // 하루가 지남
  days++;
}

// 결과 출력
console.log(zeroCnt === 0 ? days - 1 : -1);
