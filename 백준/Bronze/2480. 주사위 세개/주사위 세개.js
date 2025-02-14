const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let [z1, z2, z3] = line.split(" ").map(Number);

  let prize = 0;

  if (z1 === z2 && z2 === z3) {
    // 같은 눈 3개
    prize = 10000 + z1 * 1000;
  } else if (z1 === z2 || z1 === z3) {
    // 같은 눈 2개 (z1이 다른 하나와 같음)
    prize = 1000 + z1 * 100;
  } else if (z2 === z3) {
    // 같은 눈 2개 (z2와 z3가 같음)
    prize = 1000 + z2 * 100;
  } else {
    // 모두 다른 경우 (최댓값 찾기)
    prize = Math.max(z1, z2, z3) * 100;
  }

  console.log(prize);
  rl.close();
});
