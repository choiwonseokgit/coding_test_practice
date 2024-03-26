const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const commands = input.slice(1).map((el) => {
  if (el.slice(0, 4) === "push") {
    return el.split(" ");
  }
  return el;
});

class Queue {
  constructor() {
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    if (this.arr.length === 0) {
      return -1;
    }
    return this.arr.shift();
  }

  empty() {
    if (this.arr.length === 0) return 1;
    return 0;
  }

  size() {
    return this.arr.length;
  }

  front() {
    if (this.arr.length === 0) return -1;
    return this.arr[0];
  }

  back() {
    if (this.arr.length === 0) return -1;
    return this.arr[this.arr.length - 1];
  }
}

let answerStr = "";
const queue = new Queue();

commands.forEach((com) => {
  if (typeof com === "object") {
    queue.push(parseInt(com[1]));
    return;
  }

  if (com === "pop") {
    answerStr += queue.pop() + "\n";
    return;
  }

  if (com === "size") {
    answerStr += queue.size() + "\n";
    return;
  }

  if (com === "empty") {
    answerStr += queue.empty() + "\n";
    return;
  }

  if (com === "front") {
    answerStr += queue.front() + "\n";
    return;
  }

  if (com === "back") {
    answerStr += queue.back() + "\n";
    return;
  }
});

console.log(answerStr);
