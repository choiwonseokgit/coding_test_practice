function solution(N, number) {
  let answer = 0;
  let allCase = Array.from(new Array(9), () => new Set());

  // 같은 수인 경우
  if (N === number) return 1;

  // N 개의 수를 나란히 쓴 경우
  allCase.forEach((caseSet, index) => {
    if (index !== 0) caseSet.add(Number(String(N).repeat(i)));
  });

  for (let i = 1; i <= 8; ++i) {
    for (let j = 1; j < i; ++j) {
      for (let first of allCase[j]) {
        for (let second of allCase[i - j]) {
          allCase[i].add(first + second);
          allCase[i].add(first - second);
          allCase[i].add(first * second);
          allCase[i].add(first / second);
        }
      }
    }

    if (allCase[i].has(number)) return i;
  }

  return -1;
}
