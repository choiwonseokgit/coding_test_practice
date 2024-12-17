function solution(n) {
  const arr = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  return parseInt(arr.join(""));
}

function solution_book(n) {
  // 1. 정수 n을 문자열로 변환하고 각 자릿수를 배열로 저장
  const digits = Array.from(String(n), Number);
  digits.sort((a, b) => b - a); // 2. 내림차순으로 정렬
  // 3. 정렬된 자릿수를 다시 하나의 문자열로 합쳐 정수로 변환
  const answer = Number(digits.join(""));
  return answer;
}
