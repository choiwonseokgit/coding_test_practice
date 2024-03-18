const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const times = parseInt(input[0]);
const people = input.slice(1).map((el, i) => el.split(" "));
const peopleToObj = people.map((el, i) => ({
  age: parseInt(el[0]),
  name: el[1],
  idx: i,
}));

peopleToObj.sort((a, b) => {
  if (a.age === b.age) {
    return a.idx - b.idx;
  }
  return a.age - b.age;
});

let answerStr = "";
peopleToObj.forEach((el) => (answerStr += `${el.age} ${el.name}\n`));
console.log(answerStr);
