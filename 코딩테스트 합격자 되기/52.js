function permutations(arr, n) {
  // 더 이상 뽑을 수 없다면 반환하여 탈출 조건으로 사용
  if (n === 0) return [[]];
  const result = [];

  // 요소를 순환
  arr.forEach((fixed, idx) => {
    // 현재 요소를 제외한 나머지 요소들을 복사
    const rest = [...arr];
    rest.splice(idx, 1);

    // 나머지 요소들로 순열 구함
    const perms = permutations(rest, n - 1);

    // 나머지 요소들로 구한 순열에 현재 요소를 추가
    const combine = perms.map((p) => [fixed, ...p]);

    // 결과에 추가
    result.push(...combine);
  });

  return result;
}

function solution(n, weak, dist) {
  // 1. 주어진 weak 지점들을 선형으로 만들기 위해 weak 배열에 마지막 지점 + n 을 추가
  const length = weak.length;
  for (let i = 0; i < length; i++) {
    weak.push(weak[i] + n);
  }

  // 2. 투입할 수 있는 친구들의 수에 1을 더한 값을 초기값으로 설정
  let answer = dist.length + 1;

  // 3. 모든 weak 지점을 시작점으로 설정하며 경우의 수를 탐색
  for (let i = 0; i < length; i++) {
    for (const friends of permutations(dist, dist.length)) {
      // 4. friends에 들어있는 친구들을 순서대로 배치하여 투입된 친구 수 (cnt) 측정
      let cnt = 1;
      let position = weak[i] + friends[cnt - 1];
      // 5. 현재 투입된 친구가 다음 weak 지점까지 갈 수 있는지 검사
      for (let j = i; j < i + length; j++) {
        if (position < weak[j]) {
          cnt += 1;
          // 6. 투입 가능한 친구의 수를 초과한 경우 탐색 중단
          if (cnt > dist.length) {
            break;
          }
          position = weak[j] + friends[cnt - 1];
        }
      }
      // 7. 최소 친구 수를 구함
      answer = Math.min(answer, cnt);
    }
  }
  // 8. 모든 경우의 수를 탐색한 결과가 투입 가능한 친구 수를 초과하는 경우, -1 반환
  return answer <= dist.length ? answer : -1;
}
