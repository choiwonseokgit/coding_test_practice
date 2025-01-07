function solution(nums) {
  const dp = Array.from({ length: nums.length }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) max = Math.max(dp[j], max);
    }

    dp[i] = max + 1;
  }

  return Math.max(...dp);
}

console.log(solution([1, 4, 2, 3, 1, 5, 7, 3])); // 5
console.log(solution([3, 2, 1])); // 1

function solution_book(nums) {
  const n = nums.length;

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution_book([1, 4, 2, 3, 1, 5, 7, 3])); // 5
console.log(solution_book([3, 2, 1])); // 1
