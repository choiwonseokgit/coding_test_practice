function solution(numbers) {
  // 1. 문자열을 숫자의 array 로 바꾸는 과정
  const numberArr = numbers.split("").map((num) => parseInt(num, 10));
  const allNumbers = [];

  const permutation = (targetLength, leftNum, currentArr) => {
    if (targetLength === currentArr.length) {
      allNumbers.push(currentArr);
      return;
    }

    leftNum.forEach((num, i) => {
      permutation(
        targetLength,
        [...leftNum.slice(0, i), ...leftNum.slice(i + 1)],
        [...currentArr, num]
      );
    });
  };

  // 2. 숫자로 만들 수 있는 모든 경우의 수 만들기
  for (let i = 1; i <= numberArr.length; i++) {
    permutation(i, numberArr, []);
  }

  // 3. 숫자의 배열을 실제 숫자로 바꾸기 ex) [1, 7] => 17
  const convertedNumbers = allNumbers.map((numberArr) => {
    return parseInt(numberArr.map((arr) => arr.toString()).join(""), 10);
  });

  // 4. 중복된 숫자 제거하기
  const uniqueNumbers = Array.from(new Set(convertedNumbers));

  // 5. 소수인 수만 남기기
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return uniqueNumbers.filter((number) => isPrime(number)).length;
}
