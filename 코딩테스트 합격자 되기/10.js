function isValid(str) {
  const stack = [];

  for (const s of str) {
    switch (s) {
      case "{":
      case "[":
      case "(":
        stack.push(s);
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      default:
        break;
    }
  }
  return !stack.length;
}

function solution(s) {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i) + s.slice(0, i);
    if (isValid(str)) cnt++;
  }

  return cnt;
}

function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];

    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      //1. 괄호 문자열을 회전시키며 참조
      const c = s[(i + j) % n];

      if (c === "[" || c === "{" || c === "(") {
        //2. 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          //3. 여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }
        //4. 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    //5. 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
