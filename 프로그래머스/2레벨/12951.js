function solution(s) {
  const arr = s.split(" ");

  arr.forEach((word, i) => {
    if (word && isNaN(word[0])) {
      const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      arr[i] = newWord;
      return;
    }

    arr[i] = word.toLowerCase();
  });

  return arr.join(" ");
}
