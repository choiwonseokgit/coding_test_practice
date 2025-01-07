function solution(str1, str2) {
  //LCS 구하기
  const len1 = str1.length,
    len2 = str2.length;

  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

  // LCS(0,0) = 0
  // x[i] === y[i], LCS(i-1, j-1) + 1
  // x[i] !== y[i], max(LCS(i-1, j), LCS(i, j-1))

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i-1] === str2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len1][len2];
}

console.log(solution("ABCBDAB", "BDCAB")); // 4
console.log(solution("AGGTAB", "GXTXAYB")); // 4
