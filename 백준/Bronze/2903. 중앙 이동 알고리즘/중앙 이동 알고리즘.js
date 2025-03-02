const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()


let target = parseInt(input);


let result = Math.pow(2, target) + 1;

console.log(result * result)


