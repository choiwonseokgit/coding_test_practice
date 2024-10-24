function solution(want, number, discount) {
  const map = new Map();
  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }

  function isPossible(arr) {
    const slicedMap = new Map();

    for (let i = 0; i < arr.length; i++) {
      slicedMap.set(arr[i], (slicedMap.get(arr[i]) || 0) + 1);
    }

    let isPossible = true;

    map.forEach((val, key) => {
      if (!slicedMap.get(key) || val !== slicedMap.get(key))
        return (isPossible = false);
    });

    return isPossible;
  }

  let cnt = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const slicedArr = discount.slice(i, i + 10);

    if (isPossible(slicedArr)) cnt++;
  }

  return cnt;
}
