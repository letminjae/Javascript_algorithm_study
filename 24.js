// 정수 내림차순으로 배치하기

function solution(n) {
    return Number(n.toString().split("").sort((a,b) => a-b).reverse().join(""))
}