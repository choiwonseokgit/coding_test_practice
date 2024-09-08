function solution(targetNum) {
  let answer = "";

  function DFS(num) {
    if (num > targetNum) return;
    answer += num + " ";

    DFS(num + 1);
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
