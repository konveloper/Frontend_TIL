# **타입도 변수에 담아쓰세요 type 키워드 써서 & readonly**

## **type alias (타입 변수)**

작명 방식 : 대문자로 시작, 뒤에 -Type 붙이기

```jsx
type Animal = string | number | undefined;
let 동물 :Animal = 123;

// 오브젝트 타입도 변수에 담기
type AnimalType = {name : string, age : number }
let 동물 :AnimalType = { name : 'kon', age = '29'};
```

- const 자스 문법 점검 : 자료 수정 X  object 수정은 자유롭게 가능;
- 타스는 object 오브젝트 자료 수정도 막을 수 있음
    
    But 타스 에러는 에디터, 터미널에서만 존재하는 경고. 변환된 js 파일 들어가면 에러 없이 적용됨
    

```jsx
const 출생지역 = 'Incheon';
출생지역 = 'Busan' // err!

const 출생지역 = { region : 'Incheon' }
출생지역.region = 'Busan' 
// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능;

// 타스는 object 자료 수정도 막을 수 있음
// readonly : 읽기 전용! 실수로 수정하면 에러 내줌
type Partner = { 
	readonly name : string 
}
const 여친 :Partner = {
	name : 'kon'
}
여친.name = 'kim' // err! But 타스 에러는 에디터, 터미널에서만 존재

// object 속성 안에도 ? 사용 가능
type Partner = { 
	name? : string 
}
const 여친 :Partner = {
	name : 'kon'
}
```

- 타입 변수 합치기
    - union type
    - & 연산자로 object 타입 합치기 → **type alias extend**
        - 같은 이름의 type 변수 재정의 불가능

```jsx
type Name = string;
type Age = number;
type Person = Name | Age; // 스트링 또는 넘버가 들어올 수 있게 됨

type PositionX = { x : number };
type PositionY = { y : number };
type NewType = PositionX & PositionY // { x : number, y : number }

let position :NewType = { x : 10, y : 20 }

// 같은 이름의 type 변수 재정의 불가능
type PositionX = { x : number };
type PositionX = number // err!
```

❓  **object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?**

An object literal cannot have multiple properties with the same name.

❓ **다음 조건을 만족하는 타입을 만들어봅시다.**

1. 이 타입은 object 자료형이어야합니다.

2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.

3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

type alias로 만들어보셈

```jsx
type MyType = { 
	color? : string, 
	size : number, 
	readonly position : number[]
}

let 테스트변수 :MyType = {
	size: 123,
	position : [1,2,3]
}
```

❓ **다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.**

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. **{ name : 'kim', phone : 123, email : 'abc@naver.com' }**

2. object 안에 있는 **이름, 전화번호, 이메일** 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

```jsx
type User = {
	name : string,
	phone : number,
	email : string,
}
let 회원가입정보 :User = {
	name : 'kon',
	phone : 123,
	email: 'kon@naver.com',
}
```

❓ **다음을 만족하는 type alias를 만들어보십시오.**

1. 숙제2와 똑같은데 이번엔 **이름, 전화번호, 이메일, 미성년자여부** 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.

3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

```jsx
type User = {
  name: string;
  phone: number;
  email: string;
};
type Teen = { teen: boolean };
type NewUser = User & Teen;

let 회원가입정보: NewUser = {
  name: 'kon',
  phone: 123,
  email: 'kon@naver.com',
  teen: true,
};
```
