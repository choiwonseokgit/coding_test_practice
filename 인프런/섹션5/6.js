function solution(num, str) {
  const arr = str.split("");
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const newVal = map.get(arr[i]) + 1;
      map.set(arr[i], newVal);
    } else map.set(arr[i], 1);
  }
  let maxVal = 0;
  let maxKey = "";
  map.forEach((v, k) => {
    if (v > maxVal) {
      maxVal = v;
      maxKey = k;
    }
  });
  return maxKey;
}

console.log(solution(15, "BACBACCACCBDEDE"));
