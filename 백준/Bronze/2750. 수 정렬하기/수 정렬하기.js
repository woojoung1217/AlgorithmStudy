let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.slice(1).map(Number);  // 첫 번째 줄은 N이므로 제외하고 숫자만 받기

let sorted = arr.sort((a, b) => a - b);  // 오름차순 정렬

for (let i = 0; i < sorted.length; i++) {
  console.log(sorted[i]);
}
