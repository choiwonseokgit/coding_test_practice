function calculateRange(n, station, w) {
  let [start, end] = [station - w, station + w];

  start = start < 0 ? 0 : start;
  end = end > n ? n : end;

  return [start, end];
}

function solution(n, stations, w) {
  /*
    최소한으로 증설해야할 기지국의 갯수 return
    */

  // [[3,5], [10,11]]

  const internetPossibleRanges = [];

  stations.forEach((s) => {
    const ranges = calculateRange(n, s, w);

    internetPossibleRanges.push(ranges);
  });

  let answer = 0;
  let selectedApart = 1;
  const range = 2 * w + 1;

  internetPossibleRanges.forEach(([start, end]) => {
    const cnt = start - selectedApart;

    if (cnt > 0 && cnt <= range) answer += 1;
    else answer += Math.ceil(cnt / range);

    selectedApart = end + 1;
  });

  if (selectedApart < n + 1) {
    const cnt = n - selectedApart;

    if (cnt <= range) answer += 1;
    else answer += Math.ceil(cnt / range);
  }

  return answer;
}

// gpt 풀이
function calculateRange(n, station, w) {
  let start = Math.max(1, station - w); // 시작 인덱스는 최소 1
  let end = Math.min(n, station + w); // 끝 인덱스는 최대 n

  return [start, end];
}

function solution(n, stations, w) {
  let answer = 0;
  let selectedApart = 1;
  const range = 2 * w + 1; // 한 기지국이 커버할 수 있는 범위

  // 기존 기지국이 커버하는 범위 계산
  const internetPossibleRanges = stations.map((s) => calculateRange(n, s, w));

  // 기지국이 없는 구간 계산 및 최소 기지국 개수 추가
  for (const [start, end] of internetPossibleRanges) {
    const cnt = start - selectedApart;

    if (cnt > 0) answer += Math.ceil(cnt / range);
    selectedApart = end + 1;
  }

  // 마지막 남은 구간 처리
  if (selectedApart <= n) {
    answer += Math.ceil((n - selectedApart + 1) / range);
  }

  return answer;
}
