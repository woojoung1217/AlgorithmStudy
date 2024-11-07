function solution(A, B) {
    // A는 오름차순, B는 내림차순으로 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let result = 0;
    
    // 각 숫자를 하나씩 곱해서 누적
    for (let i = 0; i < A.length; i++) {
        result += A[i] * B[i];
    }
    
    return result;
}