let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let [t1, t2] = input[0].split(" ");


let x = parseInt([...t1].reverse().join(""))
let y = parseInt([...t2].reverse().join(""))

console.log(x > y ? x : y)