const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").map((el) => +el));
const [arr1, arr2] = arr;
const newArr = [...arr1, ...arr2];

console.log(newArr.sort((a, b) => a - b).join(" "));
