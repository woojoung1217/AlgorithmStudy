let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let len = parseInt(input[0])

let arr = input[1].split(" ").map(Number)


if (len !== arr.length) {
  return false
}


for (let i = 0; i < arr.length; i++) {
  let x = arr.sort((a, b) => b - a);
  if (x) {
    console.log(x[x.length - 1], x[0])
    break;
  }
}