function solution(num) {
  let answer = "";

  while (num > 0) {
    const remainder = num % 2;
    answer += remainder;

    // num = parseInt(num / 2);
    num = Math.floor(num / 2);
  }

  return answer.split("").reverse().join("");
}

function solution2(num) {
  const stack = [];

  while (num > 0) {
    stack.push(num % 2);

    num = Math.floor(num / 2);
  }

  return stack.reverse().join("");
}

function solution_book(decimal) {
  //시간복잡도 O(logN) ?
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

console.log(solution2(10)); //1010
console.log(solution2(27)); //11011
console.log(solution2(12345)); //11000000111001
