# **class 만들 때 타입지정 가능**

TypeScript constructor()는 필드값에 ㅁㅁ가 미리 있어야 this.ㅁㅁ 가능

constructor 파라미터 타입 지정 가능

```jsx
class Person {
	constructor(){
		this.name = 'kon'
		}
}
let 사람1 = new Person();
let 사람2 = new Person();
// 모든 자식들은 {name:'kon'}을 가지고 있다.

// class 필드값 (constructor와 똑같은 역할)
class Person {
		data :number = 0;
}
let 사람1 = new Person();
let 사람2 = new Person();
console.log(사람1.data) // 0
console.log(사람2.data) // 0
// 중요한 건 타입지정~ 생략해도 대부분 컴파일러가 알아서 해주긴 한다

// 다시 위로 올라가서... 사실 네임 프로퍼티가 없다는 오류가 뜬다. 필드값을 지정줘야 한다.
class Person {
	name :string;
	constructor(){
		this.name = 'kon'
		}
}
let 사람1 = new Person();
let 사람2 = new Person();

// constructor 파라미터 타입 지정 가능
// 복제되는 게 항상 오브젝트라서 리턴 타입 지정 할 이유 X 
class Person {
	name :string;
	constructor(a :string){
		this.name = a;
		}
}
let 사람1 = new Person('kon');
let 사람2 = new Person('kim');
console.log(사람1) // Person {name : kon}
console.log(사람2) // Person {name : kim}

// prototype 함수는 여기에 만든다
class Person{
	name :string;
	constructor(a :string){
	this.name = a;
	}
}
	함수(a :string) {
		console.log('안녕'+a)
	}
}
사람1.함수('안녕'); // 안녕안녕
```

❓ **Car 클래스를 만들고 싶습니다.**

1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.

3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.

(동작 예시)

```jsx
let car1 = new Car('소나타', 3000)
console.log(car1)//콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax())//콘솔창 출력결과는 300
```

```jsx
// 풀이
class Car {
	model :string;
	price :number;
	construnctor(a :string, b :number){
	this.model = a;
	this.price = b;
	}
	tax() :number{
	return this.price * 0.1
	}
}
let car1 = new Car('소나타', 3000)
console.log(car1) // { model : '소나타', price : 3000 }
console.log(car1.tax()) // 300
```

❓ **class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.**

1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면

2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고

3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 지정

(동작 예시)
```jsx
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num)//[3,5]
console.log(obj.str)//['kim', 'park']
```
```jsx
// 풀이
class Word {
	num;
	str;
	construnctor(...param){
	let 숫자들 :number[] = [];
	let 문자들 :string[] = [];
	
	param.forEach((i)=>{
	if (typeof i === 'string') {
	문자들.push(i)
} else{
	숫자들.push(i)
	}
})
	this.num = 숫자들;
	this.str = 문자들;
	}
}
// 1. class Word를 만들고 constructor를 만들었는데 
// 2. 그 안에는 rest parameter가 들어올 수 있다고 만들었습니다. 이제 new Word() 할 때 파라미터 개많이 입력가능
// 3. rest parameter는 array로 들어옵니다. 그걸 반복문 돌려서 하나하나 검사해봅니다.
// 4. 파라미터 타입이 문자면 문자들 [] 에 추가, 숫자면 숫자들 [] 에 추가합니다.
// 5. this.num = 숫자들 array, this.str = 문자들 array 이렇게 해줬습니다.
```
