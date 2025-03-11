let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, c, d, e, f] = input[0].split(" ").map(Number);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
      return;
    }
  }
}