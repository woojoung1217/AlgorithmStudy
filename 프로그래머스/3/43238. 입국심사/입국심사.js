function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n; // 가장 오래 걸리는 심사관 시간 * n (최대 시간)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중간 시간 계산
        let totalPeople = 0;

        // 각 심사대에서 해당 시간 내에 처리할 수 있는 사람 수를 구함
        for (let time of times) {
            totalPeople += Math.floor(mid / time);
        }

        // 만약 처리할 수 있는 사람이 n명 이상이라면 시간을 줄여보자
        if (totalPeople >= n) {
            right = mid - 1; // 시간을 줄여서 더 적은 시간에 처리할 수 있는지 확인
        } else {
            left = mid + 1; // 시간을 늘려서 처리할 수 있는지 확인
        }
    }

    return left; // 왼쪽 경계가 최소 시간을 나타냄
}
