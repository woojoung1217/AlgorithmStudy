function solution(k, score) {
 const list = []; // 명예의 전당 배열 (최대 k개의 점수 저장)
  const result = []; // 매일 발표되는 명예의 전당의 최하위 점수 배열

  for (const sc of score) {
      list.push(sc);
    
      list.sort((a,b)=> b-a)
      
     if(list.length > k ) list.pop()
     
      result.push(list[list.length-1])
  }
    return result   
}