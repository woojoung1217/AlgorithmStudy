function solution(s1, s2) {
    let c = s1.filter(v=> s2.includes(v)).length;
    
    return c
}