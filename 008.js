// 008. 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다. 
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);
console.log(d.weight);
// output: 84

// why?
// 키 내부에서 중복되는 이름이 있을 경우 자바스크립트는 마지막 키의 값으로 연결해준다.

// 객체에 접근하는 두 가지 접근법
// 점 접근자 : 객체의 이름에 점을 써서 키값을 가져온다.
// 각괄호 접근자 : 객체의 이름 옆에 []를 붙인다.
