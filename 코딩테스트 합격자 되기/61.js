class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
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
    this.buubleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.items[parentIdx][0] <= this.items[idx][0]) {
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
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[idx][0] <= this.items[smallerChild][0]) {
        break;
      }
    }

    this.swap(idx, smallerChild);
    idx = smallerChild;
  }
}

function solution(land, height) {
  let answer = 0;
  const n = land.length;
  class MinHeap {
    constructor() {
      this.items = [];
    }

    size() {
      return this.items.length;
    }

    push(item) {
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
        if (this.items[parentIdx][0] <= this.items[idx][0]) {
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
          rightChild < this.size() &&
          this.items[rightChild][0] < this.items[leftChild][0]
            ? rightChild
            : leftChild;

        if (this.items[idx][0] <= this.items[smallerChild][0]) {
          break;
        }
        this.swap(idx, smallerChild);
        idx = smallerChild;
      }
    }
  }

  function solution(land, height) {
    let answer = 0;
    const n = land.length;

    // 1. 주변 노드 탐색을 위한 di, dj;
    const di = [-1, 0, 1, 0];
    const dj = [0, 1, 0, -1];
    const visited = Array.from(Array(n), () => Array(n).fill(false));

    // 2. 시작 노드 추가
    const q = new MinHeap();

    q.push([0, 0, 0]); // [비용, i, j]

    // 3. BFS + 우선 순위 큐로 다음 노드 관리
    while (q.size() > 0) {
      const [cost, i, j] = q.pop();
      // 4. 아직 방문하지 않은 경로만 탐색
      if (!visited[i][j]) {
        visited[i][j] = true;
        // 5. 현재까지 비용을 합산
        answer += cost;
        for (let d = 0; d < 4; d++) {
          const ni = i + di[d];
          const nj = j + dj[d];
          // 6. 유효한 idx일 경우
          if (ni >= 0 && nj >= 0 && ni < n && nj < n) {
            const tempCost = Math.abs(land[i][j] - land[ni][nj]);
            // 7. 입력으로 주어진 height 보다 높이차가 큰 경우
            const newCost = tempCost > height ? tempCost : 0;
            // 8. 다음 경로를 푸시
            q.push([newCost, ni, nj]);
          }
        }
      }
    }

    return answer;
  }

  // 1. 주변 노드 탐색을 위한 di, dj;
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  const visited = Array.from(Array(n), () => Array(n).fill(false));

  // 2. 시작 노드 추가
  const q = new MinHeap();

  q.push([0, 0, 0]); // [비용, i, j]

  // 3. BFS + 우선 순위 큐로 다음 노드 관리
  while (q.size() > 0) {
    const [cost, i, j] = q.pop();
    // 4. 아직 방문하지 않은 경로만 탐색
    if (!visited[i][j]) {
      visited[i][j] = true;
      // 5. 현재까지 비용을 합산
      answer += cost;
      for (let d = 0; d < 4; d++) {
        const ni = i + di[d];
        const nj = j + dj[d];
        // 6. 유효한 idx일 경우
        if (ni >= 0 && nj >= 0 && ni < n && nj < n) {
          const tempCost = Math.abs(land[i][j] - land[ni][nj]);
          // 7. 입력으로 주어진 height 보다 높이차가 큰 경우
          const newCost = tempCost > height ? tempCost : 0;
          // 8. 다음 경로를 푸시
          q.push([newCost, ni, nj]);
        }
      }
    }
  }

  return answer;
}
