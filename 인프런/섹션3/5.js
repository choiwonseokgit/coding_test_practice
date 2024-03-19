function solution(Str) {
  const strArr = Str.split("");
  const map = new Map();

  strArr.forEach((el) => {
    if (map.has(el)) {
      let newValue = map.get(el);
      newValue += 1;
      map.set(el, newValue);
      return;
    }
    map.set(el, 1);
  });

  let answerStr = "";

  map.forEach((val, key) => {
    if (val === 1) {
      answerStr += `${key}`;
      return;
    }
    answerStr += `${key}${val}`;
  });

  return answerStr;
}

console.log(solution("KKHSSSSSSSE"));
