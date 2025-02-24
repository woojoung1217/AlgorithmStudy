let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let tar1 = input.join("")

let tar2 = input.join("").split("").reverse().join('')

console.log(tar1 === tar2 ? 1 : 0)