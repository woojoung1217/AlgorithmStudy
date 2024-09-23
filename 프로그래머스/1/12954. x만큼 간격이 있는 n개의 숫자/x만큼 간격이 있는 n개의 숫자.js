function solution(x, n) {
    var answer = [];
    
    // 반복문을 사용해 x부터 시작해 x씩 증가하는 숫자를 n개 추가합니다.
    for (let i = 1; i <= n; i++) {
        answer.push(x * i); // x에 i를 곱한 값을 배열에 추가
    }
    
    return answer;
}
