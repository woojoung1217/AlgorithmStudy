function solution(n)
{
    var answer = 0;
    let type = String(n).split('');
    console.log(type)
    
    for(let i =0; i<type.length; i++) {
        answer += Number(type[i])
    }
    
   
   
    return answer;
}