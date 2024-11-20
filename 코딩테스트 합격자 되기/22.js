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
