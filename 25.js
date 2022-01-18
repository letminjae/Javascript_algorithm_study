// 정수 제곱근 판별

function solution(n) {
    let num = Math.sqrt(n)
    if (num % 1 === 0) {
        return ((num+1) ** 2)
    } else return -1
}
console.log(solution(121))