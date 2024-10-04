function solution(sizes) {
    let max_g = 0;
    let max_s = 0;
    
    let time = sizes.map((item) => item.sort((a, b) => b - a));

    for (let i = 0; i < time.length; i++) {
        if (max_g < time[i][0]) {
            max_g = time[i][0];
            
        }
        if (max_s < time[i][1]) {
            max_s = time[i][1];
            console.log(max_s)
        }
    }
    return max_g * max_s;
}