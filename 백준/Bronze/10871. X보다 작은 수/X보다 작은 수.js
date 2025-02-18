let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let [N, X] = input[0].split(" ").map(Number)

let target = input[1].split(" ").map(Number)

if (N !== target.length) {
  return false;
}

let s = target.filter(v => v < X).join(" ")

console.log(s)