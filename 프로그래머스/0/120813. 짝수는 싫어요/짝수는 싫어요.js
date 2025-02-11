function solution(n) {
   let nums = Array(n).fill().map((_, index) => index + 1);
   return nums.filter(v=> v % 2 !==0).slice()
}