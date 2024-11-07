function solution(answers) {
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  const answers1 = [1, 2, 3, 4, 5];
  const answers2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answers3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, i) => {
    if (answer === answers1[i % answers1.length]) cnt1++;
    if (answer === answers2[i % answers2.length]) cnt2++;
    if (answer === answers3[i % answers3.length]) cnt3++;
  });

  const maxVal = Math.max(cnt1, cnt2, cnt3);

  const cnts = [cnt1, cnt2, cnt3]
    .map((el, i) => [el, i + 1])
    .filter((el) => el[0] === maxVal);

  if (cnts.length === 1) return [cnts[0][1]];

  return cnts.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}

function solution2(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answers] of answers.entries()) {
    for (const [j, patterns] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}
