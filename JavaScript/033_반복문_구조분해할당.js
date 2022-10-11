// 구조 분해 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식

let value = [10, 1, 100, 200, 300, 10]
let value2 = {
    one:1,
    two:2,
    three:3,
    four:4,
}

Object.keys(value) // (6) ['0', '1', '2', '3', '4', '5']
Object.keys(value2) // (4) ['one', 'two', 'three', 'four']

for (i in value2){
    console.log(i)
}
// for of 로 순회를 돌 수가 없음

for (i of value2){
    console.log(i)
}
// of로 순회를 돌아야 키와 밸류를 한꺼번에 출력하고 싶은 것. -> error

Object.entries(value)
Object.entries(value2)

for (i of Object.entries(value2)){
    console.log(i)
}

for([i,j] of Object.entries(value2)){
    console.log(`key는 ${i}고 value는 ${j}입니다.`)
}
// key는 one고 value는 1입니다.
// key는 two고 value는 2입니다.
// key는 three고 value는 3입니다.
// key는 four고 value는 4입니다.

for ([i,j] of [[10, 20],[30, 40]]){
    console.log(i,j)
}
// 10 20
// 30 40

for ([i,j] of [[10, 20, 300],[30, 40, 500]]){
    console.log(i,j)
}
// 10 20
// 30 40
// 300과 500을 받지 못했다

for ([i, j, ...k] of [[10, 20, 300, 1, 2], [30, 40, 500, 1]]){
    console.log(i, j, k)
}
// 10 20 (3) [300, 1, 2]
// 30 40 (2) [500, 1]
// 몇 개 들어오는지 모르는 경우, 전개 구문을 넣어준다! 데이터 구조는 확연하기 때문에 이렇게 들어올 일은 거의 없다

for ([[i,j], k] of [[[10, 20], 300],[[30, 40], 500]]){
    console.log(i,j,k)
}
// 10 20 300
// 30 40 500

for ([i,j] of [[[10, 20], 300],[[30, 40], 500]]){
    console.log(i,j)
}
// [10, 20] 300
// [30, 40] 500
// [10, 20]이 i, 300가 j

let a, b, c
[a, b] = [10, 20]

let one, two, three
[one, two, three] = '010-5044-2903'.split('-')
// (3) ['010', '5044', '2903']
// 0: "010"
// 1: "5044"
// 2: "2903"
// 특수문자,- 작성 못하게 하고 세 칸으로 받으면 좀 더 수월하다

let one1, two1, three1, four1
[one1, two1, three1, ...four1] = '010-5044-2903-01-02-03'.split('-')
// 번호가 더 있을때는? 전개해주자
// (6) ['010', '5044', '2903', '01', '02', '03']

// 문제1 (에러)
// 데이터 건들이지 말고 풀기
// a, b, c로 각각 분해
// a에는 10, b에는 20,30,40, c에는 50 할당해보기
data = [10, 20, 30, 40, 50]
[a, ...b, c] = [10, 20, 30, 40, 50] // 에러
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; // O

// 문제 2 (에러))
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
[...a, b, c] = [10, 20, 30, 40, 50] // 에러
[a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]]; // O

// 문제 3 (정상 작동 스프레드가 마지막에 있어야 함)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20 c에는 30, 40, 50을 할당해보세요.
[a, b, ...c] = [10, 20, 30, 40, 50]

// Object 구조분해할당
let data = {
    name : 'kon',
    age : 10,
    money : 100,
}
let {name, age} = data
// name 치면 'kon'
// age 치면 10
let {name, age} = {name:'hojun', age:'10'}

let data = {
    name : 'kon',
    age : 10,
    money : 100,
    company : 'weniv'
}
let {name, age, ...rest} = data

// 순서를 뒤바꿔봅시다 (됩니다)
let data = {
    name : 'hojun',
    money : 100,
    company : 'weniv',
    age : 10,
}
let {name, age, ...rest} = data
// age 치면 10

// RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용합니다.
let a = [10, 20, 30]
a.push(100)
a.unshift(1000)
// a 쳐보면 (5) [1000, 10, 20, 30, 100]

let a = [10, 20, 30]
a = [1000, ...a, 100]
// (5) [1000, 10, 20, 30, 100]

let a = [1, 2, 3]
let b = [10, 20, 30]
let c = [...a, ...b]
// c 치면 (6) [1, 2, 3, 10, 20, 30]

let str = "hello world"
console.log([str])
// ['hello world']

let str = "hello world"
console.log([...str])
//(11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

'!'.repeat(10)
// '!!!!!!!!!!'

[...'!'.repeat(10)]
// (10) ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!']