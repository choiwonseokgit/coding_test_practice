function solution(s) {
  const sArr = s.split("");
  const answer = Array.from(new Set(sArr)).join('');

  return answer;
}
console.log(solution("ksekkset"));
