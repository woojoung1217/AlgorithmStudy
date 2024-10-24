function solution(numbers, direction) {
    if(direction == 'right') {
      let c = [...numbers]
      let lastindex = c.pop();
      c.unshift(lastindex)
       return c
    }
    if(direction == 'left') {
     let c =[...numbers];
     let firstindex = c.shift()
     c.push(firstindex)
        return c 
    }
    
}

/*
 라이트의 경우 배열의 마지막 요소를 첫번째로
 레프트의 경우 배열의 첫번째 요소를 마지막으로 
*/