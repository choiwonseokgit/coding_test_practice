// 이분탐색 풀이
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// const myCards = input[1].split(' ').map((el) => parseInt(el, 10)).sort((a,b) => a- b)
// const testCards = input[3].split(' ').map((el) => parseInt(el, 10))

// function binarySearch(startIdx, endIdx, targetNum) {
//     const midIdx = Math.floor((startIdx + endIdx) / 2)
//     const midNum = myCards[midIdx]

//     if(targetNum === midNum) return 1
//     if(startIdx >= endIdx) return 0

//     if(targetNum > midNum) return binarySearch(midIdx + 1, endIdx, targetNum)
//     if(targetNum < midNum) return binarySearch(startIdx, midIdx - 1, targetNum)
// }

// const answerArr = testCards.map((card) => binarySearch(0, myCards.length-1, card))
// console.log(answerArr.join('\n'))

// Map 을 이용한 풀이
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// const myCards = input[1].split(' ').map((el) => parseInt(el, 10))
// const testCards = input[3].split(' ').map((el) => parseInt(el, 10))

// const map = new Map()
// myCards.forEach((card) => map.set(card, 1))

// const answerArr = testCards.map((testcard) => +map.has(testcard))

// let answerStr = ''
// answerArr.forEach((answer) => answerStr += (answer.toString() + '\n'))
// console.log(answerStr)
