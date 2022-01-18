// 완주하지 못한 선수

// 솔직히 이건 못풀엇음
// for문과 indexOf로 설정했는데 시간복잡도가 O(n*n)이 나와서 탈락나옴
// 개념은 있는데 어떻게 풀어야할지 정말 몰랐음
// 그래서 풀이봄
// sort로 정렬해서 비교한다음에 하나 빼준다는 생각은 진짜 못함.. 어떻게 이렇게 바로 생각하는분이 계실까
// 나도 짬이 차면 이런 생각을 잘하게 되겠지?

// 1. 배열을 정렬한다.
participant.sort();
completion.sort();
// 2. 비교하여 다르다면 반환한다.
for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
        return participant[i];
    }
}