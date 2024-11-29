function solution(n, words) {
  // 먼저 탈락한 사람의 [번호, 차례] return
  // 탈락자 없으면 [0, 0] return

  // 끝말잇기 조건, 중복 x, 한글자 단어 x
  const set = new Set();
  let prev = words[0];
  set.add(prev);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    // 0 1 2 , 3 4 5
    const num = (i % n) + 1;
    const order = Math.floor(i / n) + 1;

    if (
      prev[prev.length - 1] !== word[0] ||
      set.has(word) ||
      word.length === 1
    ) {
      return [num, order];
    } else {
      set.add(word);
    }

    prev = word;
  }

  return [0, 0];
}
