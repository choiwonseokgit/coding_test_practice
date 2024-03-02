function solution(length, arr) {
  let cnt = 0;
  let prevValue = 0;
  // 1 0 1 1 1 0 0 1 1 0
  const result = arr.reduce((acc, el) => {
    if (prevValue === 1 && el === 1) {
      cnt += 1;
      acc += cnt;
    }
    if (prevValue === 0) cnt = 0;
    prevValue = el;
    return acc + el;
  }, 0);

  console.log(result)
}

solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
