let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tests = parseInt(input[0]);
let scores = input[1].split(" ").map(Number);

let maxScore = Math.max(...scores);
let result = scores.reduce((sum, score) => sum + (score / maxScore) * 100, 0);

let average = result / tests;
console.log(average.toFixed(6));
