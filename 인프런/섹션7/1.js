function solution_DFS(n, arr) {
  for (let i = 0; i < n; i++) {
    let minVal = 99999;
    let minIdx = null;
    for (let j = i + 1; j < n; j++) {
      if (minVal > arr[j]) {
        minVal = arr[j];
        minIdx = j;
      }
    }
    if (minVal < arr[i]) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}
function solution_DFS(n, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

console.log(solution_DFS(6, [13, 5, 11, 7, 23, 15]));
console.log(solution_DFS(6, [13, 5, 11, 7, 23, 15]));
