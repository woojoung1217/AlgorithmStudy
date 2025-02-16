let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let T = parseInt(input[0]);

let res = '';

for (let i = 1; i <= T; i++) {  // 1부터 시작해야 함
  res += '*'.repeat(i) + '\n';
}
console.log(res)
// 별이 제어 가능한 반복이어여함