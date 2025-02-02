function solution(limit, arr) {
  const len = arr.length;
  let answer = 0;

  function DFS(idx, sum) {
    if (sum > limit) return;

    if (idx > len - 1) {
      answer = Math.max(answer, sum);
    } else {
      DFS(idx + 1, sum + arr[idx]);
      DFS(idx + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
