// 009. concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

let date = {
    year: '2019',
    month: '04',
    day: '26',
}

let time = {
    hour: '11',
    minute: '34',
    second: '27',
}

// 출력
// 2019/04/26 11:34:27

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);

console.log(result);