function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }

  return sum;
}

// function solution(A, B) {
//   const chA = new Array(A.length).fill(false);
//   const chB = new Array(B.length).fill(false);
//   const arr = [];

//   function dfs(sum, level) {
//     if (level === A.length) {
//       return arr.push(sum);
//     } else {
//       for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < B.length; j++) {
//           if (!chA[i] && !chB[j]) {
//             const addNum = A[i] * B[j];
//             chA[i] = true;
//             chB[j] = true;
//             dfs(sum + addNum, level + 1);
//             chA[i] = false;
//             chB[j] = false;
//           }
//         }
//       }
//     }
//   }

//   dfs(0, 0);

//   return Math.min(...arr);
// }

// console.log(solution([1, 4, 2], [5, 4, 4]));
