let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let arr = input.slice().map(Number)



let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i]
}

let x = arr.indexOf(max)

console.log(max)
console.log(x + 1)

