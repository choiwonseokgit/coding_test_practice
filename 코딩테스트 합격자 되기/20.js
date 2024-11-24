function solution(participant, completion) {
  const map = new Map();

  participant.forEach((par) => map.set(par, (map.get(par) || 0) + 1));

  completion.forEach((com) => map.set(com, map.get(com) - 1));

  const answer = [...map].filter((el) => el[1] === 1);

  return answer[0][0];
}

function solution_book(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
