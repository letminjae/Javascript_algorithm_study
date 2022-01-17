// 자연수 뒤집어 배열로 만들기

function solution(n) {
    let answer = []
    let num = n.toString().split("").reverse()
    for(let i = 0; i<num.length; i++){
        answer.push(parseInt(num[i]))
    }
    return answer
}