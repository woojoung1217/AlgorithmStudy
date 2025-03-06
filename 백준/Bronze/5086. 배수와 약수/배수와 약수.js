let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map(v => v.split(" ").map(Number));

for (let i = 0; i < arr.length; i++) {
  let [A, B] = arr[i];

  if (A === 0 && B === 0) break; // 종료 조건

  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
