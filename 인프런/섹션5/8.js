function makeSortedMap(arr) {
  arr.sort();
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }
  return map;
}

function solution(s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  const tLen = t.length;
  const tMap = makeSortedMap(tArr);

  function isAnagram(pArr) {
    const pMap = makeSortedMap(pArr);
    let answer = true;
    tMap.forEach((val, key) => {
      if (!pMap.has(key) || pMap.get(key) !== val) return (answer = false);
      else return;
    });
    return answer;
  }

  let answer = 0;
  for (let i = tLen; i <= sArr.length; i++) {
    const arr = sArr.slice(i - tLen, i);
    if (isAnagram(arr)) answer += 1;
  }

  return answer;
}

function makeMap(str) {
  const map = new Map();
  for (const s of str) {
    map.set(s, (map.get(s) || 0) + 1);
  }
  return map;
}

function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (const [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

function solution2(s, t) {
  const len = t.length - 1;
  const sMap = makeMap(s.slice(0, len));
  const tMap = makeMap(t);
  let lt = 0;
  let cnt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sMap.has(s[rt])) sMap.set(s[rt], sMap.get(s[rt]) + 1);
    else sMap.set(s[rt], 1);

    if (compareMap(tMap, sMap)) cnt += 1;

    sMap.set(s[lt], sMap.get(s[lt]) - 1);
    if (sMap.get(s[lt]) === 0) sMap.delete(s[lt]);
    lt += 1;
  }

  return cnt;
}

console.log(solution2("bacaAacba", "abc"));
