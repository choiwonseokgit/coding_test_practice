const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map((el) => parseInt(el, 10));
const arr = input.slice(1);
let answer = [];

for (let i = 0; i < row - 7; i++) {
  for (let j = 0; j < col - 7; j++) {
    answer.push(whiteFirstCnt(i, j));
    answer.push(blackFirstCnt(i, j));
  }
}

console.log(Math.min(...answer));

//w b w b w
//b w b w b
function whiteFirstCnt(rowIdx, colIdx) {
  let cnt = 0;
  for (let i = rowIdx; i < rowIdx + 8; i++) {
    for (let j = colIdx; j < colIdx + 8; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          if (arr[i][j] !== "W") cnt += 1;
        } else {
          if (arr[i][j] !== "B") cnt += 1;
        }
      } else {
        if (j % 2 === 0) {
          if (arr[i][j] !== "B") cnt += 1;
        } else {
          if (arr[i][j] !== "W") cnt += 1;
        }
      }
    }
  }
  return cnt;
}

function blackFirstCnt(rowIdx, colIdx) {
  let cnt = 0;
  for (let i = rowIdx; i < rowIdx + 8; i++) {
    for (let j = colIdx; j < colIdx + 8; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          if (arr[i][j] !== "B") cnt += 1;
        } else {
          if (arr[i][j] !== "W") cnt += 1;
        }
      } else {
        if (j % 2 === 0) {
          if (arr[i][j] !== "W") cnt += 1;
        } else {
          if (arr[i][j] !== "B") cnt += 1;
        }
      }
    }
  }
  return cnt;
}
