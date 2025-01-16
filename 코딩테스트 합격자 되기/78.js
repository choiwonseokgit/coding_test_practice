function solution(board) {
  /*
    0011
    1111
    
    정사각형으로서 최대 변의 길이로 board 최신화 -> 정사각형의 조건 확인 작은 정사각형부터 만들면서 생각.
    */

  const row = board.length;
  const col = board[0].length;

  // 첫번째 행과 열은 최대 1x1 정사각형 밖에 못 만듦, for loop i=1, j=1부터 시작
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // 값이 1일때 왼쪽, 왼쪽 위 대각선, 위 를 보며 정사각형이 가능한지 판단
      if (board[i][j] === 1) {
        const left = board[i - 1][j];
        const leftUp = board[i - 1][j - 1];
        const up = board[i][j - 1];

        // 가능하면 min(왼쪽, 왼쪽 위 대각선, 위)+1 변경
        board[i][j] = Math.min(left, leftUp, up) + 1;
      }
    }
  }

  // return 최댓값 ** 2 (정사각형 넓이)
  const maxVal = Math.max(...board.map((b) => Math.max(...b)));
  return maxVal ** 2;
}
