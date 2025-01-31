function solution_book(arr) {
  const n = arr[0].length; // ❶ 입력 배열의 열의 개수를 저장합니다.
  const dp = Array.from(Array(4), () => Array(n).fill(0)); // ❷ dp 배열을 초기화합니다. 4행 n열의 2차원 배열입니다.

  // 각 열에서 선택 가능한 4가지 조약돌 배치 패턴에 대해 첫 번째 열의 가중치를 초기화합니다.
  // ❸ 0: 상단, 1: 중앙, 2: 하단, 3: 상단과 하단
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  dp[2][0] = arr[2][0];
  dp[3][0] = arr[0][0] + arr[2][0];

  // ❹ 두 번째 열부터 마지막 열까지 각 열에서 선택 가능한 4가지 조약돌 배치 패턴에 대해 최대 가중치를 계산합니다.
  for (let i = 1; i < n; i++) {
    // 패턴 0이 선택된 경우, 이전은 패턴 {1, 2} 가능
    dp[0][i] = arr[0][i] + Math.max(dp[1][i - 1], dp[2][i - 1]);
    // 패턴 1이 선택된 경우, 이전은 패턴 {0, 2, 3|가능
    dp[1][i] = arr[1][i] + Math.max(dp[0][i - 1], dp[2][i - 1], dp[3][i - 1]);
    // 패턴 2가 선택된 경우, 이전은 패턴 {0, 1}이 가능
    dp[2][i] = arr[2][i] + Math.max(dp[0][i - 1], dp[1][i - 1]);
    // 패턴 3이 선택된 경우, 이전은 패턴{1}이 가능
    dp[3][i] = arr[0][i] + arr[2][i] + dp[1][i - 1];
  }

  // ❺ 마지막 열에서 선택 가능한 4가지 조약돌 배치 패턴 중 최대 가중치를 반환합니다.
  return Math.max(...dp.map((row) => row[n - 1]));
}

console.log(
  solution_book([
    [1, 3, 3, 2],
    [2, 1, 4, 1],
    [1, 5, 2, 3],
  ])
); // 19
console.log(
  solution_book([
    [1, 7, 13, 2, 6],
    [2, -4, 2, 5, 4],
    [5, 3, 5, -3, 1],
  ])
); // 32

function solution(arr) {
  const n = arr[0].length;
  const dp = Array.from({ length: arr.length + 1 }, () => Array(n).fill(0)); // 패턴에 따른 가중치 누적 값

  // 각 열에서 선택 가능한 4가지 조약돌 배치 패턴에 대해 첫 번째 열의 가중치를 초기화합니다.
  // ❸ 0: 상단, 1: 중앙, 2: 하단, 3: 상단과 하단
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  dp[2][0] = arr[2][0];
  dp[3][0] = arr[0][0] + arr[2][0];

  for (let i = 1; i < n; i++) {
    dp[0][i] = arr[0][i] + Math.max(dp[1][i - 1], dp[2][i - 1]); //상단 + 이전(이전은 가운데 또는 하단 만 가능)
    dp[1][i] = arr[1][i] + Math.max(dp[0][i - 1], dp[2][i - 1], dp[3][i - 1]); //가운데 + 이전(상단+하단 or 상단 or 하단 가능)
    dp[2][i] = arr[2][i] + Math.max(dp[0][i - 1], dp[1][i - 1]); // 하단 + 이전(상단 + 가운데)
    dp[3][i] = arr[0][i] + arr[2][i] + dp[1][i - 1]; // (상단+하단) + 이전(가운데)
  }
  console.log(dp)
  return Math.max(...dp.map((row) => row[n - 1]));
}

console.log(
  solution([
    [1, 3, 3, 2],
    [2, 1, 4, 1],
    [1, 5, 2, 3],
  ])
); // 19
console.log(
  solution([
    [1, 7, 13, 2, 6],
    [2, -4, 2, 5, 4],
    [5, 3, 5, -3, 1],
  ])
); // 32
