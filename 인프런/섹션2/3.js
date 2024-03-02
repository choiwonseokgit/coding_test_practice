//1 가위 2 바위 3 보
function solution(length, arr1, arr2) {
  const rsp = (a, b) => {
    if (a === 1) {
      if (b === 1) return "D";
      if (b === 2) return "B";
      if (b === 3) return "A";
    }
    if (a === 2) {
      if (b === 1) return "A";
      if (b === 2) return "D";
      if (b === 3) return "B";
    }
    if (a === 3) {
      if (b === 1) return "B";
      if (b === 2) return "A";
      if (b === 3) return "D";
    }
  };

  for(let i =0; i<length; i++) {
    console.log(rsp(arr1[i], arr2[i]));
  }
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
