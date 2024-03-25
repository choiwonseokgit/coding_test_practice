function solution(money, arr) {
  arr.sort((a, b) => a[0] / 2 + a[1] - (b[0] / 2 + b[1]));
  console.log(arr);
  let cnt = 0;
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    //일단 더한다
    numSum += arr[i][0] + arr[i][1];
    //토탈이 넘으면 그때 이전값과 비교해서
    console.log(numSum, money);
    if (numSum > money) {
      const prevDivideCase =
        numSum -
        (arr[i - 1][0] + arr[i - 1][1]) +
        (arr[i - 1][0] / 2 + arr[i - 1][1]);
      const currDivideCase =
        numSum - (arr[i][0] + arr[i][1]) + arr[i][0] / 2 + arr[i][1];
      const smallerSum =
        prevDivideCase < currDivideCase ? prevDivideCase : currDivideCase;

      console.log("smallerSum", smallerSum);
      if (smallerSum <= money) {
        cnt += 1;
      }
      break;
    }
    //안넘으면 카운트
    cnt += 1;
  }
  return cnt;
}

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
);
console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
);
console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
);
