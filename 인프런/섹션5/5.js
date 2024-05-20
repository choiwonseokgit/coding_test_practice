function solution(k, arr) {
  const lastIdx = arr.length - k;
  let maxVal = 0;
  for (let i = 0; i <= lastIdx; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    console.log(sum);
    maxVal = Math.max(maxVal, sum);
  }
  return maxVal;
}

function solution2(k, arr) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxVal = 0;

  while (arr[j]) {
    if (i + k === j) {
      maxVal = Math.max(sum, maxVal);
      sum = 0;
      i++;
      j = i;
    }
    sum += arr[j++];
  }
  return maxVal;
}
//슬라이딩 윈도우
function solution3(k, arr) {
  let maxVal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + k > arr.length) break;
    const newArr = arr.slice(i, i + k);
    const sum = newArr.reduce((acc, el) => acc + el, 0);
    maxVal = Math.max(maxVal, sum);
  }
  return maxVal;
}
//슬라이딩 윈도우
function solution4(k, arr) {
  let maxVal = arr.slice(0, k).reduce((acc, el) => acc + el, 0);
  let sum = maxVal;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    maxVal = Math.max(sum, maxVal);
  }
  return maxVal;
}

console.log(solution4(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
