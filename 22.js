//자릿수 더하기

function solution(n){
    let arr = n.toString().split("").map(v => parseInt(v))
    return arr.reduce((acc,cur) => acc + cur, 0)
}