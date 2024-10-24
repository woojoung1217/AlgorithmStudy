function solution(n) {
    let result = 0;
    if(n / 7 == ~~(n / 7)) {
        result =  n / 7
    } else {
        result = ~~(n / 7) +1
    }
    return result
}