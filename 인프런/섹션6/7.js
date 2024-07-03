function solution_DFS(n, m) {
  const essentialSub = n.split("");
  const mySubjects = m.split("");

  for (const s of mySubjects) {
    if (!essentialSub.length) return "YES";

    if (essentialSub.includes(s) && essentialSub[0] !== s) return "NO";
    essentialSub.shift();
  }

  return essentialSub.length ? "NO" : "YES";
}

function solution_DFS(n, m) {
  const essentialSub = n.split("");
  const mySubjects = m.split("");

  for (const s of mySubjects) {
    if (!essentialSub.length) return "YES";

    if (essentialSub.includes(s) && essentialSub.shift() !== s) return "NO";
  }

  return essentialSub.length ? "NO" : "YES";
}

console.log(solution_DFS("CBA", "CBDAGE"));
console.log(solution_DFS("CAB", "CBDAGE"));
console.log(solution_DFS("CBA", "CBDAGE"));
console.log(solution_DFS("CAB", "CBDAGE"));
