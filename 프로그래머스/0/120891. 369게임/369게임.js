function solution(order) {
    let clap = 0; 
     String(order).split("").map((item)=> Number(item)).filter((item)=> {
        if(item == 3 || item == 6 || item == 9) {
            clap++;
        }
    })
     return clap;
}