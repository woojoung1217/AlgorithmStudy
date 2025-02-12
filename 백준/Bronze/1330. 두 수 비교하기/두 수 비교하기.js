const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);
  // 여기서 rl.close()를 제거합니다
}).on('close', () => {
  let arr = inputs.join("").split(" ").map(Number);
  let A = arr[0];
  let B = arr[1];

  console.log(A > B ? '>' : A < B ? "<" : '==')
});