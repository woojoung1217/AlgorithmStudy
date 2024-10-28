function solution(arr, intervals) {
   let answer = [];
   let interval = intervals.flat()
   console.log(interval)
    let x = arr.slice(interval[0], interval[1]+1)
    let y = arr.slice(interval[2], interval[3]+1)
    return x.concat(y)
}