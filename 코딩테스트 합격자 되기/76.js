function solution(land) {
  const n = land.length; // 행 갯수
  const dp = Array.from({ length: n }, () => Array(4).fill(0));

  // dp[n][0] = land[1][0] + Math.max(dp[n-1].slice(2));

  for (let i = 0; i < land[0].length; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i][j] =
        land[i][j] + Math.max(...dp[i - 1].filter((_, idx) => idx !== j));
    }
  }

  return Math.max(...dp[n - 1]);
}
