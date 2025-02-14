const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(line);

}).on('close', () => {
  let num = Number(inputs);
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
  }
});