function solution(s) {
  const arrS = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"));
  arrS.sort((a, b) => a.length - b.length);

  const answer = [];
  arrS.forEach((el) => {
    for (const e of el) {
      if (answer.includes(e)) continue;
      answer.push(e);
    }
  });
  return answer;
}

function solution(s) {
  const arrS = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"));
  arrS.sort((a, b) => a.length - b.length);

  return Array.from(new Set(arrS.flat()));
}

function solution_book(s) {
  // 1. 문자열 s를 파싱하여 배열로 변환
  const numbers = s.slice(2, -2).split("},{");
  const sorted = numbers.sort((a, b) => a.length - b.length);
  const answer = [];

  // 2. 각 원소를 순회하면서 이전 원소와 차이가 나는 부분을 구함
  for (const el of sorted) {
    const nums = el.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}
