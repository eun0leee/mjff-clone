# 💻 무주산골영화제 사이트 클론

무주산골영화제 사이트의 메인페이지를 퍼블리싱 해보았습니다.

## 👉 Site

- [무주산골영화제](https://www.mjff.or.kr/)
- [클론사이트](https://mjffclone.netlify.app)

## 👉 Stack

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>

## 👉 집중한 부분

- 웹접근성 : `WAI-ARIA`, `sr-only`를 사용하여 웹접근성을 최대한 고려
- 클래스 네이밍 : 하이픈, 소문자, class 위주의 네이밍
- 정렬 및 배열 : flex와 position을 사용

## 👉 구현하지 못한 부분

- 페이스북 및 유튜브 게시글 가져오기 : cafe24를 통한 방법이라고 유추되는데, 다른 방법을 찾지 못해 구현하지 못함.

## 👉 어려웠던 부분
- 마지막 요소 제외
  - 전체메뉴의 가상요소나 사이드메뉴의 border-top에 대해, 마지막 요소는 적용을 제외시켜야 했는데 이 부분이 어려웠음.
  - `li + li`, '.side-nav-list + .side-nav-list`처럼 인접형제선택자를 사용하면 더 간소화하여 나타낼 수 있다는 것을 알게됨.
  - [추가 참고 링크 : CSS | last-child는 이제 쓰지 않습니다](https://velog.io/@edie_ko/css-enabling-pattern)
  - [추가 참고 링크 : nth-child가 안 먹히는 이유](https://velog.io/@1703979/TIL-07)
- favicon 사용
  - 과제 제출시 favicon을 적용하지 않았음. 코드 리뷰를 통해 favicon 적용법을 알게됨.
  - [추가 참고 링크 : 파비콘이란? 웹사이트를 위한 나만의 파비콘 만들기](https://ko.wix.com/blog/post/what-is-favicon-how-to-make)
- 드롭다운 메뉴
  - JS로만 구현가능한 것이라고 생각했는데, CSS로도 구현가능함을 알게됨.
  - [추가 참고 링크 : 드롭다운 메뉴 마우스오버시 하위메뉴 다운](https://anaide.tistory.com/56)
- 스크린리더 사용자 고려
  - `WAI-ARIA` 사용이 익숙치 않았고, 자주 쓰는 것 이외에 다른 태그도 공부해야겠다고 생각함.
  - 드롭다운 메뉴(본 사이트에서는 전체메뉴의 하위메뉴) 제작시, 스크린리더 사용자는 드롭다운 메뉴를 어떻게 인식하는지에 대한 궁금점이 생김.
    - [추가 참고 링크 : Dropdown menu](https://a11y-guidelines.orange.com/en/web/components-examples/dropdown-menu/)
- 깃 협업에 익숙해지기
  - 깃 커밋 컨벤션 작성

## 👉 추가하고 싶은 부분

- grid 사용
- 반응형 페이지 제작
- git-flow로 commit 메세지 작성
- BEM 규칙
- 가독성 좋은 코드

## 👉 리뷰받았으면 하는 부분

- 네이밍 컨벤션
- 전체 메뉴에서 노란 동그라미를 가상요소로 집어넣었는데, 마지막 요소 없애기가 되지 않아 `.top-nav-title:last-child` 대신 `.top-nav-title-last`라고 네이밍하여 스타일 적용했습니다. last-child 적용하는 것이 복잡한 경우에 사용할 수 있는 다른 방법이 있을까요?
- 불필요한 코드
