function solution(cards1, cards2, goal) {
    let i = 0; // cards1의 인덱스
    let j = 0; // cards2의 인덱스

    // goal 배열을 순차적으로 탐색
    for (let k = 0; k < goal.length; k++) {
        const word = goal[k]; // goal에서 현재 단어

        // cards1에서 해당 단어가 나오면 cards1에서 한 장 사용
        if (i < cards1.length && cards1[i] === word) {
            i++;
        }
        // cards2에서 해당 단어가 나오면 cards2에서 한 장 사용
        else if (j < cards2.length && cards2[j] === word) {
            j++;
        }
        // 두 카드 뭉치 모두에서 해당 단어를 찾지 못하면 불가능
        else {
            return "No";
        }
    }
    
    // goal을 모두 만들 수 있다면 "Yes"
    return "Yes";
}
