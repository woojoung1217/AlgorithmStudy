let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let [nums, targetNumber] = input[0].split(" ").map(Number);


let maxSums = 0;

let cards = input[1].split(" ").map(Number);
for (let i = 0; i < nums - 2; i++) {
  for (let j = i + 1; j < nums - 1; j++) {
    for (let k = j + 1; k < nums; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= targetNumber && sum > maxSums) {
        maxSums = sum;
      }
    }
  }
}

console.log(maxSums)