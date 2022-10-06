// for...in 
// 객체에 포함된 모든 프로퍼티에 대해 반복문을 수행한다.

let data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷',
}

for (const i in data) {
    console.log(i);
}
//
one
two
three
four
키가 하나씩 출력

for (const i in data) {
    console.log(i);
    console.log(data[i]);
}
//
one
하나
two
둘
...
four
넷

let data2 = [10, 20, 30, 40];
for (const i in data2) {
    console.log(i);
}

let data3 = {
    0:10,
    1:20,
    2:30,
    3:40,
}
for (const i in data3) {
    console.log(i);
}

for (const i in 'hello world') {
    console.log(i);
}
// 키 값을 순차적을 가져오고 여기서는 인덱스

// for...of
for (const i of data2) {
    console.log(i);
}
//
10
20
30
40

for (const i of 'hello world') {
    console.log(i);
}