function solution(n) {
 let count = 0;
    let x = Math.sqrt(n)
    console.log(x)
  
  // 1부터 n까지의 숫자 중에서 n을 나누어떨어지게 하는 수를 찾음
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++; // (i, n/i) 순서쌍 하나 추가
      if (i !== n / i) {
        count++; // (n/i, i) 순서쌍 추가 (i와 n/i가 다르면)
      }
    }
  }
  
  return count;
}