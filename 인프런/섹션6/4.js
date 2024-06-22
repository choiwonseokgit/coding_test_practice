function solution(str) {
  const basicOperation = ["+", "-", "*", "/"];
  const stack = [];

  function calculate(lt, oper, rt) {
    let result = 0;
    switch (oper) {
      case "+":
        result = lt + rt;
        break;
      case "-":
        result = lt - rt;
        break;
      case "*":
        result = lt * rt;
        break;
      case "/":
        result = lt / rt;
      default:
        break;
    }
    return result;
  }

  for (const s of str) {
    if (basicOperation.includes(s)) {
      const rt = +stack.pop();
      const lt = +stack.pop();
      stack.push(calculate(lt, s, rt));
    } else stack.push(+s);
  }

  return stack.pop();
}

function solution_teacher(str) {
  let answer;
  stack = [];

  function calculate(lt, oper, rt) {
    let result = 0;
    switch (oper) {
      case "+":
        result = lt + rt;
        break;
      case "-":
        result = lt - rt;
        break;
      case "*":
        result = lt * rt;
        break;
      case "/":
        result = lt / rt;
      default:
        break;
    }
    return result;
  }

  for (const s of str) {
    if (!isNaN(s)) stack.push(+s);
    else {
      const rt = +stack.pop();
      const lt = +stack.pop();
      stack.push(calculate(lt, s, rt));
    }
  }
  answer = stack.pop();
  return answer;
}

console.log(solution_teacher("352+*9-"));
