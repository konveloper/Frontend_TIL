// 구조

let 조건식 = true;

if (조건식) {
    //조건식이 참일 경우 실행될 코드
    console.log("중괄호를 사롱했습니다.")
}
// 가독성 좋은 코드
if (조건식) console.log("중괄호를 생략했습니다.");
// 생략한 코드

let 조건식1 = true;
let 조건식2 = true;

if (조건식1) {
    // 조건식1이 참(true)일 경우 실행될 코드
    console.log(1)
} else if (조건식2) {
    // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
    console.log(2)
} else {
    // 조건식1, 2 모두 거짓일 경우 실행될 코드
    console.log(3)
}

// 예제
let money = 1000;
let score = 89;

if (score > 90) {
    console.log("i\'m so happy"); // 특수문자 사용하고 싶으면 역슬래시! escape 문자
    money += 1000000;
} else if (score > 80) {
    console.log("i\'m happy");
    money += 100000;
} else if (score > 70) {
    console.log("happy?");
    money += 10000;
} else if (score > 60) {
    console.log("happy!");
} else {
    console.log("...");
    money = 0;
}

// 이렇게 쓸 수도 있겠지만 공통되는 부분이면 반복하지 않고
if (score > 90) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy!!!"');
} else {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "..."');
    money = 0;
}

// 모두 적용되는 것은 가장 바깥 위에 
if (money >= 100000000){
    money -= 10000000
}

if (score > 90) {   
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m so happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "i\'m so happy"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "i\'m so happy"');
} else {
    console.log('mom : "i\'m so happy"');
    money = 0;
}

// switch문
// 잘 쓰지 않고 if문으로 대신 구현

let value3 = 'three'

switch (value3) {
    case 'one':
        console.log(1);
        break;
    case 'two':
        console.log(2);
        break;
    case 'three':
        console.log(3);
        break;
    case 'four':
        console.log(4);
        break;
}
// 3

// break 안 걸면 그 이후로 값이 다 출력
switch ('two') {
    case 'one':
        console.log(1);
    case 'two':
        console.log(2);
    case 'three':
        console.log(3);
    case 'four':
        console.log(4);
}
// 
2
3
4