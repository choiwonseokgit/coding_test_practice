function solution(maps) {
  // 최소 시간 return -> bfs
  // L 꼭 지나야함, O 가능, E 마지막
  // dfs?
  // level = time
  const mapArr = maps.map((el) => el.split(""));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 시작(S), 레버(L), 출구(E) 좌표 찾기
  let startX = 0,
    startY = 0,
    leverX = 0,
    leverY = 0,
    endX = 0,
    endY = 0;

  mapArr.forEach((row, i) => {
    if (row.includes("S")) {
      startX = i;
      startY = row.indexOf("S");
    }
    if (row.includes("L")) {
      leverX = i;
      leverY = row.indexOf("L");
    }
    if (row.includes("E")) {
      endX = i;
      endY = row.indexOf("E");
    }
  });

  // BFS 함수
  function bfs(startX, startY, targetX, targetY) {
    const ch = Array.from({ length: mapArr.length }, () =>
      Array(mapArr[0].length).fill(false)
    ); // 방문 체크 배열
    const queue = [];
    ch[startX][startY] = true;
    queue.push([startX, startY, 0]); // [x, y, 이동 거리]

    while (queue.length) {
      const [x, y, time] = queue.shift();

      if (x === targetX && y === targetY) return time; // 목표 지점 도달

      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < mapArr.length &&
          ny < mapArr[0].length &&
          mapArr[nx][ny] !== "X" &&
          !ch[nx][ny]
        ) {
          ch[nx][ny] = true;
          queue.push([nx, ny, time + 1]);
        }
      }
    }
    return -1; // 목표 지점에 도달할 수 없는 경우
  }

  // S -> L로 가는 최소 시간
  const toLever = bfs(startX, startY, leverX, leverY);
  if (toLever === -1) return -1; // L에 도달하지 못하면 종료

  // L -> E로 가는 최소 시간
  const leverToEnd = bfs(leverX, leverY, endX, endY);
  if (leverToEnd === -1) return -1; // E에 도달하지 못하면 종료

  // 총 시간 반환
  return toLever + leverToEnd;
}

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

// 1. 이동 가능한 좌표인지 판단하는 함수
function isValidMove(nx, ny, n, m, maps) {
  return nx >= 0 && ny >= 0 && nx < n && ny < m && maps[x][y] !== "X";
}

// 2. 방문한 적이 없으면 큐에 넣고 방문 여부 표시
function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  // 3. 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  // 4. 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        // 시작점
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }
      if (maps[i][j] === "E") {
        // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop(); // 5. 큐에서 좌표와 이동 횟수를 꺼냄

    // 6. 도착점에 도달하면 결과 반환
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // 7. 네 방향으로 이동
    for (let i = 0; i < dx.length; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 8. 이동 가능한 좌표인 때에만 큐에 넣음
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      // 9. 다음 이동 지점이 레버인 경우
      if (maps[ny][nx] === "L") {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }
  // 도착점에 도달하지 못한 경우
  return -1;
}
