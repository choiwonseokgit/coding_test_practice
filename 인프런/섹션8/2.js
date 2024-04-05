function solution(num) {
  let answer = "";

  function DFS(num) {
    if (num === 0) {
      return;
    }
    const quotient = Math.floor(num / 2);
    const binaryNum = num % 2;

    DFS(quotient);
    answer += binaryNum;
  }
  DFS(num);
  return answer;
}

// function solution(num) {
//   let answer = "";

//   function getBinaryNum(num, binaryArr) {
//     const quotient = Math.floor(num / 2);
//     const binaryNum = num % 2;

//     if (quotient === 0) {
//       const finalbinaryArr = [binaryNum, ...binaryArr];
//       answer += finalbinaryArr.join("");
//       return;
//     }

//     return getBinaryNum(quotient, [binaryNum, ...binaryArr]);
//   }

//   getBinaryNum(num, []);

//   return answer;
// }

console.log(solution(11));
