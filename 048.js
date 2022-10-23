// 048. 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let eng = prompt('문자를 입력해주세요.');
let result = '';

for (let i = 0; i < eng.length; i++) {
    if (eng[i] === eng[i].toLowerCase()) {
        result += eng[i].toUpperCase();
    } else if (eng[i] === eng[i].toUpperCase()) {
        result += eng[i].toLowerCase();
    }
}
console.log(result);