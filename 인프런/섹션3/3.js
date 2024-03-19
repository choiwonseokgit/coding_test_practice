function solution(Str) {
  let answerStr = "";
  const arr = Str.split("");

  arr.forEach((el) => {
    if (!isNaN(el)) answerStr += el;
  });

  return parseInt(answerStr, 10);
}

console.log(solution("g0en2T0s8eSoft"));
