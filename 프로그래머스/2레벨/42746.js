function solution(numbers) {
  const numToStr = numbers.map(String);

  numToStr.sort((a, b) => b + a - (a + b));
  // 두 문자열을 이어붙여서 더 큰 값을 만드는 쪽을 앞으로 정렬
  if (numToStr[0] === "0") return "0";

  return numToStr.join("");
}
