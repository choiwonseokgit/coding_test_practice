function solution(numbers) {
  const strs = numbers.map(String);

  strs.sort((a, b) => b + a - (a + b));

  if (strs.every((str) => str === "0")) return "0";

  return strs.join("");
}

function compare(a, b) {
  // 1. 각 수를 문자열로 바꾼 뒤, 조합하여 비교
  // ex : a = 3, b = 30 -> t1 = '330' t2 = '303' t1 > t2
  const t1 = a.toString() + b.toString();
  const t2 = b.toString() + a.toString();

  return t1 > t2 ? -1 : 1;
}

function solution(numbers) {
  // 2. compare 함수를 이용하여 내림차순으로 정렬합니다.
  const sortedNums = numbers.sort(compare);
  // 3. 각 정렬된 수를 문자열로 이어붙인 뒤, int로 변환한 값을 문자열로 다시 변환하여 반환합니다.
  const answer = sortedNums.join("");
  return Number(answer) === 0 ? "0" : answer;
}
