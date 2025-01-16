function solution_book(money) {
  const len = money.length;
  // dp 배열 생성(첫번째 집을 털때, 첫번째 집을 털지 않을때)
  const dp1 = Array.from({ length: len }, () => 0);
  const dp2 = Array.from({ length: len }, () => 0);

  // 첫번째 집을 털때
  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < len - 1; i++) {
    //첫번째 선택하면 마지막은 선택하면 안되서 i < len-1
    dp1[i] = Math.max(dp1[i - 1], money[i] + dp1[i - 2]);
  }

  // 첫번째 집을 털지 않을때
  dp2[1] = money[1];
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], money[i] + dp2[i - 2]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
