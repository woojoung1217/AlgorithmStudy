function solution(lines) {
    // 선분의 범위가 -100부터 100까지일 수 있으므로, 그 범위를 포함하는 배열을 준비
    const coverage = new Array(201).fill(0); // -100부터 100까지는 총 201개
    let overlapLength = 0;

    // 각 선분에 대해
    lines.forEach(([start, end]) => {
        // start와 end는 -100 ~ 100 범위에서 사용되므로, 이를 인덱스로 맞춰줍니다.
        for (let i = start + 100; i < end + 100; i++) {
            coverage[i]++;
        }
    });

    // 겹치는 부분의 길이를 계산
    coverage.forEach(count => {
        if (count > 1) { // 두 개 이상의 선분이 겹친 부분
            overlapLength++;
        }
    });

    return overlapLength;
}
