const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

// 'line' 이벤트에서 각 입력을 받음
rl.on('line', (line) => {
  inputs.push(line);
}).on('close', () => {
  // 첫 번째 줄은 테스트 케이스 개수
  let times = parseInt(inputs[0]);

  // 각 테스트 케이스에 대해 A와 B를 더하고 출력
  for (let i = 1; i <= times; i++) {
    const [A, B] = inputs[i].split(' ').map(Number);
    console.log(A + B); // A + B 출력
  }
});
