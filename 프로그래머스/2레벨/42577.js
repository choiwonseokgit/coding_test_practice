function solution(phone_book) {
  const map = new Map();
  let answer = true;

  phone_book.forEach((book) => map.set(book, book));

  for (const [key, val] of map) {
    for (let i = 0; i < key.length; i++) {
      const preWord = key.slice(0, i);

      if (map.has(preWord)) {
        answer = false;
        break;
      }
    }
  }

  return answer;
}
