// 핸드폰 번호 가리기

function solution(phone_number){
    let answer = phone_number.length -4
    return '*'.repeat(answer) + num.substring(answer)
};

// 사실 내가 만들고 싶엇던 구문은

function hide_numbers(phone_number){
    let answer = "*".repeat(phone_number.length - 4) + s.slice(-4);
    
    return answer;
  }