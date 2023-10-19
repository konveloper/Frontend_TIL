# transform
* html 요소를 회전, 크기 조절, 기울이기, 이동 효과 나타낼 때 사용
* 주의: transform을 사용하려면 해당 요소의 display 속성이 block 또는 inline-block이어야 함
* transform: translateX(20px); -> X축(가로)으로 20px 이동 (우측으로)
* transform: translateX(-20px); -> X축(가로)으로 20px 이동 (좌측으로)
* transform: translateY(40px); -> Y축(세로)으로 40px 이동
* transform: translate(20px, 40px); -> X축(가로)으로 20px 이동, Y축(세로)으로 40px 이동

* transform: rotate(45deg) -> 요소 전체를 45도 기울임 (정사각형이었으면 마름모꼴이 됨)
* transform: rotateX(45deg) -> X축으로 45도 기울임
* transform: rotateY(45deg) -> Y축으로 45도 기울임

# transition 
* 전환. 속성 값이 변할 때 더욱 부드럽게 전환시켜준다.
* transition은 자동으로 발동되지 않는다. :hover와 같은 가상 클래스 선택자 또는 JavaScript의 부수적인 액션에 의해 발동한다. 
* transition: all 2s; -> 모든 프로퍼티의 변화를 2초에 걸쳐 전환한다.
* transition: 2s 1s; -> 모든 프로퍼티의 변화를 1초 후 2초에 걸쳐 전환한다.
