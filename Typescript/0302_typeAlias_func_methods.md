# **함수와 methods에 type alias 지정하는 법**

## type alias에 함수 type 저장해서 쓰는 법

1. 함수 타입은 `type 함수타입 = () ⇒ {}`
2. 함수표현식에만 type alias 사용 가능

```jsx
type 함수타입 = (a :string) => number;
// 이 함수 타입은 스트링 자료 집어넣고 넘버 타입을 리턴한다

() => { return 10 }
() => {  10 }
// 이렇게도 쓸 수 있다

let 함수 :함수타입 = function (a){
	return 10
}
```

## **object 자료 안의 함수 타입지정 (methods)**

- object 안에 함수 저장 가능
- 함수는 예측 가능한 값을 넣고 뺄 수 있어야 하니까 타입을 지정해주자

```jsx
let 회원정보 = {
	name : 'kon',
	plusOne(a :number) => {
	return a + 1
	},
	changeName : () => {
	}
}
// 파라미터 하나는 number, return 값은 number
회원정보.plusOne()
```

- 자스 복습
- 선언식과 표현식 차이 하나 : this값이 달라짐

arrow function의 장점은 기호 생략기능을 제공해준다는 점인데

1. arrow function에선 중괄호안에 return 어쩌구 코드밖에 없으면 중괄호 { } 생략해도 봐줍니다.

2. 파라미터가 한개 밖에 없으면 소괄호 ( ) 생략해도 봐줍니다.

예를 들어서 2를 넣으면 2를 곱해주어 return 해주는 함수를 만들고 싶으면

```
x => 2 * x
```

- 콜백함수

```jsx
function 함수1(a){
	a()
}
function 함수2(){
}

함수1(함수2)
// 1. 함수1 내부코드 a() 실행됨
// 2. 근데 파라미터를 a 자리에 집어넣어서 함수2() 실행됨
// 함수 안에 함수가 들어가는 걸 콜백함수라고 부른다. 함수가 실행되고 나서 바로 실행하는 함수. 순차적으로 실행하고 싶을 때도 이용. 여기서는 괄호 안 함수2
```

❓ **위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.**

plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다. changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.


```jsx
type Member => {
	name : string,
	plusOne :( x:number ) => number,
	changeName : () => void,
}
```

❓ **다음 함수2개를 만들어보고 타입까지 정의해보십시오.**

cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
함수에 타입지정시 type alias를 꼭 써보도록 합시다.

```jsx
type cutZeroType = (x: string) => string;
type removeDashType = (x: string) => number;

let cutZero: cutZeroType = function (x) {
  let result = x.replace(/^0+/, '');
  return result;
};

let removeDash: removeDashType = function (x) {
  let result = x.replace(/-/g, '');
  return parseFloat(result);
};
```

❓ **함수에 함수를 집어넣고 싶습니다.**

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
```jsx
function 만들함수(a, func1 ,func2){
	let result = func1(a);
	let result2 = func2(result);
	return console.log(result2)
} 
만들함수('010-1111-2222', cutZero, removeDash)

/* 타입 없이 짜보고 타입 추가 */
type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;
function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
	let result = func1(a);
	let result2 = func2(result);
	return console.log(result2)
} 
만들함수('010-1111-2222', cutZero, removeDash)
```
