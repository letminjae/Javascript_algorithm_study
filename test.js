function solution(s) {
    let arr = s.split(" ")
    answer = ""
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
            if(j % 2 === 0){
                answer = answer + arr[i][j].toUpperCase()
            }else{
                answer = answer + arr[i][j].toLowerCase()
            }
        }
        if(i < arr.length -1){ //"try" "hello" "world"의 인덱스에 띄어쓰기 써줘
            answer += " ";
        }
    }
    return answer
}
console.log(solution("try hello world"))