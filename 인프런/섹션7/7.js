function solution(len, str) {
  const arr = str.split("\n").map((el) => el.split(" ").map((el2) => +el2));
  arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  return arr.join('\n').replaceAll(',', ' ');
}

console.log(
  solution(
    5,
    `2 7
1 3
1 2
2 5
3 6`
  )
);
