function solution(len, arr) {
  const numSumArr = arr.map((el) => {
    const numSum = el
      .toString()
      .split("")
      .reduce((acc, num) => {
        return acc + parseInt(num);
      }, 0);
    return { num: el, sum: numSum };
  });

  let maxNumSum = numSumArr[0];
  for (let i = 0; i < len; i++) {
    const currNumSum = numSumArr[i];

    if (maxNumSum.sum < currNumSum.sum) maxNumSum = currNumSum;
    if (maxNumSum.sum === currNumSum.sum) {
      maxNumSum = maxNumSum.num > currNumSum.num ? maxNumSum : currNumSum;
    }
  }
  return maxNumSum.num;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
