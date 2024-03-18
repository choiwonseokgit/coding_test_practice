const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const times = parseInt(input[0])
const arr = input.slice(1)

let answerStr = ''
for(let i=0; i<times; i++) {
    const testArr = arr[i].split('');
    if(isVps(testArr)) {
        answerStr += 'YES'
    } else {
        answerStr += 'NO'
    }
    answerStr += '\n'
}
console.log(answerStr)

function isVps(testArr) {
    const newArr = [];
    let isBreak = false;
    
    testArr.forEach((el) => {
        if(el === '(') {
            newArr.push(el)
        } 
        if(el === ')') {
            if(newArr.length === 0) {
                isBreak = true;
                return;
            }
            newArr.pop()
        }

    })
    if(!isBreak && newArr.length === 0) return true
    return false
}