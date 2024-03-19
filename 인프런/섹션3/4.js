function solution(str, word) {
  const strArr = str.split("");
  let answerStr = "";
  strArr.forEach((el, idx) => {
    if (el === word) {
      answerStr += "0 ";
      return;
    }
    const leftSide = strArr.slice(0, idx);
    const leftSideWordIdx = leftSide.findLastIndex((el) => el === word);

    const rightSide = strArr.slice(idx + 1, strArr.length);
    const rightSideWordIdx = rightSide.findIndex((el) => el === word);

    const minIdx = (leftSideWordIdx, rightSideWordIdx) => {
      if (leftSideWordIdx === -1) return rightSideWordIdx + 1;
      if (rightSideWordIdx === -1)
        return Math.abs(leftSideWordIdx - leftSide.length) + 1;

      const changedLeftSideWordIdx = Math.abs(
        leftSideWordIdx - leftSide.length
      );
      const changedRightSideWordidx = rightSideWordIdx + 1;

      return Math.min(changedLeftSideWordIdx, changedRightSideWordidx);
    };

    answerStr += `${minIdx(leftSideWordIdx, rightSideWordIdx)} `;
  });
  return answerStr;
}

console.log(solution("teachermode", "e"));
