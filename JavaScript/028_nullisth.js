// 추가된지 얼마 안된 문법
// null이나 언디파인드면 패스 뒤로 밀린다 ...?

// https://ko.javascript.info/nullish-coalescing-operator 
let firstName = null;
let lastName = null;
let nickName = "바이올렛"; 
// null이나 undefined가 아닌 첫번째 피연산자 
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자");

// let a = 10;
// let b = 20;
// let c = 30;

// let a = null;
// let b = 20;
// let c = null;

// let a;
// let b;
// let c;

// let d = a ?? b ?? c;

// 카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;

// 차이점
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
