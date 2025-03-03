let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let target = parseInt(input);


let layer = 1;
let count = 1;

while (count < target) {
  count += 6 * layer;
  layer++;
}

console.log(layer)