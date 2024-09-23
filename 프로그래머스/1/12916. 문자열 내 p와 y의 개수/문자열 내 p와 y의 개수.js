function solution(s){
    var answer;
    let data = s.toLowerCase()
    let arr = [...data];
    var a =0
    var b =0
     
    for (let i=0; i<arr.length; i++) {
      if(arr[i] === 'p') {
           a++
      } else if( arr[i] === 'y'){
           b++
      }
    }
     if (b === 0) {
        return a === 0; // 'p'도 없으면 true, 있으면 false
    }

    // 'p'와 'y'의 개수가 동일하면 true, 아니면 false
    return a === b;
    

}