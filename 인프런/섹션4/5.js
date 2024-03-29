function solution(k, arr) {
  const sumArr = [];

  function combination(start, selected) {
    console.log(start, selected);
    if (selected.length === k) {
      sumArr.push(selected.reduce((acc, el) => acc + el, 0));
      return;
    }
    //0 1 2 3 4 5
    for (let i = start; i < arr.length; i++) {
      combination(i + 1, [...selected, arr[i]]);
    }
  }

  combination(0, []);

  sumArr.sort((a, b) => b - a);
  const deDuplicatedArr = Array.from(new Set(sumArr));
  return deDuplicatedArr[k - 1] ? deDuplicatedArr[k - 1] : -1;
}

// function solution(k, arr) {
//   const sumArr = [];
//   function combination(startIdx, currArr) {
//     // console.log(startIdx, currArr);
//     if (currArr.length === k) {
//       sumArr.push(currArr.reduce((acc, el) => acc + el, 0));
//       return;
//     }

//     for (let i = startIdx; i < arr.length; i++) {
//       combination(i + 1, [...currArr, arr[i]]);
//     }
//   }

//   combination(0, []);

//   sumArr.sort((a, b) => b - a);
//   const deDuplicatedArr = Array.from(new Set(sumArr));
//   return deDuplicatedArr[k - 1] ? deDuplicatedArr[k - 1] : -1;
// }

// console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
console.log(solution(3, [1, 2, 3, 4, 5]));
