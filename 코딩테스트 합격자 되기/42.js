function solution(maps) {
  // return 칸 개수의 최솟값, 없으면 return -1
  // 1이 길, 0이 벽
  // n, m
  const ch = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  ch[0][0] = true;
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    if (x === n - 1 && y === m - 1) return cnt;

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !ch[nx][ny] &&
        maps[nx][ny] === 1
      ) {
        queue.push([nx, ny, cnt + 1]);
        ch[nx][ny] = 1;
      }
    }
  }

  return -1;
}

class Queue {
  item = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  // 1. 이동할 수 있는 방향을 나타내는 배열 move 선언
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // 2. 맵의 크기를 저장하는 변수 선언
  const n = maps.length;
  const m = maps[0].length;

  // 3. 거리를 저장하는 배열 dist를 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  // 4. bfs 함수를 선언
  function bfs(start) {
    // 5. queue를 선언하고 시작 위치를 queue에 추가
    const q = new Queue();
    q.push(start);
    dist[start[0]][start[1]] = 1;

    // 6. queue가 빌 때까지 반복
    while (!q.isEmpty()) {
      const here = q.pop();

      // 7. 현재 위치에서 이동할 수 있는 모든 방향
      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const column = here[1] + dy;

        // 8. 이동한 위치가 범위를 벗어난 경우 다음 방향으로 넘어감
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        // 9. 이동한 위치에 벽이 있는 경우 다음 방향으로 넘어감
        if (maps[row][column]) {
          continue;
        }

        // 10. 이동한 위치가 처음 방문하는 경우, queue에 추가하고 거리 갱신
        if (dist[row][column] === -1) {
          q.push([row, column]);
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }
  }

  // 시작 위치에서 bfs() 함수를 호출하여 거리 계산
  bfs([0, 0]);

  // 목적지까지의 거리 반환, 목적지에 도달하지 못한 경우 -1을 반환
  return dist[n - 1][m - 1];
}
