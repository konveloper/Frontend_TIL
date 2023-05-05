## Bootstrap (https://getbootstrap.com/)
* 웹 프레임워크 : 최소한의 작업으로 빠르게 결과물을 만들 수 있도록 구축해 놓은 종합 공구 세트와 같다.
* 사용자의 시점에 맞춰 구축되는 반영형 사이트(큰 모니터 화면이나 휴대폰처럼 작은 화면 상관 없이 사용자의 시점에 맞춰 최적화 되어 화면을 구성)를 구축하기에 최적화
* 부트스트랩은 form, button, table, navigator가 HTML, CSS로 미리 디자인 되어 있다. 
* bootstrap4와 bootstrap5의 가장 큰 차이는 jQuery가 없어졌다는 것.
* CSS 프레임 워크? 현실에서 뭔가를 만들기 전에 세우는 틀
* 사용법
1. 실제 사이트를 만든다면 다운로드할 것 
2. 혹은 페이지의 CSS <link> 코드를 HTML 문서 헤드에 붙여넣어 삽입 (4.5 버전 이상)
JS <script> 코드  붙여넣기
3. 클래스를 통해 스타일 정의
### 그리드 (002~003_grid.html)
* 컬럼 12개가 모여 하나의 row가 된다. 
* 그리드를 사용하려면 항상 컨테이너 클래스가 있어야 한다
* 예) 4컬럼씩 주어서 균등한 3등분 배치
```
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h1>hello</h1>
		</div>
		
		<div class="col-md-4">
			<h1>hello</h1>
		</div>
		
		<div class="col-md-4">
			<h1>hello</h1>
		</div>
	</div>
</div>
```
### 이미지 (004_img.html)
* img-fluid 이미지가 칸에 맞게 조정
* rounded 모서리가 둥글어짐
* rounded-circle 이미지 자체가 둥근 형태가 됨
### 테이블 (005_table.html)
### 버튼 (006~007_btn.html)
### 카드 (008_card.html)
### 모달 (009_modal.html)
### 메뉴바 (010_menu.html) <- 원하는 메뉴바가 있으면 마크업 가져오면 끝!
### Sweetalert (011_sweetalert.html)
### datepicker (012_datepicker.html)
### summernote (013_summernote.html)
### toast (014_toast.html)
### bootstrap select (015_bootstrap_selector.html)
