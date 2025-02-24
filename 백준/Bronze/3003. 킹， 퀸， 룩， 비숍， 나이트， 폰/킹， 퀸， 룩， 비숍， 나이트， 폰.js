let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let arr = input.join("").split(" ").map(Number)


let goal = [1, 1, 2, 2, 2, 8];


let result = goal.map((v, i) => v - arr[i]);

console.log(result.join(" "))


// , 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개