let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, k] = input[0].split(" ").map(Number);
let scores = input[1].split(" ").map(Number);

// 점수를 내림차순 정렬
scores.sort((a, b) => b - a);

// 커트라인 점수 출력
console.log(scores[k - 1]);
