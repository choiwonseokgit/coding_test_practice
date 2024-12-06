class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.items[parentIdx] <= this.items[idx]) {
        break;
      }
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    while (idx * 2 + 1 < this.size()) {
      let leftChild = idx * 2 + 1;
      let rightChild = idx * 2 + 2;
      let smallerChild =
        rightChild < this.size() && this.items[rightChild] < this.leftChild
          ? rightChild
          : leftChild;

      if (this.items[idx] <= this.items[smallerChild]) {
        break;
      }

      this.swap(idx, smallerChild);
      idx = smallerChild;
    }
  }
}

function solution(N, road, K) {
  // 1. 각 노드에 연결된 간선들을 저장할 배열
  const graph = Array.from({ length: N + 1 }, () => []);
  // 2. 출발점에서 각 노드가지의 최단 거리를 저장할 배열
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0; // 출발점은 0으로 초기화

  // 3. 그래프 구성
  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  // 4. 다익스트라 알고리즘 시작
  const heap = new MinHeap();
  heap.insert([0, 1]); // 5. 출발점을 heap에 추가
  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }

  // 7. distances 배열에서 K 이하인 값의 개수를 구하여 반환
  return distances.filter((dist) => dist <= K).length;
}
