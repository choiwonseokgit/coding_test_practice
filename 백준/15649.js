/*
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map((i) => parseInt(i))
const [n, m] = input

const Arr = new Array(n).fill().map((_, i) => i+1);

const answerArr = [];

function permutation(currentArr, leftArr) {
    if(currentArr.length === m) {
        answerArr.push(currentArr);
        return;
    }
    
    leftArr.map((num, i) => {
        permutation([...currentArr, num], [...leftArr.slice(0, i), ...leftArr.slice(i+1)])
    })
}

Arr.map((num, i) => {
    permutation([num], [...Arr.slice(0, i), ...Arr.slice(i+1)])
})

let resultString = '';
answerArr.forEach((answer, i) => {
    const string = answer.join(' ')
    resultString += string
    resultString += '\n'
})
console.log(resultString)
*/

function question(n, m) {
  const arr = new Array(n).fill().map((_, i) => i + 1);
  const answerArr = [];

  //재귀호출은 계속 함수를 호출하는 것 종료조건으로 조절

  function permutation(curArr, leftArr) {
    console.log("curArr: ", curArr, "leftArr: ", leftArr);
    //종료 조건
    if (curArr.length === m) {
      answerArr.push(curArr);
      // console.log("curArr: ", curArr);
      return;
    }

    leftArr.forEach((num, i) => {
      permutation(
        [...curArr, num],
        [...leftArr.slice(0, i), ...leftArr.slice(i + 1)]
      );
    });
  }

  arr.forEach((num, i) => {
    permutation([num], [...arr.slice(0, i), ...arr.slice(i + 1)]);
  });

  //arr = [1,2,3,4]
  //[1,2,3,4].forEach
  //permutation([1], [2,3,4]) -> [2,3,4].forEach -> permutation([1,2], [3,4]) -> [3,4].forEach -> permutation([1,2,3], [4]) return
  //                                                                                           -> permutation([1,2,4], [3]) return
  //permutation([2], [1,3,4])
  //permutation([3], [1,2,4])
  //permutation([4], [1,2,3])

  console.log(answerArr);
}

// combination(4, 2);
question(4, 3);

// const allNum = Array(n).fill().map((_, i) => i+1);

//지금까지 고른 수의 배열, 앞으로 고를 수 있는 배열
// [1, 2, 3, 4];
// permutation([1], [2, 3, 4]);
// [1,2] [3,4]
// [1,2,3] [4]
// [1,2,3,4] [] -> 빈 배열이면 끝

// const answerArr = [];

// function permutation(currentArr, leftArr) {
//   //종료 조건
//   if (currentArr.length === m) {
//     answerArr.push(currentArr);
//     return;
//   }

//   leftArr.map((num, i) => {
//     permutation(
//       [...currentArr, num],
//       [...leftArr.slice(0, i), ...leftArr.slice(i + 1)]
//     );
//   });
// }

// allNum.map((num, i) => {
//   permutation([num], [...allNum.slice(0, i), ...allNum.slice(i + 1)]);
// });
