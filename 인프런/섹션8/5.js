function solution(arr) {
  let isPossible = false;

  function DFS(idx, selected, left) {
    if (idx > arr.length - 1) {
      if (
        selected.reduce((acc, el) => acc + el, 0) ===
        left.reduce((acc, el) => acc + el, 0)
      ) {
        isPossible = true;
      }
      return;
    }

    const leftTargetIdx = left.findIndex((el) => el === arr[idx]);
    DFS(
      idx + 1,
      [...selected, left[leftTargetIdx]],
      [...left.slice(0, leftTargetIdx), ...left.slice(leftTargetIdx + 1)]
    );
    DFS(idx + 1, selected, left);
  }

  DFS(0, [], arr);

  return isPossible ? "YES" : "NO";
}

function solution2(arr) {
  let isPossible = false;
  const checkArr = new Array(arr.length).fill(false);

  function DFS(idx) {
    if (isPossible) return;

    if (idx > arr.length - 1) {
      let selectedSum = 0;
      let leftSum = 0;
      checkArr.forEach((el) => {
        if (el) selectedSum += el;
        else leftSum += el;
      });

      if (selectedSum === leftSum) isPossible = true;
      return;
    }

    checkArr[idx] = true;
    DFS(idx + 1);
    checkArr[idx] = false;
    DFS(idx + 1);
  }

  DFS(0);

  return isPossible ? "YES" : "NO";
}

// console.log(solution([1, 3, 5, 6, 7, 10]));
console.log(solution2([1, 3, 5, 6, 7, 10]));
