function solution(before, after) {
    const frequency = {};
    const Afrequency = {};
    
    before.split("").forEach((item)=> {
        frequency[item] = (frequency[item] || 0) + 1
    })
    
     after.split("").forEach((item)=> {
        Afrequency[item] = (Afrequency[item] || 0) + 1
    })
    
        for (const key in frequency) {
        if (frequency[key] !== Afrequency[key]) {
            return 0; // 빈도가 다르면 0 반환
        }
    }

    return 1; // 빈도가 같으면 1 반환
    
}