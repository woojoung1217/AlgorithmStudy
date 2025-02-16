let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);


function ToN(nums) {
  let result = 0;
  for (let i = 1; i <= nums; i++) {
    result += i;
  }
  console.log(result)
}

ToN(input)
