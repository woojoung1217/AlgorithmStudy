function solution(my_string) {
    
  let target = ['a', 'e', 'i', 'o', 'u']
  let arr = my_string.split("")
  let result = arr.filter(v => !target.includes(v))
  return result.join("")
}