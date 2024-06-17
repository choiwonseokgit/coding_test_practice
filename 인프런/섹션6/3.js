function solution(board, moves) {
  const stack = [];
  let cnt = 0;

  for (const move of moves) {
    let item = null;
    for (let i = 0; i < board[move - 1].length; i++) {
      // console.log(innerBoard[i]);
      if (board[i][move - 1] !== 0) {
        item = board[i][move - 1];
        board[i][move - 1] = 0;
        break;
      }
    }

    console.log(move, item, stack);
    // console.log(board);
    if (!item) continue;

    const stackLastItem = stack[stack.length - 1];
    if (item !== stackLastItem) {
      stack.push(item);
    } else if (item === stackLastItem) {
      stack.pop();
      cnt += 2;
    }
  }
  console.log(stack);

  return cnt;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
