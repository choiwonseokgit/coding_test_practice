function solution(n) {
  const dp = Array(n + 1).fill(null);
  dp[0] = 0;
  dp[1] = 1;

  // 모듈러 연산 적용
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}
