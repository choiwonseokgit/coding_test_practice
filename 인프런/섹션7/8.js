function solution(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  arr.sort((a, b) => a[0] - b[0]);
  const cntArr = [];
  let cnt = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    let end = arr[i][1];
    for (let j = i + 1; j < arr.length; j++) {
      const start = arr[j][0];
      if (end <= start) {
        cnt++;
        end = arr[j][1];
      }
    }
    cntArr.push(cnt);
    cnt = 1;
  }

  return Math.max(...cntArr);
}
// greedy 대표적인 유형
// 1. 끝나는 시간으로 정렬(값이 같을시 시작하는 시간으로 정렬)
function solution_teacher(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let cnt = 1;
  let endTime = 0;
  for (let i = 0; i < len - 1; i++) {
    const startTime = arr[i][0];
    if (startTime >= endTime) {
      cnt++;
      endTime = arr[i][1];
    }
  }

  return cnt;
}

console.log(
  solution(
    5,
    `1 4
2 3
3 5
4 6
5 7`
  )
);
console.log(
  solution(
    3,
    `3 3
1 3
2 3`
  )
);
console.log(
  solution_teacher(
    5,
    `1 4
2 3
3 5
4 6
5 7`
  )
);
console.log(
  solution_teacher(
    3,
    `3 3
1 3
2 3`
  )
);
