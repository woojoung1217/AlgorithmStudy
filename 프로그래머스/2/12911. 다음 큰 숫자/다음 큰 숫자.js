function solution(n) {
  const count = (num) => num.toString(2).split('1').length-1;  
  const target = count(n); 
    
  let item = n + 1;
  
  while(count(item) !== target) {
      item ++;
  }
 return item
}

