function solution(n) {
  // 합이 10인 조합들 return
  const answer = [];

  function dfs(num, select, total) {
    if (total === 10) {
      answer.push(select);
      return;
    }

    if (total > 10) return;

    for (let i = num + 1; i <= n; i++) {
      dfs(i, [...select, i], total + i);
    }
  }

  dfs(0, [], 0);

  return answer;
}

console.log(solution(5)); // [[1,2,3,4], [1,4,5], [2,3,5]]
console.log(solution(2)); // []
console.log(solution(7)); // [[1,2,3,4], [1,2,7], [1,3,6], [1,4,5], [2,3,5], [3,7], [4,6]]
