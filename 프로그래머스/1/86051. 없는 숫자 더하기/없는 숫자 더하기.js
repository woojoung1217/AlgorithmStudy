function solution(numbers) {
    let findNumbers = [0,1,2,3,4,5,6,7,8,9];
    let missingNumbers = findNumbers.filter(num => !numbers.includes(num))
    
    return missingNumbers.reduce((acc, cur) => acc + cur)
    
} 