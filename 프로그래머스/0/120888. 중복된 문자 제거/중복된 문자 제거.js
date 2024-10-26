function solution(my_string) {
    let s = [...new Set(my_string)]
    
    return s.join("")
}