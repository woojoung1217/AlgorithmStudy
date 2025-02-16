let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let res = input[i].split(" ").map(Number).reduce((acc, cur) => acc + cur, 0);
  console.log(`Case #${i}: ${res}`)
}

