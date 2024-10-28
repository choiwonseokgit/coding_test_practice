const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("");

const alphabets = Array.from(
  { length: 26 },
  (
    _,
    i //알파벳은 Unicode활용하면 쉽게 가능
  ) => String.fromCharCode(97 + i)
);
const map = new Map();

alphabets.forEach((al) => map.set(al, 0));

arr.forEach((el) => map.set(el, map.get(el) + 1));

const answer = Array.from(map.values());

console.log(answer.join(" "));
