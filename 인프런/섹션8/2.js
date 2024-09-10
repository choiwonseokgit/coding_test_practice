function solution(num) {
  let answerArr = [];
  // 11 -> 1011
  function getBinaryNum(num) {
    if (!num) return;

    answerArr.unshift(num % 2);
    const nextNum = parseInt(num / 2);

    getBinaryNum(nextNum);
  }

  getBinaryNum(11);

  return answerArr.join("");
}

console.log(solution(11));
