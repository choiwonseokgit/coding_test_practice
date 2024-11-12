function solution(s) {
  const stack = [];

  for (const c of s) {
    const prev = stack[stack.length - 1];

    if (prev === c) stack.pop();
    else stack.push(c);
  }

  return stack.length ? 0 : 1;
}
