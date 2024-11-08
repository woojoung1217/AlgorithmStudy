function solution(s) {
   let answer = s.split(" ").map((item) => {
      return item ? item[0].toUpperCase() + item.slice(1).toLowerCase() : "";
  });
  return answer.join(" ");
}
