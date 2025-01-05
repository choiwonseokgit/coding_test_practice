const MSG = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다.",
};
// 나의 풀이
function solution(record) {
  const nameMap = new Map();
  const result = [];

  record.forEach((rec) => {
    const recArr = rec.split(" ");
    const word = recArr[0];
    const id = recArr[1];

    if (word === "Enter") {
      const msg = MSG[word];
      const name = recArr[2];
      nameMap.set(id, name);
      result.push({ id, msg });
    } else if (word === "Leave") {
      const msg = MSG[word];
      result.push({ id, msg });
    } else if (word === "Change") {
      const name = recArr[2];
      nameMap.set(id, name);
    }
  });

  return result.map((res) => `${nameMap.get(res.id)}${res.msg}`);
}

function solution(record) {
  const answer = [];
  const uid = {};

  for (line in record) {
    cmd = record[line].split(" ");
    if (cmd[0] === "Enter" || cmd[0] === "Change") {
      uid[cmd[1]] = cmd[2];
    }
  }

  for (line in record) {
    cmd = record[line].split(" ");

    if (cmd[0] === "Enter") {
      answer.push(uid[cmd[1]] + "님이 들어왔습니다.");
    } else if (cmd[0] === "Leave") {
      answer.push(uid[cmd[1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}

//2번째 풀이
function solution(record) {
  const result = [];

  const nicknameMap = new Map();

  record.forEach((r) => {
    const arr = r.split(" ");
    const [command, id] = [arr[0], arr[1]];

    if (command === "Enter") {
      const nickname = arr[2];
      nicknameMap.set(id, nickname);
      result.push([id, "님이 들어왔습니다."]);
    } else if (command === "Change") {
      const newNickname = arr[2];
      nicknameMap.set(id, newNickname);
    } else if (command === "Leave") {
      result.push([id, "님이 나갔습니다."]);
    }
  });

  return result.map(([id, str]) => `${nicknameMap.get(id)}${str}`);
}
