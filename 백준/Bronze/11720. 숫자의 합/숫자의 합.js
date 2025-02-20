let fs = require('fs')


let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")



let [times, nums] = input.map(BigInt)

let arr = [nums].join("").split("").map(BigInt)

let res = 0n;

for (let item of arr) {
  res += item
}
console.log(res.toString())