function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (numbers, index , current) => {
        
        if(index === numbers.length && current ===target) {
            answer +=1;
            return 
        }else if (index === numbers.length && current!== target) {
            return;  // 타겟을 만들지 못했으면 함수 종료
        }
        dfs(numbers , index + 1 , current - numbers[index] )   
        dfs(numbers , index + 1 , current + numbers[index] )
        
    }
   
    dfs(numbers,0,0);

    return answer;
}