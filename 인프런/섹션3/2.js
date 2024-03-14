function solution(str) {
  const cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("").toLowerCase();
  return cleanedStr === reversedStr ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
