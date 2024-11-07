function solution(n) {
  let x = ""+n
  let y = x.split("")
  let result=0;
    
  for(let i=0; i<y.length; i++){
     let z = Number(y[i])
     result += z
  }
  return result
}