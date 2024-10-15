function solution(n, words) {
  const map = new Map();
  const answer = [0, 0];
  let prevWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const personId = (i % n) + 1;

    //1번째
    if (!prevWord) {
      map.set(word, word);
      prevWord = word;
      continue;
    }

    if (map.has(word) || prevWord[prevWord.length - 1] !== word[0]) {
      answer[0] = personId;
      answer[1] = Math.ceil((i + 1) / n);
      break;
    } else {
      map.set(word, word);
      prevWord = word;
    }
  }

  return answer;
}
