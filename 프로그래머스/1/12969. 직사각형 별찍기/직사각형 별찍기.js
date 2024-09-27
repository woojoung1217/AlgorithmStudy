process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]); 
    
    function makeAStar(a, b) {
        for (let i = 0; i < b; i++) { // b는 행의 수
            let row = ""; // 각 행을 저장할 문자열
            for (let j = 0; j < a; j++) { // a는 별의 수
                row += "*"; // '*'를 row 문자열에 추가
            }
            console.log(row); // 완성된 행을 출력
        }
    }
    
    makeAStar(a, b);
});
