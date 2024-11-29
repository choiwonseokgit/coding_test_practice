function solution(nums) {
  const getNum = parseInt(nums.length / 2);
  const set = new Set();

  return set.size <= getNum ? set.size : getNum;
}
