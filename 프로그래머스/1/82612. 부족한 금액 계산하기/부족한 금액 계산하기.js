function solution(price, money, count) {
    var answer = 0;
    
    for(let i=0; i<=count; i++) {
        answer += price * i;
    } 
    answer = answer - money;

    

    return answer > 0 ? answer : 0;
}