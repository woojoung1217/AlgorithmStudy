let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');




let [A, B] = input.join("").split(" ").map(Number);



let result = [];

for (let i = 1; i <= A; i++) {
  if (A % i === 0 && !result.includes(i)) {
    result.push(i);
  }
}

let ans = result.sort((a, b) => a - b)
console.log(ans[B - 1] === undefined ? 0 : ans[B - 1])