function solution(s) {
   let arr = s.split(" ").map(v=>parseInt(v))
   let max = Math.max(...arr); 
   let min = Math.min(...arr);
   let result = [min, max];
   
   return result.join(" ") 
}
