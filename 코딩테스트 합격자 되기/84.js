function solution(k, tangerine) {
  /*
    - k개의 귤을 골라야 하는데 귤의 종류가 제일 적어야함
    - 찾은 귤의 종류 갯수 return
    */

  // 귤의 종류에 대한 갯수 cnt할 cntMap
  const cntMap = new Map();

  // 귤 cnt
  tangerine.forEach((t) => {
    cntMap.set(t, (cntMap.get(t) || 0) + 1);
  });

  // cntArr = cntMap 배열로 바꿈
  const cntArr = Array.from(cntMap);

  // cntArr cnt순으로 내림차순 정렬
  cntArr.sort((a, b) => b[1] - a[1]);

  // answer
  let answer = 0;
  // cntArr for loop 순회하면서 종류 수(answer) cnt
  for (const [type, typeCnt] of cntArr) {
    // if (k = 0) break
    if (k <= 0) break;
    // answer 증가
    answer += 1;
    // k - 갯수
    k -= typeCnt;
  }
  // return answer
  return answer;
}
