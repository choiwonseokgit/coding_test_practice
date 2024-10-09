//연속한 자연수들
function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    let left = n;
    let j = i;
    while (left > 0) {
      left -= j;
      j += 1;
    }
    if (left === 0) cnt++;
  }
  return cnt;
}
