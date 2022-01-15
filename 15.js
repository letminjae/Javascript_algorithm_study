// 내적

function solution(a, b) {
    let result = 0;
    for(let i=0; i<a.length; i++){
        result += a[i]*b[i];
    }
    return result
}

// reduce 구문쓰기
return a.reduce((acc,cur,i) + acc+cur*b[i], 0)