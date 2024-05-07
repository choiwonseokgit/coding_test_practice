function solution(str) {
  const stack = [];
  const left = "(";
  const right = ")";

  for (const s of str) {
    if (s === left) stack.push(left);

    if (s === right && stack.length !== 0) stack.pop();
    else return "NO";
  }
  return "YES";
}

console.log(solution("(()(()))(()"));
