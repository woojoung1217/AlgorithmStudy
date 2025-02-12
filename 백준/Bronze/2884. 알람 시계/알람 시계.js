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
  // 시간 분 단위로 되어 있는 것을 총 분으로 바꾼다
  // 거기서 45분을 빼고 
  // 다시 시간으로 바꾼다
  let [h, m] = inputs.join("").split(" ").map(Number);
  let totalM = h * 60 + m;

  totalM -= 45;
  if (totalM < 0) {
    totalM = totalM + 24 * 60
  }
  let newH = Math.floor(totalM / 60);
  let newM = totalM % 60;

  console.log(newH, newM)


});