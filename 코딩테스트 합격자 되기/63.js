function multiplyMatrices(matrix1, matrix2) {
  // 1. 결과 행렬을 0으로 초기화
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // 2. 행렬 곱셈을 수행
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function transposeMatrix(matrix) {
  // 3. 결과 행렬을 0으로 초기화
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // 전치 행렬을 계산
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

function solution(matrix1, matrix2) {
  // 주어진 두 행렬을 곱함
  const multiplied = multiplyMatrices(matrix1, matrix2);
  // 곱셈 결과의 전치 행렬을 계산
  const transposed = transposeMatrix(multiplied);
  return transposed;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
  )
);
