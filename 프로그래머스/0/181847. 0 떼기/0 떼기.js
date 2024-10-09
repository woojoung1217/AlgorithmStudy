function solution(n_str) {
    let x = '';
    let zero = false; 

    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] === '0' && !zero) {
            continue; 
        } else {
            zero = true; 
            x += n_str[i]; 
        }
    }

    return x; 
}