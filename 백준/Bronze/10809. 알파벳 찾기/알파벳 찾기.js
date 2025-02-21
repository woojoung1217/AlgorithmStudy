let fs = require('fs')


let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")



let alphabet = [];

// 알파벳 소문자 배열 생성
for (let i = 0; i < 26; i++) {
  alphabet.push(String.fromCharCode(97 + i)); // 97은 'a'의 ASCII 코드
}

let target = input.toString()

let res = '';

for (let i = 0; i < alphabet.length; i++) {
  res += target.indexOf(alphabet[i]) + " "
}

console.log(res)