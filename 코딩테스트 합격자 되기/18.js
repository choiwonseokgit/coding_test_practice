function solution(arr, target) {
  let answer = false;
  //arr중 2개를 뽑은 합이 target일 경우 true or false 리턴
  for (const num1 of arr) {
    const need = target - num1;
    const leftArr = arr.filter((el) => el !== num1);
    if (leftArr.includes(need)) {
      answer = true;
      break;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 8], 6)); //true
console.log(solution([2, 3, 5, 9], 10)); //false

function solution2(arr, target) {
  const map = new Map();
  let answer = false;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    map.set(num, { idx: i, val: num });
  }

  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (map.get(need) && map.get(need).idx !== i) {
      answer = true;
      break;
    }
  }

  return answer;
}

console.log(solution2([1, 2, 3, 4, 8], 6)); //true
console.log(solution2([2, 3, 5, 9], 10)); //false

function countSort(arr, k) {
  //1. 해시 테이블 생성 및 초기화
  const hashTable = new Array(k + 1).fill(0);

  for (const num of arr) {
    // 현재 원소의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashTable[num] = 1;
    }
  }

  return hashTable;
}

function solution_book(arr, target) {
  const hashTable = countSort(arr, target);

  console.log(hashTable);

  for (const num of arr) {
    const complement = target - num;
    //2. target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashTable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution_book([1, 2, 3, 4, 8], 6)); //true
console.log(solution_book([2, 3, 5, 9], 10)); //false
