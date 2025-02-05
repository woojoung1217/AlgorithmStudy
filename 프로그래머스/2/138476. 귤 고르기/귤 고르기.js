function solution(k, tangerine) {
 let fre1 = {};
 for(let item of tangerine){
     fre1[item] = (fre1[item] ||0) +1;
 }
 let freRes = Object.values(fre1).sort((a,b)=> b-a)
 let total = 0;
 let boxCount = 0;
 for(let item of freRes) {
    total += item;
    boxCount++;
    if(k <= total){
        break;
    }
 }
    return boxCount
}

// 서로 다른 종류의 수를 최소화 하고 싶어함
// k개를 판매하고 싶다면 