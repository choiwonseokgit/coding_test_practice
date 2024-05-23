function solution(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  arr1.sort();
  arr2.sort();
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < arr1.length; i++) {
    if (map1.has(arr1[i])) {
      const newVal = map1.get(arr1[i]) + 1;
      map1.set(arr1[i], newVal);
    } else map1.set(arr1[i], 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map2.has(arr2[i])) {
      const newVal = map2.get(arr2[i]) + 1;
      map2.set(arr2[i], newVal);
    } else map2.set(arr2[i], 1);
  }

  let answer = true;

  map1.forEach((val, key) => {
    if (!map2.has(key) || val !== map2.get(key)) return (answer = false);
    return;
  });

  return answer ? "YES" : "NO";
}

function solution2(str1, str2) {
  const map = new Map();

  for (const s of str1) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  for (const s of str2) {
    if (!map.has(s) || map.get(s) === 0) return "NO";
    map.set(s, map.get(s) - 1);
  }

  return "YES";
}

console.log(solution2("AbaAeCe", "baeeACA"));
console.log(solution2("abaCC", "Caaab"));
