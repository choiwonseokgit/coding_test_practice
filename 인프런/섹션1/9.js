function solution(s) {
  const replacedStr = s.replaceAll("A", "#");
  return replacedStr;
}

let str = "BANANA";
console.log(solution(str));
