//1. polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; //소수
  const m = 1_000_000_007; //버킷 크기
  let hashValue = 0;

  console.log(typeof m);

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution(stringList, queryList) {
  //2. stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));
  console.log(hashList);

  //3. queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);

function solution2(stringList, queryList) {
  const answer = Array.from({ length: queryList.length }, () => false);

  queryList.forEach((q, i) => {
    if (stringList.includes(q)) {
      answer[i] = true;
    }
  });

  return answer;
}

console.log(
  solution2(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);

function polynomialHash(str) {
  let num = 31; // 소수
  let m = str.length;

  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * num + str[i].charCodeAt()) * m;
  }

  return hash;
}

function solution2_2(stringList, queryList) {
  const hashList = stringList.map((s) => polynomialHash(s));

  const answer = [];

  queryList.forEach((q) => {
    if (hashList.includes(polynomialHash(q))) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  });

  return answer;
}

console.log(
  solution2_2(
    ["apple", "banana", "cherry"],
    ["banana", "kiwi", "melon", "apple"]
  )
);
