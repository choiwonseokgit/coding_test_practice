function solution(limitNum) {
  let answerStr = "";

  function DFS(num, selected) {
    if (num > limitNum) {
      if (selected.length) answerStr += selected.join(" ") + "\n";
      return;
    }

    DFS(num + 1, [...selected, num]);
    DFS(num + 1, [...selected]);
  }

  DFS(1, []);

  return answerStr.trim();
}

function solution2(limitNum) {
  const answerArr = [];
  const checkArr = Array.from({ length: limitNum + 1 }, () => false);

  function DFS(v) {
    if (v > limitNum) {
      let answerStr = "";
      checkArr.forEach((el, i) => {
        if (el) answerStr += `${i} `;
      });
      if (answerStr) answerArr.push(answerStr);
      return;
    }
    checkArr[v] = true;
    DFS(v + 1);
    checkArr[v] = false;
    DFS(v + 1);
  }

  DFS(1);

  return answerArr.join("\n");
}

console.log(solution(3));
// console.log(solution2(3));
