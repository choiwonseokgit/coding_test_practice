function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] !== b[n]) return a[n].localeCompare(b[n]);
    return a.localeCompare(b);
  });

  return strings;
}

function solution_book(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
}
