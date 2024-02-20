/*
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map((i) => parseInt(i))
const [n, m] = input
const firstArr = new Array(n).fill().map((_, i) => i+1);

const chosenArr = [];
//[2] [1,3,4]
//[2,1] [3,4]


const combination = (curArr, leftArr) => {
    if(curArr.length === m) {
        curArr.sort((a,b) => a-b);
        const curStr = curArr.join(' ');
        if(!chosenArr.find((el) => el === curStr)) {
        chosenArr.push(curStr);
        }        
        return;
    }
    leftArr.map((el, i) => {
        combination([...curArr, el], [...leftArr.slice(0, i), ...leftArr.slice(i+1)])
    })
}

firstArr.map((el, i) => {
    combination([el], [...firstArr.slice(0, i), ...firstArr.slice(i+1)])
})

let answerStr = ''
chosenArr.map((el) => {
    answerStr += el;
    answerStr += '\n'
})

console.log(answerStr)
*/
