let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');





const n = Number(input[0]); // 색종이 개수


let canvas = Array.from({ length: 100 }, () => Array(100).fill(0))


for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      canvas[x + row][y + col] = 1
    }
  }
}


let result = canvas.flat().reduce((acc, cur) => acc + cur, 0)

console.log(result)

