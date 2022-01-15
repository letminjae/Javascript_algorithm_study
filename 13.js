// 2016년

function solution(a, b) {
    var day = ''
    let arr = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let date = new Date(`2016-${a}-${b}`)
    day = (arr[date.getDay()])
    return day
}

// new Date 메소드, getDay 메소드 획득