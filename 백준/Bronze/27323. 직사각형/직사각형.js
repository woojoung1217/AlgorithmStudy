let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");




let [A, B] = input.map(v => parseInt(v));

console.log(A * B)