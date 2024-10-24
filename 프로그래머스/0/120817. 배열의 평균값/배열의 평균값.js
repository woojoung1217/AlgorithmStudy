function solution(numbers) {
   let sum = numbers.reduce((acc, cur , idx) => (acc + cur))
   
   return sum / numbers.length

}