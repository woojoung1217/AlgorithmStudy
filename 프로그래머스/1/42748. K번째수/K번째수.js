function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    // array의 i번째부터 j번째까지 자르고, 정렬한 후 k번째 값 반환
    const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
    return slicedArray[k - 1];
  });
}
