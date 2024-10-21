//1. dfs로 sum을 계속 업데이트
//2. level=5일때 return
function solution(numbers, target) {
  let cnt = 0;

  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) cnt += 1;
    } else {
      dfs(level + 1, sum + numbers[level]);
      dfs(level + 1, sum - numbers[level]);
    }
  }

  dfs(0, 0);

  return cnt;
}
