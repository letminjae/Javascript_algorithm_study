// 행렬의 덧셈

function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i<arr1.length; i++){
        let sum =[];
        for (let j = 0; j<arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }    
    return answer;
}

// 이 10번문제를 제일 모르겠어서 많이 힘들어했다 문제 자체를 이해못했음