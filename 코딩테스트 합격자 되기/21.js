function isPossible(paramMap, arr) {
  const compareMap = new Map();

  arr.forEach((el) => {
    compareMap.set(el, (compareMap.get(el) || 0) + 1);
  });

  let isSame = true;
  const keys = [...paramMap.keys()];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (compareMap.get(key) !== paramMap.get(key)) {
      isSame = false;
      break;
    }
  }
  return isSame;
}

function solution(want, number, discount) {
  const map = new Map();
  let cnt = 0;

  want.forEach((w, i) => {
    map.set(w, number[i]);
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    const slicedArr = discount.slice(i, i + 10);
    if (isPossible(map, slicedArr)) cnt++;
  }

  return cnt;
}

function isShallowEqual(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (val1 !== val2) return false;
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};

  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }

    if(isShallowEqual(discount10d, wantObj)) answer += 1;
  }

  return answer
}
