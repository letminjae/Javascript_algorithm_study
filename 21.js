// 이상한 문자 만들기

function solution(s) {
    let arr = s.split(" ")
    answer = ""
    for(let i = 0; i<arr.length; i++){// 띄어쓰기로 나눈 arr의 인덱스만큼 반복해줘 = 케이스기준 3번 반복문나옴
        for(let j = 0; j< arr[i].length; j++){// 거기에다가 arr의 인덱스의 인덱스 만큼 반복해줘 = 알파벳 하나당 반복문 나오니 케이스기준 13번 반복문 나옴
            if(j % 2 === 0){
                answer = answer + arr[i][j].toUpperCase()
            }else{
                answer = answer + arr[i][j].toLowerCase()
            }
        } // 만약 j인덱스가 짝수면 arr의 모든 홀수요소에 대문자 넣어주고 answer에도 포함시켜줘, 홀수라면 arr의 모든 짝수요소에 소문자넣어주고 answer에도 포함시켜줘  
        if(i < arr.length -1){ //"try" "hello" "world"의 인덱스에 띄어쓰기 써줘
            answer += " ";
        }
    }
    return answer
}
console.log(solution("try hello world"))

// 하.. 20번 21번 진짜 제일 어렵네..