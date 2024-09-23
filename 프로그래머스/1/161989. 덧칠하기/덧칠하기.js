function solution(n, m, section) {
    var answer = 0;
    let currentP = 0;
    
    for(let i=0; i<section.length; i++) {
        if(section[i] > currentP){
            answer++
            
            currentP = section[i] +  m-1
        }
    }
    

    
    
    return answer;
}