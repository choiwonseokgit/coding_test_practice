function solution(enroll, referral, seller, amount) {
  const totalObj = {};

  enroll.forEach((e) => {
    totalObj[e] = 0;
  });

  const parentMap = new Map();

  for (let i = 0; i < enroll.length; i++) {
    parentMap.set(enroll[i], referral[i]);
  }

  for (let i = 0; i < seller.length; i++) {
    let name = seller[i];
    let money = amount[i] * 100;

    while (name !== "-" && money > 0) {
      const commission = Math.floor(money * 0.1);
      const profit = money - commission;

      totalObj[name] += profit;

      name = parentMap.get(name);
      money = commission;
    }
  }

  return enroll.map((e) => totalObj[e]);
}

function solution_book(enroll, referral, seller, amount) {
  // 1. parent 오브젝트 key는 enroll의 노드, value는 referral의 노드로 구성됨
  let parent = {};

  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // 2. total 오브젝트 생성 및 초기화
  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  // 3. seller 배열과 amount 배열을 이용하여 이익 분배
  for (let i = 0; i < seller.length; i++) {
    // 4. 판매자가 판매한 총 금액 계산
    let money = amount[i] * 100;
    let curName = seller[i];

    // 5. 판매자부터 차례대로 상위 노드로 이동하여 이익 분배
    while (curName !== "-" && money > 0) {
      // 6. 현재 판매자가 받을 금액 계산(10%를 제외한 금액)
      total[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      // 7. 10%를 제외한 금액 계산
      money = Math.floor(money / 10);
    }
  }

  // 8. enroll 배열의 모든 노드에 대해 해당하는 이익을 배열로 반환
  return enroll.map((name) => total[name]);
}
