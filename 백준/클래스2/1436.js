const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
let cnt = 1;
const devilNum = "666";
let number = 666;

while (cnt !== input) {
  number++;
  if (number.toString().includes(devilNum)) {
    cnt++;
  }
}

console.log(number);
