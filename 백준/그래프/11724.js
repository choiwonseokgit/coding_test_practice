//DFS
const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el2) => +el2));
const [vNum, eNum] = arr[0];
const info = arr.slice(1);

const graph = Array.from({ length: vNum + 1 }, () => []);
const check = Array.from({ length: vNum + 1 }, () => false);
const connectedArr = [];
let route = "";

for (const [start, end] of info) {
  graph[start].push(end);
  graph[end].push(start);
}

function DFS(v) {
  check[v] = true;
  route += `${v} `;

  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];
    if (!check[nv]) DFS(nv);
  }
}

for (let i = 1; i <= vNum; i++) {
  if (!check[i]) DFS(i);
  if (route.length) connectedArr.push(route);
  route = "";
}

console.log(connectedArr.length);
