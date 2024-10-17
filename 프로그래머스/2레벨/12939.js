function solution(s) {
  const arr = s.split(" ");
  arr.sort((a, b) => a - b);

  const answer = `${Math.min(...arr)} ${Math.max(...arr)}`;

  return answer;
}
