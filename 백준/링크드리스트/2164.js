const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const size = parseInt(input, 10);

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.head;
    }
    this.tail = newNode;
    this.size++;
  }

  removeHead() {
    this.head = this.head.next;
    this.prev = null;
    this.size--;
  }

  getHead() {
    return this.head.val;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();

for (let i = 1; i <= size; i++) {
  list.push(i);
}

while (true) {
  list.removeHead();
  if (list.getSize() === 1) break;
  list.push(list.getHead());
  list.removeHead();
}

console.log(list.getHead());

// 참고 Queue 템플릿

// class Queue {
//     constructor(num){
//         this.arr = [];
//     }
//     enqueue(num){
//         this.arr.push(num);
//     }
//     drop(){
//         this.arr.shift();
//     }
//     move(){
//         this.enqueue(this.arr.shift())
//     }
//     length(){
//         return this.arr.length;
//     }
//     ans(){
//         return this.arr.shift();
//     }
// }

// const card = new Queue;

// for(let i=1; i<=n; i++){
//     card.enqueue(i);
// }

// while(card.length()!==1){
//     card.drop()
//     card.move();

// }

// console.log(card.ans())
