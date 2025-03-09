let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');




let arr = input.join(" ").split(" ").map(Number);


let hol = arr.filter((v, i) => i % 2 !== 0)
let jak = arr.filter((v, i) => i % 2 == 0)


let a1 = hol.filter((v) => hol.indexOf(v) === hol.lastIndexOf(v));
let a2 = jak.filter((v) => jak.indexOf(v) === jak.lastIndexOf(v));


console.log(...a2.concat(a1))