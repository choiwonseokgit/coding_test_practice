function solution(len, arr) {
  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] < 0) break;
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

function solution_teacher(len, arr) {
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(arr, j);
      }
    }
  }

  return arr;
}

// console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));
console.log(solution_teacher(8, [1, 2, 3, -3, -2, 5, 6, -6]));
