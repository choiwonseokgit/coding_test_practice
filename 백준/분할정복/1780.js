//블로그 글 쓰기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

const divideNum = len / 3;
const map = new Map([-1, 0, 1].map((key) => [key, 0]));

function cntFunc(arr) {
  const item = arr[0][0];

  if (arr.every((row) => row.every((el) => el === item))) {
    map.set(item, map.get(item) + 1);
    return;
  }

  const size = arr.length;
  const newSize = size / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const subArray = [];
      for (let x = 0; x < newSize; x++) {
        subArray.push(
          arr[i * newSize + x].slice(j * newSize, j * newSize + newSize)
        );
      }
      cntFunc(subArray);
    }
  }
}

cntFunc(arr);

const answerArr = Array.from(map.values());

console.log(answerArr.join("\n"));
