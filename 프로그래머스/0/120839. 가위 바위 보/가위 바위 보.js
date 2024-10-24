function solution(rsp) {
 // 가위=2 ,바위=0, 보=5
 let arr = rsp.split('')
 let result = []

 for(item of arr) {
    if(item =='2'){
      result.push('0')
    } else if(item=='0') {
      result.push('5')
    } else {
      result.push('2')
    }
 } 
    return result.join('')
}