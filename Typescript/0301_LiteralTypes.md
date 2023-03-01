# **Literal Types로 만드는 const 변수 유사품**

## **Literal Types**

- 변수에 뭐가 들어올지 더 엄격하게 관리 가능
- 자동완성 힌트

```jsx
let 이름 :'kon' // 이 변수에는 무조건 'kon'만 들어올 수 있음

let 저예요:'짧머'|'여성';
저예요 = '짧머'
저예요 = '여성'

// 함수 만들 때 특히 편하다
function 함수(a :'hello') :(1 | 0){
	return 1
}
함수('hello')

// 문제
// 1. 가위 바위 보 중 1개 입력
// 2. 가위 바위 보만 들어올 수 있는 어레이를 리턴
function 게임(a :'가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
		return ['가위']
}
게임('가위')

```

## const 변수의 한계

Literal type은 const 변수와 유사하게 사용 가능

const 변수 업글 버전(자료를 여러개 저장할 수 있는 const 변수라고 생각하기)

```jsx
var 자료 = {
	name : 'kon'
}
자료.name // 'kon'

function 내함수(a :'kon'){
}

내함수('kon')
내함수(자료.name) // err! 
// why? 파라미터 지정할 때 타입을 지정해놨다.
// 'kon'이라는 자료만 들어올 수 있습니다. X
// 'kon'이라는 타입만 들어올 수 있습니다. O
// 자료.name은 kon:string
```

- Literal type의 문제점

솔루션 

1. object 만들 때 타입 지정 확실히 하기 
2. as 문법 사용
3. as const 키워드 쓰기 (이 object는 literal type 지정 알아서 해주세요! object 자료를 완전히 잠가놓고 싶을 때)
    1. 효과 1. object value 값을 그대로 타입으로 지정해준다
    2. 효과 2. object 속성들에 모두 readonly 붙여준다
