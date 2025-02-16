let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');




let T = input.length;


for (let i = 0; i < T; i++) {
  let res = input[i].split(" ").map(Number).reduce((acc, cur) => acc + cur, 0)
  if (res === 0) {
    break;
  }
  console.log(res)
}