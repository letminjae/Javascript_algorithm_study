// 문자열 다루기 기본

function solution(s) {
    let length = s.length
    if (length === 4 || length === 6){
        if(s.includes('e')) return false // !isNaN 만 쓰면 1e22 지수숫자형태가 걸려서 e가 걸러지게끔 if문 추가
        return !isNaN(s)
    }else {
        return false
    }
}

