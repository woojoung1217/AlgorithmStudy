function solution(my_str, n) {
    let answer = [];
    for (let i = 0; i < my_str.length; i += n) {
        // my_str에서 i부터 i + n 길이만큼 자릅니다.
        answer.push(my_str.slice(i, i + n));
    }
    return answer;
}
