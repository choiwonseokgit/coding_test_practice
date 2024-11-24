function solution(orders, course) {
  const map = new Map();

  // 조합 생성 함수
  function combination(idx, str, select) {
    if (select.length >= 2) {
      const menu = select.sort().join(""); // 선택된 메뉴 정렬 후 문자열로 변환
      map.set(menu, (map.get(menu) || 0) + 1); // map에 카운트
    }
    for (let i = idx; i < str.length; i++) {
      combination(i + 1, str, [...select, str[i]]);
    }
  }

  // 각 주문에서 조합 생성
  orders.forEach((order) => {
    const sortedOrder = order.split("").sort(); // 주문 정렬
    combination(0, sortedOrder, []);
  });

  const result = [];

  // 코스 길이별 최대 카운트를 찾아 결과에 추가
  course.forEach((length) => {
    const candidates = [...map].filter(
      ([menu, count]) => menu.length === length && count >= 2
    );
    if (candidates.length > 0) {
      const maxCount = Math.max(...candidates.map(([menu, count]) => count));
      result.push(
        ...candidates
          .filter(([menu, count]) => count === maxCount)
          .map(([menu]) => menu)
      );
    }
  });

  return result.sort(); // 결과 정렬
}

function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환하며 탈출 조건으로도 사용
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 추출
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합침
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

function solution(orders, courese) {
  const answer = [];

  for (const c of courese) {
    // 1. 각 코스 요리 길이에 대해
    const menu = [];
    for (const order of orders) {
      // 모든 주문에 대해
      const orderArr = order.split("").sort(); // 주문을 배열로 만든 후 정렬
      // 2. combinations() 로 메뉴 구성을 모두 구함
      const comb = combinations(orderArr, c);
      menu.push(...comb);
    }

    // 3. 각 메뉴 구성이 몇 번 주문되었는지 세어줌
    const counter = {};
    for (const m of menu) {
      const key = m.join(""); // 배열을 문자열로 변환
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      // 4. 가장 많이 주문된 구성이 1번 이상 주문된 경우
      for (const [key, val] of Object.entries(counter)) {
        if (val === max) {
          // 5. 가장 많이 주문된 구성을 찾아서
          answer.push(key); // 6. 정답 배열에 추가
        }
      }
    }
  }

  return answer.sort();
}
