function solution(s) {
  const newArr = Array.from(new Set(s));
  newArr.map((el) => console.log(el));
  return;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
