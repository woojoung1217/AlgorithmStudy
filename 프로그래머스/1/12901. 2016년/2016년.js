function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(`2016-${a}-${b}`).getDay();
    console.log(date)
    return day[date];
}