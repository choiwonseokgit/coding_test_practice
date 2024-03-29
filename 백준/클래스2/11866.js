// 재귀 함수는 20만 까지 문제 없음
const fs = require("fs");
const [len, targetNum] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el, 10));
// (0, [], [1,2,3,4,5,6,7])
// (2, [3], [1,2,4,5,6,7])
// (4, [3,6], [1,2,4,5,7])
// (1, [3,6,2], [1,4,5,7])
const arr = new Array(len).fill().map((_, i) => parseInt(i + 1, 10));

let answer = "";
function getYosep(idx, selected, left) {
  if (left.length === 0) {
    answer += selected.join(", ");
    return;
  }

  const nextIdx = (idx + targetNum - 1) % left.length;

  getYosep(
    nextIdx,
    [...selected, left[nextIdx]],
    [...left.slice(0, nextIdx), ...left.slice(nextIdx + 1)]
  );
}

getYosep(0, [], [...arr]);

console.log("<" + answer + ">");
