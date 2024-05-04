//우선순위 큐
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testCaseNum = +input[0];
const arr = input.slice(1);

const arrA = arr.filter((_, idx) => idx % 2 === 0).map((el) => el.split(" "));
const arrB = arr.filter((_, idx) => idx % 2 !== 0).map((el) => el.split(" "));

class MyQueue {
  constructor(val, findIdx) {
    this.arr = [...val];
    this.findIdx = findIdx;
    this.shiftCount = 0;
  }

  checkPriority() {
    const isFisrtPriority = this.arr.find((el) => +el > +this.arr[0])
      ? true
      : false;
    return isFisrtPriority;
  }

  shiftAndPush() {
    const item = this.arr.shift();
    this.arr.push(item);
    if (this.findIdx === 0) this.findIdx = this.arr.length - 1;
    else this.findIdx -= 1;
  }

  shift() {
    this.arr.shift();
    this.findIdx -= 1;
    this.shiftCount += 1;
  }

  getMyIdx() {
    return this.findIdx;
  }

  getShiftCount() {
    return this.shiftCount;
  }
}

let answerStr = "";

for (let i = 0; i < testCaseNum; i++) {
  const [_, findIdx] = arrA[i];
  const myArrB = arrB[i];

  const myQueue = new MyQueue(myArrB, parseInt(findIdx));

  while (true) {
    if (myQueue.getMyIdx() < 0) break;

    if (myQueue.checkPriority()) myQueue.shiftAndPush();
    else myQueue.shift();
  }

  answerStr += myQueue.getShiftCount() + "\n";
}

console.log(answerStr);
