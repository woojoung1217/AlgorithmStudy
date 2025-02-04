function solution(polynomial) {
  let arr = polynomial.split(" + ")
  let 다항 = arr.filter(v=> v.includes('x')).map(v=> parseInt(v.replace('x', '') || 1)).reduce((a,c) => a+ parseInt(c), 0)  
  let 일반 = arr.filter(v=> !v.includes('x')).reduce((a,c) => a+parseInt(c), 0)
  let answer =[];
  if(다항) {
      if(다항 === 1) {
          answer.push('x')
      } else{
          answer.push(`${다항}x`)
      }
  }
  if(일반) {
    answer.push(일반)
  }  
    
 return answer.join(" + ")
}