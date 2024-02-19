function solution(s) {
  function isUpperCase(char) {
    if (char === char.toUpperCase()) return true;
    return false;
  }

  const arr = s.split("");
  const cntUpperCase = arr.reduce((acc, el) => {
    if(isUpperCase(el)) return acc + 1;
    return acc;
  }, 0)

  return cntUpperCase;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
