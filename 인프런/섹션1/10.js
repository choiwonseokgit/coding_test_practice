function solution(s, t) {
  const arr = s.split("");
  const cnt = arr.reduce((acc, el) => {
    if (el === t) return acc + 1;
    return acc;
  }, 0);
  return cnt;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
