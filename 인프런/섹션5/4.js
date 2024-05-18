function solution(limitNum, arr) {
  let cnt = 0;
  arr.forEach((_, i) => {
    const slicedArr = arr.slice(i);
    let sum = 0;
    for (let i = 0; i < slicedArr.length; i++) {
      sum += slicedArr[i];
      if (sum <= limitNum) cnt += 1;
      if (sum > limitNum) break;
    }
  });
  return cnt;
}

function solution2(limitNum, arr) {
  let left = (right = 0);
  let sum = 0;
  let cnt = 0;
  while (left < arr.length) {
    if (sum <= limitNum) {
      if (sum) cnt++;
      sum += arr[right++];
    } else {
      left++;
      right = left;
      sum = 0;
    }
  }
  return cnt;
}

console.log(solution2(5, [1, 3, 1, 2, 3]));

// console.log(solution_DFS(5, [1, 3, 1, 2, 3]));

// function solution_DFS(limitNum, arr) {
//   let cnt = 0;
//   const answerArr = [];

//   function DFS(L, selected, left) {
//     const sum = selected.reduce((acc, el) => acc + el, 0);
//     if (left.length === 0 || sum > limitNum) return;
//     else {
//       if (selected.length && sum <= limitNum) {
//         answerArr.push(selected);
//       }
//       DFS(L + 1, [...selected, left[0]], [...left.slice(1)]);
//       DFS(L + 1, selected, [...left.slice(1)]);
//     }
//   }

//   DFS(0, [], arr);
//   console.log(answerArr);
//   return Array.from(new Set(answerArr.map((el) => el.join("")))).length;
// }

// function solution_DFS2(limitNum, arr, left) {
//   let cnt = 0;

//   function DFS(L, selected, left) {
//     let cnt = 0;
//     console.log(selected, left);
//     const sum = selected.reduce((acc, el) => acc + el, 0);
//     if (left.length === 0) return;
//     else {
//       if (selected.length && sum <= limitNum) {
//         cnt += 1;
//       }
//       for (let i = 0; i < left.length; i++) {
//         DFS(
//           L + 1,
//           [...selected, left[i]],
//           [...left.slice(0, i), ...left.slice(i + 1)]
//         );
//       }
//     }
//   }

//   DFS(0, [], arr);
//   return cnt;
// }
