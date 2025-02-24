let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let groupCount = 0;
let N = parseInt(input[0]); // 단어 개수

for (let i = 1; i <= N; i++) {
  let word = input[i];
  let seen = new Set();
  let gropBo = true;

  for (let j = 0; j < word.length; j++) {
    if (seen.has(word[j]) && word[j] !== word[j - 1]) {
      gropBo = false;
    }
    seen.add(word[j])
  }
  if (gropBo) groupCount++; // 그룹 단어면 카운트 증가
}

console.log(groupCount);
