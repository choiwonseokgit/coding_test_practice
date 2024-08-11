function solution(targetCnt, arr) {
  let left = Math.max(...arr);
  let right = arr.reduce((acc, el) => acc + el, 0);
  let answer;

  function countDVD(mid) {
    let cnt = 1;
    let sum = 0;
    arr.forEach((el) => {
      if (sum + el > mid) {
        cnt++;
        sum = el;
      } else {
        sum += el;
      }
    });
    return cnt;
  }

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (countDVD(mid) <= targetCnt) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
