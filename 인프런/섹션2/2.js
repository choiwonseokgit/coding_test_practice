function solution(len, arr) {
  const answerArr = [];
  let prevTallest = 0;
  arr.forEach((el) => {
    if (prevTallest < el) {
      prevTallest = el;
      answerArr.push(el);
    }
  });
  console.log(answerArr.length);
}

solution(8, [130, 135, 148, 140, 145, 150, 150, 153]);
//5
