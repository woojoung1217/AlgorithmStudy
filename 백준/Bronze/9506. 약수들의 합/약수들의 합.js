let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map(Number);

// 각 테스트 케이스에 대해 반복문 실행
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];

  // -1이 입력되면 종료
  if (n === -1) break;

  let result = [];

  for (let j = 1; j <= n / 2; j++) {
    if (n % j == 0) {
      result.push(j)
    }
  }
  if (result.reduce((acc, cur) => acc + cur, 0) === n) {
    console.log(`${n} = ${result.join(" + ")}`)
  } else {
    console.log(`${n} is NOT perfect.`)
  }


} 
