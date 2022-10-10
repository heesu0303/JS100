// 018. 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
// **단, 소숫점 자리는 모두 버립니다.**

// 내 답
const subject = ['국어', '수학', '영어'];

for (let i = 0; i < 3; i++) {
    subject[i] = parseInt(prompt(`${subject[i]} 점수를 입력하세요.`));
}

let sum = subject.reduce((a, b) => (a + b));
let result = Math.floor(sum / subject.length);

console.log(result);

/////////////

// 다른 방법
const score = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum2 = 0;

for (let i = 0; i < score.length; i++) {
    sum2 += parseInt(score[i], 10);
}
console.log (Math.floor(sum2 / score.length));