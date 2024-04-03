function solution_teacher(n) {
  function DFS(num) {
    if (num === 0) return;
    else {
      DFS(num - 1);
      console.log(num);
    }
  }

  DFS(n);
}

function solution(n) {
  let answerStr = "";
  function getNumbers(startNum, selectedArr) {
    if (selectedArr.length === n) {
      answerStr += selectedArr.join(" ");
      return;
    }

    return getNumbers(startNum + 1, [...selectedArr, startNum]);
  }

  getNumbers(1, []);

  return answerStr;
}
// 1 []
// 2 [1]
// 3 [1,2]
// 4 [1,2,3]

// console.log(solution(10));
console.log(solution_teacher(3));
