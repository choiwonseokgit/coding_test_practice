function solution(n, a, b) {
  let round = 1;

  function fighting(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i += 2) {
      const sliceArr = arr.slice(i, i + 2);
      const [x, y] = sliceArr;
      if ((x === a && y === b) || (x === b && y === a)) {
        return round;
      } else if (sliceArr.includes(a)) {
        newArr.push(a);
      } else if (sliceArr.includes(b)) {
        newArr.push(b);
      } else {
        newArr.push(sliceArr[0]);
      }
    }

    round++;
    return fighting(newArr);
  }

  const arr = new Array(n).fill().map((_, i) => i + 1);
  return fighting(arr);
}

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }

  return answer;
}
