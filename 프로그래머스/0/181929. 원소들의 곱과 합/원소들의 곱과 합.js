function solution(num_list) {
    const sum = num_list.reduce((acc, cur) => acc + cur, 0); // 모든 원소의 합
    const product = num_list.reduce((acc, cur) => acc * cur, 1); // 모든 원소의 곱

    return product < sum ** 2 ? 1 : 0; // 조건에 따라 1 또는 0 반환
}