function solution(number, k) {
  const arr = [];
  let cnt = 0;

  for (const num of number) {
    while (cnt < k && arr[arr.length - 1] < num) {
      arr.pop();
      cnt++;
    }

    arr.push(+num);
    console.log(arr);
  }

  console.log(cnt);
  arr.splice(number.length - (k - cnt), k - cnt); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  return arr.join("");
}

// console.log(solution("1924", 2));
// console.log(solution("4177252841", 4));
console.log(solution("333222111 ", 3));
