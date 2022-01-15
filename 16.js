//문자열 내 p와 y의 개수

// function solution(s){
//     for(let i = 0; i<s.length; i++){
//         if(s.indexOf('p') === s.indexOf('y')){
//             return true
//         }else{
//             return false
//         }
//     } 
//  }

// 대실패

function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
}
