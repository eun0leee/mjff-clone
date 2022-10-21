# 💻 무주산골영화제 사이트 클론

무주산골영화제 사이트의 메인페이지를 퍼블리싱 해보았습니다.

## 👉 Site

- [무주산골영화제](https://www.mjff.or.kr/)
- [클론](https://eun0leee.github.io/clone/)

## 👉 Stack

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> 
<img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>

## 👉 집중한 부분

- 웹접근성 : `WAI-ARIA`, `sr-only`를 사용하여 웹접근성을 최대한 고려하려고 했습니다.
- 클래스 네이밍 : 하이픈, 소문자, class 위주의 네이밍을 하였습니다. BEM 규칙은 고려하지 못했습니다.
- 정렬 및 배열 : flex와 position을 사용하였습니다.

## 👉 구현하지 못한 부분

- 페이스북 및 유튜브 게시글 가져오기 : cafe24를 통한 방법이라고 유추되는데, 다른 방법을 찾지 못해 구현하지 못했습니다.
- `.mjff-section-container .item`: `hover`일 때 `transition` 적용이 되는데, 마우스아웃을 하면 transition이 적용되지 않아서 적용되도록 하고 싶습니다.

## 👉 추가하고 싶은 부분

- grid 사용
- 반응형 페이지 제작
- git-flow로 commit 메세지 작성
- 가독성 좋은 코드

## 👉 리뷰받았으면 하는 부분

- 네이밍 컨벤션
- 전체 메뉴에서 노란 동그라미를 가상요소로 집어넣었는데, 마지막 요소 없애기가 되지 않아 `.top-nav-title:last-child` 대신 `.top-nav-title-last`라고 네이밍하여 스타일 적용했습니다. last-child 적용하는 것이 복잡한 경우에 사용할 수 있는 다른 방법이 있을까요?
- 불필요한 코드
