
///////// 함수의 구조 //////////
// 파선아실 (파라미터 선언 아규먼트 실행)
function 안녕(파라미터){
    console.log(파라미터)
    console.log('hello world')
    return 100
}

let 아규먼트 = 1000
안녕(아규먼트)
console.log(안녕(아규먼트) + 안녕(아규먼트))

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

// 파선아실
function 안녕(){
    console.log('hello')
}

안녕()
console.log(String(안녕()) + String(안녕()))

// 파선아실
// return은 반환
function 안녕(){
    console.log('hello')
    return 10
}

안녕()
console.log(String(안녕()) + String(안녕()))

// 파선아실
function 안녕(){
    console.log('hello')
    // return undefined
    return
}

안녕()
console.log(String(안녕()) + String(안녕()))


function 안녕(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

안녕()

// 질의응답
function 안녕(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    if (특정조건){
        return 100
    }
    else {
        console.log('hello')
        console.log('hello')
        console.log('hello')
        return 1000
    }
    // 아래 코드는 실행하지 않습니다.
    .
    .
    .
    .
    .
}

console.log(안녕())

console.log(String(console.log('hello')) + String(console.log('hello'))) // undefinedundefined


// 이렇게 작성하시면 안됩니다.
function sum(a, b) {
    return a * b
}

console.log(sum(10, 20))

////////////// 함수를 사용하는 이유 ////////////////
// 1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? 가능하면 함수로 만드는 것을 권장
// 2. 유지보수 -> 3번 사항 + 변수의 스코프 제한
// 3. 구조 파악이 용이하다
// 참고만 ..  4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Pbject Oriented programming 언어의 철학에 맞다)

/////////// 함수의 다양한 형태 /////////
// 1. 함수의 아규먼트에 따른 반환값
function 함수1 (a,b,c) {
    return a + b + c
}
// 콘솔창의 기능! 마지막 라인에 한해서 console.log() 찍지 않아도 리턴 값을 콘솔창에 출력해준다 
함수1(10, 20, 30)
함수1(10, 20, 50)
// 80

console.log(함수1(10, 20, 30))
console.log(함수1(10, 20, 50))
// 60
// 80

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40) // Error ㄴㄴ

// 필요 이하의 아규먼트 넣었을 때
함수1(10, 20) // 30undefined

/*
function 함수1 (a, b, c){
    return a + b + String(c)
}
함수 1(10, 20) // 30undefined
*/

// 2. 구조분해할당을 아용한 아규먼트 처리
function 함수2(a, b, ...c){
    console.log(c)
    return Math.max(...c)
}

함수2('hello', 'world', 10, 20, 30, 40)

function 함수2([a, b], ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

함수2([1, 2], 10, 20, 30, 40)

// 3. 기본값 할당
function 함수3(a=10, b=20, c=30){
    return a+b+c
}
console.log(함수3())
console.log(함수3(100))
console.log(함수3(100,200))
console.log(함수3(100,200,300))
//60
//150
//330
//660 
//undefined
console.log((함수c=1000))
// 1050 (값은 순서대로 들어가서 a에 1000이 들어간 것임)
console.log(함수3(c=1000, a=2000)) 
// 3030 
// 값이 순서대로 들어갔다

// 4. 함수에서 객체를 아규먼트로
// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/
// 개선할 여지가 있는 예제 
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소설로그인여부){ // 회원등급
    console.log('함수기능')
    return
}
함수4('Gold', true, true, true, '대화방 전체 백업 가능', true) // 가독성이 떨어진다

function 함수4({
    회원등급, 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
}){
console.log('함수기능')
console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
return
}

함수4({
회원등급: "Gold", 
글쓰기: true, 
글읽기: true, 
채널관리: false, 
백업: "부분가능", 
소셜로그인여부: true
})

///////입력되지 않은 값은 undefined///////

function 함수4({
    회원등급, 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
}){
console.log('함수기능')
console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
return
}

함수4({
회원등급: "Gold", 
채널관리: false, 
백업: "부분가능", 
소셜로그인여부: true
})

///////초깃값 설정1///////

function 함수4({
    회원등급 = 'Gold', 
    글쓰기 = true, 
    글읽기 = true, 
    채널관리 = true, 
    백업 = '부분가능', 
    소셜로그인여부 = true
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급 : 'Silver', 
    소셜로그인여부: true
})

///////초깃값 설정2///////
// 참고삼아서만 보세요.
let one
let two
let three
{one, two, three}

let {one, two, three} = {one: 10, two: 100, three: 200} // 작동
let {one:30, two, three} = {one: 10, two: 100, three: 200} // Error

let {one = 30, two, three} = {one: 10, two: 100, three: 200} // 등호가 된다는 원리가 이 이유입니다.

function 함수4({
    회원등급: 'Gold', // 안되는 이유? 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급 : 'Silver', 
    소셜로그인여부: true
})


////// 동현님 글 //////
function 함수({
    a = 2, 
    b = 1, 
    c = 3
} = {}) {
console.log(a, b, c);
return a + b + c;
}
console.log(함수({a: 20, b: 30, c: 10}));
함수() // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a=10, b=20, c=30){
return a + b + c
}
함수()

// X
function 함수({a=10, b=20, c=30}){
return a + b + c
}
함수()

// O
function 함수({a=10, b=20, c=30}){
return a + b + c
}
함수({}) // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

////// 재귀 함수 //////

// 재귀함수(Top-down, 분할정복) <-> 반복문(Bottom-up)
function factorial(n){
    if (n <= 1){ // 종료조건이 없으면 무한반복이 됩니다.
        return 1
    }
    return n * factorial(n - 1)
}

factorial(5)

let result = 1;
for (let i = 1; i < 6; i++) {
    result *= i
}
console.log(result)

/*
5! = 5 * 4 * 3 * 2 * 1
                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// 누적합은 아래 코드들이 좋은 코드는 아닙니다.
function 누적합(n){
    if (n <= 1){ // 종료조건이 없으면 무한반복이 됩니다.
        return 1
    }
    return n + 누적합(n - 1)
}
누적합(100)

let result = 0;
for (let i = 1; i <= 100; i++) {
    result += i
}
console.log(result)

// 순회를 돌지 않고 해결할 수 있으면 돌지 않고 해결합니다.
let n = 100
console.log(n * (n + 1) / 2)

// 재귀함수로 문자열을 뒤집는 코드를 작성하세요.
function reverse(txt){
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world')

/*
{ a = 2, b = c} 처럼 객체 리터럴에 초기값을 넣어도,
    결국엔 객체 리터럴 {} 을 불러와야 함수가 실행이 되는데,
    그것마저도 생략해준 것이 = { a = 2,  b = 2} = {} !!
    객체가 매핑이 안됐기때문에 객체구조는 무시되고 그대로 a=2, b=1, c=3만 실행되어 리턴된건가요?
    단순히 객체-객체 꼴이 아니기때문에 실행이 안됐던건가요ㅇㅇ
*/

// 재귀 함수(top-down 위에서 아래, 분할정복) <-> 반복문(Bottom-up 아래에서 위)
// 내가 나를 호출, 반복문으로 구현 가능 
function factorial(n){
    if (n <= 1){ // 종료 조건이 없으면 무한반복이 된다
        return 1
    }
    return n * factorial(n - 1)
}

// 재귀함수로 문자열을 뒤집는 코드를 작성하세요.
function reverse(txt){
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world')


헬로 코드
/*
참고사항
'hello'.slice(1)
'ello'

n                   txt.length <= 1         return
reverse('hello')    false                   reverse(txt.slice(1)) + 'h' = 'olleh'
reverse('ello')     false                   reverse(txt.slice(1)) + 'e' = 'olle'               
reverse('llo')      false                   reverse(txt.slice(1)) + 'l' = 'oll'            
reverse('lo')       false                   reverse(txt.slice(1)) + 'l' = 'ol'                      
reverse('o')        true                    'o'                      
*/

factorial(5)
5! = 5*4*3*2*1
//              n   n<=1    return
// factorial(5) 5   false   5*factorial(4) = 120
// factorial(4) 4   false   4*factorial(3) = 24
// factorial(3) 3   false   3*factorial(2) = 6
// factorial(2) 2   false   2*factorial(1) = 2
// factorial(3) 1   ftrue   1
// 아래로 갔다가 쭉 올라옴 

let result = 1;
for (let i = 2; i < 6; i++) {
    result *= i
}
console.log(result)



// 지역변수와 전역변수

// 스코프에 대한 좋은 글
// https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 블록레벨스코프
if(true){ // for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y)

// 밖에 선언된 x는 함수 내부에서도 접근 가능합니다.
let x = 100
function xplus(){
    x = x + 10
}

xplus()
console.log(x)

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus(){
    let x = 100
    x = x + 10
}

xplus()
console.log(x)

// 함수 안에 함수
function a(){
    console.log('a 실행')
    function b(){
        console.log('b 실행')
    }
    b()
}

a()



// 화살표 함수
function 함수1(x, y) {
    return x + y
}

let 함수2 = (x, y) => x + y

함수1.name
'함수1'
함수2.name
'함수2'
console.dir(함수1)

function 함수1(x, y) {
    let z = x + y
    return z
}

let 함수2 = (x, y) => {
    let z = x + y
    return z
}


// 호이스팅이 다릅니다 -> 35번 파일로 이어집니다


////////////

let a = 0
let b = 0

function 사자(파라미터) {
    console.log('저는 그냥') // 그냥 실행되는 console객체의 기능
    console.log('내부 기능입니다.') // 그냥 실행되는 console객체의 기능
    return 파라미터 // <- 실제로 함수가 반환하는 것
}

const 숫자5 = 사자(5) // - console.log가 2번 출력되고 파라미터였던 5를 반환.
const 숫자3 = 사자(3) // - console.log가 2번 출력되고 파라미터였던 3을 반환.

console.log(숫자5 + 숫자3) // 8
console.log도 하나의 함수인데 console.log라는 함수는 리턴값이 없어서 undefined입니다.

