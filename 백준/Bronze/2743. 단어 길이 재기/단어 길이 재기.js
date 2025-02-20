let fs = require('fs')


let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


let str = input[0].split("")
console.log(str.length)