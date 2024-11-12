function solution(s) {
    let frequency = {};
    let answer =[];
    
    for(let item of s) {
        frequency[item] = (frequency[item] || 0) + 1
    }
    
    for (let key in frequency) {
    if (frequency[key] === 1) {
        answer.push(key)
    }
}
    return answer.sort().join("")
}