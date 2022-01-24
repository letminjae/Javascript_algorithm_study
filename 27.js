// 콜라츠 추측

function solution(num){
    let result = 0;
    for(let i = 0; i < 500 ; i++){
        if(num !== 1){
            if(num % 2 ==0){
                num = num / 2
            } else {
                num = num*3 +1
            }
        }else return result = i
    }
    return result = -1
}
console.log(solution(6))

// 500번을 함
// 만약 num이 1이 아닐때 => 콜라츠 진행
// 1이 아닐때 : 만약 입력된수가 짝수이면 num을 2로나눔
// 1이 아닐때 : 만약 홀수라면 num을 3곱하고 1 더함
// 만약 num이 1이면, i 도출(몇번햇는지)
// 500번이 넘어도 안될시 -1 도출