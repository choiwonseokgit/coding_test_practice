function solution(k, m, score) {
  const NumberOfBox = Math.floor(score.length / m);
  let returnScore = 0;
  score.sort((a, b) => a - b);
  for (let i = 0; i < NumberOfBox; i++) {
    const arr = score.slice(score.length - m, score.length);
    const min = Math.min(...arr);
    returnScore += min * arr.length;
    score.splice(score.length - m, m);
  }
  return returnScore;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // result: 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // result: 33
