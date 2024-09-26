function solution(s) {
  const strArr = s.split("");
  const stack = [];

  const [left, right] = ["(", ")"];

  let isBreak = false;

  strArr.forEach((str) => {
    if (str === left) {
      stack.push(str);
    } else if (str === right) {
      if (!stack.length) {
        isBreak = true;
        return;
      } else {
        stack.pop();
      }
    }
  });

  return isBreak ? false : !stack.length;
}

//1. right이 더 많을때
//2. left가 더 많을때
//3. right이 먼저 나올때?
