let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let nums = input.map(Number);
let los = [];

// 42로 나눈 나머지를 구함
for (let i = 0; i < nums.length; i++) {
  los.push(nums[i] % 42);
}

let x = new Set(los);
console.log(x.size)


// 수를 입력 받음
// 42로 나눈 나머지를 구함
// 그 다움 서로 다른 값이 몇개 인지 체크 