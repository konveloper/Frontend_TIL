# Sass

## 1. **Sass(Syntactically Awesome Stylesheets)나 SCSS 쓰는 이유**
- 스타일시트가 점점 더 커지고 복잡해지면 유지보수가 어려워짐
- Sass안에 있는 변수, 네이스팅, 믹스인, 가져오기, 상속, 내장기능 등 css에는 없는 편의 기능들이 있어 시간 절약
- 코드 재사용이 가능

## 2. **Sass**
Sass는 CSS로 컴파일 되는 스타일 시트 확장 언어, CSS 전처리기의 하나입. 브라우저가 Sass를 직접 로딩하는 것이 아니라 개발은 Sass를 기반으로 한 후, CSS로 익스포트하는 과정을 거친다.
- 브라우저가 Sass파일을 직접 읽지 못하기 때문에 일반 CSS로 컴파일
- 웹업계에서 실제 많이 사용하는 전처리기

### Sass 기술방식 2가지
- .sass 기술방식과 .scss 방식 → 다른 파일 확장자를 사용합
- Sass와 Scss가 있는데 그 중에서 일반적으로 CSS와 좀 더 유사한 SCSS를 사용 why? SCSS는 CSS와 동일하게 중괄호를 사용하는 방식
```
//SCSS
$font-stack: Helvetica, sans-serif;
$primary-color : #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}
```

## 2. 파일 분리와 Nesting
### 파일 분리
- 각 프레임 별(_header.scss, _home.scss) css 분리
- variable과 mixin 파일 분리
- 메인 파일인 style.scss에 분리했던 파일들을 import
- 파일을 스타일 별로 기능별로 분리하여 사용할 수 있으며 파일을 기능 별, 레이아웃 별로 분할해서 사용하기 때문에 코드를 관리하기 편리해진다.
아래와 같이 style.scss파일을 보면 나머지 파일들을 import (style.scss 파일에는 @import와 주석 외에는 다른 코드들을 작성하지 않는다)
- 22년 초, 공식 문서에서 @import 점차 제거하는 방향, @use 사용
```
@import "header";
@import "home";
@import "mixin";
@import "variables";
```
_헤더, _메인, _변수, .... 언더바로 시작하는 각 scss 파일들 -> 언더바가 없는 style.scss 하나에 합쳐준다 -> import해서 컴파일하면 style.css 만들어준다 (주의: 파일에는 _가 붙지만 import 할 때에는 _를 붙이지 않는다)

### 주석 (파일 001_주석과nesting 참고)
한 줄 주석은 sass 내에서만 볼 수 있다. 여러 줄 주석은 scss파일이 컴파일 될 때 주석 내용이 css 파일에 나타난다.
```
/* 여러줄 주석은 볼 수 있습니다. */
// 한 줄 주석은 볼 수 없습니다.
```

## 2. 중첩(Nesting)  
- Nesting(중첩)을 사용하면, SCSS에서도 html처럼 계층구조로 스타일 적용 가능. CSS코드가 구조화 되어 가독성이 높아지며 유지 보수하기 편리해짐.
- 중첩을 사용하면 최상위 선택자를 한번만 선언하여도 자식 선택자에게 스타일을 적용할 수 있게 되어 코드 반복을 줄인다.
- 단 지나친 중첩된 코드는 지양 (깊이 중첩되면 코드를 보는 게 불편하고 컴파일 했을 경우 불필요한 선택자를 사용하게 됨)
```
//Scss
nav {
	background : #C39BD3;
	padding : 10px;
	height: 50px;
	ul {
		display: flex;
		list-style : none;
		justify-content: flex-end;
		li {
			color: white;
			margin-right: 10px;
		} 
	}
}
```
### 속성 Nesting (파일 002_속성_nesting 참고)
중첩은 선택자뿐만 아니라 스타일 속성들도 가능! 속성을 중첩할 때는 콜론(:) 사용
```
//Scss
.add-icon {
  background : {
    image: url("./assets/arrow-right-solid.svg");
    position: center center;
    repeat: no-repeat;
    size: 14px 14px;
  }
}
```
```
/*CSS*/
.add-icon {
  background-image: url("./assets/arrow-right-solid.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 14px 14px;
}
```
### 2-3. ampersand 앰퍼샌드 (파일 003~004_부모선택자_엠퍼센트참고)
- "&"는 상위에 있는 부모선택자
- `&`을 이용하여  after, hover 등의 가상요소, 가상클래스, class나 id 셀렉터 등을 참조
```
//Scss
.box {
    &:focus{} // 가상선택자
    &:hover{}
    &:active{}
    &:first-child{} 
    &:nth-child(2){}
    &::after{} // 가상요소
    &::before{} 
}
```
```
/*CSS*/
.box:focus{} /* 가상선택자 */
.box:hover{}
.box:active{}
.box:frist-child{}
.box:nth-child(2){}
.box::after{} /* 가상요소 */
.box::before{}
```

### 005_atroot.scss
```
/*SCSS*/
.one{
    background-color: yellow;
    .two{
        font-size: 20px;
        @at-root .three{
            display:flex;
        }
    }
}
```
@atroot를 적으면 독립
```
/*CSS*/
.one {
  background-color: yellow;
}
.one .two {
  font-size: 20px;
}
.three {
  display: flex;
}
```
## 3. 변수(Variable) (파일 006_변수.scss)
- `$변수 : 값`
- 값이 두 번 이상 반복될 때 변수로 만들면 값을 기억하지 않고 변수명만을 가지고 스타일 조절.
- 기존의 값을 다른 값으로 변경해야할 경우, 변수의 값만 변경하면 되기 때문에 값이 수정될 가능성이 있다면 변수 생성을 고려
- 보통 타이포그래피, 폰트색상, 폰트사이즈, 글자 간격 등의 값을 변수로 정의

## 3. 변수 type : numbers, strings, color, booleans, lists, maps, null (007_변수.scss)
## 4. Lists, Maps (파일 007_변수.scss)
## 5. 변수의 Scope(변수의 유효범위) (파일 008_변수의scope.scss)
변수는 전역변수와 지역변수로 두가지 종류가 있습니다. 
5-1. 지역변수 : 선언한 자기자신을 감싸고 있는 중괄호 { } 안에서 사용. 하위 단계에 있는 중괄호에서도 사용.
5-2. 전역변수 : 가장 윗부분에 정의하면 파일 내에 어디서든지 사용가능 (권하지 않음)
## 6. Operator
### 6-1. **비교연산자(숫자형)** (009_비교연산자.scss)
⚠️ERROR : 비교하거나 연산하는 값의 단위가 일치하지 않으면 에러 but 단위가 없는 숫자와 일반숫자와 비교하는 경우 ok
**==, != (모든 타입)**
- `a == b`  :  a가 b와 값이 같은지 확인
- `a != b`  :  a가 b와 값이 다른지 확인
### 산술연산자 (010~011_산술연산자.scss)
### 논리연산자 (012_논리연산자.scsss)
### Mixin (013~015_mixin.scsss)
- 코드를 재사용하기 위해 만들어진 기능
- 선택자들 사이에서 반복되고 있는 코드들은 mixin을 사용하여 코드 반복을 줄임
- 중복되는 코드는 mixin으로 만들어 놓고 원하는 선택자 블럭에 mixin을 include
```
@mixin 이름(매개변수) <-생성
@include 이름(인수)  <-사용
```
**Content** (016_content.scss)
@content를 사용하면 원하는 부분에 스타일을 추가하여 전달할 수 있다. 하지만 콘텐츠 사용하는 것보다 @include로 풀어서!
## Extend (017_extend.scss)
- mixin는 (관계 없는) 선택자에서 조금 다른 스타일을 적용할 때 사용 (믹스인 더 많이 사용!)
- extend는 관계 있는 선택자들의 동일한 소스코드 적용시 사용
(1)이미 스타일이 작성된 선택자의 클래스를 extend하거나 (2)`%`를 사용해서 따로 스타일을 정의한 후 extend하여 원하는 선택자에게 스타일을 적용
## modal (019_placeholder.scss)
%를 사용하여 스타일 블럭을 만들고, 각각의 모달에 스타일을 적용
- %placeholder (019_Placeholder.scss)
% 로 선택자를 만든다. @extend를 사용해서 앞서 %placeholder 스타일 블럭을 불러온다. %선택자는 CSS로 컴파일되지 않는다.
