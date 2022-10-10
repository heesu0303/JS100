// 010. 별찍기
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

// 은비를 위해 프로그램을 작성해 주세요.

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// const num = prompt("숫자를 입력해주세요.");
let tree = '';

// for (let i = 0; i < num; i++) {
//     for (let j = num; j > i; j--) {
//         tree += ' ';
//     }
//     for (let k = 0; k <= i * 2; k++) {
//         tree += '*';
//     }
//     tree += '\n';
// }

for (let j = 5; j > 0; j--)
{
    for (let i = 5 - j; i > 0; i--) {
        tree += ' ';
    }
    for (let i = 0; i < j * 2 - 1; i++) {
        tree += '*';
    }
    tree += '\n';
}

console.log(tree);