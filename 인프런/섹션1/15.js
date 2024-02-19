function solution(s) {
  const sLength = s.length;
  if (sLength % 2 === 1) {
    console.log(sLength / 2);
    return s[Math.floor(sLength / 2)];
  } else {
    return s[Math.floor(sLength / 2)].repeat(2);
  }
}
console.log(solution("study"));
console.log(solution("good"));
