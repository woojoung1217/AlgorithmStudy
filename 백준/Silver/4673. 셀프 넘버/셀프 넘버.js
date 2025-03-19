function findSelfNumbers(limit) {
  const isGenerated = Array(limit + 1).fill(false); // 생성된 숫자 체크 배열

  // 생성자 찾기
  for (let n = 1; n <= limit; n++) {
    let sum = n;
    let num = n;

    while (num > 0) {
      sum += num % 10; // 각 자리수를 더함
      num = Math.floor(num / 10);
    }

    if (sum <= limit) isGenerated[sum] = true; // 생성된 숫자로 체크
  }

  // 셀프 넘버 출력
  for (let n = 1; n <= limit; n++) {
    if (!isGenerated[n]) console.log(n);
  }
}

// 10000 이하의 셀프 넘버 찾기
findSelfNumbers(10000);
