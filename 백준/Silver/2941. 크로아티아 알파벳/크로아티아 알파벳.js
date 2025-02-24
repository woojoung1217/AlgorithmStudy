let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// 크로아티아 알파벳을 하나의 문자로 변환
for (let ca of croatianAlphabets) {
  input = input.split(ca).join("X"); // 크로아티아 알파벳을 임의 문자(X)로 대체
}

console.log(input.length); // 최종 문자열 길이 출력
