function solution(graph, start) {
  const obj = {};
  const set = new Set();

  graph.forEach((g) => {
    const [start, end] = g;
    set.add(start);
    set.add(end);

    if (!(start in obj)) {
      obj[start] = [];
    }

    obj[start].push(end);
  });

  const ch = {};

  set.forEach((s) => {
    ch[s] = false;
  });

  const answer = [];

  function dfs(level, node) {
    answer.push(node);

    if (!obj[node]) return;

    for (let i = 0; i < obj[node].length; i++) {
      if (!ch[obj[node][i]]) {
        ch[obj[node][i]] = true;
        dfs(level + 1, obj[node][i]);
      }
    }
  }

  ch["A"] = true;
  dfs(0, "A");

  return answer;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
); // ['A', 'B', 'C', 'D', 'E']

console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); // ['A', 'B', 'D', 'E', 'F', 'C']

function solution_book(graph, start) {
  // 1. 그래프를 인접 리스트로 반환
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  // 2. dfs 탐색 함수
  function dfs(node, visited, result) {
    visited.add(node); // 3. 현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); // 4. 현재 노드를 결과 배열에 추가
    (adjList[node] || []).forEach((neighbor) => {
      // 5. 현재 노드와 인접한 노드 순회
      if (!visited.has(neighbor)) {
        // 6. 아직 방문하지 않은 노드라면
        dfs(neighbor, visited, result);
      }
    });
  }

  // dfs를 순회한 결과를 반환
  const visited = new Set();
  const result = [];
  dfs(start, visited, result); // 7. 시작 노드에서 깊이 우선 탐색 시작

  return result; // 8. dfs 탐색 결과 반환
}

console.log(
  solution_book(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
); // ['A', 'B', 'C', 'D', 'E']

console.log(
  solution_book(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); // ['A', 'B', 'D', 'E', 'F', 'C']
