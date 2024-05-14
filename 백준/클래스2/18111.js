const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, B] = input[0].split(" ").map((el) => +el);
const grounds = input.slice(1).map((el) => el.split(" ").map((el2) => +el2));

// 각 케이스별 최소 시간을 저장할 배열
const minTimes = [];

for (let targetHeight = 0; targetHeight <= 256; targetHeight++) {
  let time = 0;
  let blocksNeeded = 0;
  let blocksLeft = B;
  let blocksRemoved = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const currentHeight = grounds[i][j];
      const diff = Math.abs(currentHeight - targetHeight);

      // 블록을 제거하는 케이스
      if (currentHeight > targetHeight) {
        time += diff * 2; // 제거하는데 걸리는 시간
        blocksRemoved += diff; // 제거된 블록 수
      }
      // 블록을 추가하는 케이스
      else if (currentHeight < targetHeight) {
        time += diff; // 추가하는데 걸리는 시간
        blocksNeeded += diff; // 필요한 블록 수
      }
    }
  }

  blocksLeft += blocksRemoved; // 블록을 제거하면 인벤토리에 추가됨
  if (blocksLeft >= blocksNeeded) {
    // 인벤토리에 충분한 블록이 있을 때만 고려
    minTimes.push({ height: targetHeight, time });
  }
}

// 최소 시간인 경우를 찾음
minTimes.sort((a, b) => a.time - b.time || b.height - a.height);
console.log(`${minTimes[0].time} ${minTimes[0].height}`);
