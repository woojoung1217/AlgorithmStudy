function solution(n) {
    const countbinary = (num) => num.toString(2).split('1').length-1
    let targetNumber = countbinary(n);
    
    let startFrom = n+1;
    
    while(countbinary(startFrom) !== targetNumber) {
        startFrom++;
    }
    
    return startFrom;
    
}

