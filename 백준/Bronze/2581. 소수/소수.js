let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let start = parseInt(input[0]);
let till = parseInt(input[1]);

let result = [];

// start부터 till까지 소수인지 확인
for (let i = start; i <= till; i++) {
  let isPrime = true;  // 처음에는 소수로 가정

  if (i < 2) {
    isPrime = false;  // 2보다 작은 숫자는 소수가 아님
  }

  // 소수 판별
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.push(i);
  }
}

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((acc, cur) => acc + cur, 0));
  console.log(result[0]);
}
