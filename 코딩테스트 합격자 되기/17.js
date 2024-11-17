function solution(cards1, cards2, goal) {
  let answer = "Yes";

  for (const target of goal) {
    if (cards1.length && cards1[0] === target) {
      cards1.shift();
    } else if (cards2.length && cards2[0] === target) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}

class Queue {
  items = [];
  front = 0;
  rear = 0;

  // 생성자를 이용해 편하게 초기화
  constructor(arr) {
    this.items = arr;
    this.rear = arr.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  // front에 해당하는 값 반환
  fisrt() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution_book(cards1, cards2, goal) {
  //cards와 goal을 Queue로 반환
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  //1. goal의 문자열을 순차적으로 순회
  while (!goal.isEmpty()) {
    //2. card1의 front와 일치하는 경우
    if (!cards1.isEmpty() && cards1.fisrt() === goal.fisrt()) {
      cards1.pop();
      goal.pop();
      //3. card2의 front와 일치하는 경우
    } else if (!cards2.isEmpty() && cards2.fisrt() === goal.fisrt()) {
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No"; //4. goal이 비었으면 "Yes" 아니면 "No"를 반환
}
