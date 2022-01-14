// 평균 구하기

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((aqq,cur) => aqq + cur, 0) / arr.length
    
    return answer;
}

// 이렇게 reduce 구문써서 다 누적 더한뒤 arr 인덱스숫자 만큼 나눠주었다 뿌듯