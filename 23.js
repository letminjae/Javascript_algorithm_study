// 자연수 뒤집어 배열로 만들기

// function solution(n) {
//     let answer = []
//     let num = n.toString().split("").reverse()
//     for(let i = 0; i<num.length; i++){
//         answer.push(parseInt(num[i]))
//     }
//     return answer
// }

//또는
// for문을 안써도 map(n => parseInt(n)) 쓰면 만들어짐

function solution(n) {
    let arr = n.toString().split("").reverse()
    console. log(arr)
    return arr.map(v => parseInt(v))
}
console.log(solution(12345))