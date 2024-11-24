function solution(id_list, report, k) {
  //한 번에 한명 유저 신고 가능
  //동일 유저 신고는 1번으로 cnt -> set객체
  //k번 이상 신고 유저 정지, 신고한 유저에게 정지 사실 메일 발송
  //메일을 받은 횟수 리턴
  //report <= 200000 , O(n^2) x

  const Obj = {};
  const cntMap = new Map();

  report.forEach((r) => {
    const [myUserName, badUserName] = r.split(" ");

    if (!(myUserName in Obj)) {
      Obj[myUserName] = new Set();
    }

    //동일 신고 ch 후 cnt
    if (!Obj[myUserName].has(badUserName)) {
      cntMap.set(badUserName, (cntMap.get(badUserName) || 0) + 1);
    }

    Obj[myUserName].add(badUserName);
  });

  // return Obj
  // 답 도출
  const answer = id_list.map((id) => {
    let cnt = 0;

    if (!(id in Obj)) return 0;

    Obj[id].forEach((val) => {
      if (cntMap.get(val) >= k) cnt++;
    });

    return cnt;
  });

  return answer;
}

function solution_book(id_list, report, k) {
  const reportedUser = {}; // 신고당한 유저 - 신고 유저 집합을 저장할 오브젝트
  const count = {}; // 처리 결과 메일을 받은 유저 - 받은 횟수를 저장할 오브젝트

  //1. 신고 기록 순회
  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (!reportedUser[reportedId]) {
      //2. 신고당한 기록이 없다면
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId); //3. 신고한 사람의 아이디를 집합에 담아 오브젝트에 연결
  }

  //4. 신고당한 유저별로 신고당한 횟수를 확인
  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      //5. 정지 기준에 만족하는지 확인
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const answer = [];
  //6. 각 아이디별 메일을 받은 횟수를 순서대로 정리
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}
