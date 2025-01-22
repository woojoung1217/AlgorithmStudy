
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  rl.close();
}).on('close', function () {
  const [a, b] = input[0].split(' ').map(Number);
  console.log(a + b);
  process.exit();
});