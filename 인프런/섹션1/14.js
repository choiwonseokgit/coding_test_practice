function solution(s) {
  let biggest = -1;
  let idx = 0;
  s.forEach((el, i) => {
    const length = el.length;
    if (length > biggest) {
      biggest = length;
      idx = i;
    }
  });
  return s[idx];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
