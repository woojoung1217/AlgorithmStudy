function solution(num_list) {
    var answerZ =0;
    var answerH =0;
    
    for(let i=0; i<num_list.length; i++) {
        if(i% 2==1) {
            answerZ+= num_list[i]
        } else if( i% 2==0) {
            answerH+= num_list[i]
        } 
    }
        
    if(answerZ > answerH) return answerZ
    if(answerH > answerZ) return answerH
    if(answerZ == answerH) return answerZ
    
}