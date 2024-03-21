function solution(len, arr) {
  let primeNumStr = "";

  arr.forEach((num) => {
    let isPrime = true;
    const reverseNum = parseInt(
      num.toString().split("").reverse().join(""),
      10
    );

    if (reverseNum === 1) return;

    for (let i = 2; i < Math.sqrt(reverseNum); i++) {
      if (reverseNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeNumStr += reverseNum.toString() + " ";
  });

  return primeNumStr;
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
