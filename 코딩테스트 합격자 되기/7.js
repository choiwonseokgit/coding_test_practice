function solution(dirs) {
  const set = new Set();
  let [x, y] = [0, 0];

  for (const dir of dirs) {
    let [nx, ny] = [x, y];

    switch (dir) {
      case "U":
        ny += 1;
        break;
      case "D":
        ny -= 1;
        break;
      case "L":
        nx -= 1;
        break;
      case "R":
        nx += 1;
        break;
      default:
        break;
    }

    if (nx <= 5 && ny <= 5 && nx >= -5 && ny >= -5) {
      set.add(`${x}${y}-${nx}${ny}`);
      set.add(`${nx}${ny}-${x}${y}`);
      x = nx;
      y = ny;
    }
  }

  return set.size / 2;
}

function isValidMove(nx, ny) {
  //1. 좌표평면을 벗어나는지 체크하는 함수
  return nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5;
}

function updateLocation(x, y, dir) {
  //2. 명령어를 통해 다음 좌표 결정
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let [x, y] = [0, 0];

  const visited = new Set(); //3. 겹치는 좌표는 1개로 처리하기 위함
  for (const dir of dirs) {
    //4. 주어진 명령어로 움직이면서 좌표 저장
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      //5. 벗어난 좌표는 인정하지 않음
      continue;
    }

    //6. A에서 B로 간 경우 B에서 A도 추가해야 함(총 경로의 개수는 방향성이 없음)
    visited.add(`${x}${y}-${nx}${ny}`);
    visited.add(`${nx}${ny}-${x}${y}`);

    [x, y] = [nx, ny]; //7. 좌표를 이동했으므로 업데이트
  }

  return visited.size / 2;
}
