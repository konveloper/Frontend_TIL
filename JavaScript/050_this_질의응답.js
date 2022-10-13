console.log(this)
// 전역공간의 this는 window (node는 global) 실제로는 window.globalThis, window.this 아니다
// https://ui.toast.com/weekly-pick/ko_20190503

/*
1. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
2. 함수로 호출할 경우 this는 window(node는 global) -> 호출한 녀석으로 규정짓는다 
3. 브라우저에서 globalThis와 동일한 것은 window(node는 global)
4. 화살표 함수의 경우 this는 상위스코프
5. 생성자 함수의 경우는 this는 인스턴스
6. 콜백함수의 경우 다르게 동작할 수 있음
예) Array.forEach(callback, thisArg)
대괄호는 꼭 들어가야하는 게 아님
1번과 다르잖아! 이때는 콜백 펑션이 디스와 함께 컨트롤하는 것 
*/

// 이렇게 외우지 말고 코드로서 이해하기, this는 sayName 예제 하나 정복하기
