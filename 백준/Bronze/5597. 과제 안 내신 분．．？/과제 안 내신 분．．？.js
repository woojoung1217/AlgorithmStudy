let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let list = Array.from({ length: 30 }, (_, i) => i + 1)

let arr = input.map(Number).sort((a, b) => a - b)

let missingNumbers = list.filter(num => !arr.includes(num));


console.log(missingNumbers.join("\n"))
