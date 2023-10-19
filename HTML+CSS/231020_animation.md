# animation
* css 프레임이 변화하는 중간 지점을 키프레임이라고 한다. @keyframes는 애니메이션의 중간 상태
* from ~ to를 이용한 애니메이션 shape 생성
```html
    <style>
      .shape {
        margin: 0 auto;
        margin-top: 50px;
        width: 100px;
        height: 100px;
        background-color: aqua;
      }
      @keyframes shape-color {
        from {
          background-color: red;
        }
        to {
          background-color: blue;
        }
      }
      .animation1 {
        animation-name: shape-color;
        animation-duration: 3s;
      }
    </style>

  <body>
    <main>
      <div class="shape animation1"></div>
    </main>
```
* 네모를 누르면 빨간색으로 바뀌었다가 파란색으로 바뀐다
