function solution(topping) {
  let cnt = 0;
  const allToppingMap = new Map();

  // 전체 토핑의 갯수
  topping.forEach((t) => {
    allToppingMap.set(t, (allToppingMap.get(t) || 0) + 1);
  });

  // 절반의 케이크의 토핑을 저장할 Set
  const halfCakeToppingSet = new Set();

  topping.forEach((t) => {
    halfCakeToppingSet.add(t);

    allToppingMap.set(t, allToppingMap.get(t) - 1);

    if (allToppingMap.get(t) === 0) {
      allToppingMap.delete(t);
    }

    if (allToppingMap.size === halfCakeToppingSet.size) cnt++;
  });

  return cnt;
}

function solution_book(topping) {
  // 1. 결괏값을 저장할 변수 초기화
  let splitCnt = 0;

  // 2. 토핑의 개수를 세어서 Map에 저장
  const toppingCounter = new Map();
  for (const t of topping) {
    toppingCounter.set(t, (toppingCounter.get(t) || 0) + 1);
  }

  // 3. 절반에 속한 토핑의 종류를 저장할 Set
  const halfToppingSet = new Set();

  // 4. 롤케이크를 하나씩 절반에 넣으면서 확인
  for (const t of topping) {
    // 5. 절반에 토핑을 추가하고, 해당 토핑의 전체 개수를 줄임
    halfToppingSet.add(t);
    toppingCounter.set(t, toppingCounter.get(t) - 1);

    // 6. 토핑의 전체 개수가 0이면 오브젝트에서 제거
    if (toppingCounter.get(t) === 0) {
      toppingCounter.delete(t);
    }

    // 7. 토핑의 종류의 수가 같다면
    if (halfToppingSet.size === toppingCounter.size) {
      splitCnt += 1;
    }
  }

  // 8. 공평하게 나눌 수 있는 방법의 수 반환
  return splitCnt;
}
