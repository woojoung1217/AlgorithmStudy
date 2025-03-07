let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

// N의 소인수분해
let N = parseInt(input);

// 2부터 시작해서 N을 나눠봄
for (let i = 2; i <= Math.sqrt(N); i++) {
  while (N % i === 0) {
    console.log(i);
    N /= i;
  }
}
// N이 2보다 큰 값이라면 그것도 출력 (N이 소수일 경우)
if (N > 1) {
  console.log(N);
}
