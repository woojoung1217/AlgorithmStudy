const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = input[0]; // B진법 수
const B = parseInt(input[1]); // 진법

const decimalValue = parseInt(N, B); // B진법 -> 10진법 변환
console.log(decimalValue);
