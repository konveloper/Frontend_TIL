# Typescript

- **Typescript?** 자바스크립트 대용 업그레이드 언어 (JavaScript + Type 문법)
- **why?** 프로젝트가 커질수록 높은 유연성/자유도는 적이 될 수 있다.
    - 타입을 엄격히 검사(상세 에러 메세지와 오타까지), 코드 에디터 부가 기능이라고 봐도 무방
- **compile**
    - 브라우저는 js 파일만 읽기 때문에 ts 파일을 js로 변환, 파일 사용시 변환된 js 파일 사용
    - 터미널 `tsc -w` 입력 :  ts 파일을 저장할 때마다 js 파일을 만들어주어 자동 변환
    - `tsconfig.json` 파일 : ts → js 컴파일시 옵션 설정
    
    ```jsx
    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
        }
    }
    // 어느정도 IE 호환성을 원하면 es5, commonjs
    ```
    
    ```jsx
    // 추가
    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "noImplicitAny": true,
            "strictNullChecks": true
        }
    }
    //noImplicitAny : any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정
    // strictNullChecks : null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정
    ```
    
    ```jsx
    // tsconfig에 들어갈 기타 항목들
    {
     "compilerOptions": {
    
      "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
      "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
      "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
      "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
      "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
      "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
      "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
      "outDir": "./", //js파일 아웃풋 경로바꾸기
      "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
      "removeComments": true, //컴파일시 주석제거 
    
      "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
      "noImplicitAny": true, //any타입 금지 여부
      "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
      "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
      "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
      "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
      "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기
    
      "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
      "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
      "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
      "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
     }
    }
    ```
    
- **간단한 변수 타입 지정 가능**
```JavaScript
let 이름 :string = ‘kon’; // 이 변수에는 string type만 들어올 수 있다
이름 = 123 // err

// array 타입 지정
let 이름 :string[] = ['kon', 'young'] // 이 변수에는 string 담긴 array만 들어올 수 있다

// object 타입 지정
let 이름 :{ name : string } = { name : 'kon' }
let 이름 :{ name? : string } = { name : 'kon' } 
// 속성 뒤에 ? 붙이면 name 속성이 있을 수도 있고 없을 수도 있고 옵션

// union type (다양한 타입이 들어올 수 있음)
let 이름 :string | number = 'kon';
let 이름 :string | number = '8';
// string이 들어올 수도 있고 number가 들어올 수도 있다

// type alias (타입은 변수에 담아쓸 수 있음, 일반적으로 대문자로 시작)
type Name = string | number
let 이름 :Name = 123;

// 함수에 타입 지정
function 함수(x :number) :number{
	return x * 2
}
// 파라미터로 number, 리턴값으로 number

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫째는 number, 둘째는 boolean
let kon:Member = [123, true]

// object에 타입 지정해야할 속성이 너무 많으면 
type Member = {
	[key :string] : string
}
// 글자로 된 모든 object 속성의 타입은 :string
let kon : Member = { name : 'kim' }

class User {
	name :string;
	constructor(name :string){
	this.name = name;
	}
}
```
