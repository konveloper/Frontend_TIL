# 함수에 타입 지정하는 법 & void 타입
- 함수는 파라미터, return 값 타입 지정 가능
    - 변수만 만들면 :any 자동 할당
    - 파라미터도 일종의 변수, 파라미터 자리에 어떤 타입만 입력 가능한지 써준다
    - return 값은 {} 앞에 써준다

```jsx
function 함수(x :number) :number {
	return x * 2
}
함수('6') // err
```

## void : 함수에서만 쓸 수 있는 타입

- 어떤 값을 리턴하고 싶지 않을 때 엄격하게 처리해달라! 실수로 뭔가 리턴하는 걸 사전에 방지

```jsx
function 함수(x :number) :void {
	1 + 1
}
```

- 자스와 다른 점 : 타입지정된 파라미터는 필수
    - 함수 선언하고 함수() 이렇게 쓰면 err
    - But 파라미터가 옵션일 때 : 파라미터 뒤에 물음표 붙이기  `function 함수(x? :number){}`
    - 중요! `변수? :number` 는 `변수 :number | undefined`와 같다
    
    ```jsx
    function 함수(x :number | undefined) :void {
    	console.log(x)
    }
    함수()
    // x 출력해보면 undefined이기 때문에
    // 파라미터가 정의가 안되면 자동으로 undefined
    
    function 함수(x? :number) :void {
    }
    // 이것과 동일
    ```
    
    - 참고! 오브젝트 키값도 옵션 가능 : `{age? :number}` (이런 키 값이 들어올 수도 있다)

❓**이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다. 파라미터와 return 타입지정도 잘 해봅시다.**

```jsx
function 함수(x? :string) :void {
	if (x) {
	console.log('안녕하세요' + x)
	} else {
	 console.log('이름이 없습니다.')
	}
}
```

❓**함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.**

예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다. 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다. 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

```jsx
function 함수(x: string|number) :number {
	return x.toString().length
}
```

❓**결혼 가능 확률을 알려주는 함수를 만들어봅시다.**

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

(예시)
**결혼가능하냐(700, false, '중')** 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
**결혼가능하냐(100, false, '상')** 이렇게 사용할 경우 아무것도 return되지 않습니다.

```jsx
function 결혼가능하냐(money :number, house :boolean, charm :string) :string|void{
	let score :number = 0;
	score += money;
	if (house === true) {
	score += 500
 } if (charm === '상') {
	score += 100
	} if (score >= 600) {
	return '결혼가능'
}
```
