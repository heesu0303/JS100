// 016. # 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

const txt = prompt('문장을 입력해주세요.');
const reverseTxt = txt.split('').reverse().join('');
console.log(reverseTxt);