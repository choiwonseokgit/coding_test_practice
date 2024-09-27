/** 
Map을 사용하는 이유:
삽입 순서 유지: Map은 삽입된 순서를 유지하므로, LRU 알고리즘을 구현할 때 매우 적합합니다.
빠른 삭제 및 접근: Map은 키를 기준으로 항목을 O(1)에 가깝게 삭제하고 접근할 수 있습니다.
*/

function solution(cacheSize, cities) {
  class LRUCache {
    constructor(cacheSize) {
      this.capacity = cacheSize;
      this.cacheMap = new Map();
      this.runtime = 0;
    }

    //값을 가져온다.
    //가져올때 기존위치에서 삭제후
    //다시 맨 뒤로 삽입
    get(key) {
      if (!this.cacheMap.has(key)) {
        return -1;
      }

      const value = this.cacheMap.get(key);
      this.cacheMap.delete(key);
      this.cacheMap.set(key, value);
      return value;
    }

    //값을 삽입
    //
    put(key) {
      const value = key;

      if (this.cacheMap.has(key)) {
        this.cacheMap.delete(key); // 기존 항목 갱신 시 위치 갱신
      }
      this.cacheMap.set(key, value); // 새 항목 추가
      if (this.cacheMap.size > this.capacity) {
        const oldestKey = this.cacheMap.keys().next().value; // 가장 오래된 키
        this.cacheMap.delete(oldestKey); // 가장 오래된 항목 제거
      }
    }

    cacheHit() {
      this.runtime += 1;
    }

    cacheMiss() {
      this.runtime += 5;
    }
  }

  const cache = new LRUCache(cacheSize);

  cities.forEach((city) => {
    const cityToKey = city.toLowerCase();
    if (cache.get(cityToKey) === -1) {
      cache.put(cityToKey);
      cache.cacheMiss();
    } else {
      cache.cacheHit();
    }
  });

  return cache.runtime;
}
