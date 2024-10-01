function solution(book_time) {
  function makeMinute(time) {
    const [hour, minute] = time.split(":").map(Number);

    const totalMinute = hour * 60 + minute;

    return totalMinute;
  }

  const book_time_minute = book_time.map((time) => time.map(makeMinute));
  book_time_minute.sort((a, b) => a[0] - b[0]);

  const rooms = [];

  book_time_minute.forEach((time) => {
    const [start, end] = time;
    // 배정된 룸이 없을때
    if (!rooms.length) rooms.push(time);
    else {
      //배정된 룸이 있을때
      let idx = 0;
      let isChangePosiible = false;

      rooms.forEach((room, i) => {
        const [roomStart, roomEnd] = room;
        if (start >= roomEnd + 10) {
          idx = i;
          isChangePosiible = true;
          return;
        }
      });

      if (isChangePosiible) rooms[idx] = time;
      else rooms.push(time);
    }
  });

  return rooms.length;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
