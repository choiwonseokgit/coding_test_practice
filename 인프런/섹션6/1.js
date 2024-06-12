function solution(str) {
  const stack = [];
  const left = "(";
  const right = ")";

  for (const s of str) {
    if (s === left) stack.push(left);

    if (s === right && stack.length !== 0) stack.pop();
    else return "NO";
  }
  // left가 남아있을때 판단
  return stack.length === 0 ? "YES" : "NO";
}

console.log(solution("(()(()))(()"));
