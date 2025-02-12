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
  let [x, y] = inputs.map(Number);

  if (x > 0 && y > 0) {
    console.log(1); // 1사분면
  } else if (x < 0 && y > 0) {
    console.log(2); // 2사분면
  } else if (x < 0 && y < 0) {
    console.log(3); // 3사분면
  } else if (x > 0 && y < 0) {
    console.log(4); // 4사분면
  }

});
