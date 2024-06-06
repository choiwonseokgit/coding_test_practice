const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = +input[0];
let answer = "";

for (let i = 0; i < testCase; i++) {
  const len = +input[2 * i + 1];
  const arr = input[2 * i + 2].split(" ").map((el) => +el);
  let cycle = "";
  let cnt = 0;

  const checkArr = Array.from({ length: len + 1 }, () => false);
  const graph = Array.from({ length: len + 1 }, () => []);

  arr.forEach((el, i) => {
    graph[i + 1].push(el);
  });

  function DFS(V) {
    if (V > len || checkArr[V]) return;
    cycle += V + " ";
    checkArr[V] = true;
    graph[V].forEach((nV) => {
      DFS(nV);
    });
  }

  for (let i = 1; i <= len; i++) {
    DFS(i);
    if (cycle.length) {
      cnt += 1;
    }
    cycle = "";
  }

  answer += cnt + "\n";
}

console.log(answer);

// //BFS
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const testCase = +input[0];
// let answer = "";

// for (let i = 0; i < testCase; i++) {
//   const len = +input[2 * i + 1];
//   const arr = input[2 * i + 2].split(" ").map((el) => +el);
//   let cycle = "";
//   let cnt = 0;

//   const checkArr = Array.from({ length: len + 1 }, () => false);
//   const graph = Array.from({ length: len + 1 }, () => 0);

//   arr.forEach((el, i) => {
//     graph[i + 1] = el;
//   });

//   const queue = [];

//   for (let i = 1; i <= len; i++) {
//     if (!checkArr[i]) {
//       queue.push(i);
//       checkArr[i] = true;
//       cnt++;
//     }
//     while (queue.length) {
//       const v = queue.shift();
//       const nv = graph[v];
//       if (!checkArr[nv]) {
//         queue.push(nv);
//         checkArr[nv] = true;
//       }
//     }
//   }

//   answer += cnt + "\n";
// }

// console.log(answer);
