const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const commands = input.slice(1).map((el) => {
  if (el.slice(0, 4) === "push") return el.split(" ");
  return el;
});

class Deque {
  constructor() {
    this.arr = [];
  }

  push_front(val) {
    this.arr.unshift(val);
  }

  push_back(val) {
    this.arr.push(val);
  }

  pop_front() {
    if (this.arr.length === 0) return -1;
    return this.arr.shift();
  }

  pop_back() {
    if (this.arr.length === 0) return -1;
    return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  empty() {
    if (this.arr.length === 0) return 1;
    return 0;
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

const deque = new Deque();
let answer = "";

commands.forEach((com) => {
  if (Array.isArray(com)) {
    const val = parseInt(com[1]);
    if (com[0] === "push_back") return deque.push_back(val);
    return deque.push_front(val);
  }

  if (com === "pop_front") {
    answer += deque.pop_front() + "\n";
    return;
  }

  if (com === "pop_back") {
    answer += deque.pop_back() + "\n";
    return;
  }

  if (com === "size") {
    answer += deque.size() + "\n";
    return;
  }

  if (com === "empty") {
    answer += deque.empty() + "\n";
    return;
  }

  if (com === "front") {
    answer += deque.front() + "\n";
    return;
  }

  if (com === "back") {
    answer += deque.back() + "\n";
    return;
  }
});

console.log(answer);
