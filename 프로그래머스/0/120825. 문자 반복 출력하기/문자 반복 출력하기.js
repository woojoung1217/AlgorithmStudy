function solution(my_string, n) {
    let arr = my_string.split("");
    let result = "";
    for(let item of arr) {
        result += item.repeat(n)
    }
   return result
}
