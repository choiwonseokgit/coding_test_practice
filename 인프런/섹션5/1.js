function solution(arr1, arr2) {
  const newArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return newArr;
}

function solution_teacher(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1 += 1;
    } else {
      answer.push(arr2[p2]);
      p2 += 1;
    }
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

console.log(solution_teacher([1, 3, 5], [2, 3, 6, 7, 9]));
