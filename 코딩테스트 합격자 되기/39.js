function solution(graph, start) {
  const obj = {};
  const chSet = new Set();

  graph.forEach((g) => {
    const [start, end] = g;
    chSet.add(start);
    chSet.add(end);

    if (!(start in obj)) {
      obj[start] = [];
    }

    obj[start].push(end.toString());
  });

  const len = chSet.size;

  const queue = [];
  queue.push([start.toString(), []]);

  while (queue.length) {
    const [node, routeArr] = queue.shift();

    if (routeArr.length === len) return routeArr;

    (obj[node] || []).forEach((nextNode) => {
      queue.push([nextNode, [...routeArr, node]]);
    });
  }

  return -1;
}

console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
); // [1,2,3,4,5,0]

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};
  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  const visited = new Set(); // 1. 방문한 노드를 저장할 Set

  // 2. 탐색 시 맨 처음 방문할 노드 푸시 하고 방문처리
  const queue = new Queue();
  queue.push(start);
  visited.add(start);
  const result = [start];

  // 3. 큐가 비어 있지 않은 동안 반복
  while (!queue.isEmpty()) {
    const node = queue.pop(); // 4. 큐에 있는 원소 중 가장 먼저 푸시된 원소 팝
    for (let neighbor of adjList[node] || []) {
      // 6. 방문 되지 않은 노드인 경우
      // 7. 이웃 노드를 방문 처리 함
      queue.push(neighbor);
      visited.add(neighbor);
      result.push(neighbor);
    }
  }
}
