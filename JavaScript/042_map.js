// 오브젝트의 단점을 해소하는 맵
// 맵 : 키-값 쌍을 가지는 객체 자료형의 한 종류 

let m = new Map();
m
    .set('하나',1)
    .set('둘',2)
    .set('셋',3)
    .set('넷',4)
    .set(true, '트루')
    .set([1,2], '리얼리?')

console.log(m)

console.log(m.get('하나'))
console.log(m.get(true)) // object에서 불가능
console.log(m.get([1,2])) // undefined (각각 새로운 1,2를 가리키고 있어서 호출안 됨)

/*
let m = new Map();
let test = [1, 2];
m
    .set(test, '리얼리?')
console.log(m.get(test)) // 리얼리? (이렇게는 호출 됨)
이렇게 쓰는 일은 딱히 없음
*/

/*
콘솔창에
[1, 2] == [1, 2] // false
[1, 2] === [1, 2] // false
let x = [1, 2]
let y = [1, 2]
x == y // false
x === y // false
각 객체가 다른 메모리 주소값을 가지기 때문
*/


// Map에 해당 키 값이 있는지 확인하기
m.has('하나') // true 

// Map에 값을 제거하기
m.delete('하나') // true
m.has('하나') // false 지웠는지 확인
// m 찍어보면 Map(5) {'둘' => 2, '셋' => 3, '넷' => 4, true => '트루', Array(2) => '리얼리

// 크기 구하기
m.size // 5

let data = {'one':1, 'two':2}
// 처음부터 맵으로 만드는 게 좋다 변환하는 것보다.. 
let data = ne Map ({'one':1, 'two':2}) // 이렇게 하고싶지만 안 됨 순서가 있어서 순회 가능한 객체에서만 작동
let data = new Map([['one',1],['two',2]]) // 이렇게 해야 함
let data = new Map(Object.entries({'one':1, 'two':2})) // 위에거처럼 만들어주는 게 Object.entries

let data = new Map('hello world') // X
let data = new Map([10, 20, 30, 40]) // X

// 가장 큰 장점! 직접 순회가 가능한 Map
let data = {'one':1, 'two':2}
for (const i of {'one':1, 'two':2}){
    console.log(i)
}
// 순회가 안됩니다 .. 맵은 이걸 할 수 있다!

let m = new Map();
m
    .set('하나',1)
    .set('둘',2)
    .set('셋',3)
    .set('넷',4)

for (const [i, j] of m) {
    console.log(i, j)
}
// [i, j] 이거는 구조분해할당~!

m.keys()
m.values()
m.entries()
// 다 된다 ~ 엔트리스 할 필요가 없긴 함 순회가 되니까

// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2})) // 얘를 많이 씁니다
let 오브젝트 = Object.fromEntries(맵)

// 맵과 object 100만개 순회 test

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('곤', 1)
map.set('곤', 2)
map.set('곤', 3)

// 호환의 경우가 아니라면 map을 써서 만들자