function solution(s){
  let arr = s.split('');
  let stack = [];
  
    for(char of arr) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();  // 짝이 맞으면 제거
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0 ? 1 : 0; 
}


// 문자가 붙어 있는게 없다면 0을 리턴

// 문자열을 배열로 만든다.
// 배열안에서 같은 문자 2개가 붙어 있는 짝을 찾는다
// 배열 안에서 제거하고 새로운 배열을 만든다.
// 이 작업을 모든 배열이 제거 할 때 까지 진행하고 배열의 길이가 0 이면 성공이다
