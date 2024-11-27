function solution(strlist) {
    var result = [];
    let answer = strlist.forEach((item, index) => {
        return result.push(item.length)
    })
    return result
}