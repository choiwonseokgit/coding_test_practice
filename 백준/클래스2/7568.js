const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input
  .splice(1)
  .map((el) => el.split(" ").map((el2) => parseInt(el2)));

const places = arr.map((el, i) => {
  return cntBiggerPerson(el, i);
});

function cntBiggerPerson(mySelf, myIdx) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (myIdx === i) continue;

    if (mySelf[0] < arr[i][0] && mySelf[1] < arr[i][1]) cnt += 1;
  }
  return cnt + 1;
}

console.log(places.join(" "));
