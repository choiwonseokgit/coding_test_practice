function solution(d, budget) {
  /*
        d배열의 각 부서별로 신청한 예산을 budget 내에서 줘야함
        최대 지원할 수 있는 부서 갯수 return
    */
  // cnt
  let cnt = 0;
  // 오름차순 sort
  d.sort((a, b) => a - b);
  // for loop 순회
  for (const el of d) {
    if (budget >= el) {
      // budget이 더 크므로 지원 가능 -> budget -= el, cnt+=1
      budget -= el;
      cnt += 1;
    } else {
      // el이 budget보다 크면 지원 불가능 break
      break;
    }
  }

  return cnt;
}
