// 집합, 합집합, 교집합, 차집합
// 이때 객체 안의 값은 중복을 허용하지 않습니다.

let s = new Set('abcdeeeee');

console.log(s); // Set(5) {'a', 'b', 'c', 'd', 'e'}
console.log(s.size); // 5

// 문제
게시판 = ['곤','곤','곤','현','현','센도']

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let 게시자 = new Set(게시판)
console.log(게시자.size); // 3

// 문제 2 : 각각 몇 개의 게시물을 작성했나요?
// 이름마다 카운팅해야겠다 -> 순회가 가능한가? -> 필터
for (const i of 게시자){
    console.log(i, 게시판.filter(e => e === i))
}
// 곤 (3) ['곤', '곤', '곤']
// 현 (2) ['현', '현']
// 센도 ['센도']

let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) ||  0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}
map.set('곤', (map.get('곤') ||  0) + 1)
// => map.set('곤', 1)
map.set('곤', (map.get('곤') ||  0) + 1)
// => map.set('곤', 2)
map.set('곤', (map.get('곤') ||  0) + 1)
// => map.set('곤', 3)
map.set('현', (map.get('현') ||  0) + 1)
// => map.set('현', 1)

for (const i of 게시자){
    console.log(i, 게시판.filter(e => e === i).length)
}
// 곤 3
// 현 2
// 센도 1

let s = new Set('abcdeeeee');
s.size;
s.add('f');

//Set을 순환하기
for (let variable of s) {
    console.log(variable);
}

//값이 배열인 경우
let ss = new Set('abcdeeeee'.split(''));
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value)) // 첫번째 value는 abc .. cro 찍어보면 ['c']
// 합집합
let union = new Set([...a].concat(...b))
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)))