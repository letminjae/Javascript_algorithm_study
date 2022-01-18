//제일 작은 수 제거하기

// function solution(arr) {
//     let answer = [...arr]
//     answer.sort((a, b) => b - a).pop()
//     return arr.length === 1 ? [-1] : answer;
// }
// 시간복잡도 꽝

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    if (arr.length < 1) return[-1];
    return arr
}