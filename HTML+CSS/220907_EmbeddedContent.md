
## Embedded content (내장형)
이미지: 상업적 용도 사용가능 + 출처 안밝혀도 됨 <- 두 가지 확인 꼭!<br>
폰트 : 무료폰트(개인무료폰트 =/= 상업용도 무료폰트)<br>
웬만하면 대기업이나 구글 상업 무료폰트 (한글은 제외)<br>

## img
**src (source)**
`<img>` 태그는 `src`라는 필수 속성이 있어야 한다. `src` 속성은 브라우저에게 이미지 파일의 위치 및 파일명을 알려준다. 큰따옴표 안에 들어가는 경로는 절대경로거나 상대경로.<br>
**alt (alternative text)**
`alt` 속성은 이미지가 보이지 않을 때 `alt` 속성에 적힌 텍스트를 이미지 대신 보여준다. 스크린리더와 같은 접근성을 위한 프로그램에 정보를 제공하기 위한 용도로 사용되며, 브라우저에 이미지에 대한 정보를 전달함으로써 SEO(Search Engine Optimization)에 도움을 준다.<br>
alt="상세하게 적기"<br>
(주로 백엔드 개발자와 협업해야 하는 공간에는 img, FE 혼자 작업하는 공간에는 background-image. 스크린리더가 읽지 않아야 하는 곳에서 사용)<br>

`<img src="a.jpg" alt="">` 스크린리더가 'a 이미지' 라고 읽는다.<br>
`<img src="a.jpg" alt="이미지">` 스크린 리더가 alt의 '이미지' 라고 읽는다.<br>

- 절대 경로:
src="http://...." 
src="C:\user\..."
(이미지 오.마 > 경로 복사한 것도 절대 경로)
- 상대 경로:
나(지금 열려있는 파일) 기준
예)
src="./a.jpg"
상대 경로: 현재 폴더<br>
src="../a.jpg"
상대 경로 : 상위 폴더 > 폴더 > a

**반응형 이미지 위한 srcset**
해상도에 따라 다른 이미지를 처리하기 위함
```
<img
width="200px"
srcset="img/logo_1.png 2x,
img/logo_2.png 3x"
src="a.png"
alt="test">
```
대신 로고 정도만!

`<picture>`
`<picture>` 요소는 `<source>` 요소와 `<img>` 요소를 통해 각기 다른 디스플레이 혹은 디바이스에 따라 조건에 맞는 이미지를 보여주는 요소. `<img>` 요소의 srcset 이 화면에 따른 이미지의 크기를 조절한다면 `<picture>` 요소는 이미지 포맷 자체를 변경 할 수 있다.<br>

`<source srcset="babies_large.jpeg" media="(min-width:960px)">` 
960픽셀 이상일때 로드

`<source srcset="babies.jpeg" media="(min-width:620px)">` 
620 이상일때 로드

`<img src="babies_small.jpeg" alt="귀여운 아기 팽귄들">` 
그 이하일때 로드. 이거 없으면 아예 사진 자체가 안뜬다

견고하게 마크업을 제대로 하면 figure+figcaption
생산성 중시해서 다 이미지 처리한다고 할 수도 있다 

크로스브라우징 기법 **점진적 향상기법** (브라우저 지원하는 포맷인지 탐색->안되면 다음 소스.... -> 최후 이미지)

`<iframe>`
현재 HTML 페이지에서 또 다른 HTML 페이지를 보여주고 싶을 때. iframe은 width 혹은 height 속성으로 크기를 조절. 따로 값을 설정하지 않는다면 height는 150px, width는 300px을 기본값.
```
<iframe width="1280" height="720" src="https://www.youtube.com/embed/orf9ailzXvI" title="[코테준비] N시간만에 끝내는 Python 코딩테스트(2018-2021년) 풀영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

`<iframe>http://www.naver.com/</iframe>`

접속 안 뜰 때가 많은데 iframe은 보통 막아놓는다<br>
user->해커 ->iframe->NAVER<br>
MITM(중간자 공격) 으로 많이 쓰기 때문에 방어법 1.유저인증 2.유저 접속 지역 설정 3.iframe 같은 태그 지원X <br>
사용자가 입력한 아이프레임은 방어하는 게 맞다<br>

`<video>`
배너 등에서 영상을 재생시킬 수 있는데 유튜브로 재생시키는 게 효율적이고, 비디오 mp4는 트래픽 때문에 지양
none 비디오 로딩 되지 않고 페이지 로딩 빠름<br>
auto 로딩하고 바로 영상 재생<br>
metadata 로딩만 해두기<br>
사용자가 눌렀을 때만 보여주게 하려면 옵션값 설정<br>
poster 포스터 미리 걸어놓고 로딩된 척 할 수도 있다 로딩 중일때 대신 보여줄 이미지 설정<br>

참고:
https://developer.mozilla.org/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images<br>
해상도에 따라 '다른 이미지'를 보여주고 싶을 때에는 picture를, 같은 이미지인데 해상도에 따라 더 높은 해상도 이미지를 보여주고 싶을 때에는 srcset을 사용합니다.
