// 013. 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력
// 입력 : 1
// 출력 : 수성

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const num = prompt('행성의 순서를 나타내는 숫자를 입력해주세요.');

// if (num === 1) {
//     console.log('수성');
// } else if (num == 2) {
//     console.log('금성');
// } else if (num == 3) {
//     console.log('지구');
// } else if (num == 4) {
//     console.log('화성');
// } else if (num == 5) {
//     console.log('목성');
// } else if (num == 6) {
//     console.log('토성');
// } else if (num == 7) {
//     console.log('천왕성');
// } else if (num == 8) {
//     console.log('해왕성');
// }

console.log(planets[num-1]);