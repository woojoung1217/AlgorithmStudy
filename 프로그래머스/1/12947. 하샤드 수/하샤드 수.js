function solution(x) {
    var answer = true;
    let stx = String(x).split('')
    let arr = [...stx];
    var z =0;
    for(let i=0; i< arr.length; i++) {
        z += Number(arr[i])
    }
    if(x % z ===0) {
        return true
    } else {
        return false
    }
    return answer;
}
