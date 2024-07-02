function solution_teacher(N, M) {
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  let cnt = 0;

  while (queue.length !== 1) {
    cnt += 1;
    const item = queue.shift();

    if (cnt !== M) queue.push(item);
    else cnt = 0;
  }

  return queue[0];
}

console.log(solution_teacher(8, 3));

// function solution(N, M) {
//   const arr = Array.from({ length: N }, (_, i) => i + 1);
//   let m = M - 1;
//   let answer;

//   function findPrince(idx, filteredArr) {
//     const len = filteredArr.length;
//     console.log(idx, filteredArr);
//     if (len === 1) return (answer = filteredArr[0]);

//     let newIdx = idx + m;
//     newIdx = newIdx >= len ? newIdx - len : newIdx;
//     if (newIdx === len) newIdx -= len;
//     const newFilteredArr = filteredArr.filter(
//       (el) => el !== filteredArr[newIdx]
//     );

//     return findPrince(newIdx, newFilteredArr);
//   }

//   findPrince(
//     m,
//     arr.filter((el) => el !== arr[m])
//   );

//   return answer;
// }
