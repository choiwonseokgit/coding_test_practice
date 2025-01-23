function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const str of strs) {
      const len = str.length;
      const startIdx = i - len;
      // banana
      // ba
      if (startIdx >= 0 && t.slice(startIdx, startIdx + len) === str) {
        dp[i] = Math.min(dp[i], dp[startIdx] + 1);
      }
    }
  }

  return dp[t.length] === Infinity ? -1 : dp[t.length];
}

// ["ba","na","n","a"]	"banana"	3
console.log(solution(["ba", "na", "n", "a"], "banana"));

function solution2(strs, t) {
  const queue = [];
  const visited = Array(t.length).fill(0); // idx visited
  queue.push([0, 0]); // idx, cnt

  while (queue.length) {
    const [idx, cnt] = queue.shift();

    if(idx === t.length) return cnt;

    if(visited[idx]) continue;
    visited[idx] = 1;

    for(const str of strs) {
        const len = str.length;

        if(t.slice(idx, idx + len) === str) {
            queue.push([idx + len, cnt + 1]);
        }
    }
  }
}

console.log(solution2(["ba", "na", "n", "a"], "banana"));
