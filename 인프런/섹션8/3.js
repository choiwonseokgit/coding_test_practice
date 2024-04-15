function solution(n) {
  let answer = "";

  function DFS(n) {
    if (n > 7) return;
    else {
      answer += n + " ";
      DFS(2 * n);
      DFS(2 * n + 1);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(1));
