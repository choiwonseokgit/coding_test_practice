class Node {
  constructor(x, y, name) {
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.name = name;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.y_level_map = new Map();
    this.lastLevel = null;
  }

  insert(x, y, name) {
    if (!this.root) {
      this.root = new Node(x, y, name);
      this.y_level_map.set(0, y);
      this.lastLevel = 0;
    } else {
      let curr = this.root;
      while (true) {
        if (curr.x > x) {
          if (!curr.left) {
            curr.left = new Node(x, y, name);
            if (
              this.y_level_map.get(this.lastLevel) &&
              this.y_level_map.get(this.lastLevel) === y
            )
              break;
            this.y_level_map.set(this.lastLevel + 1, y);
            this.lastLevel += 1;
            break;
          } else {
            curr = curr.left;
          }
        } else if (curr.x < x) {
          if (!curr.right) {
            curr.right = new Node(x, y, name);
            if (
              this.y_level_map.get(this.lastLevel) &&
              this.y_level_map.get(this.lastLevel) === y
            )
              break;
            this.y_level_map.set(this.lastLevel + 1, y);
            this.lastLevel += 1;
            break;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
}

function solution1(nodeinfo) {
  // 전위, 후위 순회 한 결과 return
  // 같은 레벨에 있는 노드는 같은 y 좌표를 가짐
  // 자식 노드의 y 값은 항상 부모 노드보다 작다

  const bst = new BST();

  const newNodeInfo = nodeinfo.map((el, i) => [...el, i + 1]);

  newNodeInfo.sort((a, b) => b[1] - a[1]);

  newNodeInfo.forEach((node) => {
    const [x, y, name] = node;
    bst.insert(x, y, name);
  });

  const preorderMap = [];
  const postorderMap = [];

  function order(node) {
    if (!node) return;

    preorderMap.push(node.name);
    order(node.left);
    order(node.right);
    postorderMap.push(node.name);
  }

  order(bst.root);

  return [preorderMap, postorderMap];
}

class Node {
  constructor(x, y, name) {
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.name = name;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(x, y, name) {
    if (!this.root) {
      this.root = new Node(x, y, name);
    } else {
      let curr = this.root;
      while (true) {
        if (curr.x > x) {
          if (!curr.left) {
            curr.left = new Node(x, y, name);
            break;
          }
          curr = curr.left;
        } else if (curr.x < x) {
          if (!curr.right) {
            curr.right = new Node(x, y, name);
            break;
          }
          curr = curr.right;
        }
      }
    }
  }
}

function solution2(nodeinfo) {
  // 전위, 후위 순회 한 결과 return
  // 같은 레벨에 있는 노드는 같은 y 좌표를 가짐
  // 자식 노드의 y 값은 항상 부모 노드보다 작다

  const bst = new BST();

  const newNodeInfo = nodeinfo.map((el, i) => [...el, i + 1]);

  newNodeInfo.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  newNodeInfo.forEach((node) => {
    const [x, y, name] = node;
    bst.insert(x, y, name);
  });

  const preorderMap = [];
  const postorderMap = [];

  function order(node) {
    if (!node) return;

    preorderMap.push(node.name);
    order(node.left);
    order(node.right);
    postorderMap.push(node.name);
  }

  order(bst.root);

  return [preorderMap, postorderMap];
}

// 1. Node 클래스 정의
class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info; // 노드의 좌표 정보 저장
    this.left = left; // 노드의 왼쪽 자식 노드
    this.right = right; // 노드의 오른쪽 자식 노드
    this.num = num; // 노드의 번호
  }

  // 2. 왼쪽 자식 노드가 있는지 확인하는 함수
  hasLeft() {
    return this.left !== null;
  }

  // 3. 오른쪽 자식 노드가 있는지 확인하는 함수
  hasRight() {
    return this.right !== null;
  }
}

// 4. 이진 트리 생성 함수
function makeBT(nodeinfo) {
  // 5. 노드의 번호 배열 생성
  const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1);
  nodes.sort((a, b) => {
    const [ax, ay] = nodeinfo[a - 1];
    const [bx, by] = nodeinfo[b - 1];
    return ay === by ? ax - bx : by - ay;
  });

  let root = null;
  for (const node of nodes) {
    if (!root) {
      root = new Node(nodeinfo[node - 1], node);
    } else {
      let parent = root;
      const newNode = new Node(nodeinfo[node - 1], node);
      while (true) {
        // 6. 부모 노드의 x좌표가 더 크면 왼쪽으로
        if (newNode.info[0] < parent.info[0]) {
          if (parent.hasLeft()) {
            parent = parent.left;
            continue;
          }
          parent.left = newNode;
          break;
        } else {
          // 7. 부모 노드의 x좌표가 더 작거나 같으면 오른쪽으로
          if (parent.hasRight()) {
            parent = parent.right;
            continue;
          }
          parent.right = newNode;
          break;
        }
      }
    }
  }

  return root;
}

// 8. 전위 순회 함수
function preOrder(root, answer) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }
    answer[0].push(node.num);
    stack.push(node.right); //오른쪽부터 넣는 이유  stack이기 때문 LIFO
    stack.push(node.left);
  }
}

// 9. 후위 순회 함수
function postOrder(root, answer) {
  const stack = [[root, false]];
  while (stack.length) {
    const [node, visited] = stack.pop();
    if (!node) {
      continue;
    }
    if (visited) {
      answer[1].push(node.num);
    } else {
      stack.push([node, true]);
      stack.push([node.right, false]);
      stack.push([node.left, false]);
    }
  }
}

// 10. 주어진 좌표를 이용하여 이진 트리를 생성하고, 전위 순회화 후위 순회한 결과를 반환하는 함수
function solution_book(nodeinfo) {
  const answer = [[], []]; // 결과를 저장할 배열 초기화
  const root = makeBT(nodeinfo); // 이진 트리 생성
  preOrder(root, answer); // 전위 순회
  postOrder(root, answer); // 후위 순회
  return answer; // 결과 반환
}
