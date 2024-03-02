function solution(len, arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  let prev = 0;
  let place = 1;
  let cnt = 0;
  const resultObj = {};

  for (let i = 0; i < len; i++) {
    const curr = newArr[i];
    console.log(prev, curr);
    if (prev === curr) {
      resultObj[curr] = place - 1;
      cnt += 1;
      continue;
    }
    if (prev !== curr) {
      resultObj[curr] = place + cnt;
      place += 1;
      cnt = 0;
      prev = curr;
    }
  }
  const result = arr.map((el) => resultObj[el]);
  console.log(result);
}

solution(7, [87, 89, 87, 87, 92, 100, 76]);
solution(5, [87, 89, 92, 100, 76]);
