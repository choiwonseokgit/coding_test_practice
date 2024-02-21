function solution(len, arr) {
  const answerArr = [];
  arr.forEach((el, i) => {
    if (i === 0 || arr[i - 1] < el) answerArr.push(el);
  });
  console.log(answerArr);
}

solution(6, [7, 3, 9, 5, 6, 12]);
//7 9 6 12
