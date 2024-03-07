function solution(len, arr) {
  const findLineSum = (arr) => {
    return arr.map((el) => {
      return el.reduce((acc, init) => {
        return acc + init;
      }, 0);
    });
  };

  const findRowSum = (arr) => {
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        sum += arr[j][i];
      }
      tempArr.push(sum);
    }
    return tempArr;
  };

  const findCrossSum = (arr) => {
    let sum = 0;
    let otherSum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][i];
      otherSum += arr[i][arr.length - i - 1];
    }
    return [sum, otherSum];
  };

  const MaxValue = Math.max(
    ...findLineSum(arr),
    ...findRowSum(arr),
    ...findCrossSum(arr)
  );

  console.log(MaxValue);
}

solution(5, [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
// [4][0] [3][1] [2][2] [1][3] [0][4]
