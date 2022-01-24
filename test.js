function solution(x){
    let arr = x.toString().split("")
    let answer = 0;
    for (let i = 0; i < arr.length; i++){
        answer += Number(arr[i])
    }
    if (x % answer == 0){
        return true
    }else return false
}
console.log(solution(18))

// arr = 배열로 만들어서 문자열 + split을 하여 쪼갠다
// if x 값이 arr의 합과 나눠진다면 true, 아니라면 false