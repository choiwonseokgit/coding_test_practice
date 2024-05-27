// 인접 행렬
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map((el2) => +el2));
const [n, m, start] = arr[0];
const info = arr.slice(1);

const graph = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => 0)
);

for (const [i, j] of info) {
  graph[i][j] = 1;
  graph[j][i] = 1;
}

const routeDFS = [];
const visitedDFS = Array.from({ length: n + 1 }, () => false);

function DFS(V) {
  visitedDFS[V] = true;
  routeDFS.push(V);

  for (let nV = 1; nV <= n; nV++) {
    if (graph[V][nV] === 1 && !visitedDFS[nV]) {
      DFS(nV);
    }
  }
}

DFS(start);

let routeBFS = [];
const visitedBFS = Array.from({ length: n + 1 }, () => false);
const queue = [];

queue.push(start);

while (queue.length) {
  const V = queue.shift();
  visitedBFS[V] = true;
  routeBFS.push(V);

  for (let i = 0; i <= n; i++) {
    if (graph[V][i] === 1 && !visitedBFS[i]) {
      queue.push(i);
    }
  }
}

// console.log(graph)
console.log(Array.from(new Set(routeDFS)).join(" "));
console.log(Array.from(new Set(routeBFS)).join(" "));

// //인접리스트(정점개수 많을때)
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const arr = input.map((el) => el.split(" ").map((el2) => +el2));
// const [n, m, start] = arr[0];
// const info = arr.slice(1);

// const graph = Array.from({ length: n + 1 }, () => new Array());

// for (const [i, j] of info) {
//   graph[i].push(j)
//   graph[j].push(i)
// }

// graph.map((el) => el.sort((a,b) => a - b ))

// //console.log(graph)

// const routeDFS = [];
// const visitedDFS = Array.from({ length: n + 1 }, () => false);

// function DFS(V) {
//   visitedDFS[V] = true;
//   routeDFS.push(V);

//  for(let E = 0; E < graph[V].length; E++) {
//      const item = graph[V][E]
//      if(!visitedDFS[item]) DFS(item)
//  }
// }

// DFS(start);

// let routeBFS = [];
// const visitedBFS = Array.from({ length: n + 1 }, () => false);
// const queue = [];

// queue.push(start);

// while (queue.length) {
//   const V = queue.shift();
//   visitedBFS[V] = true;
//   routeBFS.push(V);

//    for(let E = 0; E<graph[V].length; E++)  {
//      const item = graph[V][E]
//      if(!visitedBFS[item]) queue.push(item)
//  }
// }

// // console.log(graph)
// console.log(Array.from(new Set(routeDFS)).join(" "));
// console.log(Array.from(new Set(routeBFS)).join(" "));
