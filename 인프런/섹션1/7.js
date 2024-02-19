function solution(day, arr) {
  const stringArr = arr.map((el) => el.toString());
  const result = stringArr.reduce((acc, el) => {
    if (el.includes(day)) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return result;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
