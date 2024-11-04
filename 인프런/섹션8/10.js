function solution(targetNum, arr) {
  let answer = "";
  const checkArr = Array.from({ length: arr.length }, () => false);

  function DFS(level, selected) {
    if (level === targetNum) {
      answer += selected.join(" ") + "\n";
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!checkArr[i]) {
          checkArr[i] = true;
          DFS(level + 1, [...selected, arr[i]]);
        }
        checkArr[i] = false;
      }
    }
  }

  DFS(0, []);

  return answer.trim();
}

console.log(solution(2, [3, 6, 9]));
