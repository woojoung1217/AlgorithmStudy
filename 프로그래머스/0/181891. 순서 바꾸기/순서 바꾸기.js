function solution(num_list, n) {
    이전 = []
    이후 = []
    for(let i=0; i< num_list.length; i++){
        if(i >= n) {
            // 이 후 
            이전.push(num_list[i])
        } else {
            이후.push(num_list[i])
        }
    }
    return 이전.concat(이후)
}