let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);

let delArr = input.slice(1).map(line => line.split(" ").map(Number))


let resultArr = [];

for (let i = 0; i < n; i++) {
  let row = [];
  for (let j = 0; j < m; j++) {
    row.push(delArr[i][j] + delArr[i +n][j])
  }
  resultArr.push(row.join(" "))
}
console.log(resultArr.join("\n"))