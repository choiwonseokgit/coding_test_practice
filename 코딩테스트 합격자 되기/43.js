function solution(n, computers) {
  let answer = 0;
  const ch = new Array(n).fill(false); // 방문 체크 배열

  function dfs(node) {
    ch[node] = true; // 방문 처리
    for (let i = 0; i < computers[node].length; i++) {
      if (!ch[i] && computers[node][i] === 1) {
        dfs(i); // 연결된 노드로 이동
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!ch[i]) {
      // 방문하지 않은 노드라면
      answer++; // 새로운 네트워크 발견
      dfs(i); // 탐색 시작
    }
  }

  return answer;
}

function dfs(computers, visited, node) {
  visited[node] = true; // 1. 현재 노드 방문 처리
  for (let i = 0; i < computers[node].length; i++) {
    // 2. 연결되어 있으며 방문하지 않은 노드라면
    dfs(computers, visited, idx); // 3. 해당 노드를 방문하러 이동
  }
}

function solution_book(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false); // 4. 방문 여부를 저장하는 배열
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 5. 아직 방문하지 않은 노드라면
      // 6. dfs로 연결된 노드들을 모두 방문하면서 네트워크 개수 증가
      dfs(computers, visited, i);
      answer++;
    }
  }

  return answer;
}
