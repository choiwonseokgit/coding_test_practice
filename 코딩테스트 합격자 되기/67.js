function solution(yellow, white) {
  const totalSize = yellow + white;

  for (let col = 3; col <= Math.sqrt(totalSize); col++) {
    if (totalSize % col === 0) {
      const row = totalSize / col;

      if (yellow === (row + col - 2) * 2) {
        return [row, col];
      }
    }
  }

  return [];
}
