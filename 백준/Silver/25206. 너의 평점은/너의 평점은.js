let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const scoreList = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
  'P': 0.0 // P 과목은 전공평점에 포함되지 않음
}

let totalScore = 0;  // 총 (학점 * 성적) 누적 합
let totalCredits = 0;  // 총 학점

for (let i = 0; i < input.length; i++) {
  let [subject, credits, grade] = input[i].split(" ");  // 과목명, 학점, 등급
  credits = parseFloat(credits);  // 학점은 숫자로 변환
  let gradeScore = scoreList[grade];  // 등급에 맞는 점수 가져오기

  if (grade !== 'P') {  // P 등급인 과목은 제외
    totalScore += credits * gradeScore;  // 학점 * 성적 누적
    totalCredits += credits;  // 총 학점 누적
  }
}

let majorGPA = totalScore / totalCredits;  // 전공 평점 계산
console.log(majorGPA.toFixed(6));  // 소수점 6자리까지 출력
