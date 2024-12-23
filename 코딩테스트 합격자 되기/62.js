function solution(arr, n) {
  // 1. 2차원 배열을 인자로 받고, 90도 회전시키는 함수
  function rotate90(arr) {
    // 2. 배열의 크기를 저장
    const n = arr.length;

    // 3. 배열의 크기와 동일한 2차원 배열 생성(초기값 0)
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    // 4. 배열을 90도 회전
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = arr[i][j];
      }
    }

    // 5. 90도로 회전한 배열 반환
    return rotated;
  }

  // 6. 원본 배열 arr을 복사
  let rotated = arr.map((row) => [...row]);

  // 7. 90도 회전 함수 호출
  for (let i = 0; i < n; i++) {
    rotated = rotate90(rotated);
  }

  return rotated;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);
