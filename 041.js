// 041. 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

let num = prompt('숫자를 입력하세요.');
num = parseInt(num, 10);

function prime(num) {
    if (num === 1) {
        return console.log('1보다 큰 양의 정수를 입력해주세요.');
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log('NO');
        }
    }
    return console.log('YES');
}

prime(num);