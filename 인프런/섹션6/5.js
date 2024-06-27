function solution(str) {
  const stack = [];
  const replacedStr = str.replaceAll("()", ".");

  function laserPush(idx) {
    const prevStack = stack.slice(0, idx);
    if (prevStack.find((el) => el === "(")) stack.push(".");
  }

  let barCnt = 0;
  for (let i = 0; i < replacedStr.length; i++) {
    // console.log(stack);
    const s = replacedStr[i];
    if (s === "(") {
      stack.push(s);
    } else if (s === ".") {
      laserPush(i);
    } else if (s === ")") {
      let laserCnt = 0;
      let popItem = "";
      while (popItem !== "(") {
        popItem = stack.pop();
        if (popItem === "(") {
          barCnt += laserCnt + 1;
          break;
        } else if (popItem === ".") laserCnt += 1;
      }
      for (let j = 0; j < laserCnt; j++) laserPush(i);
    }
  }
  //   for (const s of replacedStr) {
  //     // console.log(stack);
  //     if (s === "(" || s === ".") {
  //       stack.push(s);
  //     } else if (s === ")") {
  //       let laserCnt = 0;
  //       let popItem = "";
  //       while (popItem !== "(") {
  //         popItem = stack.pop();
  //         if (popItem === "(") {
  //           barCnt += laserCnt + 1;
  //           break;
  //         } else if (popItem === ".") laserCnt += 1;
  //       }
  //       for (let i = 0; i < laserCnt; i++) stack.push(".");
  //     }
  //   }

  return barCnt;
}

function solution2(str) {
  const stack = [];
  let barCnt = 0;

  for (let i = 0; i < str.length; i++) {
    const currItem = str[i];

    if (currItem === "(") stack.push("(");
    else if (currItem === ")") {
      stack.pop();
      const prevItem = str[i - 1];
      if (prevItem === "(") {
        console.log(stack);
        barCnt += stack.length;
      } else {
        barCnt += 1;
      }
    }
  }

  return barCnt;
}

// console.log(solution("()(((()())(())()))(())"));
// console.log(solution("(((()(()()))(())()))(()())"));
console.log(solution2("()(((()())(())()))(())"));
console.log(solution2("(((()(()()))(())()))(()())"));
