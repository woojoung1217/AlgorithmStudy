function solution(s) {
    // 알파벳 배열 정의
    let alphabet = [];
    for (let i = 97; i <= 122; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    
    // 문자열의 길이가 4 또는 6이 아닌 경우 false 반환
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    // 소문자로 변환 후 배열로 변환
    let ax = s.toLowerCase();
    let arr = ax.split('');

    // 알파벳이 있는지 확인
    for (let i = 0; i < arr.length; i++) {
        if (alphabet.includes(arr[i])) {
            return false; // 알파벳이 있으면 false 반환
        }
    }

    // 모든 조건을 통과하면 true 반환
    return true;
}
