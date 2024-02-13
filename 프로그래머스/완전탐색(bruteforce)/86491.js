function solution_cws(sizes) {
  //각 명함번호의 배열을 내림차순으로 정렬합니다
  sizes.forEach((size) => {
    size.sort((a, b) => b - a);
  });
  //0번 인덱스의 값 따로 1번 인덱스의 값 따로 배열에 담아줍니다.
  const zeroIdxArr = [];
  const firstIdxArr = [];
  sizes.forEach((size) => {
    zeroIdxArr.push(size[0]);
    firstIdxArr.push(size[1]);
  });

  //0번 인덱스의 값을 다 포함할 0번인덱스의 최댓값과
  //1번 인덱스의 값을 다 포함할 1번 인덱스의 최댓값을 곱하여
  //최종 명함 넓이를 리턴합니다.
  const width = Math.max(...zeroIdxArr) * Math.max(...firstIdxArr);
  return width;
}

function solution_mento(sizes) {
  let answer = 0;
  let width = 0;
  let height = 0;
  sizes.forEach(([w, h]) => {
    const rotatedW = Math.max(w, h);
    const rotatedH = Math.min(w, h);
    width = Math.max(rotatedW, width);
    height = Math.max(rotatedH, height);
  });

  answer = width * height;
  return answer;
}
