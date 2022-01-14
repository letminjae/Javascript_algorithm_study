// 음양 더하기

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer
}

// reduce + 삼항연산자로 하면?

function solution(absolutes, signs) {
    let answer = 0;
    absolutes.reduce(acc, cur, i) => acc + (cur * (signs[i] ? 1 : -1)), 0);
}

// 누적숫자 더하는 reduce구문에 콜백함수 써서 acc=answer (cur * ~ 구문은 만약 불린값이 양수인지 음수인지 크.. 콜백함수 뒤 구문은 생각도못했다.