function solution_cws(numbers) {
  const numArr = numbers.split("").map((number) => parseInt(number));

  const permutationArr = [];

  function permutation(curArr, leftArr, targetLength) {
    if (curArr.length === targetLength) {
      permutationArr.push(curArr);
      return;
    }
    leftArr.map((num, i) => {
      permutation(
        [...curArr, num],
        [...leftArr.slice(0, i), ...leftArr.slice(i + 1)],
        targetLength
      );
    });
  }

  for (let i = 1; i <= numArr.length; i++) {
    permutation([], numArr, i);
  }

  const stringArr = permutationArr.map((arr) => parseInt(arr.join("")));
  const newSet = new Set(stringArr);
  const newArr = Array.from(newSet).filter((el) => el !== 0);

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return newArr.filter((num) => isPrime(num)).length;
}

// function solution_mento(numbers) {
//   // 1. 문자열을 숫자의 array 로 바꾸는 과정
//   const numberArr = numbers.split("").map((num) => parseInt(num, 10));
//   const allNumbers = [];

//   const permutation = (targetLength, leftNum, currentArr) => {
//     if (targetLength === currentArr.length) {
//       allNumbers.push(currentArr);
//       return;
//     }

//     leftNum.forEach((num, i) => {
//       permutation(
//         targetLength,
//         [...leftNum.slice(0, i), ...leftNum.slice(i + 1)],
//         [...currentArr, num]
//       );
//     });
//   };

//   // 2. 숫자로 만들 수 있는 모든 경우의 수 만들기
//   for (let i = 1; i <= numberArr.length; i++) {
//     permutation(i, numberArr, []);
//   }

//   // 3. 숫자의 배열을 실제 숫자로 바꾸기 ex) [1, 7] => 17
//   const convertedNumbers = allNumbers.map((numberArr) => {
//     return parseInt(numberArr.map((arr) => arr.toString()).join(""), 10);
//   });

//   // 4. 중복된 숫자 제거하기
//   const uniqueNumbers = Array.from(new Set(convertedNumbers));

//   // 5. 소수인 수만 남기기
//   const isPrime = (n) => {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };

//   return uniqueNumbers.filter((number) => isPrime(number)).length;
// }
