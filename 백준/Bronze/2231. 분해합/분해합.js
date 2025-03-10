let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let targetNumber = parseInt(input)
let result = 0; // 생성자가 없을 경우 0을 출력

for (let i = 1; i < targetNumber; i++) {
  let sum = i;
  let str = i.toString();

  for (let char of str) {
    sum += parseInt(char);
  }
  if (sum === targetNumber) {
    result = i;
    break
  }
}

console.log(result);
