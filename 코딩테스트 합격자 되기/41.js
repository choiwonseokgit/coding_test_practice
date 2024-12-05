function solution(graph, source) {
  const nodeNum = graph.length;

  const distance = Array.from({ length: nodeNum }, () => Infinity);
  distance[source] = 0;

  const prevNode = Array.from({ length: nodeNum }, () => Infinity);
  prevNode[source] = null;

  for (let i = 0; i < nodeNum - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      for (const [nextNode, dist] of graph[j]) {
        if (distance[j] + dist < distance[nextNode]) {
          distance[nextNode] = distance[j] + dist;
          prevNode[nextNode] = j;
        }
      }
    }
  }

  for (let j = 0; j < graph.length; j++) {
    for (const [nextNode, dist] of graph[j]) {
      if (distance[j] + dist < distance[nextNode]) {
        return [-1];
      }
    }
  }

  return [distance, prevNode];
}

console.log(
  solution(
    [
      [
        [1, 4],
        [2, 3],
        [4, -6],
      ],
      [[3, 5]],
      [[1, 2]],
      [
        [0, 7],
        [2, 4],
      ],
      [[2, 2]],
    ],
    0
  )
); // [[0,-2,-4,3,-6], [null, 2, 4, 1,0]]
console.log(
  solution(
    [
      [
        [1, 5],
        [2, -1],
      ],
      [[2, 2]],
      [[3, -2]],
      [
        [0, 2],
        [1, 6],
      ],
    ],
    0
  )
); // [-1]
