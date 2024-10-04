//1. head기준
//2. number기준 (number형으로 바꾸면 될듯)
//3. tail기준 (주어진 순서대로, idx 활용하면 될듯)

function solution(files) {
  function getSplitFiles(file, idx) {
    let numberStartIdx = 0; // 첫 번째 숫자 시작 인덱스
    let numberEndIdx = 0; // 마지막 숫자 인덱스
    let foundNumber = false;

    // 파일명을 순회하면서 숫자가 시작되는 위치와 끝나는 위치를 찾음
    for (let i = 0; i < file.length; i++) {
      if (!isNaN(file[i]) && file[i] !== " ") {
        // 숫자일 때
        if (!foundNumber) {
          // 첫 번째 숫자를 찾은 경우
          numberStartIdx = i;
          foundNumber = true;
        }
        numberEndIdx = i; // 숫자의 마지막 위치를 기록
      } else if (foundNumber) {
        // 숫자가 끝나면 바로 종료
        break;
      }
    }

    // head, number, tail 추출
    const head = file.slice(0, numberStartIdx);
    const number = file.slice(numberStartIdx, numberEndIdx + 1);
    const tail = file.slice(numberEndIdx + 1);

    return [head, number, idx, file];
  }

  const splitFiles = files.map((file, idx) => {
    return getSplitFiles(file, idx);
  });

  //1. head기준
  //2. number기준 (number형으로 바꾸면 될듯)
  //3. tail기준 (주어진 순서대로, idx 활용하면 될듯)

  splitFiles.sort((a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      if (Number(a[1]) === Number(b[1])) {
        return a[2] - b[2];
      }
      return Number(a[1]) - Number(b[1]);
    }
    return a[0].localeCompare(b[0]);
  });

  console.log(splitFiles);
  return splitFiles.map((file) => file[3]);
}
