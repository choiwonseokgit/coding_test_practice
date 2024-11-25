function solution(arr) {
  let preStr = "";
  function preorder(idx) {
    if (idx > arr.length) return;

    preStr += arr[idx - 1];
    preorder(2 * idx);
    preorder(2 * idx + 1);
  }

  let inStr = "";
  function inorder(idx) {
    if (idx > arr.length) return;

    inorder(2 * idx);
    inStr += arr[idx - 1];
    inorder(2 * idx + 1);
  }

  let postStr = "";
  function postorder(idx) {
    if (idx > arr.length) return;

    postorder(2 * idx);
    postorder(2 * idx + 1);
    postStr += arr[idx - 1];
  }

  preorder(1);
  inorder(1);
  postorder(1);

  return [preStr, inStr, postStr].map((el) => el.replaceAll("", " ").trim());
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));

function preorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 루트 노드를 출력한 다음, 왼쪽, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환
  return "";
}
function inorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어 붙임
    let ret = inorder(nodes, idx * 2 + 1);
    // 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환
  return "";
}
function postorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리와 오른쪽 서브트리를 재귀 호출하여 출력 순서대로 이어 붙임
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    // 루트 노드를 출력함
    ret += `${nodes[idx]} `;
    return ret;
  }

  // idx >= nodes.length 일 때는 빈 문자열 반환
  return "";
}

function solution_book(nodes) {
  return [preorder(nodes, 0), inorder(nodes, 0), postorder(nodes, 0)].map(
    (el) => el.trim()
  );
}

console.log(solution_book([1, 2, 3, 4, 5, 6, 7]));
