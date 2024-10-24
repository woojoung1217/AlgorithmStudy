function solution(array, height) {
   let sum = array.filter(e => e > height);
    return sum.length;
}