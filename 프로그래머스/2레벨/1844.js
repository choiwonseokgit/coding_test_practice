//1. dfs로 탐색
//2. 0은 벽, 1은 길
//3. 1일때만 dfs호출하게끔
//4. 시작(0,0) 도착(n-1,m-1)
//5. 최솟값 return 없으면 -1 return

//dfs로는 안됨
//bfs로 탐색 최단거리 탐색에는 bfs가 적합
function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];

  const ch = Array.from({ length: n }, () => new Array(m).fill(false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function bfs(queue) {
    while (queue.length) {
      const [x, y, cnt] = queue.shift();

      if (x === n - 1 && y === m - 1) return cnt;

      for (let i = 0; i < dx.length; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          !ch[nx][ny] &&
          maps[nx][ny] === 1
        ) {
          ch[nx][ny] = true;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }

    return -1;
  }

  ch[0][0] = true;
  const answer = bfs([[0, 0, 1]]);
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
