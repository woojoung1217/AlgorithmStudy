let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let arr = input.join(" ").split("").map(Number);


let sr = arr.sort((a, b) => b - a)

console.log(sr.join(""))