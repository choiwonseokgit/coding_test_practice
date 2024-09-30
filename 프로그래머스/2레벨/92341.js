function solution(fees, records) {
  const [defTime, defMoney, perTime, perFee] = fees;
  //1. records에서 반복문으로 타켓 번호판 찾는다.
  //2. 그 번호판으로 돈 계산한 후에 result 배열에 삽입한다.
  //3. 게산이 완료된 번호판은 ch 배열에 넣는다.
  const ch = [];
  const result = [];

  function calculateFee(filterdRecords) {
    let startTime = "";
    let finishTime = "";
    let totalTime = 0;

    filterdRecords.forEach((record) => {
      const [time, carNum, state] = record.split(" ");
      if (state === "IN") startTime = time;
      else if (state === "OUT") {
        finishTime = time;
        let [finishHour, finishMinute] = finishTime.split(":").map(Number);
        let [startHour, startMinute] = startTime.split(":").map(Number);

        finishMinute += finishHour * 60;
        startMinute += startHour * 60;

        const calMinute = finishMinute - startMinute;

        //console.log(carNum, calMinute);

        // const currFee =
        //   calMinute <= defTime
        //     ? defMoney
        //     : Math.ceil((calMinute - defTime) / perTime) * perFee;

        // fee += currFee;
        totalTime += calMinute;
        startTime = "";
        finishTime = "";
      }
    });

    if (!!startTime) {
      const finishMinute = 59 + 23 * 60;
      let [startHour, startMinute] = startTime.split(":").map(Number);
      startMinute += startHour * 60;

      const calMinute = finishMinute - startMinute;
      totalTime += calMinute;

      //   const currFee =
      //     calMinute <= defTime
      //       ? defMoney
      //       : Math.ceil((calMinute - defTime) / perTime) * perFee;
      //   fee += currFee;
    }

    const fee =
      totalTime <= defTime
        ? defMoney
        : Math.ceil((totalTime - defTime) / perTime) * perFee + defMoney;

    return fee;
  }

  records.forEach((record, _, records) => {
    const [time, carNum, state] = record.split(" ");

    if (ch.includes(carNum)) return;

    ch.push(carNum);

    const targetRecords = records.filter((record) => {
      const [time2, carNum2, state2] = record.split(" ");
      return carNum === carNum2;
    });

    //console.log(targetRecords);

    const fee = calculateFee(targetRecords);
    result.push([carNum, fee]);
  });

  return result.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
