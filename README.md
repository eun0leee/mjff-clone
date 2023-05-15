# 📽️ 무주산골영화제 사이트 클론 📽️

무주산골영화제 사이트의 메인페이지를 따라 퍼블리싱 해보았습니다.

## 🎞️ 사이트

- [무주산골영화제 사이트](https://www.mjff.or.kr/)
- [배포 사이트](https://mjffclone.netlify.app)

## 🎞️ 기술스택

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>

## 🎞️ 구현기능
### 🥤 반응형
![](https://velog.velcdn.com/images/eun0leee/post/ab3c718d-dc99-40f0-985c-70495f7ab959/image.gif)
- 1024px 이하면 Main Navigation 바를 숨기고, 햄버거 버튼이 등장합니다. media query를 사용하여 구현했습니다.

![](https://velog.velcdn.com/images/eun0leee/post/0adf0533-1f48-4c52-aa9e-312cadcbeece/image.gif)
- 1024px 이하일 때, 햄버거 버튼을 누르면 Main Navigation 이 보입니다. 버튼 클릭과 Main Navigation 안의 리스트 토글은 JavaScript로 구현하였습니다. 클릭될 항목들은 querySelector로 선택했고, 이벤트리스너를 사용하여 클릭 후에 일어날 동작들을 설정해줬습니다.
- 우측 사이드바는 767px 이하가 되면 하단의 고정된 바 형태로 변경됩니다. 창크기에 따른 변화는 media query를 사용하여 구현했고, 하단 바를 고정시킨 것은 `position: fixed`로 구현하였습니다.

### 🥤 hover
![](https://velog.velcdn.com/images/eun0leee/post/f4a336b7-4cfd-482e-aa5c-c5d7ec4ebfd2/image.gif)
- main menu인 `top-nav-lists`에 마우스를 올리면`submenu` 가 등장합니다. submenu에 해당하는 것을 `display:none`으로 해뒀다가 hover 했을 때 `display: block`으로 설정해주어 구현했습니다.

### 🥤 position fixed
![](https://velog.velcdn.com/images/eun0leee/post/e9011b3d-26be-4751-91f4-ca86a49e6cdc/image.gif)
- 우측 사이드바가 하단에 고정된 것과 마찬가지로, 스크롤에 사이드바가 따라다니는 것은 `position: fixed`로 구현하였습니다.

### 🥤 CSS 선택자와 Box model 속기형
![](https://velog.velcdn.com/images/eun0leee/post/0ccebc5c-d3a7-4fd1-b7fb-49a800aa07af/image.png)
- 내비게이션바 메뉴 사이의 노란색 도형 추가하는 작업시, 마지막요소를 제외하는 것이 어려워, `:last-child`를 써서 마지막요소를 제외하곤 했습니다. 패스트캠퍼스 과정 중 멘토님의 코드리뷰를 통해 `li + li` 처럼 연산자로 처리해주는 방법을 알게돼 좀더 가독성 좋게 처리하였습니다. 또 margin, padding 값을 속기형으로 알맞게 적어주지 않아, 불필요한 코드들이 많았는데 추후 리팩토링을 통해 수정했습니다.

### 🥤 정렬 및 배열시 flex, position 사용
![](https://velog.velcdn.com/images/eun0leee/post/d6d607ec-c82b-4b2a-b042-63aa7ab701c5/image.png)
- 이미지는 flex를 사용하여 배치하였습니다. 이미지별로 사이즈가 모두 달랐기에, 반응형에 따라 container 크기에 맞춰 각각의 이미지가 비율대로 줄어들고 늘어나도록 하는 것이 어려웠습니다. 브라우저 상에서 하나하나 수정하며 알아낸 수치를 바탕으로 작업하게 됐습니다. 더불어 되도록이면 `px`보다 `%`, `rem`를 쓰는 것이 다양한 디바이스에 대비하기 좋다는 것을 알게됐습니다. 이미지 내의 text는 `positon: absolute`를 줘서 하나의 이미지에서 위치를 조정하였습니다.

### 🥤 웹접근성 고려(WAI-ARIA)
![](https://velog.velcdn.com/images/eun0leee/post/cd701476-02f6-4826-9727-2716b7299c57/image.png)
- `aria-label` 등등 접근성을 향상시킬 수 있는 코드를 쓰고자 노력했습니다. 이 과정이 정말 재밌게 느껴졌고, WAI-ARIA를 자유자재로 쓸 수 있을 만큼 익숙해지고 싶다는 생각을 했습니다. 더 자세히 알고 싶어 따로 [포스팅](https://velog.io/@eun0leee/HTML-WAI-ARIA)하였습니다.

## 🎞️ 해결한 것
![](https://velog.velcdn.com/images/eun0leee/post/9ddaf2ed-e8c4-4b32-a032-0dab381202c1/image.gif)![](https://velog.velcdn.com/images/eun0leee/post/5bb50397-72c0-44e9-8524-b859c3d62da1/image.png)
- 프로그램 목록의 이미지 hover시, transition 효과 자연스럽지 못한 문제가 있었습니다.

![](https://velog.velcdn.com/images/eun0leee/post/d8e53350-50b8-477a-9be0-283551655751/image.gif)![](https://velog.velcdn.com/images/eun0leee/post/70054e83-cd21-4563-a107-d4456513063c/image.png)
- transition을 hover 에 작성하면, hover 될 때만 트랜지션이 적용된다는 것을 알게 됐습니다. mousedown 시의 상태변화에 대해서는 트랜지션이 동작하지 않는 것입니다. 따라서 img에 써줘서, img의 상태가 변화할 때에 대한 트랜지션이 동작하도록 변경하였습니다.
