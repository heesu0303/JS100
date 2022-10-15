// 030. 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

let txt = prompt('문자를 입력해주세요.');
let find = prompt('찾을 문자를 입력해주세요.');

txt.search(find);
txt.indexOf(find);

// search vs indexOf
// 공통점 : 처음 검색된 값을 반환한다. 일치하는 값이 없으면 -1을 반환한다.
// 차이점 : search는 두번째 혹은 다른 시작 위치를 인수로 지정할 수 없다. indexOf는 가능
// 정규표현식을 사용하는 검색 -> search
// 빠르고 간단하게 이용 -> indexOf