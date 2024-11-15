class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }

  getStatus() {
    console.log(this.front, this.rear);
    console.log(this.items);
  }
}

function solution(n, k) {
  const queue = new Queue();

  //1. 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    console.log(queue.getStatus());
    //2. deque에 하나의 요소가 남을 때가지
    for (let i = 0; i < k - 1; i++) {
      //3. k번째 요소를 찾기 위해 앞에서부터 제거하고 뒤에 추가
      queue.push(queue.pop());
    }
    queue.pop();
  }
  console.log(queue.getStatus());
  return queue.pop();
}

console.log(solution(5, 2));

class Queue_gpt {
  items = [];

  push(item) {
    this.items.push(item);
  }

  size() {
    return this.items.length;
  }

  pop() {
    return this.items.shift(); // 앞에서 제거
  }

  getStatus() {
    console.log(this.items); // 큐의 현재 상태를 출력
  }
}

function solution_gpt(n, k) {
  const queue = new Queue_gpt();

  // 1. 1부터 N까지의 번호를 큐에 추가
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    console.log(queue.getStatus());
    // 2. k번째 요소를 찾기 위해 (k - 1)번 pop & push 반복
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop(); // k번째 요소 제거
  }
  console.log(queue.getStatus());
  return queue.pop(); // 최종 남은 요소 반환
}

console.log(solution_gpt(5, 2)); // 출력: 3
