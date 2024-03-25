function solution(money, arr) {
  let cntMax = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    let cnt = 0;
    arr.forEach((el, idx) => {
      if (idx === i) {
        total += el[0] / 2 + el[1];
      } else {
        total += el[0] + el[1];
      }

      if (total <= money) cnt += 1;
      else return;
    });
    cntMax = Math.max(cntMax, cnt);
  }
  return cntMax;
}

// console.log(
//   solution(41, [
//     [8, 6],
//     [2, 2],
//     [4, 3],
//     [4, 5],
//     [12, 1],
//   ])
// );
// console.log(
//   solution(41, [
//     [8, 6],
//     [2, 2],
//     [12, 1],
//     [4, 5],
//     [4, 3],
//   ])
// );
console.log(
  solution(33, [
    [2, 12], //13 + 12 + 9 + 10
    [8, 4],
    [6, 6],
    [6, 7],
  ])
);
