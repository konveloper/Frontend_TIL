function a(){ 
    console.log(this)
}
a();

function a() {console.log(this)}
();
// 함수를 호출해준 애가 this

function b(){
    console.log('hello world')
}
b()
window.b()
// window 객체가 가지고 있는 함수 ... 변수 등록은 윈도우에 등록이 된다 ...

let test = {
    one:1,
    two:2,
    three: function(){
        console.log(this)
    }
}

test.three()
let test2 = test.three

//this가 어려운 이유 누가 실행하는지에 따라 달라짐

// 추가 예제 
// 하나만이라도 제대로 파악하기!! 윈도우가 왜 찍히는지 피터파커가 왜찍히는지 

function sayName(){
    console.log(this.name);
}

var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

sayName();
peter.say(); 
bruce.say();

function a(){
    console.log(this.name)
    function b(){
        console.log(this.name)
    }
    b()
}
a()

function a(){
    console.log(this)
    function b(){
        console.log(this)
    }
    b()
}
a()

function a(){
    console.log(this)
    function b(){
        console.log(this)
        function c(){
            console.log(this)
        }
        c()
    }
    b()
}
a()

function sayName(){
    console.log(this);
}

var c = {
    'hello':'world',
    'say': sayName
}

var b = {
    'c':c
}

var a = {
    'b':b
}

a.b.c.say()

//. 으로 접근한것 -> 실행되게끔 호출한것 -> this 

// call, apply 안씀 bind 아주 드물게 씀 this 자체를 쓰는 것을 주의
// 예제
