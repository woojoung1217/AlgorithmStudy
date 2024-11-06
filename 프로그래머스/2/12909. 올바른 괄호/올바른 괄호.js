function solution(s) {
    let count = 0; // 여는 괄호의 개수를 추적
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++; // 여는 괄호가 나오면 count 증가
        } else if (s[i] === ')') {
            count--; // 닫는 괄호가 나오면 count 감소
        }
        
        // 만약 count가 음수라면, 닫는 괄호가 여는 괄호보다 많다는 뜻이므로 false
        if (count < 0) {
            return false;
        }
    }
    
    // 모든 괄호가 짝이 맞으려면 마지막에 count가 0이어야 함
    return count === 0;
}
