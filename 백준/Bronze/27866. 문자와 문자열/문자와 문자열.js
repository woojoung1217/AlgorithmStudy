let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


let str = input[0];
let tn = parseInt(input[1])


console.log(str[tn - 1])