function solution(num_list) {
    var answer = []
    let z =0;
    let h =0;
    for(let i=0; i<num_list.length; i++) {
        if(num_list[i] % 2 == 0 ) {
            z++
        } else {
            h++
        }
    }
    answer.push(z,h)
    return answer
}