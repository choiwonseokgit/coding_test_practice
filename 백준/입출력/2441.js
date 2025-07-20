const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const len = parseInt(input);

const star = "*";
const space = " ";

let answer = "";

for (let i = len; i > 0; i--) {
  let temp = "";

  for (let k = 0; k < len - i; k++) {
    temp += space;
  }

  for (let j = 0; j < i; j++) {
    temp += star;
  }

  answer += temp + "\n";
}

console.log(answer);
