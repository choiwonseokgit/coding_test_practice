function solution(n, m, works) {
  const cacheMemory = [];

  for (const work of works) {
    // Cache Hit
    if (cacheMemory.includes(work)) {
      let idx = cacheMemory.indexOf(work);
      for (let i = idx - 1; i >= 0; i--) {
        [cacheMemory[i], cacheMemory[idx]] = [cacheMemory[idx], cacheMemory[i]];
        idx--;
      }
    } else if (!cacheMemory.includes(work)) {
      // Cache Miss
      cacheMemory.unshift(work);
      if (cacheMemory.length > n) cacheMemory.pop();
    }
  }

  return cacheMemory;
}

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
