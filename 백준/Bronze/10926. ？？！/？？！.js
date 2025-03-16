let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let res = input.concat("??!");

console.log(res.join(""))