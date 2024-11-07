function solution(numbers) {
  const sums = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.push(numbers[i] + numbers[j]);
    }
  }

  const answer = Array.from(new Set(sums));
  answer.sort((a, b) => a - b);

  return answer;
}
