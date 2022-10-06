while(조건문) {
    실행문;
}

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

while (true){
    console.log('무한반복!!');
}

// 구구단은 암기해주세요.
let i = 2;
let j = 1;
while (i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++; // 맨 마지막에 10이 되고 j < 10이 아니기 때문에 반복문 탈출
    }
    j = 1
    i++;
}
//

let value = [10, 20, 30, 40];
let x = 0;
while(x < value.length) {
    console.log(value[x]);
    x++;
}
// 

// break
let i = 2;
let j = 1;
while (i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1
    if (i >= 4){
        break;
    }
    i++;
}

// do ... while 현업에서 쓰는 것 거의 못 봤다고 하심 무조건 한 번 실행

// continue 밑에서 실행 안 시키고 다음 루프로 간다
for (let i = 0; i < 10; i ++) {
    if (i === 4 || i === 5) {
        continue;
    }
    console.log(i);
}
// 4,5 빼고 0...9 출력

for (let i = 0; i < 10; i ++) {
    if (i === 4 || i === 5) {
        break;
    }
    console.log(i);
}
//
0
1
2
3

let i = 2;
let j = 1;
while (i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1
    if (i == 4) {
        break;
    }
    i++;
}
// 구구단 4단까지 출력

// 4단 무한반복.. 해보지 마세요! 
let i = 2;
let j = 1;
while (i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1
    if (i == 4) {
        continue;
    }
    i++;
}

// 레이블 
// 비추 협업이 어려움 가독성이 좋지 않다
// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.
timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}
// 루프가 몇 개든 원하는 위치로 바로 갈 수 있다
for (let x = 2; x < 10; x++) {
    test:
    for (let y = 1; y < 10; y++) {
        if (x === 4) break test;
          console.log(`${x} X ${y} = ${x * y}`);
    }
}
