function solution(arr){ 
    const stack = [];
    if(arr.length < 0) return 
    for(let i=0; i<arr.length; i++) {
        const current = arr[i];
        if(stack.length ==0 || stack[stack.length-1] != current){
            stack.push(current);    
        }
    }
    return stack
}


