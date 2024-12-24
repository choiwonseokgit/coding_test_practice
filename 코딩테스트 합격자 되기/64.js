function solution(n) {
  // return 달팽이 수열
  const arr = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1;

  let startRow = 0,
    startCol = 0;
  let endRow = n - 1,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // 1번째 행 채우기
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = num;
      num++;
    }
    startRow++;

    // 마지막 열 채우기
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endRow] = num;
      num++;
    }
    endCol--;

    // 마지막 행 채우기
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = num;
      num++;
    }
    endRow--;

    // 1번째 열 채우기
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = num;
      num++;
    }
    startCol++;
  }

  return arr;
}

console.log(solution(3));
console.log(solution(4));
