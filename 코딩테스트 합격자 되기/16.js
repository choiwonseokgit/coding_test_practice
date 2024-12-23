//나의 첫번째 코드
function solution(progresses, speeds) {
  let checkIdx = 0;
  let finishCnt = 0;
  const answer = [];

  while (finishCnt < progresses.length) {
    for (let i = checkIdx; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[checkIdx] >= 100) {
      let cnt = 0;
      for (let i = checkIdx; i < progresses.length; i++) {
        if (progresses[i] >= 100) cnt++;
        else {
          checkIdx = i;
          break;
        }
      }
      answer.push(cnt);
      finishCnt += cnt;
    }

    if (checkIdx >= progresses.length) break;
  }

  return answer;
}

//제공된 코드
function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  //1. 각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let cnt = 0; //2. 배포될 작업의 수 카운트
  let maxDay = daysLeft[0]; //3. 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      //4. 배포 가능일이 가장 늦은 배포일보다 빠르면
      cnt++;
    } else {
      //5. 배포 예정일이 기준 배포일보다 느리면
      answer.push(cnt);
      cnt = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(cnt); //6. 마지막으로 카운트된 작업들을 함께 배포
  return answer;
}

function solution2(progresses, speeds) {
  // 작업 순서에 따라 배포, 뒷 순서가 먼저 완료되어도 앞 순서 작업이 완료될때 같입 배포
  // return [2 ,1] -> 배포 일짜별 작업 횟수 return

  const answer = [];
  let prevNeedDay = null;

  progresses.forEach((progress, i) => {
    const left = 100 - progress;
    const needDay = Math.ceil(left / speeds[i]);

    if (prevNeedDay && prevNeedDay >= needDay) {
      answer[answer.length - 1] += 1;
    } else {
      answer.push(1);
      prevNeedDay = needDay;
    }
  });

  return answer;
}
