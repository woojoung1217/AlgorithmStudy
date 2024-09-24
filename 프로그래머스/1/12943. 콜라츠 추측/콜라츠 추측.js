function solution(num) {
    var answer = 0;
    while (num != 1) {  // num이 1이 될 때까지 반복
        if (num % 2 == 0) {
            num = num / 2;  // 짝수일 때 num을 2로 나눈 값으로 업데이트
        } else {
            num = num * 3 + 1;  // 홀수일 때 num을 3배하고 1을 더한 값으로 업데이트
        } 
        if(answer >= 500) {
            return -1
        }
        answer++;  // 연산을 할 때마다 카운터 증가
    }
    return answer;  // 총 연산 횟수 반환
}
