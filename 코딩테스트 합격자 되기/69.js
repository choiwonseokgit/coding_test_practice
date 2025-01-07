function solution(keyinput, board) {
  const [max_x, max_y] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  let currX = 0,
    currY = 0;

  keyinput.forEach((key) => {
    switch (key) {
      case "up":
        if (currY < max_y) currY += 1;
        break;
      case "down":
        if (currY > -max_y) currY -= 1;
        break;
      case "left":
        if (currX > -max_x) currX -= 1;
        break;
      case "right":
        if (currX < max_x) currX += 1;
        break;
      default:
        break;
    }
  });

  return [currX, currY];
}
