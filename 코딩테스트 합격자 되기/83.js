function solution(people, limit) {
  /*
    - 사람들을 구출하기 위해 필요한 최소 보트수 return
    - 구명 보트 최대 2명, 최대 무게 limit
    - 1 <= people <= 50000
    */

  // 보트의 최소 갯수 -> 2명을 태울 수 있는 보트가 최대한 많아야함

  // 오름차순 정렬
  people.sort((a, b) => a - b);

  let cnt = 0; // 보트 cnt

  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[j] + people[i] <= limit) {
      i += 1;
    }

    j -= 1;
    cnt += 1;
  }

  return cnt;
}
