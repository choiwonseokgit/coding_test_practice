const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = +input[0];
const meetingTimes = input.slice(1).map((el) => el.split(" ").map(Number));

meetingTimes.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}); //끝나는 시간으로 정렬 같으면 시작 시간순으로 정렬

let cnt = 1;
let prevEnd = meetingTimes[0][1];

for (let i = 1; i < len; i++) {
  const meetingTime = meetingTimes[i];
  const [start, end] = meetingTime;
  if (prevEnd <= start) {
    cnt++;
    prevEnd = end;
  }
}

console.log(cnt);
