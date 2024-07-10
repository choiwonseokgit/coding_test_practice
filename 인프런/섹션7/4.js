function solution(len, arr) {
  for (let i = 1; i < len; i++) {
    let currIdx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[currIdx]) {
        [arr[j], arr[currIdx]] = [arr[currIdx], arr[j]];
        currIdx = j;
      }
    }
  }

  return arr;
}

function solution_teacher(len, arr) {
  for (let i = 1; i < len; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return arr;
}

console.log(solution(6, [11, 7, 5, 6, 10, 9]));
console.log(solution_teacher(6, [11, 7, 5, 6, 10, 9]));
