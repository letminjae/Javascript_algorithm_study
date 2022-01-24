//자릿수 더하기

function solution(n){
    let arr = n.toString().split("")
    return arr.reduce((acc,cur) => acc + parseInt(cur), 0)
}
console.log(solution(123))