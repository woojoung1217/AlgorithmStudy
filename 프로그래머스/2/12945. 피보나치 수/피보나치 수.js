function solution(n) {
    const MOD = 1234567;
    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = (prev + curr) % MOD;
        prev = curr;
        curr = next;
    }

    return curr;
}

// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의  
// n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

