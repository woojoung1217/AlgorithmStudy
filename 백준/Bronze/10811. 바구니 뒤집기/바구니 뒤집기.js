let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let [N, M] = input[0].split(" ").map(Number);

let arr = Array.from({ length: N }, (_, i) => i + 1);


for (let i = 0; i < M; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);

  let temp = arr.slice(x - 1, y).reverse()

  let d = arr.splice(x - 1, y - x + 1, ...temp);

}
console.log(arr.join(" "))

