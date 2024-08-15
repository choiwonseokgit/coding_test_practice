function solution(targetCnt, arr) {
  arr.sort((a, b) => a - b);

  let left = 1;
  let right = arr[arr.length - 1] - arr[0];
  let answer;

  function isPossibleHorseHouse(mid) {
    let cnt = 1;
    let prevHouse = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const currDist = arr[i] - prevHouse;
      if (currDist >= mid) {
        cnt++;
        prevHouse = arr[i];
      }
    }

    return cnt >= targetCnt;
  }

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (isPossibleHorseHouse(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
