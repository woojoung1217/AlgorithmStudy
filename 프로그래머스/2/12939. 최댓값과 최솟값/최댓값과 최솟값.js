function solution(s) {
    let numbers = s.split(' ').map(Number); // 문자열을 숫자 배열로 변환
    let min = Math.min(...numbers); // 최소값 찾기
    let max = Math.max(...numbers); // 최대값 찾기
    return `${min} ${max}`; // "(최소값) (최대값)" 형식으로 반환
}
