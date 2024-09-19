function solution() {
  function DFS(node) {
    if (node > 7) return;

    // console.log("전위 순회", node);
    DFS(2 * node);
    console.log("중위 순회", node);
    DFS(2 * node + 1);
    // console.log("후위 순회", node);
  }

  DFS(1);
}

console.log(solution());
