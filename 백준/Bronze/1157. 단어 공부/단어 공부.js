let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()



let str1 = input.toUpperCase().split("")


let fre1 = {};



for (let item of str1) {
  fre1[item] = (fre1[item] || 0) + 1;
}


// 최대 빈도 찾기
let maxFreq = Math.max(...Object.values(fre1));

// 최대 빈도와 일치하는 항목들 찾기
let maxItems = Object.entries(fre1).filter(([key, value]) => value === maxFreq);

console.log(maxItems.length >= 2 ? '?' : maxItems[0][0])