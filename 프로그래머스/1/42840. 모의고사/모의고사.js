function solution(answers) {
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 패턴을 반복하여 정답과 비교
    let x = answers.filter((v, i) => v === p1[i % p1.length]).length;
    let y = answers.filter((v, i) => v === p2[i % p2.length]).length;
    let z = answers.filter((v, i) => v === p3[i % p3.length]).length;

    let maxScore = Math.max(x, y, z); // 최고 점수
    let res = [];

    if (x === maxScore) res.push(1);
    if (y === maxScore) res.push(2);
    if (z === maxScore) res.push(3);

    return res;
}
