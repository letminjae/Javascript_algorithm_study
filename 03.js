// 가운데 글자 나타내기

function solution(s) {
    let answer = "";
    
    if (s.length % 2 == 0 ) { // 짝수일 때
          answer = s[s.length / 2 - 1] + s[s.length / 2];
      } else {
          answer = s[Math.floor(s.length/2)]; // 홀수일 때 반내림
      }
      return answer;
  }

  console.log(solution("abcde"))
  console.log(solution("qwer"))