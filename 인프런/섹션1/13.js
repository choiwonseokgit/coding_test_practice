function solution(s) {
  function changeCase(char) {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }
  const arr = s.split("");
  let resultStr = ''
  arr.forEach((el) => {
    resultStr += changeCase(el);
  })
  return resultStr;
}

console.log(solution("StuDY"));
