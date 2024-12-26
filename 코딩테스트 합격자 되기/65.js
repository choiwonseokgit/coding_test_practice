function makeBinaryNum(num) {
  let numStr = "";

  while (num !== 0) {
    numStr = parseInt(num % 2) + numStr;
    num = parseInt(num / 2);
  }

  return numStr;
}

function solution(s) {
  // 이진 변환의 횟수, 변환 과정에서 제거된 0의 갯수 ex) return [3, 8]
  let cnt = 0;
  let deleteZeroCnt = 0;

  while (s !== "1") {
    if (s.includes("0")) {
      const newS = s.replaceAll("0", "");
      deleteZeroCnt += s.length - newS.length;
      s = newS;
    }
    const len = s.length;

    s = makeBinaryNum(len);
    cnt++;
  }

  return [cnt, deleteZeroCnt];
}

function solution_book(s) {
  // 1. 이진 변환 횟수를 저장하는 변수
  let countTransform = 0;
  // 2. 제거된 모든 0의 개수를 저장하는 변수
  let countZero = 0;

  // 3. s가 '1'이 아닌 동안 계속 반복
  while (s !== "1") {
    s = s.split(""); // 문자열을 배열로 반환
    // 4. 이진 변환 횟수를 1 증가
    countTransform += 1;
    // 5. s에서 '0'의 개수를 세어 countZero에 누적
    countZero += s.filter((c) => c === "0").length;
    // 6. s에서 '1'의 개수를 세고, 이를 이진수로 반환
    s = s.filter((c) => c === "1").length.toString(2);
  }

  // 7. 이진 변환 횟수와 제거된 '0'의 개수를 배열에 담아 반환
  return [countTransform, countZero];
}
