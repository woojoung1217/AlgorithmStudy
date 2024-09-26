function solution(s) {
    var answer = ''
    let len;
     let c;
    if(s.length % 2 == 1) {
       len = s.length / 2 
       c = Math.round(len)
        answer = s.slice(c-1 , c)   
        return answer
    } else {
         len = s.length / 2 
       c = Math.round(len)
        answer = s.slice(c-1 , c+1)   
        return answer
    }
}

