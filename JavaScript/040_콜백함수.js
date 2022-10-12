// callback function
// 나중에 부르는 함수
// 아규먼트로 함수를 전달함

function sum(x, y, 콜백함수){
    콜백함수(x + y);
    return x + y
}

sum(10, 20, console.log)
// 30 리턴값
// 30 콜백함수로 콘솔로그가 들어가서 찍힌 것

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])
function 제곱(x){
    return x ** 2
}

let arr = [10,20,30,40,50]
arr.map(제곱)
// (5) [100, 400, 900, 1600, 2500]

// 화살표함수로 만들기
function 제곱(x){
    return x ** 2
    // x => x ** 2 화살표함수로 만들면 이렇게
}
arr.map(x => x**2)

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

//맵은 새로운 어레이 만들어주고 forEach는 순회해주는 애
function 두배(x){
    console.log(x *2)
}

let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)

// 노드리스트의 forEach는 IE 지원하지 않습니다
// 문제 : 화살표 함수 사용해서 아래 map과 동일한 기능하는 forEach문을 완성해주세요
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

let result = []
arr.forEach(e => {
    result.push(e ** 2)
})
console.log(result)