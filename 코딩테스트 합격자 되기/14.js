function solution(n, k, cmd) {
  //1. 삭제된 행의 인덱스를 저장하는 배열
  const deleted = [];

  //2. 연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  //3. 현재 위치를 나타내는 인덱스
  k += 1;

  //4. 주어진 명령어(cmd) 배열 요소를 하나씩 처리
  for (const item of cmd) {
    //5. 현재 위치를 삭제하고 그다음 위치로 이동
    if (item[0] === "C") {
      deleted.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];

      k = n < down[k] ? up[k] : down[k];
    }
    //6. 가장 최근에 삭제된 행을 복원
    else if (item[0] === "Z") {
      const restore = deleted.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    }
    //7. U 또는 D를 사용해 현재 위치를 위아래로 이동
    else {
      const [action, num] = item.split(" ");
      if (action === "U") {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }

  //8. 삭제된 행의 위치에 'X'를, 그렇지 않은 행의 위치에 'O'를 포함하는 문자열 반환
  const answer = new Array(n).fill("O");
  for (const i of deleted) {
    answer[i - 1] = "X";
  }
  return answer.join("");
}

//gpt 풀이
function solution(n, k, cmd) {
  const result = Array(n).fill("O");
  const deleteStack = [];
  let currIdx = k;

  // 연결 리스트 구조를 만들어 인덱스가 변하지 않도록 함
  const linkedList = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i + 1,
  }));
  linkedList[0].prev = null;
  linkedList[n - 1].next = null;

  cmd.forEach((command) => {
    const [action, num] = command.split(" ");

    if (action === "U") {
      for (let i = 0; i < num; i++) currIdx = linkedList[currIdx].prev;
    } else if (action === "D") {
      for (let i = 0; i < num; i++) currIdx = linkedList[currIdx].next;
    } else if (action === "C") {
      deleteStack.push(currIdx);
      result[currIdx] = "X";

      const { prev, next } = linkedList[currIdx];

      if (prev !== null) linkedList[prev].next = next;
      if (next !== null) linkedList[next].prev = prev;

      currIdx = next !== null ? next : prev;
    } else if (action === "Z") {
      const restored = deleteStack.pop();
      result[restored] = "O";

      const { prev, next } = linkedList[restored];

      if (prev !== null) linkedList[prev].next = restored;
      if (next !== null) linkedList[next].prev = restored;
    }
  });

  return result.join("");
}

//내 풀이
function solution(n, k, cmd) {
  const deleteStack = [];
  let currIdx = k;
  const linkedList = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i + 1,
  }));
  linkedList[0].prev = null;
  linkedList[n - 1].next = null;

  cmd.forEach((command) => {
    const cmdArr = command.split(" ");

    if (cmdArr[0] === "U") {
      for (let i = 0; i < cmdArr[1]; i++) currIdx = linkedList[currIdx].prev;
    } else if (cmdArr[0] === "D") {
      for (let i = 0; i < cmdArr[1]; i++) currIdx = linkedList[currIdx].next;
    } else if (cmdArr[0] === "C") {
      deleteStack.push(currIdx);

      const { prev: currPrev, next: currNext } = linkedList[currIdx];

      if (currPrev !== null) linkedList[currPrev].next = currNext;
      if (currNext !== null) linkedList[currNext].prev = currPrev;

      currIdx = currNext !== null ? currNext : currPrev;
    } else if (cmdArr[0] === "Z") {
      const restoreIdx = deleteStack.pop();

      const { prev: restorePrev, next: restoreNext } = linkedList[restoreIdx];

      if (restorePrev !== null) linkedList[restorePrev].next = restoreIdx;
      if (restoreNext !== null) linkedList[restoreNext].prev = restoreIdx;
    }
  });

  const answer = Array(n).fill("O");

  deleteStack.forEach((deleteIdx) => {
    answer[deleteIdx] = "X";
  });

  return answer.join("");
}
