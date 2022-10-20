https://baeharam.netlify.app/posts/javascript/JS-%EA%B0%95%EC%A0%9C%EB%B3%80%ED%99%98

// == 이게 없다고 생각해라 === 이것만 있다고 생각해라
console.log('0' == 0) // true
console.log('0' === 0) // false

console.log(1 == true) // true
console.log(1 === true) // false

console.log(0 == false) // true
console.log(0 === true) // false

console.log('true' == true) // false
console.log('true' === true) // false
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적 o
// 2. jsond에서 값을 가져올 때 true가 True가 되어 있어서 error가 난 적 o

console.log(0 == '') // 주의 : true
console.log(0 === '') // 주의 : false

console.log(false == '') // 주의 : true
console.log(false === '') // 주의 : false

console.log(false == null) // 주의 : false
console.log(false === null) // 주의 : false

console.log(false == undefined) // 주의 : false
console.log(false === undefined) // 주의 : false

// 아래 내용이 많아서 별도 파일로 분리해서 설명
console.log(NaN == NaN) // 주의 : false
console.log(NaN === NaN) // 주의 : false

function truthyAndFalsy(value){
    return !!value
}

truthyAndFalsy([]) // 주의 : true (다른 언어에서는 다 false)
truthyAndFalsy({}) // 주의 : true
truthyAndFalsy('') // 주의 : false
truthyAndFalsy(null) // 주의 : false
truthyAndFalsy(undefined) // 주의 : false
truthyAndFalsy(NaN) // 주의 : false
truthyAndFalsy(Infinity) // 주의 : true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true

/*
[].length // 0
test = []
test.length = 100 // 100
test // (100) [empty x 100]
*/

console.log('----------');
console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B) -> not B 뒤에 값은 항상 false 그럼 이 값도 항상 false ??
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}

// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));