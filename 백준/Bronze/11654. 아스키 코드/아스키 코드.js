let fs = require('fs')


let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


let res = String(input)

let z = res.charCodeAt(0);

console.log(z)