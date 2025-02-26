function solution(number, limit, power) {
    let totalWeight = 0;
    
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;
        
        // 약수의 개수를 제곱근까지만 계산
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
                if (j !== i / j) { // 제곱수가 아닌 경우 짝이 되는 약수도 추가
                    divisorCount++;
                }
            }
        }
        
        // 공격력 제한 조건 적용
        if (divisorCount > limit) {
            totalWeight += power;
        } else {
            totalWeight += divisorCount;
        }
    }
    
    return totalWeight;
}


