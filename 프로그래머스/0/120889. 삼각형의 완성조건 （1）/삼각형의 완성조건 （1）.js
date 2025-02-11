function solution(sides) {
  let maxvalue = Math.max(...sides);
  let result = sides.reduce((acc, cur) => acc + cur, 0) - maxvalue; // 나머지 두 값의 합을 구함
  return maxvalue < result ? 1 : 2;
}
