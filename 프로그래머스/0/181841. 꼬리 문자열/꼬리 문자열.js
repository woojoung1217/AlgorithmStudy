function solution(str_list, ex) {
    let result = str_list.filter((item) => !item.includes(ex));
    
    return result.join("")
}