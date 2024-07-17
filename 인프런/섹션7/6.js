function solution(len, arr) {
  const originArr = [...arr].sort((a, b) => a - b);
  let answer = "";
  arr.forEach((el, i) => {
    const item = originArr[i];
    if (el !== item) answer += `${i + 1} `;
  });

  return answer;
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(6, [120, 130, 150, 150, 130, 150]));
