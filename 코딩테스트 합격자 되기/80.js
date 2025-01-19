function solution(amount) {
  /**
   * - 1, 10, 50, 100 의 동전만 쓸 수 있음
   * - amount를 동전을 최소한의 개수로만 써서 나타냄
   * - 그 동전들을 내림차순으로 배열에 담아 return
   *
   * - case 모두 구해서 최소 갯수 return
   */

  const coins = [100, 50, 10, 1];

  // coin count하는 함수
  function getCoinCount(amount, coins) {
    const coinCount = [];

    for (const coin of coins) {
      if (amount >= coin) {
        const cnt = Math.floor(amount / coin);
        amount %= coin;
        coinCount.push(...Array(cnt).fill(coin));
      }
    }

    return coinCount;
  }

  // 100원 부터 쓸때, 50원 부터 쓸때, 10원 부터 쓸때, 1원만 쓸때

  const counts = [];
  // for loop로 counts 배열에 삽입
  for (const coin of coins) {
    counts.push(
      getCoinCount(
        amount,
        coins.filter((c) => c <= coin)
      )
    );
  }

  counts.sort((a, b) => a.length - b.length);

  return counts[0];
}

console.log(solution(123)); // [100, 10, 10, 1, 1, 1]
console.log(solution(350)); // [100, 100, 100, 50]

function solution_book(amount) {
  //동전이 서로 배수의 관계라면 greedy로 풀 수 있음
  //뒤에 올 동전대신 앞의 동전이 모두 대신할 수 있기 때문

  const coins = [100, 50, 10, 1]; // 모두 배수 관계 greedy 가능
  coins.sort((a, b) => b - a); // 내림차순으로 정렬

  const cnt = [];

  for(const coin of coins) {
    while(amount >= coin) {
        amount -= coin;
        cnt.push(coin);
    }
  }

  return cnt
}

console.log(solution_book(123)); // [100, 10, 10, 1, 1, 1]
console.log(solution_book(350)); // [100, 100, 100, 50]