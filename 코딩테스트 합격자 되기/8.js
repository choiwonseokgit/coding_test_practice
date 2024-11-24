function solution(str) {
  const [left, right] = ["(", ")"];
  const stack = [];

  for (const s of str) {
    if (s === left) stack.push(s);
    else if (s === right) {
      if (stack.length) stack.pop();
      else return false;
    }
  }

  return !stack.length;
}

console.log(solution("(())()")); //true
console.log(solution("((())()")); //false
console.log(solution(")("));
