function solution(str) {
  const stack = [];
  const left = "(";
  const right = ")";

  for (const s of str) {
    if (s === right) {
      while (true) {
        const popItem = stack.pop();
        if (popItem === left) break;
      }
    } else stack.push(s);
  }

  return stack.toString().replaceAll(",", "");
}

function solution_teacher(str) {
  const stack = [];
  const left = "(";
  const right = ")";

  for (const s of str) {
    if (s === right) {
      while (stack.pop() !== left);
    } else stack.push(s);
  }

  return stack.join("");
}

console.log(solution_teacher("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
