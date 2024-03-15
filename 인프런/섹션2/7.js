function isBong(xIdx, yIdx, arr) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const myVal = arr[xIdx][yIdx];
  for (let k = 0; k < 4; k++) {
    const nx = xIdx + dx[k];
    const ny = yIdx + dy[k];
    if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr.length) continue;
    const compareVal = arr[nx][ny];
    if (myVal < compareVal) return false;
  }
  return true;
}

function solution(len, arr) {
  // 4방향 탐색
  // (i+dx[k],j+dy[k])
  // dx=[-1, 0, 1, 0]
  // dy=[0, 1, 0, -1]
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (isBong(i, j, arr)) cnt += 1;
    }
  }
  return cnt;
}

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

// function solution(len, arr) {
//   const newArr = new Array(len + 2)
//     .fill()
//     .map((el) => new Array(len + 2).fill(0));

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       newArr[i + 1][j + 1] = arr[i][j];
//     }
//   }

//   let cnt = 0;

//   const isBong = (arr, i, j) => {
//     const item = arr[i][j];
//     if (
//       item > arr[i][j + 1] &&
//       item > arr[i + 1][j] &&
//       item > arr[i][j - 1] &&
//       item > arr[i - 1][j]
//     ) {
//       return true;
//     }
//     return false;
//   };

//   for (let i = 1; i < newArr.length - 1; i++) {
//     for (let j = 1; j < newArr.length - 1; j++) {
//       if (isBong(newArr, i, j)) cnt += 1;
//     }
//   }

//   console.log("cnt: ", cnt);
// }
