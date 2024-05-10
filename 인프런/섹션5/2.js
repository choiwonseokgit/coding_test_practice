function solution(arr1, arr2) {
  const newArr = [];
  arr1.forEach((el1) => {
    arr2.forEach((el2) => {
      if (el1 === el2) newArr.push(el1);
    });
  });

  return newArr.sort((a, b) => a - b);
}

function solution_teacher(arr1, arr2) {
  const answer = [];
  let p1 = (p2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

console.log(solution_teacher([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
