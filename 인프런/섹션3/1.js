function isValid(startStr, endStr) {
  const reversedEndStr = endStr.split("").reverse().join("");
  return startStr === reversedEndStr;
}

function solution(str) {
  const lowerStr = str.toLowerCase();
  const halfLength = Math.floor(lowerStr.length / 2);

  const startStr = lowerStr.slice(0, halfLength);
  //홀수일때
  if (lowerStr.length % 2 === 1) {
    const endStr = lowerStr.slice(halfLength + 1, lowerStr.length);
    return isValid(startStr, endStr);
  }

  const endStr = lowerStr.slice(halfLength, lowerStr.length);
  return isValid(startStr, endStr);
}

console.log(solution("gooG"));
console.log(solution("abcba"));
console.log(solution("abcbd"));
