function solution(progresses, speeds) {
    const days = progresses.map((item, index) => {
        return Math.ceil((100 - item ) / speeds[index])
    })
    let answer =[]
    let DueDays = days[0];
    let count = 1;
    for(let i =1; i<days.length; i++) {
        if(days[i] <= DueDays){
            count++
        } else {
          answer.push(count);
    DueDays = days[i]; // 새로운 배포 기준일 설정
            count = 1; // 새로운 그룹의 기능 개수 초기화
        }
    }
     answer.push(count)
    return answer
}
// [93 , 30 , 50]  [1, 30 , 50]
// 프로그레스의 0번째를 비교해서 최소 며칠이 걸리는지 확인한다 = 7일
// 1번째를 비교해서 speed의 1번째 요소와 프로그레스이 1번째 요소를 누적한다 30 + 30 + 30 + 30 =3일
// 프로그레스의 걸리는 기간이  let i =  100 - progresses[0] 보다 오래 걸리는 친구가 있으면
// 다른요소보다 큰 친구들 위주로 먼저 배포를 시행하고 ㄱ갯수를 센다. 