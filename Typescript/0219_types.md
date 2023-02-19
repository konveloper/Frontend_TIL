# 타입스크립트 기본 타입 정리 (primitive types)
- 변수에 타입을 지정하는 것은 변수에 실드를 씌우는 것과 같다.
- 타입 지정 굳이 할 필요가 없다! 대부분 자동으로 되어서 문법 생략 가능

```jsx
let 이름 :string = 'kon';
let 나이 :number = 50;
let 공부했니 :boolean = true;

// 변수 하나에 여러 자료 넣고 싶으면 array 자료형, object 자료형
let 회원들 :string[]= ['kon', 'kim']
let 회원들 :{ member1 : string, member2 : string } = { member1 : 'kon', member2 : 'kim' }
```

❓ **여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.**

```jsx
let 이름 :string = '은영';
let 나이 :number = 29;
let 출생지역 :string = '인천';
```

❓ **여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.**

object 안엔 노래 제목과 가수이름이 들어가면 됩니다. 근데 제목과 가수는 문자만 들어올 수 있어야합니다.

```jsx
let favorite :{ song :string, signer :string} = { song : '작은 자유', signer : '오지은'}
```

❓ **다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.**

```jsx
let project:{ 
	member : string[], 
	days : number, 
	started : boolean, 
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
```
project 변수 우측에 적으면 됩니다. member 안엔 문자로 가득한 array만 들어올 수 있고 days는 숫자, started는 true/false만 들어올 수 있습니다.

# **타입을 미리 정하기 애매할 때 (union type, any, unknown)**

## **union type** : 타입 2개 이상 합친 새로운 타입 만들기

```jsx
let 회원 :(number | string | boolean) = 123; // 소괄호는 자유

let 회원들 :(number | string)[] = [1,'2',3]; 
// 어레이 안에 숫자나 문자열이 들어가려면 이때는 소괄호 필수
let 회원들 :number | string[] = [1,'2',3]; 
// 회원들 안에 숫자 타입이 들어가거나 문자열이 들어가는 어레이 ['kon']가 들어간다

let 오브젝트 :{ a : number | string } = { a : '123' }##**any type**
```

## any, **unknown type** : 모든 자료형 허용

```jsx
let 이름 :any;
이름 = 123;
이름 = true;
이름 = [];
// 타입 실드 해제 문법

let 이름 :unknown; 
let 변수1 :string = 이름; 
let 변수2: boolean = 이름;
let 변수3: number = 이름;
// err! unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동
```

- any과 unknown의 차이점
    - any : 타입 실드 해제 문법. 타입 관련 버그 잡아주지 못함. 타입스크립트 쓰는 의미가 없다 (비상시 쓰는 ****변수 타입체크 해제기능 용도)
    - unknown  ****: any보다 안전. 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우
- 주의! 수학 연산시 타입 엄격하게 지켜야 함

```jsx
let 이름 :unknown;
이름 - 1 
// err! 수학 연산도 타입이 맞아야 함. unknown은 number가 아님 (엄격함)

let 나이 :string|number;
나이 + 1; // err! 
// 자스에서는 'kon' + 1 결과값이 'kon1' 
// 타스에서는
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number 타입 + 1 (안됨) 
// why? union type은 새로운 타입! string도 number도 아니고 'string 또는 number'라는 타입

let 나이 :unkonw = 1;
나이 - 1;
// err! '나이'는 숫자지만 타입은 unknown임. 숫자 타입이 아니라서 안됨
```

❓**다음 변수 4개에 타입을 지정해봅시다.**

(조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.

```jsx
let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];

// 풀이
let user :string = 'kim';
let age :(undefined|number) = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];
```

❓**학교라는 변수에 타입을 지정해보십시오.**

```jsx
let 학교 = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// 풀이
let 학교 : { 
	score :(number|boolean)[], 
	teacher : string, 
	friend : string|string[],
 } 
= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
```
