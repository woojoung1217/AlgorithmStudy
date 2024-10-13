function solution(nums) {
    // 폰켓몬 종류 수를 담을 Set 생성
    const uniqueTypes = new Set(nums);
    
    // N/2 계산
    const maxSelection = nums.length / 2;
    
    // 선택할 수 있는 폰켓몬 종류의 최댓값
    return Math.min(uniqueTypes.size, maxSelection);
}
