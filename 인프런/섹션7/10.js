function solution(targetNum, arr) {
  arr.sort((a, b) => a - b);

  let left = arr[0];
  let right = arr[arr.length - 1];

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (mid > targetNum) {
      right = mid - 1;
    }

    if (mid < targetNum) {
      left = mid + 1;
    }

    if (mid === targetNum) {
      return arr.findIndex((el) => el === mid) + 1;
    }
  }
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
