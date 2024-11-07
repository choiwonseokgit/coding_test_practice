function solution(arr1, arr2) {
  const newArr = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    const newArr1 = arr1[i];
    for (let j = 0; j < arr2[0].length; j++) {
      const newArr2 = [];
      for (let k = 0; k < arr2.length; k++) {
        newArr2.push(arr2[k][j]);
      }
      newArr[i][j] = newArr1.reduce((acc, el, i) => acc + el * newArr2[i], 0);
    }
  }

  return newArr;
}

function solution2(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;
  const r2 = arr2.length;
  const c2 = arr2[0].length;

  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return ret;
}
