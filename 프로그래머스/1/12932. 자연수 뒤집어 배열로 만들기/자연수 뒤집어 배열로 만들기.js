function solution(n) {
    var answer = []
    let a = String(n)
    let b = [...a]
    
     b.map((item) => {
        answer.push(Number(item))
    })
    let c = answer.reverse()
    
    return c
}