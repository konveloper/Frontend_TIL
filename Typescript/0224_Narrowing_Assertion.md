# **타입 확정하기 Narrowing & Assertion**

## **Narrowing**

꼭 지켜야 함! (union type 등 때문에) 어떤 변수의 타입이 아직 하나로 확정되지 않았을 경우 if문 등으로 Narrowing

1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할 (number 타입을 as string 이렇게 바꾸려고 하면 에러)
    
    타입이 확실하지 않을 때 생기는 부작용 막기위한 장치 → "defensive하게 코딩한다"
    
2. 실은 그냥 타입실드 임시 해제용. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일. 그러면 이제 변수를 숫자로 가정해서 가공 가능
- `typeof` 연산자 사용하기

```jsx
function 내함수(x :number|string){
	if (typeof x === 'string'){
	return x + '1'
	} else {
	return x + 1
	}
}

function 내함수(x :number|string){
	let arr :number[] = [];
	arr[0] = x // err
}

function 내함수(x :number|string){
	let arr :number[] = [];
	if (typeof === 'number'){
	arr[0] = x;
	}
}
// 주의! if문 썼으면 끝까지 써야 안전. else, else if 안 쓰면 에러날 수도
```

- Narrowing으로 판정해주는 문법들 (현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 인정됨)
    - `typeof` 변수
    - 속성명 `in` 오브젝트자료
    - 인스턴스 `instanceof` 부모

## assertion

타입 덮어쓰기 

용도?  1. narrowing 할 때 2.무슨 타입이 들어올지 100% 확실할 때… 

그래서 굳이 쓸 이유가 없다. 1. 평소에 쓰지 말고 남이 짠 코드 수정할 때나 왜 타입 에러 나는지 모르겠을 때 임시 에러 해결용 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고있는데 컴파일러 에러가 방해할 때

```jsx
function 내함수(x :number|string){
	let arr :number[] = [];
	arr[0] = x as number; // 왼쪽에 있는 변수를 넘버로 덮어써주세요. x는 number로 인식됨
}

// 용도 1. narrowing 할 때
let 이름 :string = 'kim';
이름 as number; // err! 타입을 a에서 b로 변경 X

// 2. 무슨 타입이 들어올지 100% 확실할 때
function 내함수(x :number|string){
	let arr :number[] = [];
	arr[0] = x as number;
}
내함수('123') // 문자 넣어도 아무일 없음 이런 버그 캐치 못함
```

- 참고 : 예전엔 as 문법 이렇게 썼다
let 이름 :string = ‘kim’;
<number>이름
- as 문법이 유용할 때 : 타입을 강제로 부여하는 기계를 만들어서 쓰고 싶을 때, 함수에 데이터를 넣으면 as 타입명을 붙여서 return하는 함수를 만들어서 사용

## 문제
❓ **숫자 여러개를 array 자료에 저장해놨는데** 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다. 이걸 클리닝해주는 함수가 필요합니다. **클리닝함수( ['1', 2, '3'] )** 이렇게 숫자와 문자가 섞인 array를 입력하면 **[1,2,3]**타입을 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

```jsx
function 클리닝함수(a :{number|string)[]){
	let 클리닝완료 :number[] = [];

	a.forEach((b)=>{
	if (typeof === 'string'){
		클리닝완료.push((parseFloat(b))
	} else {
		클리닝완료.push(b)
	}
})

	return 클리닝완료
}

console.log(클리닝함수([123,'3']))
```


❓ **다음과 같은 함수를 만들어보십시오.** 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 철수쌤같은 선생님 object 자료를 집어넣으면 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다. 그리고 타입지정도 엄격하게 해보도록 합시다.


```
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
```


(동작예시)

```
만들함수( { subject : 'math' } ) //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } )
//이 경우 'korean'을 return
만들함수( { hello : 'hi' } ) //이 경우 타입에러 나면 됩니다
```
이 자료가 array type 인지 검사하는  `Array.isArray()`

```jsx
//풀이
function 함수(x :{subject : string|string[]}){
	if (typeof x.subject === 'string') {
	return x.subject
	} else if (Array.isArray(x.subject)){
	return x.subject[x.subject.length-1]
	} else {
	return '없음'
	}
}
console.log(함수({subject:['english','art']}))
```
