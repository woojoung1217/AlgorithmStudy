let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력을 배열로 변환 (각 문자를 개별 요소로 분리)
let arr = input.map(v => v.split(""));

let result = "";

// 최대 열 길이를 구함 (모든 행이 동일한 길이가 아닐 수 있음)
let maxLen = Math.max(...arr.map(v => v.length));

// 세로로 읽기
for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][i] !== undefined) {  // undefined 방지 (길이가 짧은 행 고려)
      result += arr[j][i];
    }
  }
}

console.log(result);
