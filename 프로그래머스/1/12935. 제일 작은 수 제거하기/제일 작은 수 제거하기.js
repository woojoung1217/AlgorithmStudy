function solution(arr) {
     if (arr.length === 0 || arr.length === 1) {
        return [-1];
    }
    const minNumber = Math.min(...arr);
    const result = arr.filter((num)=> num !== minNumber);
    
    return result.length < 0 ? [-1] : result
}