function solution(arr1, arr2) {
  const newArr = [...arr1, ...arr2].sort((a, b) => a - b);
  return newArr;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
