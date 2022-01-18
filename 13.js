// 2016년

function solution(month, day) {
    var day = ''
    let arr = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let date = new Date(`2016-${month}-${day}`)
    day = (arr[date.getDay()])
    return day
}

console.log(solution(day))

// new Date 메소드, getDay 메소드 획득