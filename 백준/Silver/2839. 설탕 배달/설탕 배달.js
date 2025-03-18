let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let bagsCount = 0;
let target = parseInt(input);

while (target >= 0) {
  if (target % 5 === 0) {
    bagsCount += target / 5;
    console.log(bagsCount);
    return;
  }
  target -= 3;
  bagsCount++;
}

// 더 이상 정확하게 만들 수 없을 때
console.log(-1);
