function solution(str, word) {
  const strArr = str.split("");
  //왼쪽부터 떨어진 거리
  let cnt = 10000;
  const answerArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === word) cnt = 0;
    else cnt += 1;
    answerArr.push(cnt);
  }

  cnt = 10000;
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] === word) cnt = 0;
    else cnt += 1;
    answerArr[i] = Math.min(answerArr[i], cnt);
  }

  return answerArr.join(" ");
}

console.log(solution("teachermode", "e"));

// function solution(str, word) {
//   const strArr = str.split("");
//   //왼쪽부터 떨어진 거리
//   let leftCount = 10000;
//   const leftCountArr = [];
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === word) {
//       leftCount = 0;
//       leftCountArr.push(leftCount);
//       continue;
//     }
//     leftCount += 1;
//     leftCountArr.push(leftCount);
//   }
//   //오른쪽부터 떨어진 거리
//   let rightCount = 10000;
//   const rightCountArr = [];
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     if (strArr[i] === word) {
//       rightCount = 0;
//       rightCountArr.push(rightCount);
//       continue;
//     }
//     rightCount += 1;
//     rightCountArr.push(rightCount);
//   }
//   rightCountArr.reverse();

//   let answerStr = "";
//   leftCountArr.forEach((el, i) => {
//     answerStr += Math.min(el, rightCountArr[i]) + " ";
//   });
//   return answerStr;
// }

// function solution(str, word) {
//   //내 풀이
//   const strArr = str.split("");
//   let answerStr = "";
//   strArr.forEach((el, idx) => {
//     if (el === word) {
//       answerStr += "0 ";
//       return;
//     }
//     const leftSide = strArr.slice(0, idx);
//     const leftSideWordIdx = leftSide.findLastIndex((el) => el === word);

//     const rightSide = strArr.slice(idx + 1, strArr.length);
//     const rightSideWordIdx = rightSide.findIndex((el) => el === word);

//     const minIdx = (leftSideWordIdx, rightSideWordIdx) => {
//       if (leftSideWordIdx === -1) return rightSideWordIdx + 1;
//       if (rightSideWordIdx === -1)
//         return Math.abs(leftSideWordIdx - leftSide.length);

//       const changedLeftSideWordIdx = Math.abs(
//         leftSideWordIdx - leftSide.length
//       );
//       const changedRightSideWordidx = rightSideWordIdx + 1;

//       return Math.min(changedLeftSideWordIdx, changedRightSideWordidx);
//     };

//     answerStr += `${minIdx(leftSideWordIdx, rightSideWordIdx)} `;
//   });
//   return answerStr;
// }
