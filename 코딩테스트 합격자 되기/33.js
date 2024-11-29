function solution(k, oper) {
  const set = Array.from({ length: k }, (_, i) => i);
  let cnt = 0;
  //   console.log(set);

  oper.forEach((o) => {
    if (o[0] === "u") {
      const [small, big] = o.slice(1).sort((a, b) => a - b);
      set[small] = big; //union 작은 것을 큰 것의 자식 노드로
    } else if (o[0] === "f") {
      let curr = o[1];
      while (curr !== set[curr]) {
        curr = set[curr];
      }
    }
  });

  for (let i = 0; i < set.length; i++) {
    if (i === set[i]) cnt++;
  }

  return cnt;
}

console.log(
  solution(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
); // 1
console.log(
  solution(4, [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 0],
  ])
); // 2

// 루트 노드 찾는 함수
function find(parents, x) {
  // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
  if (parents[x] === x) {
    return x;
  }

  // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 이 부분이 경로 압축에 해당
  parents[x] = find(parents, parents[x]);

  return parents[x]; // parents[x] 반환
}
/**
- 목적: 노드 x가 속한 집합의 루트 노드를 찾습니다.
- 경로 압축(Path Compression):
    탐색 과정에서 만나는 모든 노드의 부모를 루트 노드로 갱신하여 트리의 깊이를 줄입니다.
    최적화를 통해 find 연산의 시간 복잡도를 거의 O(1)로 만듭니다. 
*/

// 두 개의 집합을 합치는 함수
function union(parents, x, y) {
  const root1 = find(parents, x); // x가 속한 집합의 루트 노드 찾기
  const root2 = find(parents, y); // y가 속한 집합의 루트 노드 찾기

  parents[root2] = root1; // y가 속한 집합을 x가 속한 집합에 합침
}

function solution(k, operations) {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k

  for (const op of operations) {
    if (op[0] === "u") {
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      find(parents, op[1]);
    }
    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    /**
     * 모든 노드의 루트 노드를 계산하고, 중복을 제거하여 집합의 개수를 구합니다.
     **new Set()**을 활용하여 루트 노드의 유일한 개수를 세는 방식입니다.
     */
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n;
}
