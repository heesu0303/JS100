// 019. 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const num = prompt('제곱할 두 숫자를 입력해주세요.').split(' ');
// 내 답
console.log(num[0] ** num[1]);

// 다른 방법
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));