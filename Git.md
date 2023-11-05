# Git 명령어
```
git
git clone
git add.
git commit
git push
```

* `git pull` 컴퓨터로 받아오는 것
* `git add.` 받아온 파일을 대기열에 추가
* `git commit` 태우고 version (기능을 추가한 새 버전들)
* `git push` git hub 태운 것을 날려보낸다 (로컬 파일을 깃헙에 올리는 동작)

예)
빙키와 개리가 협업한다!<br>
빙키: 파일 가져오기<br>
깃헙 레파짓토리 주소 복사<br>
새 폴더 만들고 그 안에서 오.마>Git bash here<br>
git clone 시프트 인서트 띄고 .(점) -> 처음에만 하는 것<br>
내용을 수정한다<br>
근데 협업이 필요해! 다운로드 받아서 수정한 걸 같이 협업해야하잖아! 연결해보자<br>
git add . (띄고 점) -> 탑승 시킴<br>
파일을 수정한다<br>
git commit -m '빙키 수정-1' -> 커밋 메세지. 한글로 수정한 내용을 설명할 것.<br>
git push<br>
게리와 깃헙이 동기화 완!<br>

```
git pull -> 누군가 수정한 내용을 받자!
파일을 수정한다
git add .
git commit - m '게리 수정-1'
git push
```

```
뉴 레파짓토리 생성하고 링크 복사한 다음 새 폴더 만들자 test
git clone https://github.com/konveloper/test.git .
git add .
git commit -m 'my first comit'
git push
깃허브에서 새 폴더와 파일 추가
git pull <- 터미널에서 치면 가져와짐
가져온 파일에서 내용 수정함
git add .
git commit -m '수정한 내용 설명'
git push
```


# 세팅
1. New repository 생성 -> 터미널 열고 git init ~ 복붙
2. git branch develop  (develop 브랜치 생성)
3.  git branch 로 잘 만들어졌는지 확인
4.  git push --set-upstream origin develop 
5.  Github 가서 확인해보면 main, develop 브랜치 만들어진 것 확인!
6.  setting -> branches 들어가서 default branch develop 으로 바꿔주기
7.   collaborators  에서 팀원들 초대하기

# 협업
1. Github에 issues 카테고리에 들어가서 new issue 를 열고 적어준다
2. git fetch (git branch 로 서로 같은 위치에 있는지 확인)
3.  만약 둘이 서로 같은 위치에 없다면, git pull origin develop
      (원격 저장소의 최신 ver을 내 로컬 저장소와 맞춰주는 작업)
4. 작업할 브랜치 만들어주기 git switch develop -> git branch Feat/기능명
5.  git switch Feat/기능명 해주고 작업 시작!
7.  완료됐다면 add, commit
8.  git push --set-upstream origin Feat/기능명

# Pull request
1. 잘 푸쉬가 됐으면, Compare & pull request 팝업창이 뜬다
2. 버튼 클릭 후 base와 compare 확인
3. 컨벤션에 따라 PR 작성, create pull request
4. 리뷰 받고 -> 리뷰를 받았다면 PR을 날린 내가 merge pull request
5. 성공적으로 머지가 됐으면 Delete branch 눌러 브랜치를 삭제
6. 터미널에서 git branch -D Feat/기능명 을 입력해 로컬 브랜치도 삭제

# 터미널 기본 명령어
- `$ pwd` 현재 작업중인 폴더의 위치를 확인할 때 사용하는 명령어
- `$ cd` 현재 디렉토리에서 다른 디렉토리로 이동
- `$ cd ..` 상위 디렉토리로 이동
- `$ ls` 디렉토리 안의 내용을 볼 때 사용하는 명령어
- `$ mkdir` 디렉토리를 생성하는 명령어
- `$ rm` 파일을 삭제하는 명령어

