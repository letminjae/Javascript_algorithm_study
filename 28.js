//하샤드 수

function solution(x) {
    let sum = 0
    let arr = String(x).split("")
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i]) ; // 배열 인덱스의 합 (자기자신 포함)
    } return (x % sum == 0) ? true : false ; 
}