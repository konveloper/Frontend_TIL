# Node.js
* Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
* javascript 런타임! javascript가 동작할 수 있는 프로그램!
* 웹 브라우저에서만 동작하는 javascript를 V8엔진(크롬에 들어간 엔진)에다 살을 붙여(file, path, os..) 실행시킬 수 있는 런타임을 만든 것
* 특징
    - Non-Blocking I/O (비동기 Input/Output, 다 처리하지 않고 일단 전달! 바리스타야, 커피를 내려라!)
    - Single Thread (카페에서 주문을 받으시는 분은 한 분!, 물론 멀티도 가능합니다! 그런데 그 분이 만약 주문을 멈춘다면? error처리 필수!)
* https://nodejs.org/dist/latest-v14.x/docs/api/
## 모듈
- 모듈은 특정한 기능을 하는 코드 뭉텅이(변수, 함수, 클래스..)
- 사용자 작성 모듈, 노드 내부 모듈(설치X), 노드 외부 모듈(설치O)
- 여러 모듈의 조합 + 우리의 JS Code → 결과물
