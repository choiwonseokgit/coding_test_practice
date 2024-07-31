function solution(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);
  let answer = -1;
  for (let i = 0; i < arr.length; i++) {
    const [startTime, endTime] = arr[i];
    const leftArr = arr.filter((_, idx) => idx !== i);
    let cnt = 0;
    leftArr.forEach((el) => {
      const [leftStartTime, leftEndTime] = el;
      if (
        (leftStartTime >= startTime && leftStartTime < endTime) ||
        (leftStartTime < startTime && leftEndTime > startTime)
      ) {
        cnt++;
      }
    });
    answer = Math.max(cnt, answer);
    console.log(cnt);
  }

  return answer;
}

function solution2(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  const answerCandidates = [];

  for (let i = 0; i < len - 1; i++) {
    const endTime = arr[i][1];
    let cnt = 1;
    for (let j = i + 1; j < len; j++) {
      const nextStartTime = arr[j][0];
      if (nextStartTime < endTime) cnt++;
    }
    answerCandidates.push(cnt);
  }

  return Math.max(...answerCandidates);
}

function solution_teacher(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  const newArr = arr.flatMap((el) => [
    [el[0], "s"],
    [el[1], "e"],
  ]);
  newArr.sort((a, b) => {
    // if (a[0] === b[0]) return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  });
  console.log(newArr);
  let answer = 0;
  let cnt = 0;
  newArr.forEach((el) => {
    if (el[1] === "s") cnt++;
    else if (el[1] === "e") cnt -= 1;
    answer = Math.max(answer, cnt);
  });
  return answer;
}

// console.log(
//   solution(
//     5,
//     `14 18
// 12 15
// 15 20
// 20 30
// 5 14`
//   )
// );
// console.log(
//   solution2(
//     5,
//     `14 18
// 12 15
// 15 20
// 20 30
// 5 14`
//   )
// );
console.log(
  solution_teacher(
    5,
    `14 18
12 15
15 20
20 30
5 14`
  )
);
