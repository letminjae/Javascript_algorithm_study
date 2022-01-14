// 

function solution(a, b) {
    var answer = 0;
    answer = (a+b) * (Math.abs(b-a)+1)/2
    return answer;
}

// 양 자리의 합 * 사이자리의값(가우스법칙)