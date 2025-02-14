
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
  let score = inputs.join("").split(" ").map(Number);

  switch (true) {
    case score >= 90 && score <= 100:
      console.log('A');
      break;
    case score >= 80 && score <= 89:
      console.log('B');
      break;
    case score >= 70 && score <= 79:
      console.log('C')
      break;
    case score >= 60 && score <= 69:
      console.log('D')
      break;
    default:
      console.log('F')
  }

});