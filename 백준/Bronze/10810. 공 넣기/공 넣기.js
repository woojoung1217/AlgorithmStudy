let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(" ").map(Number)



let baskets = Array(N).fill(0);



for (let i = 1; i < M + 1; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  for (let idx = a - 1; idx < b; idx++) {
    baskets[idx] = c;
  }
}
console.log(baskets.join(" "))



