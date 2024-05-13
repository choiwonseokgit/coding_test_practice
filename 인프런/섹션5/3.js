function solution(target, arr) {
  let cnt = 0;
  arr.forEach((_, i) => {
    const slicedArr = arr.slice(i);
    let sum = 0;
    for (let i = 0; i < slicedArr.length; i++) {
      sum += slicedArr[i];
      if (sum === target) cnt += 1;
      if (sum > target) {
        break;
      }
    }
    // slicedArr.forEach((el2) => {
    //   sum += el2;
    //   if (sum === target) return (cnt += 1);
    //   else if (sum > target) return;
    // });
  });
  return cnt;
}

function solution2(target, arr) {
  let p1 = 0;
  let p2 = 0;
  let cnt = 0;
  let sum = 0;

  while (p1 < arr.length) {
    console.log(p1, p2, sum);

    if (sum === 0) {
      sum += arr[p1];
      p2 += 1;
      continue;
    } else if (sum < target && p2 < arr.length) {
      sum += arr[p2];
      p2 += 1;
      continue;
    } else if (sum === target) {
      cnt += 1;
    }
    sum = 0;
    p1 = p2 = p1 + 1;
  }

  return cnt;
}

function solution3(target, arr) {
  let left = (right = 0);
  let sum = arr[left];
  let cnt = 0;

  while (right < arr.length) {
    console.log(left, right, sum);
    if (sum < target) {
      right += 1;
      sum += arr[right];
    } else if (sum >= target) {
      if (sum === target) cnt += 1;
      sum -= arr[left];
      left += 1;
    }
  }

  return cnt;
}

function solution_teacher(target, arr) {
  let left = 0;
  let sum = 0;
  let cnt = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left++];
    }
    if (sum === target) cnt++;
  }
  return cnt;
}

console.log(solution_teacher(6, [1, 2, 1, 3, 1, 1, 1, 2]));
