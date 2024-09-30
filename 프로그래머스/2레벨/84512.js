/** 
A, AA, AAA, AAAA, AAAAA, AAAAE, AAAAI, AAAAO, AAAAU
AAAE
*/

function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"];

  let cnt = 0;
  let answer;
  function dfs(level, currWord) {
    if (level === 6) {
      return;
    } else if (currWord === word) {
      return (answer = cnt);
    } else {
      cnt += 1;
    }

    for (let i = 0; i < alphabets.length; i++) {
      dfs(level + 1, currWord + alphabets[i]);
    }
  }

  dfs(0, "");

  return answer;
}
