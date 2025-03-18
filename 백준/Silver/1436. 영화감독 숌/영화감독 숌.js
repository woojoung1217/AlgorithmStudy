let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let N = parseInt(input); // Directly parse the input value

let count = 0;
let num = 666;

while (true) {
  if (String(num).includes('666')) {
    count++;
    if (count === N) {
      console.log(num);
      break;
    }
  }
  num++;
}
