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
  let [h, m, d] = inputs.join(" ").split(" ").map(Number);

  let starttotalMinute = h * 60 + m + d;

  // 음수일 경우 하루(1440분)만큼 더해서 보정
  if (starttotalMinute < 0) {
    starttotalMinute += 24 * 60;
  }

  let newH = Math.floor(starttotalMinute / 60) % 24;
  let newM = starttotalMinute % 60;

  console.log(newH, newM);
});
