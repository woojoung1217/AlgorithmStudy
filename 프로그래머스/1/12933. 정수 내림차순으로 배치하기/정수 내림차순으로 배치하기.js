function solution(n) {
    let b = n.toString()
    let c = [...b]   
    let a = c.sort((a,b)=>b-a)
    
    
    
    return Number(a.join(''))


}