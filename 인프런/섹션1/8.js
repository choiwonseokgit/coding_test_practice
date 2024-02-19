function solution(arr) {
  let heightSum = 0;
  let finalIdx = 0;
  arr.forEach((el, i) => {
    if(heightSum === 100 || heightSum >= 100) {
      finalIdx = i;
      return;
    }
    heightSum += el;
  });
  return [...arr.slice(0,finalIdx-1)]
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
