function solution(studentsNum, testTimes, testResults) {
  let cnt = 0;

  for (let i = 1; i <= studentsNum; i++) {
    const mento = i;
    let possbileMenties = [];
    testResults.forEach((test, idx) => {
      const currPossibleMenties = findPossibleMenties(mento, test);
      if (idx === 0 && possbileMenties.length === 0)
        possbileMenties = currPossibleMenties;
      else
        possbileMenties = possbileMenties.filter((el) =>
          currPossibleMenties.includes(el)
        );
    });

    cnt += possbileMenties.length;
  }

  return cnt;

  function findPossibleMenties(mento, testResult) {
    const mentoIdx = testResult.findIndex((el) => el === mento);
    const currPossibleMenties = testResult.filter((_, i) => i > mentoIdx);
    return currPossibleMenties;
  }
}

// [3] [] [3,4,1,2]
// [3] [4,1,2] [4,3,2,1]

// 3,4 3,1 3,2 4,1 4,2 1,2
// 4,3 4,2 4,1 3,2 3,1 2,1
// 3,1 3,4 3,2 1,4 1,2 4,2
console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
