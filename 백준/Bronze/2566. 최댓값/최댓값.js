let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let arr = input.map(v => v.split(" ").flatMap(Number));

let maxVal = -Infinity; // 최대값을 저장할 변수
let location = [0, 0]; // 최대값의 좌표 (세로, 가로)

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > maxVal) {
      maxVal = arr[i][j];
      location = [i + 1, j + 1]
    }
  }
}
console.log(maxVal)
console.log(location.join(" "))


// 세로 , 가로 순으로 한칸 띄어서