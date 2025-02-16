let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



let totalPrice = parseInt(input[0]);
let buys = parseInt(input[1]);

let targetArr = input.slice(2).map(v => v.split(" ").map(Number))

if (targetArr.length !== buys) {
  console.log("No")
  return;
}

let result = 0;
for (let i = 0; i < targetArr.length; i++) {
  let [A, B] = targetArr[i];
  result += A * B
}
result === totalPrice ? console.log('Yes') : console.log('No')