function solution(d, budget) {
    // 신청 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < d.length; i++) {
        // 예산이 남아있는 경우
        if (budget >= d[i]) {
            budget -= d[i];
            count++; // 지원한 부서 수 증가
        } else {
            break; // 예산이 부족하면 중단
        }
    }
    
    return count;
}
