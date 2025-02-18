let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let count = parseInt(input[0])

let targetArr = input[1].split(" ").map(Number)

let target = parseInt(input[2])

let total = 0;

for (let item of targetArr) {
  if (item === target) {
    total++;
  }
}
console.log(total)