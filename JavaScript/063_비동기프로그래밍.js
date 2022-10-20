// 얄코 비동기 설명 듣기!
// 곤현센도카도 청소를 하면 ~?
// 동기 (순차적)
// 곤 : 청소기 돌리고(10시)
// 현 : 빨래 하고 (11시)
// 센도 : 설거지 하고 (12시)
// 카도 : 요리한다 (1시)
// 비동기 (순차적이지 않게끔)
// 곤 : 청소기 돌리면서(10시)
// 현 : 빨래 하고 (10시)
// 센도 : 설거지 하고 (10시)
// 카도 : 요리한다 (10시)

const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 1000);
console.log(three);

// 아래 코드는 왜 그럴까요?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 0);
console.log(three);

// 싱글 스레드 : 일할 수 있는 녀석이 한 명 ->JS (주문을 한 사람이 받는데 -코드를 실행시킬 수 있는 사람이 한 명인데- 주문을 받는 걸 멈춘다면 error!)
// 멀티 스레드 : 일할 수 있는 녀석이 여러명~ -> 다른 언어 대부분이 지원

// 비동기 프로그래밍, JS 실행구조를 왜 알아야할까?

one() // 페이지 로드하고
two() // 서버에서 이미지와 상세 데이터를 받아오고(예 - http://test.api.weniv.co.kr/mall) - 1분?10분? pending
three() // 읽어온 데이터를 뿌려준다 - resolve
four() // 페이지에 정적 데이터 로드
// two,three는 데이터 받아오는 게 얼마 걸릴지 모르니까 실행되게 놔두고 one,four ... 
