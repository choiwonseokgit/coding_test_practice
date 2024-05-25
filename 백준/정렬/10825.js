const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) =>
  el.split(" ").map((el2) => {
    if (!isNaN(el2)) return +el2;
    return el2;
  })
);

arr.sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1]; // 국어 점수를 기준으로 내림차순 정렬
  if (a[2] !== b[2]) return a[2] - b[2]; // 영어 점수를 기준으로 오름차순 정렬
  if (b[3] !== a[3]) return b[3] - a[3]; // 수학 점수를 기준으로 내림차순 정렬
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; // 이름을 기준으로 사전순 정렬
});

// let answer = "";

// arr.forEach((el) => {
//   answer += el[0] + "\n";
// });

const answer = arr.map((el) => el[0]);

console.log(answer.join("\n"));
